<template>
  <button :class="classe" :type="tipo" :placeholder="rotulo">
    {{ titulo }}
  </button>
</template>

<script>
export default {
  components: {},
  props: {
    classe: {
      required: false,
    },
    tipo: {
      required: true,
      type: String,
    },
    rotulo: {
      required: true,
      type: String,
    },
    titulo: {
      required: true,
      type: String,
    },
    confirmacao: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.no-margin {
  margin-top: 0;
}

button {
  background: #bebebe;
  border: none;
  border-radius: 4px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  color: #202020;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  margin-top: 3rem;
  padding: 0.4rem;
  outline: none;
  transition: all 0.3s ease;
  width: 100%;

  &:hover {
    letter-spacing: 0.5px;
  }
}

button.btn-modal {
  background: #ffe81f;
}

button.btn-notFound {
  background: #2980b9;
  border-radius: 8px;
  color: white;
  height: 3rem;
  padding: 0.6rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    letter-spacing: none;
    transform: scale(1.1);
  }
}

button.btn-remover {
  background: #c0392b;
}

button.btn-salvar {
  background: #2980b9;
}

div.btn-salvar,
div.btn-remover {
  margin: 0 0 0 53.2rem;
  padding: 1rem;
}

button.btn-salvar,
button.btn-remover {
  border-radius: 10px;
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  height: 2rem;
  margin: 5px;
  text-align: center;
  width: 5rem;
}

button.btn-cadastro {
  background: #FF3D00;
  margin-top: 2rem;
  height: 35px;
}
</style>
