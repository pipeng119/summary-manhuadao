<template>
  <span class="go-back" @click="$router.go(-1)"></span>
</template>
<style lang="stylus" scoped>
.go-back
  position absolute
  width 46px
  height 26px
  top 32px
  left 30px
  background url('~assets/images/back.png')
  background-size contain
</style>