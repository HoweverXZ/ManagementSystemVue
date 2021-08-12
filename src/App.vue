<template>
  <hello-world></hello-world>
<!--  <UpdateVue></UpdateVue>-->
</template>

<script>
  import HelloWorld from "./components/HelloWorld";
  import UpdateVue from "./components/UpdateVue";
  export default {
    name:'App',
    components: {HelloWorld,UpdateVue}
  }
</script>
