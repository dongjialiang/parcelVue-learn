<template>
    <div id="app">
        <header-component id="head"></header-component>
       <router-view name="Content"/>
    </div>
</template>
<script>
import HeaderComponent from './components/Header.vue';
export default {
    components: { HeaderComponent }
}
</script>
