<template>
  <div class="cards">
    <div id="grid_left">
      <app-card-slot class="card">
        <div class="description-step">
          <h3>Faça seu orçamento sem compromisso</h3>
          <p class="text-info">
            Soluções sob medida, serviço personalizado, atenção aos detalhes
          </p>
        </div>
        <a href="#contact"><AppBtn btnTitle="Orçamento" /></a>
      </app-card-slot>
    </div>
    <div id="grid-right">
      <app-card-slot
        class="card"
        v-for="step_by_step in step_by_steps"
        :key="step_by_step.id"
      >
        <div class="content-step">
          <Icon class="step-icons" :icon="step_by_step.icon" />
          <h3 class="subtitle">{{ step_by_step.title }}</h3>
        </div>
        <div class="description-step">
          <p class="text-info">
            {{ step_by_step.text }}
          </p>
        </div>
      </app-card-slot>
    </div>
  </div>
</template>

<script>
import AppCardSlot from "./AppCardSlot.vue";
import AppBtn from "./AppBtn.vue";

export default {
  components: {
    // Icon,
    AppCardSlot,
    AppBtn,
  },

  setup() {
    return {};
  },
  computed: {
    step_by_steps() {
      return this.$store.state.step_by_steps;
    },
  },
};
</script>

<style lang="sass" scoped>
@import "../sass/_mixin"
@import "../sass/_variavel"

.cards
    display: grid
    grid-template-columns: 1fr 1fr
    // @include grid(20rem)
    gap: 1rem
    padding-top: .5rem
    @media screen and (max-width:976px)
      @include grid(30rem)

#grid-right
  display: grid
  grid-template-columns: 1fr 1fr
  gap: 2rem

  @media screen and (max-width:976px)
    // max-width: 85vw
    margin-top: 1rem
    display: grid
    grid-template-columns: repeat(2, 1fr)
    gap: 1rem
  @media screen and (max-width:710px)
    gap: 1rem
  @media screen and (max-width:553px)
    display: block




  .card
    background: rgba(58, 75, 83, 0.25)
    padding: 1.2rem
    height: 20rem

    @media screen and (max-width:1216px)
      margin-top: 1rem
      height: 20rem
      display: table

    .description-step
      padding-top: 1rem

      .text-info
        color: $color-text-write-600
        font-size: .8rem

    .content-step
      display: flex
      gap: 0
      padding-bottom: 1rem
      position: relative

      &::before
        content: ""
        position: absolute
        left: 0
        bottom: 0
        background: $color-brand-500
        width: 80%
        height: .2rem

      .step-icons
        color:$color-text-write-200
        font-size: 2rem

      h3
        color:$color-text-write-200
        padding-bottom: .8rem
        @include text-transform($transform: uppercase, $weight: 600, $size: .8rem)


#grid_left
  grid-template-columns: 1fr 1fr
  gap: 2rem
  align-content: center

  .card

    background: rgba(58, 75, 83, 0.5)
    padding: 1.2rem
    display: table
    @media screen and (max-width:976px)
      margin-top: 1rem
      height: 15rem


    .description-step

      h3
        color: $color-text-write-600

      .text-info
        color: $color-text-write-600


    .content-step
      display: flex
      gap: 0
      padding-bottom: 1rem
      position: relative

      &::before
        content: ""
        position: absolute
        left: 0
        bottom: 0
        background: $color-brand-500
        width: 80%
        height: .2rem

      .step-icons
        color:$color-text-write-200
        font-size: 2rem

      h3
        color:$color-text-write-200
        padding-bottom: .8rem
        @include text-transform($transform: uppercase, $weight: 600, $size: .8rem)
</style>
