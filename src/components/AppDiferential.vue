<template>
  <div>
    <AppCardSlot class="container-differential">
      <div
        v-for="differentials in differential"
        :key="differentials.id"
        class="card-differential"
      >
        <div class="icon-differential">
          <img
            class="img-fluid"
            :src="require(`../assets/differential/${differentials.img}`)"
          />
        </div>
        <div class="decription-differential">
          <h3 class="title-diff">{{ differentials.title }}</h3>
          <p class="text-diff">{{ differentials.text }}</p>
        </div>
      </div>
    </AppCardSlot>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    differential() {
      return this.$store.state.differential;
    },
  },
};
</script>

<style lang="sass" scoped>
@import "../sass/_mixin"
@import "../sass/_variavel"

.container-differential
    display: grid
    grid-template-columns: repeat(4, 1fr)
    gap: 1rem
    padding-top: 2rem
    @media screen and (max-width:987px)
        display: grid
        grid-template-columns: repeat(2, 1fr)
        gap: 1rem
    @media screen and (max-width:490px)
        display: block


    .card-differential
        padding: 1.5rem
        background: $color-text-black-500
        margin-top: 1rem
        border-radius: 1rem
        border: .13rem solid $color-brand-200
        .img-fluid
          width: 100%
          height: 15rem
        .icon
            color: red
            font-size: 3rem

        .decription-differential

            .title-diff
                color: $color-text-write-200
                padding-bottom: 1rem
                @include text-transform($transform: uppercase, $weight: 600, $size: .8rem)

                @media screen and (max-width:553px)
                    font-size: 1rem


            .text-diff
                color: $color-text-write-500
                font-size: .8rem
                @media screen and (max-width:553px)
                    font-size: .8rem
</style>
