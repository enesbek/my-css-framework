<template>
  <div>
    <button class="btn" :style="cssVars">
      <slot/>
    </button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    variant: String,
  },
  computed: {
    cssVars() {
      if(this.variant == 'danger') {
        return {'--color': 'red'}
      }
      else if( this.variant == 'success') {
        return {
          '--color': 'green', 
          '--size': 1 + "em"}
      }
      else if(this.variant == 'primary') {
        return {'--color': 'blue'}
      }
      else {
        return {'--color': 'gray'}
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn{
  cursor: pointer;
  background-color: var(--color);
  padding: var(--size);
  @apply rounded font-semibold tracking-wide text-white;
}

</style>
