<template>
  <div class="home">
    <Ebtn variant="danger" size="lg" squared>I am a btn</Ebtn>
    <br/>
    <Einput variant="danger" squared></Einput>
  </div>
</template>

<script>
import Ebtn from '@/components/Ebtn.vue'
import Einput from '@/components/Einput.vue'

export default {
  name: 'HomeView',
  components: {
    Ebtn,
    Einput
  }
}
</script>
