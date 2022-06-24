<template>
  <div class="card" v-for="producto in productos" :key="producto.id">
    <h3>{{ producto.name }}</h3>
    <p>{{ producto.description }}</p>
    <span
      ><strong> Precio: {{ producto.price }} </strong></span
    >
    <p>Id:{{ producto.id }}</p>
    <img :src="producto.url_image" alt="" />
  </div>
</template>

<script>
import productos from "@/productos.json";
export default {
  data() {
    return {
      productos,
      unaVariable: 5,
    };
  },
};
</script>

<style scoped>
.card {
  float: left;
  padding: 1rem;
  margin: 1rem;
  width: 350px;
  height: 450px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}
img {
  width: 200px;
  height: auto;
}
</style>
