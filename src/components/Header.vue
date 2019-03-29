<template>
  <header id="head">
    <b-navbar :class="classchange" toggleable>
      <router-link class="home" to="/">
        <img :src="img">
      </router-link>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav-collapse">
        <b-navbar-nav>
          <router-link :key="index" v-for="(item,index) of to" :to="item.path">{{ item.nav }}</router-link>
          <div role="group" class="btn-group" v-show="!account">
            <router-link to="/signin" class="sign">登录</router-link>/
            <router-link to="/signup" class="sign">注册</router-link>
          </div>
          <span v-show="account">{{ account | cut }}</span>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>
<script>
export default {
  data() {
    return {
      to: [
        { path: "/vote", nav: "投票" },
        { path: "/test", nav: "实验" },
        { path: "/about", nav: "关于" }
      ],
      img: require("../assets/logo.svg"),
      classchange: "default",
      account: ""
    };
  },
  mounted() {
    this.account = this.$cookies.get("isLogin");
  },
  beforeRouteUpdate(to, from, next) {
    if (to.path == "/")
      this.slide == 1
        ? (this.classchange = "dark")
        : this.slide == 2
        ? (this.classchange = "quite")
        : this.slide == 3
        ? (this.classchange = "light")
        : (this.classchange = "default");
    this.account = this.$cookies.get("isLogin");
    next();
  },
  computed: {
    slide() {
      return this.$store.state.count;
    }
  },
  watch: {
    slide() {
      if (this.$route.path == "/")
        this.slide == 1
          ? (this.classchange = "dark")
          : this.slide == 2
          ? (this.classchange = "quite")
          : this.slide == 3
          ? (this.classchange = "light")
          : (this.classchange = "default");
    }
  },
  filters: {
    cut(v) {
      if (!v) return "";
      return v.substring(20, v.length);
    }
  }
};
</script>
