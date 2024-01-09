<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-footer">
        <Icon
          icon="mingcute:close-fill"
          class="modal-default-button"
          @click="$emit('close')"
        />
      </div>
      <div class="modal-container">
        <div class="modal-header">
          <slot> </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
  components: {
    Icon,
  },
  data() {
    return {};
  },
  computed: {
    work() {
      return this.$store.state.work;
    },
  },
};
</script>

<style lang="css" scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 80%;
  height: 90vh;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 0.8rem;
  overflow: scroll;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-default-button {
  margin-right: 2rem;
  color: #546e7a;
  font-size: 2rem;
  cursor: pointer;
}
</style>
