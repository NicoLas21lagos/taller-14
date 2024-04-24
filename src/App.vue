<template>
  <div id="app">
    <router-link to="/">Home</router-link>
    <br>
    <router-link to="/about">Ingresar usuario</router-link>
    <br>
    <router-view></router-view>
  </div>
</template>

<script>

</script>

<style>
#app{
  background-color: rgb(130, 192, 239);
  padding: 10px;
  border-radius: 25px
}
</style>
