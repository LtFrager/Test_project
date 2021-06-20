<template>
  <div>
    <my-header  />
    <Nuxt />
  </div>
</template>

<script>
  import myHeader from '~/components/layouts/myHeader.vue'
  export default {
    components: {
      myHeader,
    },
    data() {
      return {
      }
    },
  }
</script>

<style>
body{
  margin: 0px;
  font-family: 'Ubuntu', sans-serif;
  background-color: #1E2124;

    background-image: url(/img/bg-dots.svg), url(/img/bg-triangle.svg);
    background-repeat: no-repeat;
    background-position: 0px 200px, 0 center;
}
.container{
  max-width:1170px;
  margin: auto;
  display: flex;
      padding: 0 1.5rem;
      flex-wrap: wrap;
}
</style>
