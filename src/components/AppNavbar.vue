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
        <Icon icon="eva:menu-2-fill" color="white" />
      </div>
      <div v-show="menu" class="list">
        <li>
          <div class="icon_"><Icon icon="ion:home-sharp" /></div>
          <a href="#home"> Inicio</a>
        </li>
        <!-- <li>
        <a href="#about"> Sobre</a>
      </li> -->
        <li>
          <div class="icon_"><Icon icon="ic:outline-work" /></div>
          <a href="#services"> Service</a>
        </li>
        <li>
          <div class="icon_"><Icon icon="fluent:step-24-filled" /></div>
          <a href="#step-by-step"> Como Funciona</a>
        </li>

        <li>
          <div class="icon_"><Icon icon="grommet-icons:projects" /></div>
          <a href="#project"> Projetos</a>
        </li>
        <li>
          <div class="icon_">
            <Icon icon="tabler:phone-filled" />
          </div>
          <a href="#contact"> Contato</a>
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
      width: 100%
      bottom: 0rem
      display: block
      position: fixed
      z-index: 3
      left: 0
      text-align: center
      background: #000
      .btn-menu
        font-size: 1.5rem
        display: block
        cursor: pointer
        margin: .7rem 0


    .list

      @media screen and (max-width:854px)
        padding: 1rem .5rem 2rem .5rem


      li
        display: inline-block
        margin-left: 2.5rem
        position: relative
        color: #fff
        padding-top: .8rem

        .icon_
          color: #fff
          display: block
          @media screen and (min-width:854px)
            display: none

        a
          transition: .2s
          font-weight: 600
          color: $color-text-write-200
          font-size: .98rem
          @media screen and (min-width:854px)
            font-size: .8rem

          &:hover
            color: #B0BEC5
</style>
