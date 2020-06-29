<template>
  <ul class="default">
    <li class="default-item" v-for="item in list" :key="item.title">
      <div class="default-item-pic" :style="{backgroundImage: `url(${item.imgUrl})`}"></div>
      <div class="default-item-info">
        <p class="default-item-info-title font-30">{{item.title}}</p>
        <p class="default-item-info-author font-26">看到：{{item.see}}</p>
        <p class="default-item-info-fans font-26">更新至{{item.progress}}</p>
      </div>
      <div class="default-item-btn">
        <span class="default-item-btn-icon"></span>
        <span class="default-item-btn-text font-26">续看</span>
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  name: "Default",
  data() {
    return {};
  },
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  created() {}
};
</script>
<style lang="stylus" scoped>
@import './'
</style>