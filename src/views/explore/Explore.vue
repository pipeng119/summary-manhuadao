<template>
  <div class="explore">
    <header class="explore-header">
      <GoBack :isWhite="isWhite" />
      <div class="explore-header-search">
        <span class="explore-header-search-icon"></span>
        <input class="explore-header-search-input font-24" type="text" placeholder="漫画名 | 作者 ^_^" />
      </div>
      <span class="explore-header-btn font-30" @click="search()">搜索</span>
    </header>
    <section class="explore-recommend">
      <div class="explore-recommend-title font-26">
        <div class="explore-recommend-title-text">大家都在搜</div>
        <div class="explore-recommend-title-btn">
          <span class="explore-recommend-title-btn-icon"></span>
          刷新
        </div>
      </div>
      <div class="explore-recommend-content font-28">
        <span
          class="explore-recommend-content-item"
          v-for="item in recommendList"
          :key="item"
        >{{item}}</span>
      </div>
    </section>
  </div>
</template>
<script>
import GoBack from "components/goBack/GoBack.vue";
export default {
  name: "explore",
  data() {
    return {
      isWhite: true,
      recommendList: []
    };
  },
  components: {
    GoBack
  },
  created() {
    this.recommendList = [
      "狂霸欧皇",
      "惹上冷情BOSS",
      "驭灵师",
      "桃花宝典",
      "很纯很美好",
      "机长大人轻点爱",
      "据说我是王的女儿",
      "星辰变",
      "霸情恶少：狂追小淘气",
      "恶魔，别吻我"
    ];
  },
  methods: {
    search() {
      console.log("探索");
    }
  }
};
</script>
<style lang="stylus" scoped>
@import './'
</style>