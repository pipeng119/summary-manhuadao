<template>
  <ul class="book-list">
    <li class="book-list-item" v-for="item in list" :key="item.title">
      <div class="book-list-item-pic" :style="{backgroundImage: `url(${item.imgUrl})`}"></div>
      <div class="book-list-item-info">
        <p class="book-list-item-info-title font-30">{{item.title}}</p>
        <p class="book-list-item-info-author">作者：{{item.author}}</p>
        <p class="book-list-item-info-fans">人气：{{item.fans}}</p>
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  name: "BookList",
  data() {
    return {};
  },
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  created() {
    console.log(this.list);
  }
};
</script>
<style lang="stylus" scoped>
@import './'
</style>