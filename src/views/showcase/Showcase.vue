<template>
  <div class="showcase">
    <CommonHeader :headerParams="headerParams" />
    <CommonNav v-if="navList" :navList="navList" @type="getType($event)" />
    <BookList :list="bookList" :showType="type" />
  </div>
</template>
<script>
import CommonHeader from "components/commonHeader/CommonHeader.vue";
import BookList from "components/bookList/BookList.vue";
import CommonNav from "components/commonNav/CommonNav.vue";
import { categoryNavList, categoryList } from "assets/data/category";
import { rankingNavList, rankingList } from "assets/data/ranking";
export default {
  name: "showcase",
  data() {
    return {
      headerParams: {
        bgUrl: "",
        title: "分类",
        searchType: "dark"
      },
      navList: [],
      bookList: [],
      //   渲染内容的类型
      type: ""
    };
  },
  components: {
    CommonHeader,
    BookList,
    CommonNav
  },
  methods: {
    getType(item) {
      console.log(item);
    }
  },
  created() {
    this.type = this.$route.params.type;
    let { title } = this.$route.params;
    switch (this.type) {
      case "category":
        this.headerParams.title = "分类";
        this.navList = categoryNavList;
        this.bookList = categoryList;
        break;
      case "ranking":
        this.headerParams.title = "排行";
        this.navList = rankingNavList;
        this.bookList = rankingList;
        break;
      case "vip":
        this.headerParams.title = "vip专区";
        this.navList = [];
        this.bookList = categoryList;
        break;
      case "more":
        // 更多页面 复用本组件 后续修改成向后台请求数据
        this.headerParams.title = title;
        this.navList = [];
        this.bookList = categoryList;
    }
  }
};
</script>