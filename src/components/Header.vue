<template>
	<header>
        <b-navbar :class="classchange" toggleable>
            <router-link to="/"><img :src="img" /></router-link>
            <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>
            <b-collapse is-nav id="nav_dropdown_collapse">
                <b-navbar-nav><router-link to="/">
                    首页</router-link><router-link to="/vote">
                    投票</router-link><router-link to="/test">
                    实验</router-link><router-link to="/about">
                    关于</router-link>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </header>
</template>
<script>
export default {
    data () {
        return {
            img: require('../assets/001Tiny.png'),
            classchange:'default'
        }
    },
    computed: {
        slide() {
            return this.$store.state.count
        }
    },
    watch: {
        slide() {
            if(this.$route.path=='/')
                this.slide==1?this.classchange='dark':this.slide==2?this.classchange='quite':this.slide==3?this.classchange='light':this.classchange='default'
        }
    }
}
</script>
