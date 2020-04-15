<template>
    <div class="wrapper" ref="wrapper">
        <ul class="content" ref="content">
            <img class="item" :src="item.url" alt=""
                v-for="(item,index) in res_banner"
                v-bind:key="index">
        </ul>
    </div>
</template>

<script>
  export default {
    name: "detailcarousels",
    components:{

    },
    props:{
      res_banner:{
        type:Array,
        default(){return []}
      }
    },
    data(){
      return{
        carousels:{}
      }
    },
    methods:{

    },
    updated() {

    },
    destroyed() {
    },
  }

</script>

<style scoped>
    .wrapper{
        background-color: #fcfcfc;
        overflow-x: scroll;
        overflow-y: hidden;
        position: relative;
        height:400px ;
    }
    .content{
        display: block;
        position: absolute;
        /*width: 1600px;*/
        width: 1400px;
        /*left: -260px;*/
        left: 0px;
        transition: left cubic-bezier(0.5,0,0.5,1) 1s;

    }
    .item{
        padding: 5px 0px;
        border-radius: 2px;
        display: inline-block;
        width: 250px;
        height: 400px;
        margin: 0 10px;
    }
</style>