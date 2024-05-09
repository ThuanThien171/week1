<template>
    <div class="container">
      <h3 class="title">{{ name }}</h3>
      <section>
        <ProductInfo v-for="item in data" :key="item" :data="item"></ProductInfo>
      </section>
      <button class="view-all">View all</button>
    </div>
</template>
  
<script>
  import ProductInfo from '../Item/ProductInfo.vue';
  export default {
    name: 'ProductBanner',
    props: {
      name: String,
      data: Array,
    },
    components: {
      ProductInfo,
    }
  }
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container {
    padding: 40px 0;
  }
  .title {
    margin:30px;
    font-family: "Integral CF Regular";
    font-size: 48px;
    font-weight: 700;
  }
  .view-all {
    margin-top: 30px;
    margin-bottom: 20px;
    width: 218px;
    height: 52px;
    border-radius: 62px;
    border: 1px solid #0000001A
  }
  section{
    display: flex;
    overflow: scroll;
  }
</style>
  