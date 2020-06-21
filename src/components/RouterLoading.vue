<template>
  <div class="loading-wrapper" >
    <img :src="imgUrl" alt />
  </div>
</template>
<script>
export default {
  name: "loading",
  data() {
    return {
      imgUrl: require("assets/images/router_loading.gif")
    };
  },
  methods:{
    test(){

    }
  }
};
</script>
<style lang="stylus">
// .loading-wrapper
//   position absolute
//   leftt 0
//   top 0
//   width 100%
//   height 100%

//   img 
//     width 100%
//     height 100%
</style>