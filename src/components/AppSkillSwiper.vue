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
    <swiper-slide class="card swiper-slide" v-for="skills in skill" :key="skills.id">
      <div class="content-skill">
        <Icon class="skill-icons" :icon="skills.icon" />
        <h3 class="subtitle">{{ skills.title }}</h3>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Icon } from "@iconify/vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css/effect-creative";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
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
    Icon,
  },
  setup() {
    return {
      modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCreative],
    };
  },
  computed: {
    skill() {
      return this.$store.state.skill;
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
        margin: 2rem 2rem 0rem 2rem

    .swiper-slide img
        width: 100%
        height:100%
.card

    .content-skill
        display: flex
        gap: 2rem
        padding-bottom: 1rem
        position: relative
        text-align: center

        // &::before
        //     content: ""
        //     position: absolute
        //     left: 0
        //     bottom: 0
        //     background: $color-brand-500
        //     width: 100%
        //     height: .2rem

        .skill-icons
            color: $color-text-black-200
            font-size: 2rem

        .subtitle
            color: $color-text-black-500
            padding-bottom: .8rem
            @include text-transform($transform: uppercase, $weight: 600, $size: 1rem)
</style>
