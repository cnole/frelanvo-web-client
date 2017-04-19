<template>
  <header class="topbar">
    <div class="ui inverted blue borderless menu" v-bind:class="menuClass">
      <div class="ui container">
        <a class="toc item" v-on:click="toggleSidebar">
          <i class="sidebar icon"></i>
        </a>
        <nuxt-link to="/index" class="logo"><img src="~static/images/logo.png"></nuxt-link>
        <navigation></navigation>
      </div>
    </div>
  </header>
</template>

<script>
import Navigation from '~components/header/Navigation.vue'

export default {
  components: {
    Navigation,
  },
  props: ['layout'],
  computed: {
    menuClass: function() {
      return {
        transparent: this.layout === 'index',
      }
    }
  },
  methods: {
    toggleSidebar: function(event) {
      $('#sidebar').sidebar('toggle');
    }
  }
}
</script>

<style lang="stylus">
.topbar
  height rem(64px)
  position relative
  z-index 5
  .toc.item
    position absolute
    top 0
    left 0
    height 100%
  .menu
    width 100%
    height 100%
    &.transparent
      background-color transparent !important
  .logo
    padding 1rem 0
  @media M_and_up
    .toc.item
      display none !important
    .logo
      padding-left 1rem
</style>