<template>
    <div class="recommmendItem">
        <img class="img" :src="itemdata.img" alt="">
        <div class="name">{{itemdata.name}}</div>
        <div class="price">￥{{itemdata.price}}</div>
    </div>
</template>

<script>
  export default {
    name: "recommmendItem",
    props:{
      itemdata:{
        type:Object
      },
    }
  }
</script>

<style scoped>
    .recommmendItem{
        display: inline-block;
        width: 50%;
        overflow: hidden;
        /*margin:20px 8px 0 0;*/
        padding: 5px;
        font-size: 12px;
        text-align: left;
        line-height: 16px;
        background-color: rgba(0, 0, 0, 0.02);
        border-radius: 10px;


    }
    .img{
        border-radius: 5px;
        background-color: #f9f9f9;
        width: auto;
        height: auto;
        max-width: 100%;
        max-height: 100%;
    }
    .name{
        overflow: hidden; text-overflow:ellipsis; white-space: nowrap;
        height: 16px;
    }
    .price{
        color: var(--color-tint);
    }
</style>