<template>
    <HeaderNotify></HeaderNotify>
    <div class="headerBar">
        <div class="btnGroup">
            <v-btn variant="text" icon class="hiddenResponsive">
                <v-icon icon="$threeLine"></v-icon>
            </v-btn>
             <WebLogo></WebLogo>
        </div>
        <HeaderNavbar class="navBtn"></HeaderNavbar>
        <SearchBar class="searchBar"></SearchBar>
        <div class="btnGroup">
            <v-btn icon="mdi mdi-magnify" variant="text" class="hiddenResponsive"></v-btn>
            <v-btn variant="text" icon>
                <v-icon icon="$cartIcon"></v-icon>
            </v-btn>
            <v-btn variant="text" icon>
                <v-icon icon="$accountIcon"></v-icon>
            </v-btn>
        </div>
    </div>
</template>

<script>
    import WebLogo from '@/components/Logo/WebLogo.vue';
    import HeaderNavbar from '@/components/Navbar/HeaderNavbar.vue';
    import SearchBar from '@/components/Navbar/SearchBar.vue';
    import HeaderNotify from '@/components/Notify/HeaderNotify.vue'
    export default {
        name: 'CardHeader',
        components: {
            WebLogo,
            HeaderNavbar,
            SearchBar,
            HeaderNotify,
        }
}
</script>

<style scoped>
    .headerBar {
        display: flex;
        padding: 20px 50px;
        align-items: center;
        justify-content: space-between;
    }

    .btnGroup {
        display: flex;
        align-items: center;
        margin: 0 5px;
    }

    @media (max-width: 748px) {
        .searchBar {
            display: none;
        }
        .headerBar {
            padding: 10px 0px;
        }
    }

    @media (min-width: 748px){
        .hiddenResponsive {
            display: none;
        }
    }

    @media (max-width: 1024px) {
        .navBtn {
            display: none;
        }
    }
</style>