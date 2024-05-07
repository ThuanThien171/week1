<template>
    <div class="notify">
        <div>
            Sign up and get 20% off to your first order.
            <a>Sign Up Now</a>
        </div>
        <v-btn class="xBtn" icon="mdi mdi-window-close" variant="text" color="white" size="20px"></v-btn>
    </div>
</template>

<script>
    export default {
        name:'HeaderNotify',
        props:{
        },
    }
</script>

<style scoped>
    .notify {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 38px;
        font-family: "Satoshi";
        font-size: 14px;
        font-weight: 400;
        color: #FFFFFF;
        background: #000000;
    }

    a {
        text-decoration: underline;
    }

    .xBtn {
        position: absolute;
        right: 10%;
    }

    @media (max-width: 748px) {
        .notify {
            font-size: 12px;
            height: 34px;
        }
    }
</style>