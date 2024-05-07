<template>
  <v-app>
    <v-main class="w-100">
      <!-- <HelloWorld /> -->
      <CardHeader></CardHeader>
      <CardBody></CardBody>
      <CardFooter></CardFooter>
    </v-main>
    <!-- <AppFooter /> -->
  </v-app>
</template>

<script>
  import CardHeader from './views/Header/CardHeader.vue'
  import CardBody from './views/Body/CardBody.vue'
  import CardFooter from './views/Footer/CardFooter.vue'
  export default {
    name: 'App',
    components:{
      CardHeader,
      CardBody,
      CardFooter,
    }
    }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #F0EEED;
  /* margin-top: 60px; */
}
.line{
  margin: 0 40px 0;
  height: 1px;
  width: calc(100%-80px);
  background: #0000001A;
}
</style>