<template>
    <div class="footer">
        <v-container class="footer__footerContainer">
            <v-row class="footer__footerRow">
                <v-col cols="12" sm="12" md="12">
                    <h1>MikiPh</h1>
                    <a href="/">Home</a>
                    <a href="/gallery">Gallery</a>
                    <a href="/about">About me</a>
                    <a href="/contact">Contact me</a>
                    <span>
                        <a href="https://www.facebook.com/milorad.simic.509" target="blank"><i class="fab fa-facebook-square"></i></a>
                        <a href="https://www.instagram.com/miki_ph_/" target="blank"><i class="fab fa-instagram"></i></a>
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

    .footer {
        background: #333D51;
        color: white;
        min-height: 300px;
        a {
            color: white;
        }
        &__footerContainer {
            min-height: inherit;
            border-top: 1px solid white;
        }
        &__footerRow {
            min-height: inherit;
            display: flex;
            align-items: center;
            padding: 10px 0;
            &:hover a{
                color: rgb(129, 129, 129)!important;
                transition: all .2s;
            }
            h1 {
                font-family: 'Yellowtail', cursive;
                font-size: 40px;
                letter-spacing: 3px;
            }
            a {
                font-size: 20px;
                display: block;
                padding: 10px 0;
                text-transform: uppercase;
                letter-spacing: 2px;
                &:hover {
                    color: white!important;
                }
            }
            i {
                font-size: 35px;
                padding: 0 10px;
            }
            p {
                padding-top: 7px;
                margin-bottom: -3px;
                letter-spacing: 1px;
            }
            span a {
                display: inline;
                &:hover {
                    color: white!important;
                }
            }
        }
    }

</style>