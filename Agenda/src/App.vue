<script lang="ts">
 
import Navigation from '@/componets/Navigation.vue';
export default {
  components:{   
    Navigation,
  }
}

</script>

<template>
  <div> 
    <Navigation/>   
    <router-view> </router-view>
  </div>  
</template>
