<template>
  <div>
    <a class="btn" href="#contact">{{ btnTitle }}</a>
  </div>
</template>

<script>
export default {
  props: {
    btnTitle: {
      type: String,
    },
  },
};
</script>

<style lang="sass" scoped>
@import "../sass/_mixin"
@import "../sass/_variavel"

.btn
  display: inline-block
  padding: 1rem 1.8rem
  border: .1rem solid $color-text-write-200
  font-size: .8rem
  color: #f1f1f1
  border-radius: .2rem
  text-transform:  uppercase
  transition: .5s

  &:hover
    color:  $color-text-black-200
    background: $color-text-write-200
</style>
>
