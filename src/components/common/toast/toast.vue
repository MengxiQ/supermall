<template>
    <div class="toast" v-show="isShow">
        {{message}}
    </div>
</template>

<script>
  export default {
    name: "toast",
    data(){
      return {
        isShow: false,
        message: ''
      }
    },
    methods:{
      show(message = 'default text.',duration = 1000){
        this.isShow = true;
        console.log(this.isShow);
        this.message = message;
        setTimeout(()=>{
          //延迟时间后清空
          this.isShow = false;
          this.message = ''
        },duration)

      }

    }
  }
</script>

<style scoped>
    .toast{
        position: absolute;
        z-index: 100;
        background: rgba(0, 0, 0, 0.6);
        color: white;
        /*height: 40px;*/
        /*line-height: 40px;*/
        padding: 10px;
        width: 200px;
        top: 50%;
        left: 25%;
        font-size: 14px;
        border-radius: 5px;
        text-align: center;

    }
</style>