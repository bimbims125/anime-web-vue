<template>
  <Navbar/>
  <router-view></router-view>
</template>

<style>
@import '@/assets/css/bootstrap.min.css';
@import '@/assets/css/font-awesome.min.css';
@import '@/assets/css/elegant-icons.css';
@import '@/assets/css/nice-select.css';
@import '@/assets/css/owl.carousel.min.css';
@import '@/assets/css/slicknav.min.css';
@import '@/assets/css/plyr.css';
@import '@/assets/css/style.css';
</style>
<script>
import Navbar from '@/views/partials/Header.vue'

export default {
  name: 'App',
  components:{
    Navbar
  }
}
</script>
