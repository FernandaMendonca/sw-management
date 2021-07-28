<template>
  <section class="crud">
    <p id="add-new" class="crud__add add">
        <img class="crud__img" src="https://img.icons8.com/ios-filled/50/000000/add--v1.png"
        alt="Adicionar" /><router-link to="/novo">Adicionar novo</router-link>
    </p>
    <table class="table">
      <thead class="table__head" >
        <th class="table__th">
          <td class="table__td name">Nome</td>
          <td class="table__td"></td>
        </th>
      </thead>
      <tbody class="table__body" >
        <Linha :id="i.id" v-for='i of dados' :key='i.id' :titulo="i.titulo" />
      </tbody>
    </table>
  </section>
</template>

<script>
import Linha from './LinhaTabela.vue';

export default {
  components: {
    Linha,
  },
  data() {
    return {
      dados: [
        {
          titulo: 'General Leia Organa',
          id: '0',
        },
        {
          titulo: 'Chewbacca',
          id: '1',
        },
        {
          titulo: 'Poe Dameron',
          id: '2',
        },
        {
          titulo: 'Finn',
          id: '3',
        },
        {
          titulo: 'Rey Skywalker',
          id: '4',
        },
        {
          titulo: 'Gial Ackbar',
          id: '5',
        },
        {
          titulo: 'Amilyn Holdo',
          id: '6',
        },
        {
          titulo: 'Iolo Arana',
          id: '7',
        },
        {
          titulo: 'Ello Asty',
          id: '8',
        },
        {
          titulo: 'Vober Dand',
          id: '9',
        },
        {
          titulo: 'Caluan Ematt',
          id: '10',
        },
        {
          titulo: 'Lor San Tekka',
          id: '11',
        },
        {
          titulo: 'Korr Sella',
          id: '16',
        },
        {
          titulo: 'Han Solo',
          id: '17',
        },
        {
          titulo: '4B-EG-6',
          id: '20',
        },
        {
          titulo: 'BB-8',
          id: '21',
        },
        {
          titulo: 'B-U4D',
          id: '22',
        },
        {
          titulo: 'C3-P0',
          id: '23',
        },
        {
          titulo: 'R2-D2',
          id: '24',
        },
        {
          titulo: 'PZ-4CO',
          id: '25',
        },
      ],
    };
  },
  methods: {
    novo() {
      this.router.push('editar');
    },
  },
};
</script>

<style lang="scss" scoped>

a {
  color: #3f3f3f;
  text-decoration: none;
}

.crud {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  margin: 3rem 0;
  padding: 25px;
  text-align: left;
  width: 100%;
  color: rgba(0, 0, 0, 0.9);

  .crud__add {
    color: #3f3f3f;
    text-align: center;
  }

  .crud__add.add {
    align-items: center;
    display: flex;
    cursor: pointer;
    justify-content: flex-start;
    text-align: left;

    & .crud__img {
      width: 4%;
      margin: 5px 5px;
    }
  }

    & .table {
    margin-top: 10px;
    width: 100%;
  }

  & .table__th {
    padding: 10px 0;
    .table__td.name {
      width: 100%;
    }
  }
}
</style>
