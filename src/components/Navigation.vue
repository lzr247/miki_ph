<template>
    <div class="navigation">
        <v-app-bar class="navigation__nav">
            <v-container class="navigation__navContainer">
                <v-row>
                    <v-col cols="7" class="navigation__navLogo">
                        <h1><a href="/">MikiPh</a></h1>
                    </v-col>
                    <v-col cols="5" class="navigation__navBar">
                        <router-link to="/">Home</router-link>
                        <router-link to="/gallery">Gallery</router-link>
                        <router-link to="/about">About</router-link>
                        <router-link to="/contact">Contact</router-link>
                    </v-col>
                    <v-col cols="5" class="navigation__responsiveIcon">
                        <v-app-bar-nav-icon @click="prikaziOverlay()"></v-app-bar-nav-icon>
                    </v-col>
                </v-row>
            </v-container>
        </v-app-bar>
        <div class="navigation__overlay" v-bind:style="{ height: overlayHeight + '%' }">
            <v-btn x-large @click="closeOverlay()" class="navigation__closeBtn"><i class="fas fa-times"></i></v-btn>
            <div class="navigation__overlayContent">
                <a href="/" @click="closeOverlay()">Home</a>
                <a href="/gallery" @click="closeOverlay()">Gallery</a>
                <a href="/about" @click="closeOverlay()">About me</a>
                <a href="/contact" @click="closeOverlay()">Contact</a>
            </div>
        </div>
        
    </div>
    
</template>
<script>
export default {
    name:"Navigation",
    data:function(){
        return{
            overlayHeight:0,
        }
    },
    methods:{
        prikaziOverlay(){
            this.overlayHeight=100;
        },
        closeOverlay(){
            this.overlayHeight=0;
        },
    }
}
</script>
<style lang="scss" scoped>

    .router-link-exact-active{
        color:white;
        border-bottom: 2px solid  white;
    }

    .navigation {
        height: 120px;
        color: white!important;
        font-family: 'Cabin', sans-serif;
        &__nav {
            background-color: #93495E!important;
            height: 120px!important;
            box-shadow: none;
        }
        &__navContainer {
            margin-top: 120px;
        }
        &__navLogo {
            display: flex;
            justify-content: flex-start;
            h1 a {
                font-family: 'Yellowtail', cursive!important;
                font-size: 35px;
                padding: 15px 0;
                letter-spacing: 3px;
            }
        }
        &__navBar {
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-around;
            align-items: center;
            &:hover a {
                color: rgb(195, 194, 194)!important;
                transition: all .2s;
            }
            a {
                text-transform: uppercase;
                padding-top: 10px;
                &:hover {
                    color: white!important;
                    border-bottom: 2px solid white!important;
                }
                &:not(:hover) .router-link-exact-active {
                    border-bottom: 2px solid white!important;
                }
            }
        }
        &__responsiveIcon {
            display: none;
            button {
                background-color: inherit!important;
                color: white!important;
                box-shadow: none;
            }
        }
        // Overlay
        &__overlay {
            height: 0;
            width: 100%;
            position: fixed;
            z-index: 11;
            top: 0;
            left: 0;
            background-color: rgb(147,73,94);
            background-color: rgb(147,73,94,0.97);
            transition: all 0.5s ease;
            overflow-x: hidden;
            button {
                background-color: rgba(255, 255, 255, 0)!important;
                border: none;
                box-shadow: none;
                span i {
                    color:#fff!important;
                    font-size: 36px;   
                }
            }
        }
        &__overlayContent {
            position: relative;
            top: 25%;
            width: 100%;
            text-align: center;
            a {
                display: block;
                text-decoration: none;
                color: #fff!important;
                font-size: 36px;
                padding: 8px;
                transition: .3s;
                &:hover {
                    color: #fff!important;
                }
            }
        }
        &__closeBtn {
            position: absolute;
            top: 20px;
            right: 25px;
            color: #fff!important;
            cursor: pointer;
        }

    }

    @media screen and (max-width: 630px) {
        .navigation {
            &__responsiveIcon {
                display: flex;
                justify-content: flex-end;
                align-items: center;
            }
            &__navBar {
                display: none;
            }
        }

    }

</style>