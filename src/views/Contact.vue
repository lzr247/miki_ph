<template>
    <div class="contact">
        <Navigation/>
        
        <v-img src="@/assets/cona/161.jpg" height="300" class="mt-5">
            <div class="d-flex flex-column justify-center align-center" style="height:300px;">
                <h1 class="text-uppercase">Contact me</h1>
                <h2>For collaboration and freelance jobs</h2>
            </div>
        </v-img>

        <v-container class="d-flex">
            <v-row class="rowContainer">
                <!-- prvi deo -->
                <v-col cols="12" sm="6">
                    <h1 class="text-left">Let's get in touch</h1>
                    <p class="text-left" style="color:#000;margin:1.5rem 0 2rem 0;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore ipsam, libero esse enim iure nostrum architecto nihil dignissimos eaque necessitatibus iusto aliquam eum est expedita recusandae. Mollitia, veniam eum.</p>

                    <div class="contactInfo d-flex flex-column justify-start align-start" >
                        <span><i class="far fa-address-card" style="display:inline;"></i><p>Some Address, 12213113</p></span>
                        <span><i class="far fa-envelope"></i><p>someemail@yahoo.com</p></span>
                        <span><i class="fas fa-phone-volume"></i><p>123-456-789</p></span>
                    </div>

                    <div class="socialMedia">
                        <p class="text-left" style="color:#000;">Connect with me:</p>
                        <div class="contactLinks d-flex justify-start flex-row">
                            <!-- <v-btn><i class="fab fa-facebook-f"></i></v-btn>
                            <v-btn><i class="fab fa-instagram"></i></v-btn>
                            <v-btn><i class="fab fa-youtube"></i></v-btn> -->
                            <v-btn href="https://www.facebook.com/milorad.simic.509" target="blank"><i class="fab fa-facebook-f"></i></v-btn>
                            <v-btn href="https://www.instagram.com/miki_ph_/" target="blank"><i class="fab fa-instagram"></i></v-btn>
                            <v-btn href="https://www.youtube.com/channel/UCI48hhOD7fGAPKlVIyE-Zbw" target="blank"><i class="fab fa-youtube"></i></v-btn>
                        </div>
                    </div>
                </v-col>

                <!-- drugi deo -->
                <v-col cols="12" sm="6" style="background-color:#93495E;">
                    <h1 class="text-md-left text-sm-center" style="color:white;">Contact me</h1>
                    <v-form ref="form" v-model="valid" lazy-validation dark>
                        <v-text-field rounded filled dark outlined v-model="name" :rules="nameRules" label="Name" required></v-text-field>

                        <v-text-field rounded filled dark outlined v-model="email" :rules="emailRules" label="E-mail" required ></v-text-field>

                        <v-text-field rounded filled dark outlined v-model="subject" label="Subject" required ></v-text-field>

                        <v-textarea height="150" dark filled rounded outlined name="input-7-4" label="Message"></v-textarea>
                        <!-- <v-textarea rounded filled d#1abc9cark outlined v-model="message" label="Message" required ></v-textarea> -->

                        <v-btn rounded oulined class="mr-4" style="color:#B71C1C" color="white" @click="validate">Send</v-btn>

                    </v-form>
                </v-col>
            </v-row>
        </v-container>

        <Footer/>
    </div>
</template>
<script>
import Navigation from '@/components/Navigation.vue';
import Footer from '@/components/Footer.vue';
export default {
    components:{
        Navigation,
        Footer
    }
}
</script>
<style lang="scss" scoped>
    .contact{
        background: linear-gradient(15deg, #333D51 30%,#93495E 70%);
    }
    h1, h2{
        color:white;
    }
    h1{
        font-size: 3.125rem;
        letter-spacing: 2px;
    }
    h2{
        font-size: 2.125rem;
    }
    #app > div > div.v-image.v-responsive.theme--light > div.v-responsive__content > div > h2{
        letter-spacing: 0.123rem;
    }
    .container{
        min-height:50vh;
    }
    .rowContainer{
        font-family: 'Poppins', sans-serif;
        background-color: rgb(255,255,255,1);
        border-radius: 10px;
        box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.1);
        max-width: 80%;
        margin:auto;
    }
    //PRVA KOLONA
    //lets get in touch
    #app > div > div:nth-child(3) > div > div:nth-child(1) > h1, #app > div > div.container > div > div:nth-child(2) > h1{
        color: #59648E;
        font-size:1.5rem;
        font-family: 'Poppins', sans-serif;
        margin-bottom: 0.7rem;
    }
    //ikonice kontakt podataka
    #app > div > div:nth-child(3) > div > div:nth-child(1) > div.contactInfo.d-flex.flex-column.justify-start.align-start > span > i{
        color:#59648E;
        font-size: 1.4rem;
        margin-right: 0.7rem;
        width: 25px;
    }
    #app > div > div:nth-child(3) > div > div:nth-child(1) > div.contactInfo.d-flex.flex-column.justify-start.align-start > span{
        margin: 0.5rem 0;
        display:flex;
    }
    #app > div > div:nth-child(3) > div > div:nth-child(1) > div.contactInfo.d-flex.flex-column.justify-start.align-start > span> p{
        display: inline;
        margin-bottom: 0;
        color:#555;
    }
    #app > div > div:nth-child(3) > div > div:nth-child(1){
        padding: 2.3rem 2.2rem;
    }
    .socialMedia{
        padding-top: 2rem;
    }
    //dugmici
    #app > div > div.container.d-flex > div > div:nth-child(1) > div.socialMedia > div > a{
        color:white;
        background-color: #59648E;
        margin-right:0.5rem;
        min-width: 5px;
        border-radius: 0;
        animation: scaledown .2s linear;
        animation-fill-mode: forwards;
    }
    #app > div > div.container.d-flex > div > div:nth-child(1) > div.socialMedia > div > a:hover{
        z-index: 100;
        animation: scale 0.2s linear;
        animation-fill-mode: forwards;
    }
    @keyframes scaledown{
        0%{
            transform: scale(1.1);
        }
        100%{
            transform: scale(1);
        }
    }
    @keyframes scale{
        0%{
            transform: scale(1);
        }
        100%{
            transform: scale(1.1);
        }
    }
    //DRUGA KOLONA
    #app > div > div:nth-child(3) > div > div:nth-child(2){
        padding: 2.3rem 2.2rem;
        position:relative;
    }
    #app > div > div:nth-child(3) > div > div:nth-child(2):before{
        content: "";
        position: absolute;
        width: 26px;
        height: 26px;
        background-color: #93495E;
        transform: rotate(45deg);
        top: 50px;
        left: -13px;
    }
    @media screen and(max-width:600px) {
        #app > div > div:nth-child(3) > div > div:nth-child(2):before{
            top: -13px;
            left: initial;
            right: 70px;
        }
        .rowContainer{
            max-width: 100%!important;
        }
    }
</style>