<template>
    <div class="poster">
        <div class="left">
            <p class="text1">FIND CLOTHES THAT MATCHES YOUR STYLE</p>
            <p class="text2">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
            <v-btn class="text-none btn" variant="tonal">Shop Now</v-btn>
            <div class="posterInfo">
                <PosterInfo val="200" msg="International Brands"></PosterInfo>
                <v-divider vertical style="height: 100%; margin: 0 30px"></v-divider>
                <PosterInfo val="2,000" msg="High-Quality Products"></PosterInfo>
                <v-divider vertical class="line" style="height: 100%; margin: 0 30px"></v-divider>
                <PosterInfo val="30,000" msg="Happy Customers"></PosterInfo>
            </div>
        </div>
        <div class="right">
            <v-icon id="icon1" icon="$kiraIcon" class="icon1"></v-icon>
            <v-icon id="icon2" icon="$kiraIcon" class="icon2"></v-icon>
            <img src="@/assets/Poster.png" class="imgBg" />
        </div>
    </div>
</template>

<script>
    import PosterInfo from '../Item/PosterInfo.vue';
    export default {
        name: 'Poster',
        components:{
            PosterInfo,
        },
    }
</script>

<style scoped>
    .poster {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
    }

    .left {
        width: 50%;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        text-align: left;
        padding: 60px 0px 60px 60px;
        background: #F2F0F1;
    }

    .text1 {
        font-family: 'Integral CF Regular';
        font-size: 64px;
        font-weight: 700;
        line-height: 64px;
    }

    .text2 {
        margin: 30px 0;
        font-family: 'Satoshi';
        font-size: 16px;
        font-weight: 400;
        line-height: 22px;
    }

    .btn {
        border-radius: 62px;
        background: #000000;
        color: white;
        font-family: 'Satoshi';
        font-size: 16px;
        font-weight: 500;
        line-height: 21.6px;
        text-align: left;
        width: 210px;
        height: 52px;
        padding: 16px 54px 16px 54px;
    }

    .right {
        width: 50%;
        height: 663px;
        position: relative;
    }

    .imgBg {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 50% 0%;
    }

    .icon1 {
        position: absolute;
        top: 50%;
        left: 16px;
        transform: scale(2.4);
    }

    .icon2 {
        position: absolute;
        top: 80px;
        right: 80px;
        transform: scale(4.4);
    }

    .posterInfo {
        width: 100%;
        height: 74px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 30px 0;
    }

    @media (max-width: 1024px) {
        .left {
            width: 100%;
            height: 100%;
            padding: 20px 10px;
        }

        .right {
            width: 100%;
            height: 448px;
        }

        .text1 {
            font-size: 32px;
            line-height: 32px;
        }

        .text2 {
            font-size: 14px;
            line-height: 20px;
            margin: 20px 0;
        }

        .btn {
            width: 100%;
        }

        .icon1 {
            top: 35%;
            left: 30px;
            transform: scale(1.8);
        }

        .icon2 {
            transform: scale(3.2);
            top: 60px;
            right: 40px;
        }

        .posterInfo {
            height: 52px;
            margin: 20px 0;
        }
    }

    @media (max-width: 748px) {
        .line {
            display: none;
        }
    }
</style>