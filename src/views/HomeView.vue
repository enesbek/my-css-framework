<template>
  <div class="home">
    <Ebtn variant="success">I am a btn</Ebtn>
  </div>
</template>

<script>
// @ is an alias to /src
import Ebtn from '@/components/Ebtn.vue'

export default {
  name: 'HomeView',
  components: {
    Ebtn
  }
}
</script>
