<template>
  <section class="banner">
    <div class="banner-image"></div>
    <div class="banner-content">
      <div class="ui inverted tagline boss">德国华人服务平台</div>
      <div class="simple search">
        <select class="ui selection dropdown service-type">
          <option value="">类型</option>
          <option value="1">服务商</option>
          <option value="2">交友</option>
        </select>
        <div class="ui action input city">
          <div class="ui action selection dropdown">
            <input type="hidden" name="user" />
            <i class="dropdown icon"></i>
            <div class="default text">选择城市</div>
            <div class="menu">
              <div class="item copytext">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>