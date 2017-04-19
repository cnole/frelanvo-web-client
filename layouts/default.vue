<template>
  <div class="pushable layout layout--default">
    <sidebar></sidebar>
    <div class="main pusher">
      <div class="ui masthead center aligned segment">
        <Topbar />
        <section class="content">
          <nuxt></nuxt>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '~components/header/Sidebar.vue'
import Topbar from '~components/header/Topbar.vue';

export default {
  components: {
    Sidebar,
    Topbar,
  }
}
</script>