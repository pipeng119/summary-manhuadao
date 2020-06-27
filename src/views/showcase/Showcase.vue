<template>
  <div class="showcase">
    <CommonHeader :headerParams="headerParams" />
    <CommonNav :navList="categoryNavList" @type="getType($event)" />
    <BookList :list="categoryList" />
  </div>
</template>
<script>
import CommonHeader from "components/commonHeader/CommonHeader.vue";
import BookList from "components/bookList/BookList.vue";
import CommonNav from "components/commonNav/CommonNav.vue";
import { categoryNavList, categoryList } from "assets/data/category";
export default {
  name: "showcase",
  data() {
    return {
      headerParams: {
        leftIcon: "back",
        bgUrl: "",
        title: "分类",
        searchType: "dark"
      },
      categoryNavList,
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
  },
  created() {
    console.log(this.$route.params);
  }
};
</script>