<template>
  <div class="mine">
    <header class="mine-header">
      <router-link class="mine-header-back" to="/"></router-link>
      <span class="font-32">我的</span>
    </header>
    <section class="mine-login">
      <div class="mine-login-pic"></div>
      <router-link class="mine-login-btn font-30" to="/login">登录/注册</router-link>
    </section>
    <section class="mine-menu">
      <router-link class="mine-menu-item" v-for="item in menu" :key="item.text" :to="item.url">
        <span class="mine-menu-item-fav" :style="{backgroundImage: `url(${item.fav})`,height: item.height}"></span>
        <span class="mine-menu-item-text font-30">{{item.text}}</span>
      </router-link>
    </section>
    <!-- <router-view></router-view> -->
  </div>
</template>
<script>
export default {
  name: "Mine",
  data() {
    return {
      menu: Object.freeze([
        {
          fav: require("assets/images/mine/collect.png"),
          text: "收藏",
          url: "http://wwww.baidu.com",
          height: "34px"
        },
        {
          fav: require("assets/images/mine/history.png"),
          text: "历史",
          url: "http://wwww.baidu.com",
          height: "36px"
        },
        {
          fav: require("assets/images/mine/mhd.png"),
          text: "关于漫画岛",
          url: "http://wwww.baidu.com",
          height: "32px"
        },
        {
          fav: require("assets/images/mine/feedback.png"),
          text: "反馈",
          url: "http://wwww.baidu.com",
          height: "36px"
        }
      ])
    };
  }
};
</script>
<style lang="stylus" scoped>
@import './'
</style>