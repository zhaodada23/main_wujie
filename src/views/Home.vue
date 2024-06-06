<template>
  <div class="home">

  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      preload: window.localStorage.getItem("preload") !== "false",
      degrade: window.localStorage.getItem("degrade") === "true" || !window.Proxy || !window.CustomElementRegistry,
      disable: !window.Proxy || !window.CustomElementRegistry,
    };
  },
  watch: {
    preload(val) {
      window.localStorage.setItem("preload", val);
      setTimeout(() => window.location.reload(), 1000);
    },
    degrade(val) {
      window.localStorage.setItem("degrade", val);
      setTimeout(() => window.location.reload(), 1000);
    },
  },
};
</script>

<style scoped>

</style>
