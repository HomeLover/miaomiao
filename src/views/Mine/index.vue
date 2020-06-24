<template>
  <div id="main" >
    <Header title="私人信息"></Header>
    
    <TabBar></TabBar>
  </div>
</template>

<script>
import Header from '@/components/Header/index.vue'
import TabBar from '@/components/TabBar/index.vue'
export default {
  name:'Mine',
  components:{
    Header,
    TabBar
  }
}
</script>

<style>

</style>