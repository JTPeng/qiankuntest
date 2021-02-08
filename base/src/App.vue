<template>
  <div id="app">
    <Container></Container>
  </div>
</template>

<script>
import Container from './views/Container'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Container,
  },
  updated() {
    // console.log(this.$router)
    console.log(1)
  },
}
</script>

<style>
</style>
