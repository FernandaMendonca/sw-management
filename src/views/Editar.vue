<template>
  <section>
    <Menu />
    <div class="edit__container">
      <ListaCard />
      <div class="edit__form">
        <Formulario/>
      </div>
      <figure class="edit__fig">
        <img class="edit__img" src="../assets/img/r2d2.png" alt="R2D2" />
      </figure>
    </div>
  </section>
</template>
<script lang="ts">
import Menu from '@/components/menu/Menu.vue';
import ListaCard from '@/components/cards/Cards.vue';
import Formulario from '@/components/form/Formulario.vue';

export default {
  components: {
    Menu,
    ListaCard,
    Formulario,
  },
};
</script>

<style lang="scss" scoped>
.edit__container {
  display: flex;
}

.edit__img {
  left: 76vw;
  height: 256px;
  position: fixed;
  top: 70vh;
  z-index: -1;
}
</style>
