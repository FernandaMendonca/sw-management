<template>
  <div class="container">
    <p>Você tem certeza?</p>
    <div class="botoes">
      <Botao classe="btn-salvar"
        tipo="submit" rotulo="Sim" titulo="Sim" />
      <Botao classe="btn-remover"
        tipo="submit" rotulo="Cancelar" titulo="Cancelar" />
    </div>
  </div>
</template>

<script>
import Botao from '../button/Botao.vue';

export default {
  components: {
    Botao,
  },
};
</script>

<style lang="scss" scoped>
  div.container {
    background: #fdfdfd;
    border-radius: 10px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
    height: 6rem;
    width: 20rem;
    z-index: 1;

    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;

    p {
      font-size: 18px;
      margin: 10px 0;
    }

    div.botoes {
      display: flex;
      flex-direction: row;
    }
  }
</style>
