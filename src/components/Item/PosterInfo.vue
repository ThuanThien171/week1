<template>
    <div class="infoBox">
        <p class="val">{{ val }}+</p>
        <p class="msg">{{ msg }}</p>
    </div>
</template>

<script>
export default {
    name: 'PosterInfo',
    props: {
      msg: {
        type: String,
        require: false,
      },
      val: {
        type: String,
        require: false,
      },
    },
    computed:{
      
    },
    methods:{

    }
}
</script>

<style scoped>
    .infobox {
        height: 74px;
    }

    .val {
        font-family: 'Satoshi';
        font-size: 40px;
        font-weight: 700;
        line-height: 54px;
        text-align: left;
    }

    .msg {
        font-family: 'Satoshi';
        font-size: 16px;
        font-weight: 400;
        line-height: 22px;
        text-align: left;
        color: #00000099;
    }
  @media (max-width: 1024px) {
    .infobox {
        height: 52px;
    }

    .val {
        font-size: 24px;
        line-height: 32px;
    } 

    .msg {
        font-size: 12px;
    }
  }

</style>