<template>
  <div class="home page">
    <div class="left">
      <div class="content">
        <h1>MikiPh</h1>
        
        <span>
          <h1>Youtube // coffee addict</h1>
          <p>Photographer & Filmmaker. Lover of coffee and good stories. Currently residing in Smederevo, Serbia running big channel on YouTube; MNB Anime. </p>
          <v-btn to="/gallery">Gallery</v-btn>
          <v-btn to="/about">About me</v-btn>
          <v-btn to="/contact">Contact</v-btn>
        </span>

        <span class="bottom-span" style="display:block;">
          <v-btn outlined href="https://www.facebook.com/milorad.simic.509" target="blank"><i class="fab fa-facebook-f"></i></v-btn>
          <v-btn outlined href="https://www.instagram.com/miki_ph_/" target="blank"><i class="fab fa-instagram"></i></v-btn>
          <v-btn outlined href="https://www.youtube.com/channel/UCI48hhOD7fGAPKlVIyE-Zbw" target="blank"><i class="fab fa-youtube"></i></v-btn>
        </span>


      </div>
    </div>
    <div class="right">
      <v-img
          lazy-src="@/assets/miki1.jpg"
          src="@/assets/miki1.jpg"
          style="height:100vh;"
        ></v-img>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  
}
</script>
<style lang="scss" scoped>
  .home{
    overflow: hidden;
    color: white;
  }
  .left{
    width:50%;
    height: 100vh;
    display: block;
    float:left;
    background-color: #93495E;
  }
  .right{
    width: 50%;
    display: block;
    float:right;
  }
  .left > .content{
    height:100vh;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  //naslov
  .content > h1:first-child{
    font-family:'Yellowtail', cursive!important;
    font-size: 4em;
    padding-top:10px;
  }
  //centralni naslov
  #app > div > div.left > div > span:nth-child(2) > h1{
    font-size: 5em;

  }
  #app > div > div.left > div > span:nth-child(2) > p{
    font-size: 17px;
    padding: 20px 60px;
  }
  .left > div > span > a{
    color:white;
    font-family: 'Andika New Basic', sans-serif;
    background-color:#93495E!important;
    border: 2px solid #fff;
    margin: 0 10px;
    font-weight: bold;
    border-radius: 0;
  }
  #app > div > div.left > div > span:nth-child(2) > a > span{
    letter-spacing: 0.2px;
    padding: 80px 30px!important;
  }
  .left > div > span > a:hover{
    color: #93495E!important;
    background-color:#fff!important;
    border: 2px solid #93495E!important;
    transition: all 0.3s!important;
  }
  //donja navigacija
  #app > div > div.left > div > span.bottom-span{
    margin-bottom: 30px;
  }
  #app > div > div.left > div > span.bottom-span:hover button{
    color: rgb(129, 129, 129);
  }
  #app > div > div.left > div > span.bottom-span > button{
    background-color: inherit;
    color: white;
    margin-right: 0.7rem;
  }
  #app > div > div.left > div > span.bottom-span > button:hover{
    color: white;
  }
  #app > div > div.left > div > span.bottom-span > button > span > i{
    font-size: 25px;
  }


  @media screen and(max-width:768px){
    .home{
      display: flex;
      flex-direction: column;
      overflow: visible;
    }
    .left{
      width:100%;
      height: 100%;
      order:3;
    }
    .right{
      width:100%;
      height: 50vh;
      order:1;
    }
    .left > .content{
      height: 100%;
    }
    #app > div > div.right > div{
      height: 50vh!important;
    }
    //donji kontakt
    #app > div > div.left > div > span.bottom-span{
      margin-top: 10px;
    }
  }
  @media screen and(max-width:423px){
    //kontakt dugme
    #app > div > div.left > div > span:nth-child(2) > a:nth-child(5){
      margin-top:10px;
    }

  }
</style>
