<template>
  <div class="login">
    <header class="login-header">
      <span class="login-header-back" @click="$router.go(-1);"></span>
      <router-link class="login-header-register font-30" to="/register">注册</router-link>
      <div class="login-header-pic"></div>
    </header>
    <section class="login-form">
      <div class="login-form-group">
        <label>邮 箱：</label>
        <input type="text" placeholder="请输入您的邮箱" />
      </div>
      <div class="login-form-group">
        <label>密 码：</label>
        <input type="password" placeholder="请输入您的密码" />
        <span class="login-form-group-forget" @click="$router.push('/forget')">忘记密码？</span>
      </div>
      <div class="font-26 login-form-btn">登录</div>
    </section>
    <footer class="login-footer">
      <p>
        <span></span>
        <span>或者用以下方式登录</span>
        <span></span>
      </p>
      <div class="login-footer-other">
        <span class="login-footer-other-qq"></span>
        <span class="login-footer-other-weibo"></span>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {};
  },
  methods: {
  }
};
</script>
<style lang="stylus" scoped>
@import './'
</style>