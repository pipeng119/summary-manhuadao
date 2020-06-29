<template>
  <header class="common-header">
    <GoBack />
    <div
      class="font-32"
      :class="{'common-header-bg': headerParams.bgUrl,'common-header-title': !headerParams.bgUrl}"
    >{{title}}</div>
    <a :class="seachIconCls"></a>
  </header>
</template>
<script>
import GoBack from "components/goBack/GoBack.vue";
export default {
  data() {
    return {};
  },
  components: {
    GoBack
  },
  props: {
    headerParams: {
      type: Object,
      default: () => ({
        // 背景图片url
        bgUrl: "",
        // 标题
        title: "",
        // 搜索图标类型
        seachIconCls: "common-header-search-light"
      })
    }
  },
  computed: {
    title() {
      return this.headerParams.title ? this.headerParams.title : "";
    },
    seachIconCls() {
      return this.headerParams.searchType === "light"
        ? "common-header-search-light"
        : "common-header-search-dark";
    }
  },
  methods: {}
};
</script>
<style lang="stylus" scoped>
@import './'
</style>