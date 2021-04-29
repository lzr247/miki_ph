<template>
  <div class="home">

    <div class="home__contentLeft">
      <div class="home__contentLeftMain">
        <h2>MikiPh</h2>
        <span>
          <h1>Youtube // coffee addict</h1>
          <p>Photographer & Filmmaker. Lover of coffee and good stories. Currently residing in Smederevo, Serbia running big channel on YouTube; MNB Anime. </p>
          <v-btn to="/gallery">Gallery</v-btn>
          <v-btn to="/about">About me</v-btn>
          <v-btn to="/contact">Contact</v-btn>
        </span>
        <span class="home__spanBottom">
          <v-btn href="https://www.facebook.com/milorad.simic.509" target="blank"><i class="fab fa-facebook-f"></i></v-btn>
          <v-btn href="https://www.instagram.com/miki_ph_/" target="blank"><i class="fab fa-instagram"></i></v-btn>
          <v-btn href="https://www.youtube.com/channel/UCI48hhOD7fGAPKlVIyE-Zbw" target="blank"><i class="fab fa-youtube"></i></v-btn>
        </span>
      </div>
    </div>

    <div class="home__contentRight">
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

  .home {
    // overflow: hidden;
    color: white;
    &__contentLeft {
      width: 50%;
      height: 100vh;
      display: block;
      float: left;
      background-color: #93495e;
    }
    &__contentLeftMain {
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        h2 {
          font-family: 'Yellowtail', cursive!important;
          font-size: 4em;
          padding-top: 10px;
        }
        span {
          h1 {
            font-size: 5em;
          }
          p {
            font-size: 17px;
            padding: 20px 60px;
          }
          a {
            color: white;
            font-family: 'Andika New Basic', sans-serif;
            background-color: #93495e!important;
            border: 2px solid #fff;
            margin: 10px 10px 0 10px;
            font-weight: bold;
            border-radius: 0;
            &:hover {
              color: #93495e!important;
              background-color: #fff!important;
              border: 2px solid #fff;
              transition: all .2s;
            }
          }
        }
    }
    &__spanBottom{
      display: block;
      margin-bottom: 30px;
      &:hover a{
        color: rgb(129, 129, 129)!important;
        border-color: rgb(129, 129, 129)!important;
      }
      a {
        background-color: inherit;
        color: white;
        margin-right: .7rem;
        transition: all .2s;
        &:hover {
          color: white!important;
          border-color: #fff!important;
        }
        i {
          font-size: 25px;
        }
      }
    }
    &__contentRight {
      width: 50%;
      display: block;
      float: right;
    }
  }

  @media screen and (max-width: 768px) {
    .home {
      display: flex;
      flex-direction: column;
      overflow: visible;
      &__contentLeft {
        width: 100%;
        height: 100%;
        order: 2;
      }
      &__contentLeftMain {
        height: 100%;
      }
      &__spanBottom {
        margin-top: 10px;
      }
      &__contentRight {
        width: 100%;
        height: 50vh;
        order: 1;
        div {
          height: 50vh!important;
        }
      }
    }
  }

  // @media screen and (max-width: 423px) {
  //   .home__contentLeftMain > span:nth-child(2) > a:nth-child(5) {
  //     margin-top: 10px;
  //   }
  // }
  
</style>
