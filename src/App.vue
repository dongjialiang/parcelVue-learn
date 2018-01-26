<template>
  <div id="app">
      <router-view name="header"/>
      <router-view name="content"/>
      <router-view name="vote"/>
      <router-view name="test"/>
      <router-view name="about"/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

