<template>
    <div id="container">
      <form @submit.prevent="submitForm">
      <h1>Datos</h1>
        <label for="name">Nombre</label>
        <input type="text" id="input" v-model="userData.name" required>
        <br>
        <label for="apellido" > Apellido</label>
        <input type="text" id="input" v-model="userData.apellido" required>
        <br>
        <br>
        <button type="submit">Enviar</button>
      </form>
      <div v-if="submitted">
        <h2>Datos del Usuario:</h2>
        <p><strong>Nombre:</strong> {{ userData.name }}</p>
        <p><strong>Apellido:</strong> {{ userData.apellido }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        userData: {
          name: '',
          apellido: ''
        },
        submitted: false
      };
    },
    methods: {
      submitForm() {
        this.$emit('user-submitted', this.userData);
        this.submitted = true;
      }
    }
  };
  </script>
  
  <style>
  #container{
    border-radius: 25px;
    padding: 10px;
    text-align: center;
  }

  #input{
    margin: 10px;
  }
  </style>