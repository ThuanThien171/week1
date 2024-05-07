<template>
    <div class="container">
        <!-- <Contact class="contact"></Contact> -->
        <FooterNavbar></FooterNavbar>
        <v-divider style="margin: 30px 0 20px 0"></v-divider>
        <CopyRight></CopyRight>
    </div>
</template>

<script>
    import Contact from '@/components/Banner/Contact.vue';
    import CopyRight from '@/components/CopyRight.vue/CopyRight.vue';
    import FooterNavbarVue from '@/components/Navbar/FooterNavbar.vue';
    export default {
        name: 'CardFooter',
        components:{
            Contact,
            CopyRight,
            FooterNavbarVue,
        }
    }
</script>

<style scoped>
    .container{
        background: #F0F0F0;
        padding: 100px 100px 40px 100px;
    }
    @media (max-width: 1024px){
        .container{
            padding: 220px 0 40px 0;
        }
    }
</style>