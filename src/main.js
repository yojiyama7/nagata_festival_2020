// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// for base components
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

Vue.config.productionTip = false

// for base components
// HACK: ファイルとしてまとめるべきかもしれない
const requireComponent = require.context(
  // コンポーネントフォルダの相対パス
  './components',
  // サブフォルダ内を調べるかどうか
  false,
  // 基底コンポーネントのファイル名に一致させるのに使う正規表現
  /Base[A-Z]\w+\.(vue|js)$/
)
requireComponent.keys().forEach(fileName => {
  // コンポーネント設定を取得する
  const componentConfig = requireComponent(fileName)

  // コンポーネント名をパスカルケース (PascalCase) で取得する
  const componentName = upperFirst(
    camelCase(
      // フォルダの深さに関わらずファイル名を取得する
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  )

  // コンポーネントをグローバル登録する
  Vue.component(
    componentName,
    // `export default` を使ってコンポーネントがエクスポートされた場合に存在する
    // `.default` でコンポーネントオプションを期待していて
    // 存在しない場合にはモジュールのルートにフォールバックします。
    componentConfig.default || componentConfig
  )
})

// ページ遷移時、メニューを閉じたい。Menu側で実装。
// router.beforeEach((to, from, next) => {
//   const menu = document.getElementById('the-menu')
//   menu.isMenuOpen = false
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
