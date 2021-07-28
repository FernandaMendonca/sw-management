<template>
  <div class="register__body">
    <main class="register__container">
      <h2 class="register__title-form">Cadastro</h2>
      <form class="register__form" @submit.prevent="Cadastrar()">
        <div class="register__input input-field">
          <input
            class="cadastro-campo"
            type="email"
            placeholder="Email"
            v-model="email"
          />
          <div class="register__input-underline"></div>
        </div>
        <div class="register__input input-field">
          <input :type="inputType" placeholder="Senha" v-model="senha" />
          <div class="register__input-underline"></div>
          <div @click="mostrarSenha()">
            <span v-if="isPassword" class="input__password"
              ><img
                class="input__password-img hide"
                alt="Invísivel"
                src="https://img.icons8.com/windows/32/000000/invisible.png"
              />
            </span>
            <span v-else class="input__password">
              <img
                class="input__password-img show"
                alt="Vísivel"
                src="https://img.icons8.com/windows/32/000000/visible--v1.png"
              />
            </span>
          </div>
        </div>
        <Botao
          classe="btn-modal btn-cadastro"
          tipo="submit"
          placeholder="Cadastrar"
          titulo="Cadastrar"
        />
      </form>
      <div class="register__footer">
        <router-link to="/login">Já tenho uma conta</router-link>
      </div>
    </main>
    <section class="register__section">
      <h2 class="register__title-section">Junte-se a Resistência</h2>
      <figure class="register__fig">
        <img
          class="register__img"
          src="https://img.icons8.com/color/96/000000/rebel.png"
          alt="Símbolo da Resistência"
        />
      </figure>
    </section>
  </div>
</template>

<script>
import Botao from '@/components/shared/button/Botao.vue';
import firebase from 'firebase';

export default {
  components: {
    Botao,
  },
  data() {
    return {
      email: '',
      senha: '',
      inputType: 'password',
    };
  },
  methods: {
    Cadastrar() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.senha)
        .then(
          (user) => {
            alert('Cadastrado com sucesso. Que a Força esteja com você!');
            this.$router.replace('login');
          },
          (err) => {
            alert(err.message);
          },
        );
    },
    mostrarSenha() {
      this.inputType = this.isPassword ? 'text' : 'password';
    },
  },
  computed: {
    isPassword() {
      return this.inputType === 'password';
    },
  },
};
</script>

<style lang="scss" scoped>
.register__body {
  color: #202020;
  font-weight: 500;

  align-items: center;
  display: flex;
  transform: translate(10%, 15%);
}

a {
  text-decoration: none;
}

.register__container {
  background: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 15px;
  width: 30rem;
  height: 25rem;
  align-self: center;
  margin: 5rem;
}

.register__title-form {
  font-family: 'Julius Sans One', sans-serif;
  font-weight: 600;
  margin: 2rem;
  position: relative;
  color: #3f3f3f;
}

.register__form {
  display: flex;
  flex-direction: column;
  width: 20rem;
  padding: 1rem;
}

.register__section {
  display: flex;
  align-items: center;
  transition: 0.5s ease-in-out;
  padding: 4rem;
  &:hover {
    transform: scale(1.1);
  }
  & .register__title-section {
    color: #ff3d00;
    font-family: 'Julius Sans One', sans-serif;
    font-size: 1.9rem;
  }
}

.register__footer a {
  color: rgba(0, 0, 0, 0.7);
  font-size: 0.9rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}

.input-field {
  position: relative;

  & input {
    background: #fafafa;
    color: rgba(0, 0, 0, 0.7);
    font-size: 0.9rem;
    outline: none;

    &::placeholder {
      color: rgba(0, 0, 0, 0.5);
    }

    &:focus ~ .register__input-underline::after {
      transform: scaleX(1);
    }
  }

  &:first-child {
    margin-bottom: 1.5rem;
  }

  & .register__input-underline {
    &::before {
      background: rgba(0, 0, 0, 0.2);
      bottom: -5px;
      content: '';
      height: 1.5px;
      left: 0;
      position: absolute;
      width: 100%;
    }

    &::after {
      background: #ff3d00;
      bottom: -5px;
      content: '';
      height: 1.5px;
      left: 0;
      position: absolute;
      transform: scaleX(0);
      transform-origin: left;
      transition: all 0.3s ease-in-out;
      width: 100%;
    }
  }
}

.input__password {
  position: absolute;
  transform: translate(16rem, -1.2rem);

  & .input__password-img {
    cursor: pointer;
    width: 22px;
  }
}
</style>
