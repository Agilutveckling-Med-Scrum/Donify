<template>
  <div class="home">
    <Questions />
    <About />
  </div>
</template>

<script>
import Questions from '@/components/Questions.vue'
import About from '@/views/About.vue'

export default {
  name: 'Home',
  components: {
    Questions,
    About
  }
}
</script>

<style scoped></style>
