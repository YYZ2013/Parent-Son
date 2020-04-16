<template>
  <div class="parent">
    父组件：我是王建林 <br />
    <input type="text" v-model="parentText">
    <p>{{ parentText }}</p>
    Value:{{ value }} <br />
    <button @click="changeValue">(父组件传值)value+1</button>
    <button @click="changeNum0">(provide传值)num0+1</button>
    Num0:{{ value1.num0 }}
    <p>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</p>
    思聪的消息:{{ sonMsg }}
    <p>-------------------------------------------------------------------</p>
    <router-view money="5亿" :money0="money1" :money2="parentText" :value="value" @getChildMsg="getSonMsg"/>
  </div>
</template>

<script>
  export default{
    name:"parent",
    data(){
      return{
        money1:"五亿",
        parentText:"子组件props接收",
        value:0,
        value1:{
          num0:5
        },
        sonMsg:""
      }
    },
    provide(){
      return{
        params0:this.value1
      }
    },
    methods:{
      changeValue(){
        this.value += 1
      },
      changeNum0(){
        this.value1.num0 ++
      },
      getSonMsg(data){
        this.sonMsg = data
      }
    }
  }
</script>

<style>
</style>
