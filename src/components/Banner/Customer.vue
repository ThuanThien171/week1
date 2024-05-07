<template>   
    <v-container 
        class="container"
    >
        <div class="header">
            <h3 class="title">{{ title }}</h3>
            <div class="nav">
                <v-btn icon variant="text" @click="prevSlide">
                    <i class="fas fa-arrow-left" style="transform: scale(1.5)"></i>
                </v-btn>
                <v-btn icon variant="text" @click="nextSlide">
                    <i class="fas fa-arrow-right" style="transform: scale(1.5)"></i>
                </v-btn>
            </div>
        </div>
        <div class="innerCarousel">
            <div class="track" :style="translateSlide">
                <Review 
                    v-for="(Customer,index) in customers" 
                    :key="index" 
                    :name="Customer.name" 
                    :msg="Customer.review"
                    :rating="Customer.rating"
                >
                </Review>
            </div>
        </div>
    </v-container>
</template>

<script>
import Review from '../Item/Review.vue'
export default {
    name: 'Customer',
    props: {
      title: String,
      data: [],
    },
    data(){
        return {
            currentSlide: 0,
            customers: [
                {
                    name: 'Sarah M.',
                    rating: 5,
                    review: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
                    avatar: 'https://example.com/sarah_avatar.jpg'
                },
                {
                    name: 'Alex K.',
                    rating: 5,
                    review: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
                    avatar: 'https://example.com/alex_avatar.jpg'
                },
                {
                    name: 'James L.',
                    rating: 5,
                    review: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
                    avatar: 'https://example.com/james_avatar.jpg'
                }
            ],
        }
    },
    components: {
        Review,
    },
    computed: {
        translateSlide(){
            return {
                transform: 'translateX(-'+375*this.currentSlide+'px)',
            }
        }
    },
    methods: {
      nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.customers.length;
      },
      prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.customers.length) % this.customers.length;
      }
    }
}
</script>
    
<style scoped>
    .header {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
    }

    .title {
        font-family: "Integral CF Regular";
        font-size: 48px;
        font-weight: 700;
        text-align: left;

    }

    .innerCarousel {
        margin: 20px 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: relative;
    }

    .track {
        display: inline-flex;
        height: 100%;
        transition: transform 0.2s ease-in-out;
    }

    @media (max-width: 748px) {
        .container {
            padding: 20px 8px;
        }
        .title {
            padding:10px 0;
            max-width: 60%;
            font-size: 32px;
            line-height: 36px;
        }
    }
</style>