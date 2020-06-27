<template>
  <header class="common-header">
    <span class="common-header-back" @click="goBack()"></span>
    <div
      class="font-32"
      :class="{'common-header-bg': headerParams.bgUrl,'common-header-title': !headerParams.bgUrl}"
    >{{title}}</div>
    <a :class="seachIconCls"></a>
  </header>
</template>
<script>
export default {
  data() {
    return {};
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
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="stylus" scoped>
@import './'
</style>