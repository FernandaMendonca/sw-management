<template>
  <form class="form">
    <div class="form__head">
      <figure class="form__fig">
        <img
          class="form__img"
          src="../../assets/img/leia.png"
          alt="General Leia Organa"
        />
      </figure>
      <div class="form__header">
        <h2 class="form__title">General Leia Organa</h2>
        <p class="form__phrase">
          "A esperança é como o sol. Se você apenas acredita quando vê, você nunca vai
          sobreviver à noite."
        </p>
        <div class="tags">
          <Tag titulo="General" />
          <Tag titulo="Humano" />
        </div>
      </div>
    </div>
    <div class="form__input">
      <FormInput label="Nome" tipo="text" id="nome" rotulo="Nome" :value="modelValue" />
      <FormInput
        label="Espécie"
        tipo="text"
        id="especie"
        rotulo="Espécie"
        :value="modelValue"
      />
      <FormInput
        label="Ocupação"
        tipo="text"
        id="ocupacao"
        rotulo="Ocupação"
        :value="modelValue"
      />
      <FormInput
        label="Planeta Natal"
        tipo="text"
        id="origem"
        rotulo="Planeta Natal"
        :value="modelValue"
      />
      <FormInput
        label="Nascimento"
        tipo="text"
        id="nascimento"
        rotulo="Nascimento"
        :value="modelValue"
      />
      <FormInput
        label="Morte"
        tipo="text"
        id="morte"
        rotulo="Morte"
        :value="modelValue"
      />
    </div>
    <div class="form__buttons">
      <Botao
        @click="salvar()"
        classe="btn-salvar"
        tipo="submit"
        rotulo="Salvar"
        titulo="Salvar"
      />
      <Botao
        @click="cancelar()"
        classe="btn-remover"
        tipo="submit"
        rotulo="Cancelar"
        titulo="Cancelar"
      />
    </div>
  </form>
</template>

<script>
import Tag from '@/components/shared/input/Tag.vue';
import FormInput from '../shared/input/FormInput.vue';
import Botao from '../shared/button/Botao.vue';

export default {
  components: {
    FormInput,
    Botao,
    Tag,
  },
  methods: {
    salvar() {
      this.$router.push({ name: 'Detalhes' });
    },
    cancelar() {
      this.$router.push({ name: 'Detalhes' });
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  background: #fdfdfd;
  border-radius: 10px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
  height: auto;
  margin: 3rem 0;
  padding: 2rem;
  width: 65vw;

  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .form__head {
    display: flex;
    justify-content: space-around;
    width: 100%;

    & .form__header .form__title {
      font-family: 'Julius Sans One', sans-serif;
      font-size: 2rem;
      line-height: 2;
    }

    & .form__header .form__phrase {
      font-style: italic;
      font-size: 1rem;
    }

    & .form__img {
      margin: 0 20px 0 10px;
      width: 200px;
    }
  }

  .form__input {
    height: auto;
    margin: 1rem 0.5rem;
    position: relative;
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .form__buttons {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }
}

.tags {
  height: fit-content;
  transform: translate(0, 8.3rem);
}
</style>
