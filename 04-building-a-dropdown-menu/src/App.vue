<template>
  <div id="app" class="antialiased text-gray-900">
    <div class="bg-gray-300 min-h-screen">
      <Navbar/>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  name: 'app',
  components: {
    Navbar
  },
}
</script>

<style src="./assets/tailwind.css"></style>