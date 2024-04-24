<template>
  <div>
    <h1>Ingresar Usuarios</h1>
    <input id="input" v-model="newName" @keyup.enter="addName" placeholder="Ingrese su nombre y apellido">
    <div id="container">
      <ul>
        <li v-for="(name, index) in names" :key="index">
          <span>{{ name }}</span>
          <button @click="deleteName(index)">Eliminar</button>
          <button @click="renameName(index)">Renombrar</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newName: '',
      names: []
    };
  },
  methods: {
    addName() {
      if (this.newName.trim() !== '') {
        this.names.push(this.newName.trim());
        this.newName = '';
      }
    },
    deleteName(index) {
      this.names.splice(index, 1);
    },
    renameName(index) {
      const newName = prompt('Introduce el nuevo nombre:');
      if (newName && newName.trim() !== '') {
        this.names[index] = newName.trim();
      }
    }
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
}

#container {
  margin-left: 10rem;
}

button {
  border-radius: 10px;
  margin: 10px;
}

#input{
  border-radius: 25px;
  width: 200px;
  text-align: center;
}
</style>
