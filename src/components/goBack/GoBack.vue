<template>
  <span class="go-back" :class="{white: isWhite}" @click="$router.go(-1)"></span>
</template>
<script>
export default {
  name: "GoBack",
  props: {
    isWhite: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style lang="stylus" scoped>
.go-back
  position absolute
  width 46px
  height 26px
  top 32px
  left 30px
  background url('~assets/images/back.png')
  background-size contain

.white
  background url('~assets/images/back_white.png')
</style>