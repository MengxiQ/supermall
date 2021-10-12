<template>
    <div id="toTop" ref="toTop">
        <img src="@/assets/img/topTop/toTop.svg" alt="">
    </div>
</template>

<script>
  export default {
    name: "toTop"
  }
</script>

<style scoped>
#toTop{
    background-color: rgba(255, 255, 255, 0.57);
    height: 50px;
    width: 50px;
    position: absolute;
    right: 17px;
    bottom: 60px;
    border-radius: 50%;
    box-shadow: 0px 1px 2px rgba(0,0,0,0.1);
    z-index: 20;
}
    #toTop>img{
        height: 50px;
        width: 50px;
    }
</style>