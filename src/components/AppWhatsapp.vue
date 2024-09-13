<template>
  <div v-if="showButton" class="whatsapp-button">
    <a href="https://wa.me/21972028132" target="_blank">
      <Icon icon="logos:whatsapp-icon" />
    </a>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
  components: {
    Icon,
  },
  data() {
    return {
      showButton: false,
    };
  },
  methods: {
    handleScroll() {
      // Tamanho do header que você deseja que o scroll passe para mostrar o botão
      const headerHeight = 200; // ajuste esse valor conforme o tamanho real do header

      // Verifica a posição do scroll e exibe o botão se passar do header
      this.showButton = window.scrollY > headerHeight;
    },
  },
  mounted() {
    // Adiciona o evento de scroll quando o componente é montado
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    // Remove o evento de scroll quando o componente é destruído
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang="sass" scoped>
.whatsapp-button
  position: fixed
  bottom: 30px
  right: 20px
  color: white
  padding: 10px 15px
  border-radius: 50px
  text-align: center
  font-size: 3.5rem
  z-index: 1000
  transition: opacity 0.3s ease
</style>
