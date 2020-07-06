<template>
  <div class="detail">
    <header class="detail-header">
      <GoBack :isWhite="isWhite" />
      <span class="detail-header-home"></span>
      <span class="detail-header-share"></span>
    </header>
    <div class="detail-top">
      <div class="detail-top-cover filter"></div>
      <div class="detail-top-group">
        <div class="detail-top-group-pic"></div>
        <div class="detail-top-group-info">
          <p class="detail-top-group-info-title font-38">标题</p>
          <p class="detail-top-group-info-type font-26">热血 | 武侠 热血 玄幻</p>
          <ul class="detail-top-group-info-stars">
            <li class="detail-top-group-info-stars-item" v-for="item in 5" :key="item"></li>
          </ul>
          <div class="detail-top-group-info-fans font-26">人气：12.22亿</div>
        </div>
      </div>
    </div>
    <div class="detail-tab font-28">
      <span class="detail-tab-item" :class="{active: flag === 0}" @click="changeTab(0)">简介</span>
      <span class="detail-tab-item" :class="{active: flag === 1}" @click="changeTab(1)">目录</span>
      <span class="detail-tab-item" :class="{active: flag === 2}" @click="changeTab(2)">评论(626)</span>
    </div>
    <div class="detail-intro" v-show="flag === 0">
      <p
        class="detail-intro-desc font-26"
      >主人公周元，为周朝皇子天生圣龙气运。因一道预言，气运被夺身中剧毒，经脉被锁无法修炼。背负国仇家恨，周元没有被这种困境摧</p>
      <div class="detail-intro-introduce">
        <p class="detail-intro-author font-28">作者：天蚕土豆</p>
        <p class="font-28">连载中 |</p>
      </div>
    </div>
    <div class="detail-list" v-show="flag === 1">
      <div class="detail-list-title">
        <p class="detail-list-title-text">
          <span class="font-28">目录</span>
          <span class="detail-list-title-text-sub font-24">(2020年07月04日更新到第229话斗杨轩2)</span>
        </p>
        <div class="detail-list-title-btn">
          <span class="detail-list-title-btn-icon"></span>
          <span>正序</span>
        </div>
      </div>
      <ul class="detail-list-container">
        <li class="detail-list-container-item" v-for="(item,index) in list" :key="index">
          <div class="detail-list-container-item-name">{{item.name}}</div>
          <div class="detail-list-container-item-lock" v-if="item.isVIP"></div>
        </li>
      </ul>
    </div>
    <Comment v-show="flag === 2" />
  </div>
</template>
<script>
import GoBack from "components/goBack/GoBack";
import Comment from "components/comment/Comment";

export default {
  name: "Detail",
  data() {
    return {
      isWhite: true,
      list: [
        {
          name: "第01话周家圣龙 1",
          isVIP: false
        },
        {
          name: "第01话周家圣龙 1",
          isVIP: false
        },
        {
          name: "第01话周家圣龙 1",
          isVIP: false
        },
        {
          name: "第01话周家圣龙 1",
          isVIP: true
        },
        {
          name: "第01话周家圣龙 1",
          isVIP: true
        },
        {
          name: "第01话周家圣龙 1",
          isVIP: true
        },
        {
          name: "第01话周家圣龙 1",
          isVIP: true
        }
      ],
      flag: 2
    };
  },
  components: {
    GoBack,
    Comment
  },
  methods: {
    changeTab(num) {
      this.flag = num;
    }
  }
};
</script>
<style lang="stylus" scoped>
@import './'
</style>