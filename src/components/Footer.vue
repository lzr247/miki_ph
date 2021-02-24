<template>
    <div class="footer">
        <v-container class="footerContainer">
            <v-row class="footerRow">
                <v-col cols="12" sm="12" md="12">
                    <h1>MikiPh</h1>
                    <a href="/">Home</a>
                    <a href="/gallery">Gallery</a>
                    <a href="/about">About me</a>
                    <a href="/contact">Contact me</a>
                    <span>
                        <a href="https://www.facebook.com/milorad.simic.509" target="blank"><i class="fab fa-facebook-square"></i></a>
                        <a href="https://www.instagram.com/miki_ph_/" target="blank"><i class="fab fa-instagram"></i></a>
                        <!-- <a href="https://twitter.com/"><i class="fab fa-twitter-square"></i></a> -->
                        <a href="https://www.youtube.com/channel/UCI48hhOD7fGAPKlVIyE-Zbw" target="blank"><i class="fab fa-youtube"></i></a>
                    </span>
                    
                    <p>Website by xcona</p>
                    <p>&copy; Milorad Simić 2020</p>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
export default {
    name:"Footer",
}
</script>
<style lang="scss" scoped>
    .footer{
        // background-color: #222;
        background: #333D51;
        color:white!important;
        min-height: 300px;
        
    }
    a{
        color:white;
    }
    .footerContainer{
        min-height: inherit;
        border-top: 1px solid white;
    }
    .footerRow{
        min-height: inherit;
        display: flex;
        align-items: center;
        padding: 10px 0;
    }
    .footerRow h1{
        font-family:'Yellowtail', cursive!important;
        font-size: 40px;
        letter-spacing: 3px;
    }
    .footerRow a{
        font-size: 20px;
        display:block;
        padding: 10px 0;
        text-transform: uppercase;
        letter-spacing: 2px;
    }
    .footerRow i{
        font-size: 35px;
        padding: 0 10px;
    }
    .footerRow p{
        padding-top: 7px;
        margin-bottom: -3px;
        letter-spacing: 1px;
    }
    .footer > div > div > div:hover a{
        color: rgb(129, 129, 129)!important;
        transition: all 0.2s!important;
    }
    .footer > div > div > div a:hover{
        color: white!important;
    }
    #app > div > div.footer > div > div > div > span > a{
        display: inline!important;
    }

    

</style>