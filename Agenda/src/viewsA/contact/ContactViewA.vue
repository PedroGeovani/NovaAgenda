<template>
  <div class="box">

    <div class="title"> {{ legends }}</div>
    <div v-for="(user, index) in users" :key="index">
      <div class="name" v-if="i === -1"> Nome: {{ user.name }} </div>
      <button class="buttonM" @click="i = index, legends = 'Detalhes do contato'" v-if="i === -1"> Mostrar Detalhes
      </button>
      <div v-if="i === index">
        <div class="text">
          <DetailsViewA :name="user.name" :address="user.address" :city="user.city" :phone="user.phone"
            :email="user.email" />
          <div>
            <router-link class="routerlink" :to="{ name: 'EditContactViewAId', params: { id: user.id } }"> Editar
              contato
            </router-link>
          </div>
        </div>
        <div>
          <button class="buttonE" @click="exclude(String(user.id), i), i = -1, legends = 'Lista de Contatos'"> Excluir
            contato </button>
          <button class="buttonE" @click="i = -1, legends = 'Lista de Contatos'"> Esconder Detalhes </button>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { api } from '@/api/api';
import { UserTypes } from '@/api/typesUser';
import DetailsViewA from '@/components/details/DetailsView.vue';

export default {
  components: {
    DetailsViewA
  },
  data() {
    return {
      users: new Array<UserTypes>(),
      i: -1,
      legends: 'Lista de Contatos',
      idContact: '-1',

    }
  },
  mounted() {
    api
      .get('')
      .then(response => (this.users = response.data))
      .catch(err => console.log(err));

  },
  methods: {
    exclude: function (id: string, index: number) {
      api
        .delete("/" + id)
        .then(() => { this.users.splice(index, 1) }
        )
    },
  }
}
</script>

<style scoped>
.title {
  display: inline-block;
  color: rgb(45, 45, 248);
  font-size: 20px;
  font-weight: 600;
  padding: 3px 30px;
  border-radius: 10px;
  margin: 20px 10px;
}

.buttonM {
  display: inline-block;
  background: rgb(30, 30, 255);
  color: white;
  width: 200px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  padding: 3px;
  margin: 8px;
}

.buttonE {
  display: inline-block;
  background: rgb(30, 30, 255);
  color: white;
  width: 200px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  padding: 3px;
  margin: 8px;
  justify-content: end;

}

.box {

  width: 800px;
  background: rgb(200, 200, 255);
  border-radius: 30px;
  margin: 15px 40px;
  padding: 30px;
}

.name {
  display: inline-block;
  width: 500px;
  font-size: 18px;
  font-weight: bold;
  color: rgb(30, 30, 255);

}

.text {
  background: white;
  border-radius: 20px;
  padding: 20px;
  font-size: 18px;
  color: rgb(45, 45, 248);
}


.routerlink {
  display: inline-block;
  background: rgb(255, 255, 255);
  font-size: 16px;
  text-align: center;
  color: rgb(45, 45, 255);
  font-weight: bold;
  text-decoration: none;
  border-style: solid;
  border-radius: 10px;
  padding: 3px 10px;
  margin-left: 530px;
  width: 200px;
}
</style>
