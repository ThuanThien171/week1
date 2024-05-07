<template>
    <div class="brandList">
        <img src="@/assets/versace.png"/>
        <img src="@/assets/zara.png"/>
        <img src="@/assets/gucci.png"/>
        <img src="@/assets/prada.png"/>
        <img src="@/assets/kelvin.png"/>
    </div>
</template>

<script>
    export default {
        name:'Brand',
        props:{
        },
    }
</script>

<style scoped>
    .brandList {
        background: #000000;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
        padding: 15px 0;
    }

    img {
        height: 32px;
        margin: 15px 5px;
    }

    @media (max-width: 748px) {
        img {
            height: 24px;
        }
    }
</style>