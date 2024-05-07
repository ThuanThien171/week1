<template>
    <div class="contact">
        <p class="text">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </p>
        <div class="inputForm">
            <div class="inputBox">
                <v-icon icon="$emailIcon"></v-icon>
                <input class="emailInput" placeholder="Search for products..."/>
            </div>
            <button class="btn">Subscribe to Newsletter</button>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .contact {
        display: flex;
        align-items: center;
        width: auto;
        padding: 36px 64px;
        border-radius: 20px;
        justify-content: space-between;
        background: #000000;
    }
    p{
        font-family: "Integral CF Regular";
        font-size: 40px;
        font-weight: 700;
        line-height: 45px;
        text-align: left;
        width: 551px;
        color: #FFFFFF;
    }
    .inputForm {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 349px;
        min-height: 108px;
    }
    .inputBox {
        display: inline-flex;
        align-items: center;
        width: 100%;
        height: 48px;
        padding: 12px 16px;
        border-radius: 62px;
        background:  #FFFFFF;
    }
    .emailInput {
        width: 100%;
        outline: none;
        background: transparent;
        margin: 0 10px;
    }
    .btn{
        font-family: "Satoshi";
        font-size: 16px;
        font-weight: 500;
        line-height: 21.6px;
        text-align: center;
        background: #FFFFFF;
        height: 46px;
        padding: 12px 16px;
        border-radius: 62px;
    }

    @media (max-width: 748px) {
        .contact {
            flex-direction: column;
            height: 293px;
            padding: 30px 5px;
        }
        p{
            font-size: 32px;
            line-height: 35px;
            width: 297px;
        }
        .inputBox,
        .btn {
            height: 42px;
        }

        .inputForm {
            font-size: 14px;
            min-height: 95px;
        }
    }
</style>