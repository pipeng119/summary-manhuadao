<template>
  <div class="home">
    <!-- 头部 -->
    <header class="home-header">
      <router-link class="home-header-login" to="mine"></router-link>
      <div class="home-header-title"></div>
      <a class="home-header-search"></a>
    </header>
    <!-- 轮播图 -->
    <section class="home-banner">
      <a-carousel>
        <div v-for="img in bannerList" :key="img.url">
          <img :src="img.url" :alt="img.alt" />
        </div>
      </a-carousel>
    </section>
    <!-- 导航 -->
    <nav class="home-nav">
      <div class="home-nav-item" v-for="item in navList" :key="item.imgUrl">
        <span :style="{backgroundImage: `url(${item.imgUrl})`}"></span>
        <p>{{item.label}}</p>
      </div>
    </nav>
    <!-- 推荐列表 -->
    <section class="home-recommend" v-for="recommend in recommendList" :key="recommend.id">
      <div class="home-recommend-divide"></div>
      <div class="home-recommend-title">
        <div class="home-recommend-title-group">
          <img :src="recommend.imgUrl" alt />
          <span class="font-36">{{recommend.title}}</span>
        </div>
        <router-link :to="recommend.moreUrl"></router-link>
        <span class="home-recommend-title-more">更多 ></span>
      </div>
      <ul class="home-recommend-list">
        <li class="home-recommend-list-item" v-for="item in recommend.list" :key="item.title">
          <img :src="item.imgUrl" alt />
          <h6 class="font-28">{{item.title}}</h6>
          <p>{{item.desc}}</p>
        </li>
      </ul>
    </section>
    <section class="go-top font-20" v-show="topFlag" @click="goTop()">
      <div class="go-top-fav"></div>顶部
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import { fetchList } from "@/api/home.js";
export default {
  name: "Home",
  data() {
    return {
      headerImg: require("@/assets/images/logo.png"),
      bannerList: [
        {
          url: require("@/assets/images/banner_01.jpg"),
          alt: "嘿嘿"
        },
        {
          url: require("@/assets/images/banner_02.jpg"),
          alt: "哈哈"
        },
        {
          url: require("@/assets/images/banner_03.jpg"),
          alt: "呵呵"
        },
        {
          url: require("@/assets/images/banner_04.jpg"),
          alt: "吼吼"
        }
      ],
      navList: [
        {
          imgUrl: require("@/assets/images/catgory.png"),
          label: "分类"
        },
        {
          imgUrl: require("@/assets/images/ranking.png"),
          label: "排行"
        },
        {
          imgUrl: require("@/assets/images/vip.png"),
          label: "VIP专区"
        },
        {
          imgUrl: require("@/assets/images/history.png"),
          label: "历史"
        }
      ],
      recommendList: [
        {
          id: 1,
          title: "燃烧吧热血",
          imgUrl: require("assets/images/home/blood.png"),
          moreUrl: "http://baidu.com",
          list: [
            {
              imgUrl: require("@/assets/images/hom-recommend-list/1.jpg"),
              title: "元尊",
              desc: "仙界最强大帝，在线教你做人11111111111111111"
            },
            {
              imgUrl: require("@/assets/images/hom-recommend-list/2.jpg"),
              title: "驭灵师",
              desc: "仙界最强大帝，在线教你做人"
            },
            {
              imgUrl: require("@/assets/images/hom-recommend-list/3.jpg"),
              title: "中华神医",
              desc: "仙界最强大帝，在线教你做人"
            },
            {
              imgUrl: require("@/assets/images/hom-recommend-list/4.jpg"),
              title: "修仙归来在校园",
              desc: "仙界最强大帝，在线教你做人"
            }
          ]
        },
        {
          id: 2,
          title: "燃烧吧热血",
          imgUrl: require("assets/images/home/blood.png"),
          moreUrl: "http://baidu.com",
          list: [
            {
              imgUrl: require("@/assets/images/hom-recommend-list/1.jpg"),
              title: "元尊",
              desc: "仙界最强大帝，在线教你做人11111111111111111"
            },
            {
              imgUrl: require("@/assets/images/hom-recommend-list/2.jpg"),
              title: "驭灵师",
              desc: "仙界最强大帝，在线教你做人"
            },
            {
              imgUrl: require("@/assets/images/hom-recommend-list/3.jpg"),
              title: "中华神医",
              desc: "仙界最强大帝，在线教你做人"
            },
            {
              imgUrl: require("@/assets/images/hom-recommend-list/4.jpg"),
              title: "修仙归来在校园",
              desc: "仙界最强大帝，在线教你做人"
            }
          ]
        },
        {
          id: 3,
          title: "燃烧吧热血",
          imgUrl: require("assets/images/home/blood.png"),
          moreUrl: "http://baidu.com",
          list: [
            {
              imgUrl: require("@/assets/images/hom-recommend-list/1.jpg"),
              title: "元尊",
              desc: "仙界最强大帝，在线教你做人11111111111111111"
            },
            {
              imgUrl: require("@/assets/images/hom-recommend-list/2.jpg"),
              title: "驭灵师",
              desc: "仙界最强大帝，在线教你做人"
            },
            {
              imgUrl: require("@/assets/images/hom-recommend-list/3.jpg"),
              title: "中华神医",
              desc: "仙界最强大帝，在线教你做人"
            },
            {
              imgUrl: require("@/assets/images/hom-recommend-list/4.jpg"),
              title: "修仙归来在校园",
              desc: "仙界最强大帝，在线教你做人"
            }
          ]
        }
      ],
      topFlag: false
    };
  },
  methods: {
    // 监听滚动条事件
    handleScroll(e) {
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop >= 360) {
        if (this.topFlag) return;
        if (!this.topFlag) this.topFlag = true;
      } else {
        this.topFlag = false;
      }
    },
    goTop(){
        document.documentElement.scrollTop = document.body.scrollTop = 0
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
  }
};
</script>
<style lang="stylus" scoped>
@import './'
</style>