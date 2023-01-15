<template>
  <div>
    <div>bot name: {{ bot_name }}</div> 
    <div>bot level: {{ bot_level }}</div> 
  </div>
  <router-view/>
</template>

<script>
import $ from 'jquery';
import { ref } from 'vue';

export default {
  name : "App",
  setup: () => {
    let bot_name = ref("");
    let bot_level = ref("");
    
    $.ajax({
      url: "http://localhost:3000/pk/botinfo/",
      type: "get",
      success: resp => {
        bot_name.value = resp.name;
        bot_level.value = resp.level;
      }
    })

    return {
      bot_name,
      bot_level
    }
  }
}
</script>

<style>
body {
  background-image: url("@/assets/background.png");
  background-size: cover;
}
</style>
