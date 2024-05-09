<template>
    <Poster></Poster>
    <brand></brand>
    <div class="bodyContainer">
        <Banner name="NEW ARRIVALS" :data="data1"></Banner>
        <v-divider></v-divider>
        <Banner name="TOP SELLING" :data="data2"></Banner>
        <Group name="BROWSE BY DRESS STYLE"></Group>
        <Customer title="OUR HAPPY CUSTOMERS" style="margin-bottom: 140px"></Customer>
    </div>
    <Contact class="contact"></Contact>
</template>

<script>
    import data1 from '@/assets/data1.json';
    import data2 from '@/assets/data2.json';
    import Banner from '@/components/Banner/Banner.vue';
    import Group from '@/components/Banner/Group.vue';
    import Poster from '@/components/Banner/Poster.vue';
    import Brand from '@/components/Banner/Brand.vue';
    import Customer from '@/components/Banner/Customer.vue';
    import Contact from '@/components/Banner/Contact.vue';
    export default {
        name: 'CardBody',
        components:{
            Banner,
            Group,
            Poster,
            Brand,
            Customer,
            Contact,
        },
        data() {
            return {
                data1: data1,
                data2: data2,
            }
        }
    }
</script>

<style scoped>
    .contact {
        position: absolute;
        z-index: 1;
        width: calc(100% - 200px);
        margin: -90px 100px 0 100px;
    }
    .bodyContainer {
        overflow: hidden;
        padding: 0 100px;
    }
    @media (max-width: 748px) {
        .bodyContainer {
            padding: 0 10px;
        }
        .contact{
            margin: -90px 0;
            width: calc(100% - 20px);
            margin-left: 10px;
        }
    }
</style>