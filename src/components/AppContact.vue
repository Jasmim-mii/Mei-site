<template>
  <div id="container-contact">
    <div class="design-icon">
      <div class="icon-contact">
        <a
          href="https://www.linkedin.com/in/michele-jasmim-a30a3321a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon class="icon" icon="basil:linkedin-solid" />
        </a>
      </div>
    </div>
    <div class="design-icon">
      <div class="icon-contact">
        <a href="https://github.com/Jasmim-mii" target="_blank" rel="noopener noreferrer">
          <Icon class="icon" icon="entypo-social:github" />
        </a>
      </div>
    </div>
    <div class="design-icon">
      <div class="icon-contact">
        <a
          href="https://www.behance.net/michellejasmim"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon class="icon" icon="fontisto:behance" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
  components: { Icon },
};
</script>

<style lang="sass" scoped>
@import "../sass/_mixin"
@import "../sass/_variavel"

#container-contact
    padding: 4rem 0
    @include grid($val:5rem)
    gap: 1rem
    align-items: center

    .design-icon
        display: flex
        justify-content: center

        .icon-contact
            display: flex
            align-items: center
            justify-content: center
            width: 100%
            height: 5rem
            border-radius: 0.5rem
            text-align: center
            background: $background-primary
            .icon
                color: $background-secondy
                font-size: 2rem
</style>
>
