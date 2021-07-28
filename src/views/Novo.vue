<template>
  <section>
    <Menu />
    <div class="edit__container">
      <ListaCard />
      <form class="form">
        <div class="form__head">
          <h2 class="form__title">Novo</h2>
          <div
            class="form__add-image"
            :style="{ 'background-image': `url(${imagePreview})` }"
            @click="selectedImage"
          ></div>
          <input class="form__add-input" ref="fileInput" type="file" @input="selectFile" />
        </div>
        <div class="form__input">
          <FormInput
            label="Nome"
            tipo="text"
            id="nome"
            rotulo="Nome"
            :value="modelValue"
          />
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
      <figure class="edit__fig">
        <img class="edit__img" src="../assets/img/r2d2.png" alt="R2D2" />
      </figure>
    </div>
  </section>
</template>
<script>
import Menu from '@/components/menu/Menu.vue';
import ListaCard from '@/components/cards/Cards.vue';
import FormInput from '@/components/shared/input/FormInput.vue';
import Botao from '@/components/shared/button/Botao.vue';

export default {
  components: {
    Menu,
    ListaCard,
    FormInput,
    Botao,
  },
  data() {
    return {
      imagePreview: null,
    };
  },
  methods: {
    salvar() {
      this.$router.push({ name: 'Home' });
    },
    cancelar() {
      this.$router.push({ name: 'Home' });
    },
    selectedImage() {
      this.$refs.fileInput.click();
    },
    selectFile() {
      const input = this.$refs.fileInput;
      const file = input.files;
      if (file && file[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imagePreview = e.target.result;
        };
        reader.readAsDataURL(file[0]);
        this.$emit('input', file[0]);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.edit__container {
  display: flex;
}

.edit__img {
  left: 76vw;
  height: 256px;
  position: fixed;
  top: 70vh;
  z-index: -1;
}
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

    .form__add-image {
      background-size: cover;
      background-position: center;
      display: block;
      cursor: pointer;
      height: 200px;
      transform: translate(-15rem, 5rem);
      width: 200px;
    }

    .form__add-input {
      transform: translate(-34.7rem, 18.5rem);
      outline: none;
    }

    & .form__title {
      font-family: 'Julius Sans One', sans-serif;
      font-size: 2rem;
      line-height: 2;
      transform: translate(23rem);
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

    transform: translate(0, 6rem);
  }

  .form__buttons {
    display: flex;
    justify-content: flex-end;
    transform: translate(0, 2rem);
    width: 100%;
  }
}
</style>
