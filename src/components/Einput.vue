<template>
  <input class="w-24 border border-black" />
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    variant: String,
    size: String,
    pill: Boolean,
    squared: Boolean,
  },
  computed: {
    cssVars() {
      let color;
      let size;
      let rounded;

      switch(this.variant) {
        case "danger":
          color = "red";
          break; 
        case "success":
          color = "green";
          break;
        case "primary":
          color = "blue";
          break;
        case "warning":
          color = "#FFC107";
          break;
        case "dark":
          color = "black";
          break; 
        default:
          color = "gray";
      }
      
      switch(this.size) {
        case "sm":
          size = 0.5 + "em " + 0.75 + "em";
          break;
        case "lg":
          size = 1 + "em " + 1.5 + "em";
          break;
        default:
          size = 0.7 + "em " + 1.1 + "em";
      }
    
      if(this.pill) {
        rounded = 30 + "px"
      }
      else if(this.squared){
        rounded = 0 + "px"
      }
      else {
        rounded = 7 + "px"
      }

      return {
        '--color': color,
        '--size': size,
        '--rounded': rounded
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
  border-radius: var(--rounded);
  @apply font-semibold tracking-wide text-white;
}

</style>
