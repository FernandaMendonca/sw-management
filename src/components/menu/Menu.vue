<template>
  <nav class="menu">
    <ul class="menu__list">
      <li class="menu__items logo">
        <figure class="menu__fig">
          <img
            class="menu__img"
            src="https://img.icons8.com/ios-filled/50/000000/rebel.png"
            alt="Símbolo da Resistência"
          />
        </figure>
        <h1 class="menu__title">RESISTÊNCIA</h1>
      </li>
      <li class="menu__items inicio">
        <router-link to="/home">
          <figure class="menu__fig">
            <img
              class="menu__img"
              src="https://img.icons8.com/clouds/70/000000/home-page.png"
              alt="Símbolo de Página Inicial"
            />
          </figure>
          Início</router-link
        >
      </li>
      <li class="menu__items perfil">
        <router-link to="/">
          <figure class="menu__fig">
            <img
              class="menu__img"
              src="https://img.icons8.com/clouds/70/000000/apple-settings--v1.png"
              alt="Símbolo de Configurações"
            />
          </figure>
          Configurações</router-link
        >
      </li>
      <li @click="efetuarLogout()" class="menu__items logout">
        <figure class="menu__fig">
          <img
            class="menu__img"
            src="https://img.icons8.com/clouds/70/000000/logout-rounded.png"
            alt="Símbolo de Logout"
          />
        </figure>
        Sair
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.menu__list {
  display: flex;
  height: 6rem;
  justify-content: flex-end;
  margin-right: 1rem;
  .menu__items,
  a {
    align-items: center;
    display: flex;

    color: #3f3f3f;
    cursor: pointer;
    font-family: 'Julius Sans One', sans-serif;
    list-style: none;
    margin: 0 1rem;
    transition: transform 0.1s ease-in;
    text-decoration: none;

    &:first-of-type {
      margin: 0 5px;
      transition: none;
      &:hover {
        transform: none;
      }
    }

    &.logo {
      align-items: center;
      margin: 0 20px;
      width: 100%;
      &:hover {
        transform: none;
      }
      & .menu__title {
        color: #3f3f3f;
        font-family: 'Julius Sans One', sans-serif;
        font-size: 1.5rem;
        font-weight: 800;
        left: 5.5rem;
        position: absolute;
        text-align: center;
        top: 2rem;
      }
    }
    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>

<script>
import firebase from 'firebase';

export default {
  methods: {
    efetuarLogout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace('login');
        });
    },
  },
};
</script>
