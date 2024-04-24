<template>
    <div>
        <h1>Home</h1>
        <h1>{{ title }}</h1>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: "Bienvenido a mi sitio web",
        };
    },
};
</script>

<style>
h1 {
    color: rgb(0, 0, 0);
    text-align: center;
}
.container{
    background-color: aqua;
}
</style>