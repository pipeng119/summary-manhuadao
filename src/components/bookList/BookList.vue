<template>
  <ul class="book-list">
    <li class="book-list-item" v-for="(item,index) in list" :key="item.title">
      <div class="book-list-item-pic" :style="{backgroundImage: `url(${item.imgUrl})`}"></div>
      <div class="book-list-item-info">
        <p class="book-list-item-info-title font-30">{{item.title}}</p>
        <p class="book-list-item-info-author">作者：{{item.author}}</p>
        <p class="book-list-item-info-fans">人气：{{item.fans}}</p>
      </div>
      <template v-if="showType  ==='ranking'">
        <div v-if=" (index + 1) === 1" class="book-list-item-sort first">1</div>
        <div v-else-if=" (index + 1) === 2" class="book-list-item-sort second">2</div>
        <div v-else-if=" (index + 1) === 3" class="book-list-item-sort third">3</div>
        <div v-else class="book-list-item-sort others">{{index + 1}}</div>
      </template>
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
    },
    showType: {
      type: String,
      default: ""
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