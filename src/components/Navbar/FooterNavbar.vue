<template>
    <div class="footerNav">
        <div class="logo">
            <WebLogo></WebLogo>
            <div class="text1">We have clothes that suits your style and which you’re proud to wear. From women to men.</div>
            <div class="iconList">
                <img src="@/assets/1.png">
                <img src="@/assets/2.png">
                <img src="@/assets/3.png">
                <img src="@/assets/4.png">
            </div>
        </div>
        <div class="nav">
            <span class="title">COMPANY</span>
            <span>About</span>
            <span>Features</span>
            <span>Works</span>
            <span>Career</span>
        </div>
        <div class="nav">
            <span class="title">HELP</span>
            <span>Customer Support</span>
            <span>Delivery Details</span>
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
        </div>
        <div class="nav">
            <span class="title">FAQ</span>
            <span>Account</span>
            <span>Manage Deliveries</span>
            <span>Orders</span>
            <span>Payments</span>
        </div>
        <div class="nav">
            <span class="title">RESOURCES</span>
            <span>Free eBooks</span>
            <span>Development Tutorial</span>
            <span>How to - Blog</span>
            <span>Youtube Playlist</span>
        </div>
    </div>
</template>

<script>
import WebLogo from '../Logo/WebLogo.vue'
export default {
    name: 'FooterNavbar',
    components:{
        WebLogo,
    }
}
</script>

<style scoped> 
    .footerNav{
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 177px;
    }
    .logo {
        display: flex;
        flex-direction: column;
        align-items: start;
        width: 248px;
        justify-content: space-between;
    }
    .text1 {
        width: 100%;
        font-family: 'Satoshi';
        font-size: 14px;
        text-align: left;
        margin: 15px 0;
    }
    .iconList{
        width: 148px;
        height: 28px;
        display: flex;
        justify-content: space-between;
    }
    img{
        width: 28px;
        height: 28px;
    }
    .nav{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-family: "Satoshi";
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
        text-align: left;
        color: #00000099;
    }
    .title {
        font-weight: 500;
        line-height: 18px;
        letter-spacing: 3px;
        color: #000000;
    }
    @media (max-width: 748px) {
        .footerNav{
            flex-wrap: wrap;
            height: auto;
            padding: 10px;
        }
        .logo{
            width: 100%;
        }
        .nav{
            width: 50%;
            height: 120px;
            margin-top: 30px;
        }
    }
</style>