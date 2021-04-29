<template>
    <div class="gallery">
        <Navigation/>
        <v-container fluid ref="probica">
            <v-lazy>
                <v-row class="gallery_containerRow">
                    <v-col class="gallery__column">
                        <v-img src="@/assets/cona/1.jpg" lazy-src="https://picsum.photos/id/11/10/6" style="width:100%;"></v-img>
                        <v-img src="@/assets/cona/2.jpg" lazy-src="https://picsum.photos/id/11/10/6" style="width:100%;"></v-img>
                        <v-img src="@/assets/cona/3.jpg" lazy-src="https://picsum.photos/id/11/10/6" style="width:100%;"></v-img>
                        <v-img src="@/assets/cona/4.jpg" lazy-src="https://picsum.photos/id/11/10/6" style="width:100%;"></v-img>
                        <v-img src="@/assets/cona/17.jpg" lazy-src="https://picsum.photos/id/11/10/6" style="width:100%;"></v-img>
                        <v-img src="@/assets/cona/22.jpg" lazy-src="https://picsum.photos/id/11/10/6" style="width:100%;"></v-img>
                        <v-img src="@/assets/cona/25.jpg" lazy-src="https://picsum.photos/id/11/10/6" style="width:100%;"></v-img>
                        <v-img src="@/assets/cona/28.jpg" lazy-src="https://picsum.photos/id/11/10/6" style="width:100%;"></v-img>
                    </v-col>
                    <v-col class="gallery__column">
                        <v-img src="@/assets/cona/5.jpg" lazy-src="https://picsum.photos/id/11/10/6" style="width:100%;"></v-img>
                        <v-img src="@/assets/cona/11.jpg" lazy-src="https://picsum.photos/id/11/10/6" style="width:100%;"></v-img>
                        <v-img src="@/assets/cona/15.jpg" lazy-src="https://picsum.photos/id/11/10/6" style="width:100%;"></v-img>
                        <v-img src="@/assets/cona/20.jpg" lazy-src="https://picsum.photos/id/11/10/6" style="width:100%;"></v-img>
                        <v-img src="@/assets/cona/7.jpg" lazy-src="https://picsum.photos/id/11/10/6" style="width:100%;"></v-img>
                        <v-img src="@/assets/cona/8.jpg" lazy-src="https://picsum.photos/id/11/10/6" style="width:100%;"></v-img>
                        <v-img src="@/assets/cona/14.jpg" lazy-src="https://picsum.photos/id/11/10/6" style="width:100%;"></v-img>
                    </v-col>
                    <v-col class="gallery__column">
                        <v-img src="@/assets/cona/9.jpg" lazy-src="https://picsum.photos/id/11/10/6" style="width:100%;"></v-img>
                        <v-img src="@/assets/cona/10.jpg" lazy-src="https://picsum.photos/id/11/10/6" style="width:100%;"></v-img>
                        <v-img src="@/assets/cona/6.jpg" lazy-src="https://picsum.photos/id/11/10/6" style="width:100%;"></v-img>
                        <v-img src="@/assets/cona/12.jpg" lazy-src="https://picsum.photos/id/11/10/6" style="width:100%;"></v-img>
                        <v-img src="@/assets/cona/21.jpg" lazy-src="https://picsum.photos/id/11/10/6" style="width:100%;"></v-img>
                        <v-img src="@/assets/cona/18.jpg" lazy-src="https://picsum.photos/id/11/10/6" style="width:100%;"></v-img>
                        <v-img src="@/assets/cona/27.jpg" lazy-src="https://picsum.photos/id/11/10/6" style="width:100%;"></v-img>
                    </v-col>
                    <v-col class="gallery__column">
                        <v-img src="@/assets/cona/13.jpg" lazy-src="https://picsum.photos/id/11/10/6" style="width:100%;"></v-img>
                        <v-img src="@/assets/cona/14.jpg" lazy-src="https://picsum.photos/id/11/10/6" style="width:100%;"></v-img>
                        <v-img src="@/assets/cona/19.jpg" lazy-src="https://picsum.photos/id/11/10/6" style="width:100%;"></v-img>
                        <v-img src="@/assets/cona/16.jpg" lazy-src="https://picsum.photos/id/11/10/6" style="width:100%;"></v-img>
                        <v-img src="@/assets/cona/23.jpg" lazy-src="https://picsum.photos/id/11/10/6" style="width:100%;"></v-img>
                        <v-img src="@/assets/cona/24.jpg" lazy-src="https://picsum.photos/id/11/10/6" style="width:100%;"></v-img>
                        <v-img src="@/assets/cona/26.jpg" lazy-src="https://picsum.photos/id/11/10/6" style="width:100%;"></v-img>
                        <v-img src="@/assets/cona/29.jpg" lazy-src="https://picsum.photos/id/11/10/6" style="width:100%;"></v-img>
                    </v-col>
                </v-row>
            </v-lazy>
        </v-container>
        <Footer/>
    </div>
</template>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/ScrollTrigger.min.js"></script>
<script>
import Navigation from '@/components/Navigation.vue';
import Footer from '@/components/Footer.vue';
export default {
    components:{
        Navigation,
        Footer
    },
    mounted(){
        const {probica} = this.$refs

        let tl = gsap.timeline({
            scrollTrigger:{
                trigger:probica,
                start:"top 80%",
                toggleActions:"restart none none reverse"
            }
        })
        tl.from("#app > div > div.container.container--fluid > div > div",1,{opacity:0, stagger:0.4})
    }
}
</script>
<style lang="scss" scoped>
    
    .gallery {
        background: #333D51;
        &__containerRow {
            display: -ms-flexbox;
            display: flex;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            padding: 0 4px;
        }
        &__column {
            -ms-flex: 25%;
            flex: 25;
            max-width: 25%;
            padding: 4px;
            div {
                margin-top: 8px;
                vertical-align: middle;
                width: 100%;
                opacity: .85;
                &:hover {
                    opacity: 1;
                }
            }
        }
    }

    @media screen and (max-width: 600px) {
        .gallery__column {
            -ms-flex: 100%;
            flex: 100%;
            max-width: 100%;
            margin-top: -8px;
            div {
                opacity: 1;
            }
        }
    }

</style>