<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  created() {
    if (localStorage.getItem("isLogin") == null) {
      localStorage.setItem("isLogin", "");
    } else {
      this.$store.state.isLogin = localStorage.getItem("isLogin");
    }
  }
};
</script>

<style></style>
