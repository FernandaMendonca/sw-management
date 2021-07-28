<template>
  <div :class="classe" class="input-field">
    <input :type="tipo" :name="nome" :id="id" :placeholder="rotulo" />
    <div class="input-underline"></div>
  </div>
</template>

<script>
export default {
  props: {
    classe: {
      required: false,
    },
    tipo: {
      required: true,
      type: String,
    },
    nome: {
      required: true,
      type: String,
    },
    id: {
      required: true,
      type: String,
    },
    rotulo: {
      required: true,
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
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

    &:focus ~ .input-underline::after {
      transform: scaleX(1);
    }
  }

  &:first-child {
    margin-bottom: 1.5rem;
  }

  & .input-underline {
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

.cadastro-campo,
.cadastro-campo:first-child {
  margin-bottom: 1rem;
}

.cadastro-campo .input-underline::after {
  background: #ff3d00;
}
</style>
