<template>
  <tarjeta_productos
    v-for="producto in productos"
    :key="producto.id"
    :prod="producto"
    @agregarAlCarrito="agregarAlCarrito"
  />

  <!-- <p>{{unaVariable}}</p> -->
</template>

<script>
import productos from "@/productos.json";
import tarjeta_productos from "@/components/productos/tarjeta_productos.vue";
export default {
  data() {
    return {
      carrito: [],
      productos,
      unaVariable: 5,
    };
  },
  components: {
    tarjeta_productos,
  },
  methods: {
    agregarAlCarrito(producto) {
      this.carrito.push(producto);
      console.log(this.carrito);
    },
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
</style>
