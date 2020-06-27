<template>
  <nav class="common-nav">
    <div
      class="common-nav-item font-28"
      :class="{'common-nav-active': currentType === item.type}"
      v-for="item in navList"
      :key="item.type"
    >
      <span @click="chooseType(item.type)">{{item.label}}</span>
    </div>
  </nav>
</template>
<script>
export default {
  name: "CommonNav",
  data() {
    return {
      currentType: ""
    };
  },
  props: {
    navList: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  methods: {
    chooseType(type) {
      console.log(11);
      console.log(type);
      this.currentType = type;
      this.$emit("type", type);
    }
  }
};
</script>
<style lang="stylus" scoped>
@import './'
</style>