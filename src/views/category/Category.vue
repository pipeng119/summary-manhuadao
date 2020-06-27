<template>
  <div class="category">
    <CommonHeader :headerParams="headerParams" />
    <CommonNav :navList="navList" @type="getType($event)"/>
    <BookList/>
  </div>
</template>
<script>
import CommonHeader from "components/commonHeader/CommonHeader.vue";
import BookList from "components/bookList/BookList.vue";
import CommonNav from "components/commonNav/CommonNav.vue";
export default {
  name: "Category",
  data() {
    return {
      headerParams: {
        leftIcon: 'back',
        bgUrl: "",
        title: "分类",
        searchType: "dark"
      },
      navList: [
        {
          label: '热血',
          type: 'blood'
        },
        {
          label: '恋爱',
          type: 'love'
        },
        {
          label: '搞笑',
          type: 'funny'
        },
        {
          label: '魔幻',
          type: 'magic'
        },
        {
          label: '悬疑',
          type: 'suspense'
        },
        {
          label: '少儿',
          type: 'child'
        },
        // {
        //   label: '热搜榜',
        //   type: 'hoot'
        // },
        // {
        //   label: '人气榜',
        //   type: 'fans'
        // },
        // {
        //   label: '畅销榜',
        //   type: 'boom'
        // },
        // {
        //   label: '新书榜',
        //   type: 'new'
        // },
        // {
        //   label: '完结榜',
        //   type: 'finished'
        // },
        // {
        //   label: '免费榜',
        //   type: 'free'
        // },
      ]
    };
  },
  components: {
    CommonHeader,
    BookList,
    CommonNav
  },
  methods: {
    getType(item){
      console.log(item)
    }
  }
};
</script>