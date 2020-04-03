<template>
    <div id="nav_bar">
        <div class="nav_bar_left">
            <slot name="left"></slot>
        </div>
        <div class="nav_bar_center">
            <slot name="center"></slot>
        </div>
        <div class="nav_bar_right">
            <slot name="right"></slot>
        </div>



    </div>
</template>

<script>
  export default {
    name: "nav-bar"
  }
</script>

<style scoped>
    #nav_bar{
        height: 44px;
        width: 100%;
        display: flex;
        text-align: center;
        line-height: 44px;

        box-shadow: 0px 0.3px 2px rgba(0,0,0,0.2) ;
    }
    .nav_bar_left{
        height: 100%;
        width: 25%;
    }
    .nav_bar_center{
        height: 100%;
        width: 50%;

    }
    .nav_bar_right{
        height: 100%;
        width: 25%;
    }
</style>