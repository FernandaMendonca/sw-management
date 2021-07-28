<template>
  <div class="login__body">
    <main class="login__container">
      <h2 class="login__title">Login</h2>
      <form class="login__form" @submit.prevent="efetuarLogin()">
        <div class="login__input input-field">
          <input type="email" placeholder="Email" v-model="email" />
          <div class="login__input-underline"></div>
        </div>
        <div class="login__input input-field">
          <input :type="inputType" placeholder="Senha" v-model="senha" />
          <div class="login__input-underline"></div>
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
        <Botao classe="btn-modal" tipo="submit" rotulo="Login" titulo="Login" />
      </form>
      <div class="login__footer">
        <router-link to="/reset">Esqueci a senha</router-link>
        <router-link to="/cadastro">Cadastre-se</router-link>
      </div>
    </main>
    <figure class="login__fig">
      <img
        class="login__img"
        src="https://img.icons8.com/color/256/000000/star-wars-millenium-falcon.png"
        alt="Millenium Falcon"
      />
    </figure>
  </div>
</template>

<script>
import firebase from 'firebase';
import Botao from '@/components/shared/button/Botao.vue';

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
    efetuarLogin() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.senha)
        .then(
          (user) => {
            this.$router.replace('home');
            alert('Bem vinde!');
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

<style lang="scss">
.login__body {
  align-items: center;
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;

  background: #fafafa;
}

.login__container {
  background: #fafafa;
  border-radius: 8px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
  margin: 0 auto;
  transform: translate(33%);
  padding: 2rem;
  width: 25%;
  z-index: 1;

  & .login__form {
    display: flex;
    flex-direction: column;
  }

  & .login__title {
    font-weight: 600;
    margin: 0.8rem 0;
    text-align: center;
    color: #3f3f3f;
    font-family: 'Julius Sans One', sans-serif;
  }

  & .input__password {
    position: absolute;
    transform: translate(18rem, -1.2rem);

    & .input__password-img {
      cursor: pointer;
      width: 22px;
    }
  }
}

.login__fig {
  display: flex;
  transform: rotate(90deg);

  & .login__img {
    animation: spaceship 6s ease-in-out infinite alternate;
  }
}

@keyframes spaceship {
  from {
    transform: translateY(100vw);
  }
  to {
    transform: translateY(-100vw);
  }
}

.login__footer {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
  justify-content: center;

  & a {
    color: rgba(0, 0, 0, 0.7);
    font-size: 0.9rem;
    text-decoration: none;
  }
  & a:hover {
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

    &:focus ~ .login__input-underline::after {
      transform: scaleX(1);
    }
  }

  &:first-child {
    margin-bottom: 1.5rem;
  }

  & .login__input-underline {
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
      background: #ffe81f;
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
</style>
