<template>
  <div class="detail">
    <header class="detail-header">
      <GoBack />
      <span class="detail-header-home"></span>
      <span class="detail-header-share"></span>
    </header>
    <div class="detail-top">
      <div class="detail-top-cover"></div>
      <div class="detail-top-group">
        <div class="detail-top-pic"></div>
        <div class="detail-top-info">
          <p class="detail-top-info-title font-38">标题</p>
          <p class="detail-top-info-type font-26">热血</p>
          <div class="detail-top-info-stars"></div>
          <div class="detail-top-info-fans font-26"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import GoBack from "components/goBack/GoBack";
export default {
  name: "Detail",
  components: {
    GoBack
  }
};
</script>
<style lang="stylus" scoped>
@import './'
</style>