<template>
  <section>
    <Menu />
    <div class="edit__container">
      <ListaCard />
      <form class="form">
        <div class="form__head">
          <figure class="form__fig">
            <img
              class="form__img"
              src="../assets/img/leia.png"
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
        <div class="form__info">
          <label>Ocupação — <span>Fundadora</span></label>
          <label>Espécie — <span>Humana</span></label>
          <label>Planeta Natal — <span>Aldeeran</span></label>
          <label>Nascimento — <span>19 BBY</span></label>
          <label>Morte — <span>35 DBY</span></label>
        </div>
        <div class="form__buttons">
          <Botao
            @click="editar()"
            classe="btn-salvar"
            tipo="submit"
            rotulo="Editar"
            titulo="Editar"
          />
          <Botao
            @click="voltar()"
            classe="btn-remover"
            tipo="submit"
            rotulo="Voltar"
            titulo="Voltar"
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
import Botao from '@/components/shared/button/Botao.vue';
import Tag from '@/components/shared/input/Tag.vue';

export default {
  components: {
    Menu,
    ListaCard,
    Botao,
    Tag,
  },
  methods: {
    editar() {
      this.$router.replace({ name: 'Editar' });
    },
    voltar() {
      this.$router.replace({ name: 'Home' });
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
  height: 25.5rem;
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
    & .form__header {
      height: 4rem;
      margin: 0 10px;
      width: 100%;
    }

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

  .form__info {
    display: flex;
    flex-direction: column;
    margin: 10px 0;
    transform: translate(15rem, -10rem);

    & label {
      margin: 0 10px 0 0;
      font-weight: 600;

      & span {
        font-size: 15px;
        font-weight: 400;
        margin: 0 10px;
      }
    }
  }

  .form__input {
    height: 4rem;
    margin: 1rem 0.5rem;
    position: relative;
    width: 30%;
  }

  .form__buttons {
    display: flex;
    justify-content: flex-end;
    transform: translate(0, -5rem);
    width: 100%;
  }
}

.tags {
  height: 27px;
  margin: 10px 0;
  transform: translate(0rem, 8rem);
  width: 200px;
}
</style>
