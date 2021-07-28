<template>
  <div @click="listar()" class='card'>
    <p class="card__title">{{ titulo }}</p>
    <div class="card__conteudo">
      <div class="card__info">
        <h2 class="card__count"> {{ count }} </h2>
      </div>
     <figure class="card__fig">
      <img :src='rota' :alt='titulo' />
     </figure>
    </div>
  </div>
</template>

<script>
export default {
  props: ['titulo', 'count', 'rota'],
  methods: {
    listar() {
      this.$router.push({ name: 'Home' });
    },
  },
};
</script>

<style lang="scss" scoped>

$blue: #2980B9;
$blackish: #202020;
$yellow: #FFE81F;
$ice-color: #FDFDFD;

.card {
  align-items: center;
  display: flex;
  flex-direction: column;

  background: $ice-color;
  border-radius: 10px;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  margin: 3rem;
  height: 7rem;
  padding: 1rem;
  transition: transform 0.1s ease-in-out;
  width: 15rem;

  &:hover {
    transform: scale(1.1);
  }

  & .card__conteudo {
    align-items: center;
    display: flex;
    justify-content: space-around;

    height: 80px;
    width: 100%;
  }

  & .card__info {
    display: flex;
    flex-direction: column;
    justify-content: center;

    margin-right: 30px;

    & .card__count {
      color: $yellow;
      font-size: 54px;
      font-weight: 600;
    }
  }
}

.card__title {
  color: $blackish;
  font-size: 16px;
  font-weight: 600;
}

.card__title, .card__count {
    font-family: 'Julius Sans One', sans-serif;
}
</style>
