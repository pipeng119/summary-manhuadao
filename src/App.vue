<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
      <a-button type="primary">我他么的是按钮1</a-button>
    </div>

    <router-view/>
  </div>
</template>

<style lang="stylus">
#app 
  width 100%
  height 100%
</style>
