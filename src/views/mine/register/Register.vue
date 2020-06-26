<template>
  <div class="register">
    <header class="register-header">
      <span class="register-header-back" @click="$router.go(-1);"></span>
      <div class="register-header-pic"></div>
    </header>
    <section class="register-form">
      <div class="register-form-group">
        <label>
          邮<span style="color:#fff">邮箱</span>箱：
        </label>
        <input type="text" placeholder="请输入您的邮箱" />
      </div>
      <div class="register-form-group">
        <label>
          密<span style="color:#fff">密码</span>码：
        </label>
        <input type="password" placeholder="请设置6-16位的字母、数字、符号的密码" />
      </div>
      <div class="register-form-group">
        <label>确认密码：</label>
        <input type="password" placeholder="请再次输入您的密码" />
      </div>
      <div class="font-26 register-form-btn">注册</div>
    </section>
    <footer class="register-footer">
      <p class="font-24">
        已有账号？马上
        <router-link to="/login">登录</router-link>
      </p>
    </footer>
  </div>
</template>
<script>
export default {
  name: "register",
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="stylus" scoped>
@import './'
</style>