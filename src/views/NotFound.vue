<template>
  <div class="not-found__container">
    <figure class="img__container">
      <img src="../assets/img/notFound.svg" />
    </figure>
    <div class="texto__container">
      <h1>Perdido no espaço?</h1>
      <router-link to="/login">
        <Botao
          classe="btn-notFound no-margin"
          tipo="submit"
          placeholder="Volte para a Página Inicial"
          titulo="Volte para a Página Inicial"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
import Botao from '@/components/shared/button/Botao.vue';

export default {
  components: {
    Botao,
  },
};
</script>
>

<style lang="scss">

div.not-found__container {
  align-items: center;
  display: flex;
  justify-content: center;

  figure.img__container {
    width: 35rem;

    img {
      animation: gravity 7s ease-in-out infinite alternate;
      margin: 0 20px;
      padding: 0 20px;
      width: 100%;
    }
  }

  .texto__container {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;

    height: 25rem;
    h1 {
      color: #202020;
      font-family: 'Julius Sans One', sans-serif;
      font-size: 3rem;

      margin: 0.5rem;
      padding: 1.5rem;
      width: 35rem;
    }
  }
}

@keyframes gravity {
  from {
    transform: translateY(15%);
  }
  to {
    transform: translateY(30%);
  }
}
</style>
