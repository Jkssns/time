<template>
  <div id="app">
    <p v-week>{{new Date(a).getTime()}}</p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
      a: '2020-3-22'
    }
  }
}
</script>

<style>

</style>
