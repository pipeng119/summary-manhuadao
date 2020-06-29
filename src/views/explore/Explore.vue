<template>
  <div class="explore">
    <header class="explore-header">
      <span class="explore-header-back"></span>
      <input class="explore-header-input" type="text" placeholder="漫画名 | 作者 ^_^" />
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
export default {
  name: "explore",
  data() {
    return {
      recommendList: []
    };
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