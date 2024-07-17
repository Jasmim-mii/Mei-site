<template>
  <AppNavbar />
  <section id="home">
    <div class="content">
      <!-- <h2 class="">Desenvolvedora <span>Front-end</span></h2> -->
      <h2 class="title">
        construindo um mundo de possibilidades através da <span>inovação</span>
      </h2>

      <p class="text-info">
        Criar sites profissionais, blogs, landing pages funcionais e interfaces atraentes.
      </p>

      <app-btn btnTitle="Entre em contato" />
    </div>
    <div class="image-bg">
      <AppSwiperSlot />
    </div>
  </section>
  <div class="skill-card">
    <app-skill-swiper />
  </div>
  <section id="services">
    <div class="content-info">
      <div class="description-info">
        <h3 class="text-description">Desenvolvimento web com atenção no designer</h3>
        <p class="text-info">
          Meu objetivo é transformar conceitos em realidade por meio de um design
          cuidadosamente elaborado e uma implementação eficiente.
        </p>
      </div>
      <div class="container-card">
        <div class="card-none">
          <div class="card-info">
            <p class="text-info">
              Soluções sob medida, serviço personalizado, atenção aos detalhes
            </p>
          </div>
          <a href="#contact"><AppBtn btnTitle="Entre em contato" /></a>
        </div>
        <div class="cards" v-for="s in service" :key="s.id">
          <div class="icon">
            <font-awesome-icon class="icons before-icon" :icon="s.icon" />
          </div>
          <div class="card-info">
            <h3 class="subtitle">{{ s.title }}</h3>
            <p class="text-info">
              {{ s.text }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="step-by-step">
    <div class="container-step-by-step">
      <div class="description">
        <h2 class="title">Como funciona</h2>
        <p class="text-info">
          Conheça o passo a passo o desenvolvimento de um projeto web
        </p>
      </div>
      <div class="cards">
        <app-operations />
      </div>
    </div>
  </section>
  <section id="project">
    <div class="container-title">
      <h2 class="title">Conheça meus projetos</h2>
    </div>
    <div class="container-card">
      <app-card-slot class="cards-project" v-for="w in work" :key="w.id">
        <img class="img-fluid" :src="require(`@/assets/work/${w.img}`)" />

        <div class="content-project">
          <div class="description-project">
            <a @click="w.showCard = true"
              ><h4 class="link">{{ w.title }}</h4></a
            >

            <p class="link">{{ w.type }}</p>
            <a :href="w.href" target="_blank">
              <small class="link">Visitar site</small>
            </a>
          </div>
          <div class="lenguage-project">
            <div v-for="(i, index) in w.linguagem" :key="index">
              <Icon class="link" :icon="i" />
            </div>
          </div>
        </div>
        <app-pop-up v-if="w.showCard" @close="w.showCard = false">
          <div class="headerModal">
            <div class="imgModal">
              <img :src="require(`@/assets/work/${w.img}`)" />
            </div>
            <div class="textModal">
              <p class="smallModal">{{ w.type }}</p>
              <h3>{{ w.title }}</h3>
              <p>
                {{ w.description }}
              </p>
            </div>
          </div>
          <div class="descriptionModal">
            <div class="mockupModal">
              <img :src="require(`@/assets/work/${w.img}`)" />
            </div>
            <div class="mockupModal">
              <img :src="require(`@/assets/work/${w.img2}`)" />
            </div>
          </div>
          <div class="prototypeModal">
            <img :src="require(`@/assets/work/${w.img3}`)" />
          </div>
        </app-pop-up>
      </app-card-slot>
    </div>
  </section>

  <section id="faq">
    <div class="container">
      <div class="faq-content">
        <h2 class="title">Dúvidas frequêntes</h2>
        <p class="text-info">Sua dúvida também pode estar aqui</p>
      </div>
      <div class="faq-card">
        <app-faq />
      </div>
    </div>
  </section>
  <section id="contact">
    <h2 class="title">Entre em contato</h2>
    <app-contact />
  </section>
  <app-footer />
</template>

<script>
import AppBtn from "./components/AppBtn.vue";
import AppCardSlot from "./components/AppCardSlot.vue";
import AppNavbar from "./components/AppNavbar.vue";
import AppSwiperSlot from "./components/AppSwiperSlot.vue";
import { Icon } from "@iconify/vue";
import AppFooter from "./components/AppFooter.vue";
import AppSkillSwiper from "./components/AppSkillSwiper.vue";
import AppOperations from "./components/AppOperations.vue";
import AppFaq from "./components/AppFaq.vue";
import AppPopUp from "./components/AppPopUp.vue";
import AppContact from "./components/AppContact.vue";

export default {
  name: "App",
  components: {
    AppNavbar,
    AppBtn,
    AppSwiperSlot,
    AppCardSlot,
    Icon,
    AppFooter,
    AppSkillSwiper,
    AppOperations,
    AppFaq,
    AppPopUp,
    AppContact,
  },
  data() {
    return {};
  },
  methods: {
    //mouseover
    primeiro(icon1, e) {
      e.preventDefault();
      this.multiploevento1 = icon1;
    },
    segundo(none, e) {
      e.preventDefault();
      this.multiploevento = none;
    },
  },
  computed: {
    images() {
      return this.$store.state.images;
    },
    service() {
      return this.$store.state.service;
    },
    work() {
      return this.$store.state.work;
    },
  },
};
</script>

<style lang="sass" scoped>
@import "sass/_mixin"
@import "sass/_variavel"


#home
  min-height: 70vh
  display: grid
  grid-template-columns: 1fr 1fr
  align-items: center
  gap: 2rem
  background: $background-primary
  position: relative
  padding: 0 0 0 3.5rem
  @media screen and (max-width:854px)
    padding: 0 3.5rem 0 3.5rem
    text-align: center
    display: flex
    align-items: center


  &::before
    content: ""
    position: absolute
    left: 0
    top: 0
    background: linear-gradient(90deg, #000 49.5%, rgba(0, 0, 0, .0) 99%, rgba(0, 0, 0, 0) 99.9%)
    width: 100%
    height: 100%
    z-index: 1

    @media screen and (max-width:854px)
      background: linear-gradient(90deg, #000 0.5%, rgba(0, 0, 0, .5) 100%, rgba(0, 0, 0, .5) 50.9%)


  .social
    position: relative
    display: block
    z-index: 1

    .icon
      cursor: pointer
      padding: .5rem 0
      font-size: 1.3rem
      color: $color-text-write-500
      transition: .3s
      &:hover
        color: $color-brand-200

  .content
    z-index: 1
    display: block
    width: 80%
    @media screen and (max-width:854px)
        width: 100%
        text-align: center

    .title
      color: $color-text-write-200
      @include text-transform($transform: uppercase, $weight: 700, $size: 1.5rem)
      line-height: 1.3

      @media screen and (max-width:620px)
        font-size: 1rem


      span
        color: $color-brand-200


    .text-info
      padding: .8rem 0 2rem 0
      color: $color-text-write-500



  .image-bg
    height: 70vh
    width: 45rem
    text-align: center
    z-index: 0

    @media screen and (max-width:854px)
      position: absolute
      top: 0
      left: 0
      width: 100%




#services
.content-info
  @media screen and (max-width:620px)
    display: block

  .container-card
    display: grid
    grid-template-columns: repeat(2,1fr)
    gap: 1rem
    @media screen and (max-width:620px)
      display: grid
      grid-template-columns: repeat(auto-fit, minmax(10rem, 2fr))
      gap: .2rem





    .card-none
      width: 20.6rem
      text-align: center
      height: 16rem
      border-radius: .3rem
      transition: .5s
      padding: 3.8rem 2rem
      background: $color-brand-200
      @media screen and (max-width:1028px)
        width: 100%
        display: table
        height: 100%
        padding: 1.5rem 1rem
        margin: 0



      .text-info
        color: $color-text-write-200

    .cards
      width: 20.6rem
      height: 16rem
      padding: 2.5rem 2rem
      border-radius: .3rem
      transition: .5s
      border: .1rem solid $color-text-write-500
      position: relative
      transition: .5s
      @media screen and (max-width:1028px)
        width: 100%
        height: 100%
        padding: 1.5rem 1rem
      .subtitle
        @media screen and (max-width:620px)
          font-size: .6rem





      &:hover
        background: $color-brand-200
        border: .1rem solid $color-brand-200
        z-index: 1
        .icons
          color: $color-text-write-200
        .card-info
          h3, p
            color: $color-text-write-200

        .before-icon
          font-size: 8rem
          position: absolute
          top: 1rem
          left: 3rem
          opacity: .1
          color: #fff
          z-index: 0
          transition: .4s
      .icons
        font-size: 2rem
        color: $color-text-black-200
      .card-info
        h3
          padding-top: 2rem
          padding-bottom: .1rem
        p
          color: $color-text-black-200

#project

  .container-title
    width: 50%
    p
      padding-top: 1.5rem
  .container-card
    @include grid($val:15rem)
    gap: 1rem
    padding-top: 3.5rem
    height: 100%

    .cards-project
      position: relative
      padding: 0
      height: 15rem
      overflow: hidden

      .img-fluid
        width: 100%
        height: 100%
        position: absolute
        transition: all 0.2s ease-In-out

      &:hover
        .img-fluid
          transform: scale(1.1)

      .content-project
        display: flex
        justify-content: space-between
        align-items: end
        z-index: 1
        position: absolute
        background: rgba(0, 0, 0, .3)
        width: 100%
        height: 100%

        .description-project
          background: rgba(0, 0, 0, .6)
          padding: 1rem
          h4
            color: #FFF
            @include text-transform($transform: uppercase, $weight: 600, $size: .8rem )
          p
            color: #eee
            @include text-transform($transform: none, $weight: 400, $size: .8rem )

        .lenguage-project
          color: #FFF
          padding-right: .5rem
          padding-bottom: .5rem

    .headerModal
      @include grid($val: 15rem)

      .imgModal
        width: 100%


        img
          width: 20rem
          height: 15rem
          @media screen and (max-width:976px)
            width: 90%
      .textModal
        .smallModal
          color: $color-brand-500
          font-size: .75rem
          text-transform: uppercase
          font-weight: 600
        h3
          padding-bottom: 2rem
        p
          font-size: .9rem
    .descriptionModal
      display: grid
      grid-template-columns: 1fr 1fr
      justify-content: center
      .mockupModal
        background: #000
        width: 95%
        margin-top: 4rem
        img
          width: 100%
          height: 100%
    .prototypeModal
      margin: 5rem auto 0 auto
      width: 95%
      img
        width: 100%
        height: 100%


#step-by-step
  background: $background-primary

  .container-step-by-step
    position: relative
  .description
    width: 50%
    @media screen and (max-width:600px)
      width: 100%


    h2
      padding-bottom: 1.5rem
      color: $color-text-write-200
    p
      color: $color-text-write-600

  .cards
    @include grid(20rem)
    gap: 3rem
    padding-top: 3rem
    @media screen and (max-width:976px)
      @include grid(60rem)


#skill
  .description
    width: 50%
    @media screen and (max-width:600px)
      width: 100%
    .text-info
      padding-top: 1.5rem

#faq
  .container
    @include grid(10rem)
    gap: 2rem
    @media screen and (max-width:854px)
      display: block
    .faq-content
      .text-info
        padding-top: 1.5rem

#contact

    .icon
      background: #eee
      padding: 2rem
      text-align: center
      width: 100%
      color: $color-brand-500
      font-size: 2.5rem
      box-shadow: 0rem 0rem 1rem rgb(0, 0 ,0, 0.1 )
      border-radius: .2rem
      transition: all 0.2s ease-In-out

      &:hover
        transform: scale(1.1)
</style>
