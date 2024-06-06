<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      active: false,
      react16Flag: this.$route.name === "react16-sub",
      react17Flag: this.$route.name === "react17-sub",
      vue2Flag: this.$route.name === "vue2-sub",
      vue3Flag: this.$route.name === "vue3-sub",
      viteFlag: this.$route.name === "vite-sub",
      degrade: window.Proxy,
    };
  },
  mounted() {
    window.addEventListener("message", this.handleMessage);
  },
  beforeDestroy() {
    window.removeEventListener("message", this.handleMessage);
  },
  methods: {
    handleMessage(event) {
      if (event.origin === location.origin && event.source !== window) {
        console.log("父应用接收到消息：", event.data);
        alert("父应用接收到消息：" + event.data);
        // 将消息发送给子应用
        event.source.postMessage("Hello 子应用，我是父应用!", event.origin);
      }
    },
  },
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  font-size: 20px;
  height: 100vh;
  --theme: rgb(241, 107, 95);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100vw;
}

</style>
