<template>
  <div
    class="skill-box"
    v-for="skills in skill"
    :key="skills.id"
    @mouseenter="skills.showCard = skills.text"
    @mouseleave="skills.showCard = skills.multiploevento1"
  >
    <div class="cards-skill">
      <app-card-slot class="card">
        <h3>{{ skills.title }}</h3>
        <Icon class="skill-icons" :icon="skills.icon" />
      </app-card-slot>
    </div>

    <div class="description-skill">
      <p>
        {{ skills.showCard }}
      </p>
    </div>
  </div>
</template>

<script>
import AppCardSlot from "./AppCardSlot.vue";
import { Icon } from "@iconify/vue";
export default {
  name: "AppSwiper",
  components: { AppCardSlot, Icon },
  data() {
    return {
      skill: [
        {
          id: 1,
          icon: "ant-design:html5-filled",
          showCard: "",
          multiploevento1: "",
          title: "html5",
          text:
            "Desenvolvo sites profissionais, blogs, portfólios, landing pages e e-commerce",
        },

        {
          id: 2,
          icon: "typcn:css3",
          showCard: "",
          multiploevento1: "",
          title: "css3",
          text:
            "Desenvolvo sites profissionais, blogs, portfólios, landing pages e e-commerce",
        },
        {
          id: 3,
          icon: "fa6-brands:sass",
          showCard: "",
          multiploevento1: "",
          title: "Sass",
          text:
            " Desenho interface de forma que ela seja clara, objetiva e principalmente intuitiva para o usuário.",
        },
        {
          id: 4,
          icon: "simple-icons:tailwindcss",
          showCard: "",
          multiploevento1: "",
          title: "Sass",
          text:
            " Desenho interface de forma que ela seja clara, objetiva e principalmente intuitiva para o usuário.",
        },
        {
          id: 5,
          icon: "simple-icons:tailwindcss",
          showCard: "",
          multiploevento1: "",
          title: "Tailwind",
          text:
            " Desenho interface de forma que ela seja clara, objetiva e principalmente intuitiva para o usuário.",
        },
        {
          id: 5,
          icon: "fluent:javascript-24-regular",
          showCard: "",
          multiploevento1: "",
          title: "javascript",
          text:
            " Desenho interface de forma que ela seja clara, objetiva e principalmente intuitiva para o usuário.",
        },
        {
          id: 6,
          icon: "devicon-plain:vuetify",
          showCard: "",
          multiploevento1: "",
          title: "vuetify",
          text:
            " Desenho interface de forma que ela seja clara, objetiva e principalmente intuitiva para o usuário.",
        },
        {
          id: 7,
          icon: "fa-brands:vuejs",
          showCard: "",
          multiploevento1: "",
          title: "vuejs",
          text:
            " Desenho interface de forma que ela seja clara, objetiva e principalmente intuitiva para o usuário.",
        },
        {
          id: 8,
          icon: "tabler:brand-cypress",
          showCard: "",
          multiploevento1: "",
          title: "cypress",
          text:
            " Desenho interface de forma que ela seja clara, objetiva e principalmente intuitiva para o usuário.",
        },
        {
          id: 9,
          icon: "grommet-icons:figma",
          showCard: "",
          multiploevento1: "",
          title: "figma",
          text:
            " Desenho interface de forma que ela seja clara, objetiva e principalmente intuitiva para o usuário.",
        },
      ],
    };
  },
  methods: {
    // primeiro(skill=text, e) {
    //   e.preventDefault();
    //   this.multiploevento1 = skill;
    // },
  },
};
</script>

<style lang="sass" scoped>
@import "../sass/_mixin"
@import "../sass/_variavel"

.skill-box
  display: grid
  grid-template-columns: 1fr 1fr
  gap: 1rem
  .cards-skill
    display: flex
    gap: 1rem

  .card
    background: $color-brand-200


    .skill-icons
      color:$color-text-write-200
      font-size: 2rem
    h3
      color:$color-text-write-200
      padding-bottom: .8rem
      @include text-transform($transform: uppercase, $weight: 600, $size: .8rem)
</style>
