<template>
  <div class="child">
    子组件：我是王思聪 <br />
    {{ money2 }}<br />
    {{ money }} {{ money0 }} {{ value }} <br />
    {{ value0.num }} <br />
    <button @click="changeNum">(provide传值)num+1</button>
    <p>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</p>
    <button @click="sendToParent" value="emit-向父组件传值">给建林发送消息</button>
    <p>-------------------------------------------------------------------</p>
    <router-view>
      {{ slot }}
      <template v-slot="scope">
        {{ scope.user.name }} {{ scope.user.age }}
      </template>
    </router-view>
  </div>
</template>

<script>
  export default{
    name:"child",
    props:{
      money:"",
      money0:"",
      money2:"",
      value:""
    },
    data(){
      return{
        value0:{
          num:0
        },
        slot:"插槽",
        messageText:"我赚了40亿，翻了8倍"
      }
    },
    methods:{
      changeNum(){
        this.value0.num ++
      },
      sendToParent(){
        this.$emit("getChildMsg",this.messageText)
      }
    },
    provide(){
      return{
        params: this.value0
      }
    }
  }
</script>

<style>
</style>
