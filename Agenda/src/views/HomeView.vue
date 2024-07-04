<script lang="ts">
import contactview from './contact/ContactView.vue'

export default {
  data() {
    return {
      nameUser: "tudo",
    }
  },
  components: {
    contactview
  }
}
</script>

<template>
  <div>
    <contactview />
  </div>

</template>
