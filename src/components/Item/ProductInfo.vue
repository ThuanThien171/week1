<template>
    <div class="product">
        <img :src="data.img">
        <div class="info">
          <p class="name">{{ data.productName }}</p>
          <div class="rating">
            <v-rating
              v-model="data.rating"
              active-color="yellow-darken-2"
              :half-increments="true"
              color="white"
              :length="5"
              density="compact"
              readonly
            ></v-rating>
            <p class="text-rating">{{ data.rating }}/5</p>
          </div>
          <p class="price">${{ data.price }}</p>
      </div>
    </div>
</template>
  
<script>
  export default {
    name: 'ProductBox',
    data() {
        return{
          data:{
            img: "https://s3-alpha-sig.figma.com/img/e01f/5d3c/d9029bd465a4c7158689ab1619693014?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Gj3G6UQjmecoicHO3W6pXYe0HWgHyAIWwLF4~k6ire8WmNAMpFNqqkHk1ZDRjWsqIbUbexN-qbiXd9oGsPzL8WgT~dunWUMvFrK414AjI614B8V7Tean6ssjDr2sA~Cvv9kwos7J4YSUuODWDx5bTSDmRA8betuYvofoSQHFXTFG32ipNTr-6G4pFZg62riGMDpx2FswJD9tgxeG8-rURTZ8ibywNALqS2IGTSONEeyTibJdNi9XddliBtzD5AIU9f7hfRFjrirUk5LoMUnz0f6-EXjnar5mVsKmaUmzMD4sXkV64LzkjetHWyxWngvGtQr2FHiUVVjx3E9jRy3atw__",
            productName: "Vertical striped shirt",
            price: 120,
            rating: 5,
            oldPrice: 2,
            promo: 10,
          },
        }
    }
  }
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .product {
    margin: 7px;
  }

  .info{
    display: flex;
    flex-direction: column;
    text-align: left;
  }
  
  .name{
    font-family: "Satoshi";
    font-size: 20px;
    font-weight: 700;
  }

  .price{
    font-family: "Satoshi";
    font-size: 24px;
    font-weight: 700;
  }

  .rating{
    display: flex;
    font-family: "Satoshi";
    font-size: 18px;
    font-weight: 400;
    align-items: center;
  }

  .text-rating{
    margin-left: 6px;
  }

  img {
    border-radius: 20px;
    width: 300px;
    height: 300px;
    object-fit: cover;
  }

</style>
  