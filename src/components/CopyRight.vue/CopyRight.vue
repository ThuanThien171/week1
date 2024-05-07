<template>
    <div class="copyright">
        <p>Shop.co © 2000-2023, All Rights Reserved</p>
        <div class="iconList">
            <img src="@/assets/Visa.png">
            <img src="@/assets/Mastercard.png">
            <img src="@/assets/Paypal.png">
            <img src="@/assets/Pay.png">
            <img src="@/assets/GPay.png">
        </div>
    </div>
</template>

<script>
import WebLogo from '../Logo/WebLogo.vue'
export default {
    components:{
        WebLogo,
    }
}
</script>

<style scoped> 
    .copyright{
        display: flex;
        width: 100%;
        font-family: 'Satoshi';
        font-size: 14px;
        text-align: left;
        justify-content: space-between;
        align-items: center;
    }
    .iconList{
        width: 281px;
        display: flex;
        justify-content: space-between;
        margin: 15px 0;
    }

    img {
        width: 46.61px;
        height: 30.03px;
        padding: 6px;
        border-radius: 5.38px;
    }

    @media (max-width: 748px) {
        .copyright {
            flex-direction: column;
        }
        .iconList {
            width: 240px;
        }
    }
</style>