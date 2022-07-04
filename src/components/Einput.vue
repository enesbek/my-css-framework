<template>
  <input class="input"/>
  Hello
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
          size = 20 + "px";
          break;
        case "lg":
          size = 40 + "px";
          break;
        default:
          size = 30 + "px";
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
.input{
  cursor: pointer;
  background-color: var(--color);
  width: var(--size);
  border-radius: var(--rounded);
  @apply font-semibold tracking-wide text-white border-2 border-black;
}

</style>
