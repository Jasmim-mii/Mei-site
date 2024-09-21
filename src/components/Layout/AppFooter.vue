<template>
  <section id="footer">
    <div id="grid-footer">
      <div id="logo">
        <img src="@/assets/logo/logo.png" alt="" />
        <h3 class="logo">
          <a href="#">LLOUD <span>TECH</span></a>
        </h3>
        <p class="info-text">Developer Front-End</p>
        <p class="info-text">Criado por michele jasmim</p>
      </div>
      <div class="info-footer">
        <a class="title-footer" href="">Serviços</a>
        <div class="list-footer-global">
          <ul>
            <li><a class="footer-a" href="#services">Desenvolvimento de software</a></li>
            <li><a class="footer-a" href="#services">Desenvolvimento web</a></li>
            <li><a class="footer-a" href="#services">Desenvolvimento mobile</a></li>
          </ul>
        </div>
      </div>
      <div class="info-footer">
        <a class="title-footer" href="">Menu</a>
        <div class="list-footer-global">
          <ul>
            <li><a class="footer-a" href="#home">Inicio</a></li>
            <li><a class="footer-a" href="#services">Serviços</a></li>
            <li><a class="footer-a" href="#project">Projetos</a></li>
            <li>
              <a class="footer-a" href="#step-by-step">Passo a passo</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="info-footer">
        <a class="title-footer" href="">Contato</a>
        <div class="list-footer-global">
          <ul>
            <li class="footer-list">
              <Icon class="icon" icon="oui:email" /><a class="footer-a" href=""
                >lloudtech@gmail.com</a
              >
            </li>
            <li class="footer-list">
              <Icon class="icon" icon="mingcute:map-pin-line" /><a
                class="footer-a"
                href=""
                >Rua mario de araujo - Nilópolis</a
              >
            </li>
            <li class="footer-list">
              <Icon class="icon" icon="ph:instagram-logo" /><a class="footer-a" href=""
                >Instagram</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="border"></div>
    <div class="terms">
      <h5>&copy;2023 lloudtech <a href=""> - Todos os direitos são reservados</a></h5>
    </div>
  </section>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
  components: { Icon },
};
</script>

<style lang="sass" scoped>
@import "@/sass/_mixin"
@import "@/sass/_variavel"

.footer-list
  display: flex
  align-items: center
  gap: .5rem

.icon
  color: $color-text-write-200
  padding-left: .5rem
  font-size: 1.5rem
  apdding-bottom: 1rem


#footer
    background: $background-primary
    padding: 2.5rem 0 2rem 0

    @media screen and (max-width:854px)
      display: block


    #grid-footer
      display: grid
      grid-template-columns: 3fr 2fr 1fr 2fr
      padding: 0 2rem 2rem 2rem
      @media screen and (max-width:754px)
        display: block
        padding-bottom: 5rem


      #logo
        width: 50%
        @media screen and (max-width:854px)
        padding-bottom: 1.8rem

        img
          height: 2.5rem
          width: 3rem
          margin-left: 2.5rem


        h3
            @include text-transform($transform: uppercase, $weight: 600, $size: .9rem)
            padding-bottom: .7rem

            span
                color: #546E7A

            a
                color: $color-text-write-200
                font-size: 1rem
        .info-text
            @include text-transform($transform: none, $weight: 500, $size: .8rem)
            color: $color-text-write-500
      .info-footer
        @media screen and (max-width:854px)
        padding-bottom: 1.8rem

        .title-footer
          color: $color-text-write-500
          font-weight: 800
        .list-footer-global
          padding-top: .7rem
          .footer-a
            color: $color-text-write-600
            font-size: .9rem
    .border
      border-top: .1rem solid $color-text-write-500



    .terms
        color: $color-brand-200
        text-align: center
        padding: 2.5rem 0 0 0
        border-top: 1px solid $color-text-write-500
        @media screen and (max-width:854px)
        padding-bottom: 2.5rem

        a
            color: $color-text-write-500
        @media screen and (max-width:854px)
          h5
            padding-top: 1rem
</style>
