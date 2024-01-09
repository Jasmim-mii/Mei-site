<template>
  <section id="footer">
    <div id="logo">
      <h3 class="logo">
        <a href="#">Michele <span>Jasmim</span></a>
      </h3>
      <p class="info-text">Developer Front-End</p>
      <p class="info-text">Criado por michele jasmim</p>
    </div>
    <div class="terms">
      <h5>&copy;2023 michelejasmim <a href=""> - Todos os direitos são reservados</a></h5>
    </div>
    <div></div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
@import "../sass/_mixin"
@import "../sass/_variavel"

section
    padding: 2rem 3.5rem
#footer
    display: flex
    align-items: end
    justify-content: space-between
    background: $background-primary
    gap: 11rem
    @media screen and (max-width:854px)
      display: block
      padding-bottom: 5rem
    #logo
      width: 50%

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

    .terms
        color: $color-brand-200

        a
            color: $color-text-write-500
        @media screen and (max-width:854px)
          h5
            padding-top: 1rem
</style>
>
