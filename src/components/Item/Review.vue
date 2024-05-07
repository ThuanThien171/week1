<template>
    <div class="review">
        <v-rating
              v-model="localRate"
              active-color="yellow-darken-2"
              :half-increments="true"
              color="white"
              :length="5"
              density="default"
              size="22px"
              readonly
        ></v-rating>
        <div class="name">
            <p>{{ name }}</p>
            <img src="@/assets/greenTick.png" style="margin: 3px">
        </div>
        <div class="msg">
            {{ msg }}
        </div>
    </div>
</template>
  
<script>
    export default {
        props: {
            rating: Number,
            msg: String,
            name: String,
        },
        data() {
            return {
              localRate: this.rating,
            };
        },
    };
</script>
  
<style scoped>
  .review {
    width: 400px;
    height: auto;
    border: 1px solid #0000001A;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: start;
    text-align: left;
    padding: 28px 32px;
    margin-right: 20px;
  }

  .name {
    margin: 10px 0;
    font-family: "Satoshi";
    font-size: 20px;
    font-weight: 700;
    line-height: 22px;
    display: flex;
    align-items: center;
  }
  .msg {
    font-family: "Satoshi";
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    color: #00000099;
  }

  @media (max-width: 748px) {
    .review {
      width: 358px;
      padding:24px;
    }
  }

</style>
  