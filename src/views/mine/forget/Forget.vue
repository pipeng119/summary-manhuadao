<template>
  <div class="forget">
    <header class="forget-header">
      <GoBack />
      <div class="forget-header-pic"></div>
    </header>
    <section class="forget-contact">忘记密码？请联系客服QQ：2542738114</section>
  </div>
</template>
<script>
import GoBack from "components/goBack/GoBack.vue";
export default {
  components: {
    GoBack
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/common/_mixins.styl'

.forget
  &-header
    &-pic
      width 532px
      height 650px
      margin 0 auto
      background-image url('~assets/images/login/bg_forget.png')
      background-size contain

  &-contact
    margin 60px auto
    display flex
    justify-content center
    align-items center
    width 650px
    height 62px
    color #000
    font-weight 600
    background-color #e0e0e0
    border-radius 20px
    position relative

    &:after
      content ''
      position absolute
      width 32px
      height 42px
      background url('~assets/images/login/bg_decoration.png') no-repeat
      background-size contain
      position absolute
      top -40px
      right 134px
</style>