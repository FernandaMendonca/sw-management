<template>
  <tr class="tr" v-show="show" :id="id">
    <transition name="tr-fade" />
    <td class="td"><router-link to="/detalhes">{{ titulo }}</router-link></td>
    <td class="td-remove" @click="show = !show">X</td>
  </tr>
</template>

<script>
export default {
  props: ['id', 'titulo'],
  data() {
    return {
      show: true,
    };
  },
};
</script>

<style lang="scss" scoped>

.tr {
  overflow: hidden;
}

a {
  color: #3f3f3f;
  text-decoration: none;
}

.tr-fade-enter,
.tr-fade-leave-active {
  opacity: 0;
}

.tr-fade-fade-enter-active,
.tr-fade-leave-active {
  transition: opacity 2s;
}

.td {
  border-bottom: 1px solid #e9e9e9;
  color: #3f3f3f;
  cursor: pointer;
  padding: 10px 0;
  width: 100%;
}

.td-remove {
  border: none;
  color: #ff3d00;
  cursor: pointer;
  font-size: 1.1rem;
  text-align: left;
  transition: 0.1s ease-in-out;
  padding: 5px;
  &:hover {
    transform: scale(1.3);
  }
}
</style>
