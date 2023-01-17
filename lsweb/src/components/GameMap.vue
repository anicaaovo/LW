<template>
  <div ref="parent" class="GameMap">
    <canvas ref="canvas">

    </canvas>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { GameMap } from "@/assets/scripts/GameMap";

export default {
  setup(){
    let parent = ref(null);
    let canvas = ref(null);

    onMounted(() => {
      new GameMap(canvas.value.getContext('2d'), parent.value);
    });

    return {
      parent,
      canvas
    }
  }
}
</script>

<style scoped>
div.GameMap {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>