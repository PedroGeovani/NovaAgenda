<script lang="ts">

import Navigation from '@/components/navigation/Navigation.vue';
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
