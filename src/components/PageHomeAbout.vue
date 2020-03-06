<template>
  <div class="box">
    <div class="box-inner">
      <BaseHeading
      :text="'About'"
      />
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.box {
  &-inner {
    margin: 72px auto;
    width: $container-width;
  }
}
</style>
