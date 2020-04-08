<template>
    <div id="toTop" ref="toTop">
        <img src="../../../assets/img/topTop/toTop.svg" alt="">
    </div>
</template>

<script>
  export default {
    name: "toTop"
  }
</script>

<style scoped>
#toTop{
    background-color: white;
    height: 50px;
    width: 50px;
    position: absolute;
    right: 8px;
    bottom: 48px;
    border-radius: 50%;
    box-shadow: 0px 1px 2px rgba(0,0,0,0.1);
}
    #toTop>img{
        height: 50px;
        width: 50px;
    }
</style>