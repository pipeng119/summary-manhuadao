<template>
  <div class="history">
    <nav class="history-nav">
      <span class="history-nav-back" @click="$router.go(-1)"></span>
      <div class="history-nav-tabs">
        <span
          class="history-nav-tabs-item font-34"
          :class="{'active':flag === 1}"
          @click="chagneStatus('/history/favorite',1)"
        >收藏</span>
        <span
          class="history-nav-tabs-item font-34"
          :class="{'active':flag === 0}"
          @click="chagneStatus('/history/default',0)"
        >历史</span>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeFlag: 0,
      flag: 0
    };
  },
  methods: {
    chagneStatus(url, flag) {
      this.$router.push(url);
      this.flag = flag;
      //   this.activeFlag = flag;
    }
  }
};
</script>
<style lang="stylus" scoped>
@import './'
</style>