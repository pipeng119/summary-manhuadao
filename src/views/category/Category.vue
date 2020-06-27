<template>
  <div class="category">
    <CommonHeader :headerParams="headerParams" />
    <CommonNav :navList="navList" @type="getType($event)" />
    <BookList :list="categoryList" />
  </div>
</template>
<script>
import CommonHeader from "components/commonHeader/CommonHeader.vue";
import BookList from "components/bookList/BookList.vue";
import CommonNav from "components/commonNav/CommonNav.vue";
import { navList, categoryList } from "assets/data/category";
export default {
  name: "Category",
  data() {
    return {
      headerParams: {
        leftIcon: "back",
        bgUrl: "",
        title: "分类",
        searchType: "dark"
      },
      navList,
      categoryList
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
  }
};
</script>