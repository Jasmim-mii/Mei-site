<template>
  <slot>
    <swiper
      class="swiper"
      :modules="modules"
      :slides-per-view="1"
      :space-between="10"
      :autoplay="true"
      :pagination="{ clickable: true }"
      :CenteredSlides="true"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      :grabCursor="true"
      :effect="'creative'"
      :creativeEffect="{
        prev: {
          shadow: true,
          origin: 'left',
          translate: ['-5%', 0, -200],
          rotate: [0, 100, 0],
        },
        next: {
          origin: 'right',
          translate: ['5%', 0, -200],
          rotate: [0, -100, 0],
        },
      }"
    >
      <swiper-slide class="swiper-slide" v-for="j in images" :key="j.id">
        <img class="image-slide" :src="require(`@/assets/home/${j.image}`)" />
      </swiper-slide>
    </swiper>
  </slot>
</template>

<script>
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
  name: "AppSwiper",
  components: {
    Swiper,
    SwiperSlide,
  },

  setup() {
    return {
      modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCreative],
    };
  },
  computed: {
    images() {
      return this.$store.state.images;
    },
  },
};
</script>

<style lang="sass" scoped>
.swiper
    width: 100%
    height: 100%

    .swiper-slide
        text-align: center
        display: flex
        justify-content: space-between
        align-items: center
    .swiper-slide img
        width: 100%
        height:100%
</style>
