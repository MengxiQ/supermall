<template>
    <div class="checkbottn">
        <img v-if="isCheck" src="@/assets/img/checkBotton/check-active.svg" :key="'checkactive'" alt="">
        <img v-else src="@/assets/img/checkBotton/check.svg" :key="'uncheck'" alt="">
    </div>
</template>

<script>
  export default {
    name: "checkbotton",
    props:{
      isCheck:{
        type:Boolean,
        default(){return false}
      }
    }
  }
</script>

<style scoped>
    .checkbottn{
        display: inline-block;
    }
    .checkbottn>img{
        height: 20px;
        width: 20px;

    }
</style>