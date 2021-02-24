<template>

  <div class="about">
      <Navigation/>
      <v-img src="../assets/cona/10.jpg" height="800">
        <div class="wave wave1" ref="slika"></div>
      </v-img>

      <v-container style="max-width:75.25rem"> 
        <v-row class="rowAbout" >
          <v-col sm="12" md="6" offset-md="3">
            <h1>My Story</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, eveniet. Assumenda, voluptate a illo sapiente, voluptatem quibusdam perferendis dolore repellendus saepe cum vero quia non eligendi? Tenetur sunt quos aliquam!</p>
          </v-col>
        </v-row>

        <v-row class="rowAbout" ref="prviOdeljak">
          <v-col cols="12" md="6" class="d-flex justify-center flex-column align-center">
            <h2>Pharagraph header</h2>
            <p class="text-center text-md-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt similique explicabo nobis! Magnam ratione eum ut voluptatibus odit quod, quisquam, eius dignissimos eos architecto libero nisi sed quam itaque consequuntur.</p>
          </v-col>
          <v-col cols="12" md="6">
            <v-lazy height="400"><v-img src="@/assets/cona/12.jpg" style="border-radius:4%;"></v-img></v-lazy>
          </v-col>
        </v-row>

        <v-row class="rowAbout" ref="drugiOdeljak">
          <v-col cols="12" md="6">
            <v-lazy height="400"><v-img src="@/assets/cona/3.jpg" style="border-radius:4%;"></v-img></v-lazy>
          </v-col>
          <v-col cols="12" md="6" class="d-flex justify-center flex-column align-center">
            <h2>Paragraph header</h2>
            <p class="text-center text-md-left">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi architecto consectetur, voluptate, distinctio velit atque eveniet nihil consequatur asperiores veritatis iste cupiditate, at exercitationem laboriosam placeat! Saepe tenetur itaque laborum?</p>
          </v-col>
        </v-row>

        <v-row class="rowAbout">
          <v-col cols="12" md="6" offset-md="3">
            <h3  class="font-weight-black">Ph0toGGraphYY iS mY PasSi0NnN</h3>
          </v-col>
        </v-row>

        <v-row class="rowAbout" ref="treciOdeljak">
          <v-col cols="12" md="6" class="d-flex justify-center flex-column align-center">
            <h2>Paragraph header</h2>
            <p class="text-center text-md-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur fugit reprehenderit magnam fugiat animi! Animi eos deserunt nam? Omnis natus sapiente ut assumenda accusamus, blanditiis magnam accusantium libero nulla in.</p>
          </v-col>
          <v-col cols="12" md="6">
            <v-lazy height="400"><v-img src="@/assets/cona/5.jpg" style="border-radius:4%;"></v-img></v-lazy>
          </v-col>
        </v-row>
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
    const {slika} = this.$refs
    const {prviOdeljak} = this.$refs
    const {drugiOdeljak} = this.$refs
    const {treciOdeljak} = this.$refs

    let tl = gsap.timeline({
      scrollTrigger:{
          trigger:slika,
          start:"top 80%",
          toggleActions:"restart none none reverse"
      }
    })
    tl.from("#app > div > div.container > div:nth-child(1)",1,{opacity:0,y:-50})

    let tl2 = gsap.timeline({
      scrollTrigger:{
          trigger:prviOdeljak,
              //ELEMENT //SKROLER
          start:"top 90%",
          toggleActions:"restart none none reverse"
      }
    })
    tl2.from("#app > div > div.container > div:nth-child(2) > div.d-flex.justify-center.flex-column.align-center.col-md-6.col-12",0.75,{opacity:0,x:-50})
    tl2.from("#app > div > div.container > div:nth-child(2) > div:nth-child(2)",0.75,{opacity:0,x:50},"=-0.75")

    let tl3 = gsap.timeline({
      scrollTrigger:{
          trigger:drugiOdeljak,
              //ELEMENT //SKROLER
          start:"top 90%",
          toggleActions:"restart none none reverse"
      }
    })
    tl3.from("#app > div > div.container > div:nth-child(3) > div:nth-child(1)",0.75,{opacity:0,x:-50})
    tl3.from("#app > div > div.container > div:nth-child(3) > div.d-flex.justify-center.flex-column.align-center.col-md-6.col-12",0.75,{opacity:0,x:50},"=-0.75")

    let tl4 = gsap.timeline({
      scrollTrigger:{
          trigger:treciOdeljak,
              //ELEMENT //SKROLER
          start:"top 90%",
          toggleActions:"restart none none reverse"
      }
    })
    tl4.from("#app > div > div.container > div:nth-child(5) > div.d-flex.justify-center.flex-column.align-center.col-md-6.col-12",0.75,{opacity:0,x:-50})
    tl4.from("#app > div > div.container > div:nth-child(5) > div:nth-child(2)",0.75,{opacity:0,x:50},"=-0.75")

  }
}
</script>
<style lang="scss" scoped>
  *{
    color:white;
  }
  //na 25% min height za container da gurne footer dole
  #app > div > div.container{
    min-height:100vh;
  }
  .about{
    // background: linear-gradient(150deg, rgb(255, 251, 220) 50%,rgb(241, 237, 179) 30%);
    background: linear-gradient(150deg, #93495E 50%,#333D51 30%);
    // background: rgb(255, 251, 220)!important;
  }
  #app > div > div.v-image.v-responsive.theme--light{
    height:100vh;
  }
  #app > div > div.v-image.v-responsive.theme--light > div.v-responsive__content > h1 > a{
    position:absolute;
    top:90%;
    left:50%;
    transform: translate(-50%,-90%);
    font-size: 5em;
    color: white;
    font-family: 'Andika New Basic', sans-serif;
    letter-spacing: 2px;
  }
  #app > div > div.v-image.v-responsive.theme--light > div.v-responsive__content > h1 > a i{
    font-size: 1em;
  }
  @media screen and(max-width:425px){
    #app > div > div.v-image.v-responsive.theme--light > div.v-responsive__content > h1 > a{
      font-size: 2em;
      letter-spacing: 2px;
    }
  }
  //tekst ispod slike
  #app > div > div.container > div > div > h1{
    font-size: 3.125rem;
    line-height: 1.3;
    margin: 0 auto 1.75rem;
    letter-spacing: 3px;
  }
  #app > div > div.container > div > div > p{
    font-size: 1.125rem;
    font-weight: 400;
    line-height:1.5;
  }
  //rows
  .rowAbout:not(:first-child){
    margin-bottom: 80px;
  }
  .rowAbout:first-child{
    margin-bottom:50px;
  }
  //h2
  .container > div > div > h2{
    font-size: 1.625rem;
    padding: 10px 0;
    letter-spacing: 2px;
  }
  //p
  #app > div > div.container > div > div.d-flex.justify-center.flex-column.align-center.col-md-6.col-12 > p{
    font-size: 1rem;
  }
  //h3
  .container h3{
    font-size:  1.625rem;
    letter-spacing: 3px;
    // color: rgb(22, 155, 126) ;
    color: white;
  }
  @media screen and(max-width:1200px){
    .container{
      max-width: 80%!important;
    }
  }
  @media screen and(max-width:960px){
    .rowAbout{
      margin-bottom:10px!important;
    }
    .container{
      max-width: 75%!important;
    }
  }
  @media screen and(max-width:600px){
    .container{
      max-width: 100%!important;
    }
  }
  @media screen and(max-width:450px){
    //height img div
    #app > div > div.container > div:nth-child(3) > div:nth-child(1) > div{
      height: 270px!important;
    }
    #app > div > div.container > div:nth-child(2) > div:nth-child(2) > div{
      height: 270px!important;
    }
    #app > div > div.container > div:nth-child(5) > div:nth-child(2) > div{
      height: 270px!important;
    }
  }



  //animacija
  .wave{
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 80px;
      background: url('../assets/waveRoze.png');
      background-size: 1500px 100px;
  }
  
  .wave.wave1{
      animation: animate 30s linear infinite;
      z-index: 1000;
      opacity: 1;
      animation-delay: 0s;
      bottom:0;
      color:red;
  }
  @keyframes animate {
      0%{
      background-position-x: 0;
      }
      100%{
      background-position-x: -1000px;
      }
  }

  // @media screen and(min-height:3500px) {
  //   .footer{
  //     position:absolute;
  //     bottom:0;
  //     width: 100%;
  //   }
  // }

</style>
