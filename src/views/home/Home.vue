<template>
  <div class="home">
    <!-- 头部 -->
    <header class="home-header">
      <router-link class="home-header-login" to="mine"></router-link>
      <div class="home-header-title"></div>
      <router-link class="home-header-search" to="/explore"></router-link>
    </header>
    <!-- 轮播图 -->
    <section class="home-banner">
      <a-carousel>
        <div v-for="img in bannerList" :key="img.url">
          <img :src="img.url" :alt="img.alt" />
        </div>
      </a-carousel>
    </section>
    <!-- 导航 -->
    <nav class="home-nav">
      <div
        class="home-nav-item"
        v-for="item in navList"
        :key="item.imgUrl"
        @click="jumpByLink(item.target)"
      >
        <span :style="{backgroundImage: `url(${item.imgUrl})`}"></span>
        <p>{{item.label}}</p>
      </div>
    </nav>
    <!-- 推荐列表 -->
    <section class="home-recommend" v-for="recommend in recommendList" :key="recommend.id">
      <div class="home-recommend-divide"></div>
      <div class="home-recommend-title">
        <div class="home-recommend-title-group">
          <img :src="recommend.imgUrl" alt />
          <span class="font-36">{{recommend.title}}</span>
        </div>
        <router-link :to="recommend.moreUrl"></router-link>
        <span class="home-recommend-title-more">更多 ></span>
      </div>
      <ul class="home-recommend-list">
        <li
          class="home-recommend-list-item"
          v-for="item in recommend.list"
          :key="item.title"
          @click="goDetail(item)"
        >
          <img :src="item.imgUrl" alt />
          <h6 class="font-28">{{item.title}}</h6>
          <p>{{item.desc}}</p>
        </li>
      </ul>
    </section>
    <section class="go-top font-20" v-show="topFlag" @click="goTop()">
      <div class="go-top-fav"></div>顶部
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import { fetchList } from "@/api/home.js";
import { bannerList, navList, recommendList } from "assets/data/home";
export default {
  name: "Home",
  data() {
    return {
      headerImg: require("@/assets/images/logo.png"),
      bannerList,
      navList,
      recommendList,
      topFlag: false
    };
  },
  methods: {
    // 监听滚动条事件
    handleScroll(e) {
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop >= 360) {
        if (this.topFlag) return;
        if (!this.topFlag) this.topFlag = true;
      } else {
        this.topFlag = false;
      }
    },
    goTop() {
      document.documentElement.scrollTop = document.body.scrollTop = 0;
    },
    jumpByLink(url) {
      console.log(url);
      this.$router.push(url);
    },
    goDetail(item) {
      console.log(item);
      this.$router.push("/detail");
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
  }
};
</script>
<style lang="stylus" scoped>
@import './'
</style>