<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Footer from '@/components/Footer.vue'
import Navbar from '@/components/Navbar.vue'

@Component({
  components: {
    Footer, Navbar
  },
})
export default class App extends Vue {}
</script>


<style>
</style>
