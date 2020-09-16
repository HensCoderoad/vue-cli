<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>

export default {
  data() {
    return {
      codeUrl: '',
      code: '',
      state: '',
      checkCode: '',
      prefix: '',
    };
  },
  created() {

  },
  methods: {

  },
  destroyed() {
  },
};
</script>
<style>
  html,body,#app{
    height: 100%;
  }
  *{
    margin: 0;
    padding: 0;
  }

</style>
