<template>
    <div class="cartToolbar">
        <div class="checkbtn" @click="checkClick">
            <div class="checkbtn_iron"><checkbotton :isCheck="isCheckAll"/></div>
                全选
            </div>
        <div class="totalPrice">合计:<span>￥{{totalPrice}}</span></div>
        <div class="Settlement" @click="Settlement">结算({{checkedCount}})</div>
    </div>
</template>

<script>
  import Checkbotton from "../../../components/common/checkbotton/checkbotton";
  import {mapGetters} from 'vuex'
  export default {
    name: "cartToolbar",
    components: {Checkbotton},
    computed:{
      ...mapGetters(["totalPrice","checkedCount","isCheckAll"])
    },
    methods:{
      checkClick(){
        this.$store.dispatch("changeCheckAll");
      },
      Settlement(){
        alert('正在为你结算！跳到结算页面~');
      }
    }
  }
</script>

<style scoped>
    .cartToolbar{
        background-color: white;
        position: absolute;
        height: 44px;
        bottom: 44px;
        width: 100%;
        line-height: 44px;
        box-shadow: -1px 0 1px rgba(224, 224, 224, 0.6);
    }
    .checkbtn,.totalPrice,.Settlement{
        display: inline-block;
        overflow: hidden;
    }
    .checkbtn{
        /*background-color: #e095c1;*/
        width: 25%;
        /*min-width: 70px;*/
        padding-left: 45px;
        float: left;
    }
    .checkbtn_iron{
        position: absolute;
        /*background-color: #ff5777;*/
        left: 20px;
        top: 4px;
    }
    .totalPrice{
        /*background-color: #e031a7;*/
        width: 30%;
        /*min-width: 120px;*/

    }
    .totalPrice>span{
        color: var(--color-tint);
    }
    .Settlement{
        background-color: deeppink;
        color: white;
        width: 40%;
        float: right;
        text-align: center;
        border-radius: 1px;
    }


</style>