<template>
  <header id="header">
    <div id="logo">
      <img src="../assets/logo.png" alt="" />
      <h3>
        <a href="#">Michele <span>Jasmim</span></a>
      </h3>
    </div>
    <nav>
      <div class="btn-menu" @click="showMenu">
        <Icon icon="ri:menu-5-fill" color="black" />
      </div>
      <div v-show="menu" class="list">
        <li class="menu_list">
          <div class="icon_"><Icon icon="ion:home-sharp" /></div>
          <a class="menu_text" href="#home"> Inicio</a>
        </li>
        <li class="menu_list">
          <div class="icon_"><Icon icon="ic:outline-work" /></div>
          <a class="menu_text" href="#services"> Service</a>
        </li>
        <li class="menu_list">
          <div class="icon_"><Icon icon="fluent:step-24-filled" /></div>
          <a class="menu_text" href="#step-by-step"> Como Funciona</a>
        </li>

        <li class="menu_list">
          <div class="icon_"><Icon icon="grommet-icons:projects" /></div>
          <a class="menu_text" href="#project"> Projetos</a>
        </li>
        <li class="menu_list">
          <div class="icon_">
            <Icon icon="tabler:phone-filled" />
          </div>
          <a class="menu_text" href="#contact"> Contato</a>
        </li>
      </div>
    </nav>
  </header>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
  components: { Icon },
  data() {
    return {
      menu: true,
    };
  },
  methods: {
    showMenu() {
      this.menu = !this.menu;
    },
  },
};
</script>

<style lang="sass" scoped>
@import "../sass/_mixin"
@import "../sass/_variavel"

#header
  display: flex
  justify-content: space-between
  padding: .8rem 3.5rem
  background: #000
  align-items: center
  @media screen and (min-width:854px)
    position: relative
    z-index: 0



  #logo
    text-align: center
    img
      height: 2.5rem
      width: 2.5rem

    h3
      text-transform: uppercase
      cursor: pointer
    a
      color: $color-text-write-200
      font-size: .8rem
    span
      color: #546E7A

  nav
    padding: 0

    .btn-menu
      display: none



    @media screen and (max-width:854px)
      width: 100vw
      display: table
      bottom: 0
      position: fixed
      z-index: 3
      left: 0
      text-align: center
      // background: #000
      .btn-menu
        font-size: 1.5rem
        display: block
        border-radius: 3rem 3rem 0 0
        cursor: pointer
        padding: .5rem 0
        background: rgba(220,220,220,0.8)
        backdrop-filter: blur(5px)
        opacity: 5
        width: 100%
        margin:  0
        z-index: 5





    .list
      display: flex
      flex-wrap: wrap
      gap: 1rem
      justify-content: center

      @media screen and (max-width:854px)
        padding: 1rem .5rem 2rem .5rem
        backdrop-filter: blur(5px)
        background: rgba(220,220,220,0.8)


      .menu_list
        margin-left: 2.5rem
        position: relative
        padding-top: .8rem
        @media screen and (max-width:854px)
          margin-left: 0.5rem


        .icon_
          color: #000
          display: block
          @media screen and (min-width:854px)
            display: none
            color: red



        .menu_text
          transition: .2s
          font-weight: 600
          color: $color-text-write-200
          font-size: .98rem

          @media screen and (max-width:854px)
            font-size: .8rem
            color: $color-text-black-500




          &:hover
            color: #B0BEC5
</style>
