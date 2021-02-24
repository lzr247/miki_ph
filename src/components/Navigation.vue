<template>
    <div class="navigation">
        <v-app-bar class="nav">
            <v-container class="navContainer">
                <v-row>
                    <v-col cols="7" class="navLogo">
                        <h1><a href="/">MikiPh</a></h1>
                    </v-col>
                    <v-col cols="5" class="navBar">
                        <router-link to="/">Home</router-link>
                        <router-link to="/gallery">Gallery</router-link>
                        <router-link to="/about">About</router-link>
                        <router-link to="/contact">Contact</router-link>
                    </v-col>
                    <v-col cols="5" class="responsiveIcon">
                        <v-app-bar-nav-icon @click="prikaziOverlay()"></v-app-bar-nav-icon>
                    </v-col>
                </v-row>
                
            </v-container>
        </v-app-bar>
        <div id="overlay" v-bind:style="{height: overlayHeight + '%' }">
            <v-btn x-large @click="closeOverlay()" class="closeBtn"><i class="fas fa-times"></i></v-btn>
            <div class="overlay-content">
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
    components:{

    },
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
    #app > div > div.navigation > header > div > div > div > div.responsiveIcon.col.col-5 > button > span > i{
        font-size:35px;
    }
    .navigation{
        height:120px;
    }
    header{
        background-color:#93495E!important;
        height:120px!important;
        // display: flex;
        // align-items: flex-end; /* vertical */
        // justify-content: center; /* horizontal */
        box-shadow: none;
    }
    .navContainer{
        margin-top: 120px;
    }
    .navLogo{
        display: flex;
        justify-content: flex-start;
    }
    .navLogo h1 a{ 
        font-family:'Yellowtail', cursive!important;
        font-size: 35px;
        padding: 15px 0;
        letter-spacing: 3px;
    }
    .navBar{
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
        align-items:center;
    }
    .responsiveIcon{
        display:none;
    }
    .router-link-exact-active{
        color:white;
        border-bottom: 2px solid  white;
    }
    #app > div > div.navigation > header > div > div > div > div.navBar.col.col-5:hover a{
        color: rgb(195, 194, 194)!important;
        transition: all 0.2s!important;
    }
    #app > div > div.navigation > header > div > div > div > div.navBar.col.col-5 a{
        text-transform: uppercase!important;
        padding-top: 10px!important;
    }
    #app > div > div.navigation > header > div > div > div > div.navBar.col.col-5 a:hover{
        color:white!important;
        border-bottom: 2px solid white!important;
    }
    #app > div > div.navigation > header > div > div > div > div.navBar.col.col-5 a:not(:hover) .router-link-exact-active{
        border-bottom:2px solid rgb(129, 129, 129)!important;
    }
    //responsive button
    #app > div > div > header > div > div > div > div.responsiveIcon.col.col-5 > button{
        background-color:inherit!important;
        color: white!important;
        box-shadow: none;
    }
    *{
        color:white!important;
        font-family: "Cabin", sans-serif;
    }


    @media screen and(max-width:622px){
        .responsiveIcon{
            display:flex;
            justify-content: flex-end;
            align-items:center;
        }
        .navBar{
            display: none;
        }
    }

    //OVERLAY
    #overlay{
        height: 0;
        width: 100%;
        position: fixed;
        z-index: 11;
        top: 0;
        left: 0;
        // background-color: rgb(255, 255, 255);
        // background-color: rgba(255, 255, 255, 0.95);
        background-color: rgb(147,73,94);
        background-color: rgb(147,73,94,0.97);
        transition: all 0.5s ease;
        overflow-x: hidden;
    }
    .overlay-content{
        position: relative;
        top: 25%;
        width: 100%;
        text-align: center;
    }
    .overlay-content a{
        display: block;
        text-decoration: none;
        color: #fff!important;
        font-size: 36px;
        padding: 8px;
        transition: 0.3s;
    }
    .overlay-content a:hover{
        color: #fff!important;
    }
    .closeBtn{
        position: absolute;
        top: 20px;
        right: 25px;
        color: #fff!important;
        cursor: pointer;
    }
    #overlay > button{
        background-color: rgba(255, 255, 255, 0)!important;
        border: none;
        box-shadow: none;
    }
    #overlay > button > span > i{
        color:#fff!important;
        font-size: 36px;   
    }
    
</style>