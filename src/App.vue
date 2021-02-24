<template>
  <v-app>
    <div id="app">
      <!-- <transition name="router-anim" enter-active-class="animated animate__backInLeft" leave-active-class="animated animate__backOutDown">
        <router-view/>
      </transition> -->
      <router-view></router-view>
    </div>
  </v-app>
</template>

<style lang="scss">
// @import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
#app {
  font-family: 'Cabin', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  text-decoration: none;

}
//  .page {
//     position: absolute;
//     width: inherit;
//   }
</style>
