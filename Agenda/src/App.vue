<script lang="ts">

import Navigation from '@/components/Navigation.vue';
export default {
  components: {
    Navigation,
  }
}

</script>

<template>
  <div>
    <Navigation />
    <router-view> </router-view>
  </div>
</template>
