<template>
  <swiper
    class="swiper"
    :modules="modules"
    :slides-per-view="4"
    :space-between="10"
    :autoplay="true"
    :CenteredSlides="true"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    :grabCursor="true"
  >
    <swiper-slide
      class="card swiper-slide"
      v-for="step_by_step in step_by_steps"
      :key="step_by_step.id"
    >
      <div class="content-skill">
        <!-- <Icon class="skill-icons" :icon="step_by_step.icon" /> -->
        <h3 class="subtitle">{{ step_by_step.title }}</h3>
      </div>
      <div class="description-skill">
        <p class="text-info">
          {{ step_by_step.text }}
        </p>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
// import { Icon } from "@iconify/vue";
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css/effect-creative";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCreative,
} from "swiper";
export default {
  components: {
    Swiper,
    SwiperSlide,
    // Icon,
  },
  setup() {
    return {
      modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCreative],
    };
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
.swiper
    width: 100%
    height: 100%

    .swiper-slide
        margin: 0 2rem
    .swiper-slide img
        width: 100%
        height:100%
.card
    // background: rgba(58, 75, 83, 0.25)
    display: table
    .description-skill
        padding-top: 1rem
        .text-info
            color: $color-text-write-600


    .content-skill
        display: flex
        gap: 2rem
        padding-bottom: 1rem
        position: relative


        &::before
            content: ""
            position: absolute
            left: 0
            bottom: 0
            background: $color-brand-500
            width: 100%
            height: .2rem

        .skill-icons
            color:$color-text-write-200
            font-size: 2rem

        h3
            color:$color-text-write-200
            padding-bottom: .8rem
            @include text-transform($transform: uppercase, $weight: 600, $size: .8rem)
</style>
