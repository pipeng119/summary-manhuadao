<template>
  <div class="explore">
    <header class="explore-header">
      <GoBack :isWhite="isWhite" />
      <div class="explore-header-search">
        <span class="explore-header-search-icon"></span>
        <input class="explore-header-search-input font-24" type="text" placeholder="漫画名 | 作者 ^_^" />
      </div>
      <span class="explore-header-btn" @click="search()">探索</span>
    </header>
    <section class="explore-recommend">
      <div class="explore-recommend-title">
        <span>大家都在搜</span>
        <div class="explore-recommend-title">
          <span class="explore-recommend-title-icon"></span>
          刷新
        </div>
      </div>
      <div class="explore-recommend-content font-28">
        <span
          class="explore-recommend-content-item"
          v-for="item in recommendList"
          :key="item.title"
        ></span>
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