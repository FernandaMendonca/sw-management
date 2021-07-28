<template>
  <div class="resetpass__body">
    <main class="resetpass__container">
      <form class="resetpass__form" @submit.prevent="enviarSenha()">
        <Input tipo="email" nome="email" id="email" rotulo="Email" />
        <Botao
          classe="btn-modal no-margin"
          tipo="submit"
          rotulo="Enviar"
          titulo="Enviar"
        />
      </form>
      <div class="resetpass__footer">
        <router-link to="/login">Login</router-link>
        <router-link to="/cadastro">Cadastre-se</router-link>
      </div>
    </main>
    <section class="resetpass__section">
      <div class="resetpass__texts">
        <h2 class="resetpass__title">Esqueceu a senha?</h2>
        <p class="resetpass__phrase">
          Fique tranquilo, enviaremos um e-mail para você para recupera-lá!
        </p>
      </div>
      <figure class="resetpass__fig">
        <img
          class="resetpass__img"
          src="https://img.icons8.com/color/480/000000/c-3po.png"
          alt="C3-PO"
        />
      </figure>
    </section>
  </div>
</template>

<script>
import Input from '@/components/shared/input/Input.vue';
import Botao from '@/components/shared/button/Botao.vue';

export default {
  components: {
    Input,
    Botao,
  },
  data() {
    return {
      usuario: {},
    };
  },
  methods: {
    enviarSenha() {
      this.$router.push({ name: 'Login' });
    },
  },
};
</script>

<style lang="scss" scoped>
.resetpass__body {
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;

  .resetpass__container {
    background: #fafafa;
    margin: 0 8rem;
    max-width: 360px;
    max-height: 40vh;
    padding: 2rem;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    width: 100%;

    .resetpass__form {
      display: flex;
      flex-direction: column;
      margin: 1rem 0;
    }

    .resetpass__footer {
      align-items: center;
      display: flex;
      flex-direction: column;
      margin-top: 0.7rem;
      justify-content: center;

      & a {
        color: rgba(0, 0, 0, 0.7);
        font-size: 0.9rem;
        text-decoration: none;
      }

      & a:first-of-type {
        margin-bottom: 0.3rem;
      }

      & a:hover {
        text-decoration: underline;
      }
    }
  }

  .resetpass__texts {
    background: #fdfdfd;
    border-radius: 3rem;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
    color: #000;
    font-size: 0.8rem;
    height: 8rem;
    padding: 1.7rem;
    position: fixed;
    right: 17rem;
    top: 9rem;
    width: 15rem;

    & .resetpass__title,
    .resetpass__phrase {
      text-align: center;
    }
  }

  .resetpass__fig {
    position: fixed;
    top: 18.5rem;
  }
}
</style>
