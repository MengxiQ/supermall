<template>
    <div>
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
    height: 39px;
    width: 100%;
    background-color: #f9f9f9;
    box-shadow: 0 -0.5px 1px rgba(0,0,0,0.1);
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

}

</style>