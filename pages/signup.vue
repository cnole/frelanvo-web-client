<template>
  <div class="ui middle aligned grid register-content highly_adaptive">
    <div class="column">
      <h2 class="ui center aligned header weight_normal">
        注册新用户
      </h2>
  
      <form class="ui form">
        <div class="field">
          <div class="ui left icon input">
            <i class="user icon"></i>
            <input maxlength="30" name="username" placeholder="用户名" type="text">
          </div>
        </div>
  
        <div class="field">
          <div class="ui left icon input">
            <i class="mail outline icon"></i>
            <input name="email" placeholder="电子邮件" type="text">
          </div>
        </div>
  
        <div class="field">
          <div class="ui left icon input">
            <i class="lock icon"></i>
            <input name="password" placeholder="密码" type="password">
          </div>
        </div>
  
        <div class="field">
          <div class="ui left icon input">
            <i class="repeat icon"></i>
            <input name="password1" placeholder="重复密码" type="password">
          </div>
        </div>
  
        <div class="field">
          <div class="ui checkbox" style="width:100%;">
            <input class="required" id="id_tos" name="tos" type="checkbox">
            <label for="id_tos">我已阅读并同意该 <a href="/view/about/service_term/">服务条款 </a></label>
          </div>
        </div>
  
        <div class="field">
          <div class="ui fluid blue large submit button">注册</div>
        </div>
        <p class="right_aligned">已有账户？ <a href="/view/auth/signin/">立即登录</a></p>
        <div class="ui error message"></div>
      </form>
    </div>
  </div>
</template>