<template>
  <div class="container-faq">
    <div class="card-faq" v-for="i in faq" :key="i.id">
      <div @mousemove="i.isActive = true" @mouseout="i.isActive = false">
        <app-card-slot
          class="app-slot-faq"
          @mouseenter="i.showCard = true"
          @mouseleave="i.showCard = false"
        >
          <div :class="{ active: i.isActive }">
            <p>{{ i.title }}</p>
          </div>
        </app-card-slot>
        <div class="card-slot-hide" v-if="i.showCard">
          <p>{{ i.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppCardSlot from "./AppCardSlot.vue";
export default {
  components: {
    AppCardSlot,
  },
  data() {
    return {};
  },
  computed: {
    faq() {
      return this.$store.state.faq;
    },
  },
};
</script>

<style lang="sass" scoped>
@import "../sass/_mixin"
@import "../sass/_variavel"


.container-faq
  width: 100
  display: block


.card-faq
    background: #fff


.app-slot-faq
  background: #fff
  position: relative
  margin-top: 1rem
  box-shadow: 0rem 0rem .8rem rgba(0, 0, 0, 0.3)
  z-index: 0
  cursor: pointer
  animation: borderAnime
  transition: .2s


.card-slot-hide
  background: #fff
  z-index: 99
  padding: 1rem 2rem


.active::before
  position: absolute
  content: ""
  width: 100%
  height: .1rem
  top: 0
  left: 0
  background: $color-brand-200
  border-radius: 0.1rem 0 0 0.1rem
</style>
