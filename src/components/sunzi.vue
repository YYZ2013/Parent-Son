<template>
  <div class="sunzi">
    孙组件：我是王思聪的儿子 {{ params.num }} {{params0.num0}}
    <slot :user="user">无</slot>
  </div>
</template>

<script>
  export default{
    name:"sunzi",
    data(){
      return{
        user:{
          name:"月牙坠",
          age:24
        }
      }
    },
    inject: ['params','params0']
  }
</script>

<style>
</style>
