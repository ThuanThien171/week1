<template>
    <div class="navbar">
        <v-btn append-icon="mdi mdi-chevron-down" variant="text" class="text-none">Shop</v-btn>
        <v-btn variant="text" class="text-none">On Sale</v-btn>
        <v-btn variant="text" class="text-none">New Arrivals</v-btn>
        <v-btn variant="text" class="text-none">Brands</v-btn>
    </div>
</template>

<script>
    export default {
        name:'HeaderNavbar',
        props:{
        },
    }
</script>

<style scoped>
    .navbar {
        font-family: "Satoshi";
        font-size: 16px;
        font-weight: 400;
        text-align: left;
    }
    .text-none {
        padding: 8px
    }

    @media (max-width: 748px) {
        .navbar {
            font-size: 25.2px;
        }
    }
</style>