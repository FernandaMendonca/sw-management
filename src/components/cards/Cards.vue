<template>
  <aside class="lista__cards">
    <div class="lista__item" v-for="dado of dados" :key="dado" :dado="dado">
      <Card
        :titulo="dado.titulo"
        :count="dado.count"
        :rota="dado.rota"
      />
    </div>
  </aside>
</template>

<script lang="ts">
import Card from './Card.vue';

export default {
  components: {
    Card,
  },
  data() {
    return {
      dados: [
        {
          titulo: 'Membros',
          count: '82',
          rota: 'https://img.icons8.com/color/48/000000/r2-d2.png',
        },
        {
          titulo: 'Planetas',
          count: '60',
          rota: 'https://img.icons8.com/color/48/000000/death-star.png',
        },
        {
          titulo: 'Naves',
          count: '37',
          rota: 'https://img.icons8.com/color/48/000000/star-wars-millenium-falcon.png',
        },
        {
          titulo: 'Veículos',
          count: '36',
          rota: 'https://img.icons8.com/color/48/000000/aal-1971-91-transporter.png',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.lista__cards {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 25rem;
}
</style>
