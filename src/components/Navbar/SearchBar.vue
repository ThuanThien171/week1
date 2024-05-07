<template>
    <div class="searchBox">
        <v-icon icon="mdi mdi-magnify"></v-icon>
        <input class="searchInput" placeholder="Search for products..."/>
    </div>
</template>

<script>
    export default {
        name:'SearchBar',
        props:{
        },
    }
</script>

<style scoped>

    .searchBox {
        width: 577px;
        height: 48px;
        padding: 12px 16px;
        border-radius: 62px;
        background: #F0F0F0;
        display: flex;
        align-items: start;
    }

    .searchInput {
        width: calc(100% - 36px);
        margin-left: 12px;
        border: none;
        outline: none;
        background: transparent;
    }

    .searchInput :focus :active{
        border: none;
    }

    @media (max-width: 748px) {

    }
</style>