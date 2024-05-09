<template>
    <div :class="(typeBox===1)?'dressStyle1':'dressStyle2'">
      <div class="msg">{{ name }}</div>
      <img :src="img"/>
    </div>
</template>

<script>
export default {
    name: 'DressStyle',
    props: {
      name: {
        type: String,
        require: false,
      },
      typeBox: {
        type: Number,
        require: false,
      },
      img: {
        type: String,
        require: false,
      }
    },
    computed:{
      // getImgUrl() {
      //   return new URL(`${this.img}`, import.meta.url).href
      // }
    },
    methods:{
    }
}
</script>

<style scoped>
  .msg{
    position: absolute;
    top: 25px;
    left: 36px;
    font-family: 'Satoshi';
    font-size: 36px;
    font-weight: 700;
    line-height: 48.6px;
    text-align: left;
  }
  
  .dressStyle1,
  .dressStyle2 {
    position: relative;
    height: 300px; 
    padding: 10px;
  } 
  img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    object-fit: cover;
  }

  .dressStyle1{
    width: 40%;
  }
  .dressStyle2{
    width: 60%;
  }

  @media (max-width: 748px) {
    .dressStyle1,
    .dressStyle2 {
      width: 100%;
      height: 200px !important;
      padding: 0;
      margin: 6px 0;
    } 
    img {
      height: auto;
      object-fit: cover;
      height: 200px !important;
    }
    .msg{
      font-size: 24px;
      line-height: 32.4px;
    }
  }

</style>