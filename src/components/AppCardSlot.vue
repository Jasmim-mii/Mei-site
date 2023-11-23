<template>
  <div class="card">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "card",
    },
  },
};
</script>

<style lang="sass" scoped>

.card
    background: #101010
    padding: 1.5rem 1.5rem
    border-radius: .2rem
</style>
