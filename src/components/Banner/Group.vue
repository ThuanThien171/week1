<template>
    <div class="container">
      <h3 class="title">{{ name }}</h3>
      <section>
        <DressStyle name="Casual"  :typeBox="1" 
            img="https://firebasestorage.googleapis.com/v0/b/thienproject-2a65d.appspot.com/o/s1.png?alt=media&token=3522a58f-fc30-4822-af47-7bb2bdab1751"
            ></DressStyle>
        <DressStyle name="Formal" :typeBox="2" 
            img="https://firebasestorage.googleapis.com/v0/b/thienproject-2a65d.appspot.com/o/s2.png?alt=media&token=09212c8a-793b-4c5d-b4d4-05651a82d6ac"
            ></DressStyle>
        <DressStyle name="Party"  :typeBox="2" 
            img="https://firebasestorage.googleapis.com/v0/b/thienproject-2a65d.appspot.com/o/s3.png?alt=media&token=62d95970-c707-4a1d-ad8a-a607c50ff6cb"
            ></DressStyle>
        <DressStyle name="Gym" :typeBox="1" 
            img="https://firebasestorage.googleapis.com/v0/b/thienproject-2a65d.appspot.com/o/s4.png?alt=media&token=1119ba11-2bc8-4957-b2b6-d62f2d910517"
            ></DressStyle>
      </section>
    </div>
</template>

<script>
import DressStyle from '../Item/DressStyle.vue'
export default {
    name: 'StyleGroup',
    props: {
      name: String,
      data: [],
    },
    data(){
        return {
            url: "https://s3-alpha-sig.figma.com/img/e1b7/74ab/a32d9a769caba77c08e107a9198dcd6d?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FHGg4Mvt-Hqa2XALdpVoUCgfcyW8oNESrAEDtzK2VsihnR07OSzqEGlUfhnAlpSxZxPV62jGdixxRxcEKsohde5vI27knlStKfxCw1vCROZ4Rr-Z6wlt4TL15lxxbqndXbKYdhkz5Vrasj0mlhHrfbwNkStRGQqqqz2cuL7m6diHBqxDWDLUbH0fjmzr3NyQXvcEl2SRr0AUOd0mUibdri7Am-Wz9dj1IWGOovo~-qSwncGJLzAvrhuarEt9gqYDFREvwHgEt2sGUmnfsiszjH1PMxL1j5xpZTeCuQAK6J7w6C4alckLv6VXeyL093RJwZELSssYgqcw-9JAgfOmzQ__",
        }
    },
    components: {
        DressStyle,
    }
}
</script>
    
<style scoped>
    .container{
        padding: 20px 30px 40px 30px;
        border-radius: 40px;
        background: #F0F0F0;
    }
    .title {
        margin:20px;
        font-family: "Integral CF Regular";
        font-size: 48px;
        font-weight: 700;
        line-height: 57.6px;
    }
    section {
        display: flex;
        flex-wrap: wrap;
    }
    @media (max-width:748px){
        .container{
            padding: 10px;
        }
        .title {
            margin: 0 30px;
            font-size: 32px;
            line-height: 36px;
            margin-bottom: 20px;
        }
    }
</style>