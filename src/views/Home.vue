<template>
  <div class="home__body">
    <Menu />
    <div class="home__container">
      <Cards />
      <div class="home__table">
        <Tabela tituloTabela="Membros" idTabela="membros" />
      </div>
      <figure class="home__fig">
        <img class="home__img" src="../assets/img/r2d2.png" alt="R2-D2"/>
      </figure>
    </div>
  </div>
</template>
<script lang="ts">
import Menu from '@/components/menu/Menu.vue';
import Tabela from '@/components/tabela/Tabela.vue';
import Cards from '@/components/cards/Cards.vue';

export default {
  components: {
    Menu,
    Tabela,
    Cards,
  },
};
</script>

<style lang="scss" scoped>

.home__container {
  display: flex;

  & .home__table {
    width: 50%;
  }

  & .home__img {
    left: 76vw;
    height: 256px;
    position: fixed;
    top: 70vh;
    z-index: -1;
  }
}

</style>
