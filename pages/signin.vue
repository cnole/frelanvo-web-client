<template>
  <div class="ui middle aligned grid login-content highly_adaptive">
    <div class="column">
      <h2 class="ui center aligned header weight_normal">
        登录
      </h2>
  
      <form class="ui form">
        <div class="field">
          <div class="ui left icon input">
            <i class="user icon"></i>
            <input name="username" placeholder="用户名 / 注册邮件" type="text">
          </div>
        </div>
  
        <div class="field">
          <div class="ui left icon input">
            <i class="lock icon"></i>
            <input name="password" placeholder="密码（不少于8位）" type="password">
          </div>
        </div>
  
        <div class="field left_aligned">
          <div class="ui checkbox">
            <input id="id_remember_me" name="remember_me" type="checkbox">
            <label for="id_remember_me">一个月内记住我的账户</label>
          </div>
          <a class="right_float" href="/view/auth/reset_password/">忘记密码</a>
        </div>
        <div class="field">
          <div class="ui fluid blue large submit button">登录</div>
        </div>
        <p class="right_aligned">还没有账号？ <a href="/view/auth/signup/">立即注册</a></p>
        <div class="ui error message"></div>
      </form>
    </div>
  </div>
</template>