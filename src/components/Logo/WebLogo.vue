<template>
    <div class="logo">
        {{ logoName }}
    </div>
</template>

<script>
export default {
    name:'WebLogo',
    props:{
        logoName: {
            type: String,
            required: false,
            default: "SHOP.CO",
        }
    },
}
</script>

<style scoped>
    .logo{
        font-family: "Integral CF Regular";
        font-size: 32px;
        font-weight: 700;
        margin-top: -8px;
    }

    @media (max-width: 448px) {
        .logo {
            font-size: 25.2px;
            margin-top: -6px;
        }
    }
</style>