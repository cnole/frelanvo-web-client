<template>
  <div class="right fixed menu navigation">
    <a class="item help" href="/view/help/problem/">
      <i class="icons">
        <i class="big thin circle icon"></i>
        <i class="help icon"></i>
      </i>
      帮助
    </a>
    <a class="item" href="/view/auth/signup/">注册</a>
    <a class="item" href="/view/auth/signin/">登录</a>
  </div>
</template>

<style lang="stylus">
.navigation
  display none !important
  justify-content flex-end
  .item.help
    .icon.help
      margin-left -2px
  @media M_and_up
    display flex !important
</style>