<template>
  <div class="history">
    <nav class="history-nav">
      <GoBack />
      <div class="history-nav-tabs">
        <span
          class="history-nav-tabs-item font-34"
          :class="{'active':flag}"
          @click="chagneStatus(1)"
        >收藏</span>
        <span
          class="history-nav-tabs-item font-34"
          :class="{'active':!flag}"
          @click="chagneStatus(0)"
        >历史</span>
      </div>
      <span class="history-nav-del" v-show="!flag"></span>
    </nav>
    <Default v-show="!flag" :list="historyList" />
    <Favorite v-show="flag" />
  </div>
</template>
<script>
import Default from "./default/Default.vue";
import Favorite from "./favorite/Favorite.vue";
import GoBack from "components/goBack/GoBack.vue";
import { historyList } from "assets/data/history";
export default {
  data() {
    return {
      activeFlag: 0,
      flag: 0,
      historyList
    };
  },
  components: {
    Default,
    Favorite,
    GoBack
  },
  methods: {
    chagneStatus(flag) {
      this.flag = flag;
    }
  }
};
</script>
<style lang="stylus" scoped>
@import './'
</style>