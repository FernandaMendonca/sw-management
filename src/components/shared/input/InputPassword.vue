<template>
  <div class="register__input input-field">
    <input :type="inputType" placeholder="Senha" :value="value" />
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
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      senha: '',
      inputType: 'password',
    };
  },
  methods: {
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

.input__password {
  position: absolute;
  transform: translate(18rem, -1.5rem);

  & .input__password-img {
    cursor: pointer;
    width: 30px;
  }
}
</style>
