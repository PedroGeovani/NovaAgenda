<script lang="ts">
  import HomeView from './views/HomeView.vue';
export default {
  components:{
    HomeView
  }
}

</script>

<template>
  <HomeView/>   
  <router-view> </router-view>
</template>
