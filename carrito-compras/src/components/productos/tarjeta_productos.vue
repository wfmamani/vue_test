<template>
  <div class="card">
    <h3>{{ prod.name }}</h3>
    <p>{{ prod.description }}</p>
    <span
      ><strong> Precio: {{ prod.price }} </strong></span
    >
    <p>Id:{{ prod.id }}</p>
    <img :src="prod.url_image" alt="" />
    <input
      @click="$emit('agregarAlCarrito', prod)"
      class="button"
      type="button"
      value="Agregar al carrito"
    />
  </div>
</template>

<script>
export default {
  props: ["prod"],
  emits: ["agregarAlCarrito"],
};
</script>

<style scoped>
img {
  width: 200px;
  height: auto;
}
</style>
