<template>
  <div>
    <lan-tern></lan-tern>
  <NavBar></NavBar>
  <router-view/>
  </div>
</template>

<script>

import NavBar from '@/components/NavBar.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import LanTern from "@/components/LanTern.vue"

export default {
  components: {
    NavBar,
    LanTern
  }
}
</script>

<style >
body {
  background-image: url("@/assets/images/background.png");
  background-size: cover;
}
</style>
