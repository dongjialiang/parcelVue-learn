<template>
    <div>
        <header-component id="head"></header-component>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>
<script>
import HeaderComponent from './Header.vue';
export default {
    components: { HeaderComponent }
}
</script>
