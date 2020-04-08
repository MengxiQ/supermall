<template>
    <div class="tabbar">
    <slot name="tabaritems"></slot>
    </div>
</template>

<script>
  export default {
    name: "tabbar",
    methods:{

    },
    components:{
    }
  }
</script>

<style scoped>
.tabbar{
    display: flex;
    /*height: 39px;*/
    height: 44px;
    width: 100%;
    /*background-color:#fcfcfc;*/



}

</style>