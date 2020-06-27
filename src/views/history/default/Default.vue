<template>
  <ul class="default">
    <li class="default-item" v-for="item in list" :key="item.title">
      <div class="default-item-pic" :style="{backgroundImage: `url(${item.imgUrl})`}"></div>
      <div class="default-item-info">
        <p class="default-item-info-title font-30">{{item.title}}</p>
        <p class="default-item-info-author">作者：{{item.author}}</p>
        <p class="default-item-info-fans">人气：{{item.fans}}</p>
      </div>
      <div class="default-btn"></div>
    </li>
  </ul>
</template>
<script>
export default {
  name: "Default",
  data() {
    return {
      list: []
    };
  },
  created() {}
};
</script>
<style lang="stylus" scoped>
@import './'
</style>