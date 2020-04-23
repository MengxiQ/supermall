<template>
    <div class="baseInfo">
        <div class="logo"><img src="@/assets/img/profile/me.svg" alt=""></div>
        <div class="infobox">
            <div class="userName">{{this.$store.state.userInfo.userName}}</div>
            <div class="identifined">id：{{this.$store.state.userInfo.userId}}</div>
        </div>
        <div class="moreData"><img src="@/assets/img/profile/moreData.svg" alt=""></div>
    </div>
</template>

<script>
  export default {
    name: "baseInfo"
  }
</script>

<style scoped>
    .baseInfo{
        background-color: #ff54a0;
        position:relative;
       /*margin-top: 43px;*/
        padding: 10px;
        color: white;
    }
    .logo{
        display: inline-block;
        /*background-color: #e8e8e8;*/
    }
    .logo>img{
        display: inline-block;
        /*align-self: center;*/
        height: 80px;
        background-color: white;
        border-radius: 50%;
        padding: 15px;
    }
    .infobox{
        display: inline-block;
        height: 80px;
        /*background-color: #e095c1;*/
        overflow: hidden;
        text-align: center;
       padding: 20px 20px;
        line-height: 22px;
    }
    .infobox>.userName{
        font-size: larger;
        text-align: left;
    }
    .infobox>.identifined{
        text-align: left;
        font-size: 14px;
        color: rgba(245, 245, 245, 0.85);
    }
    .moreData{
        /*background-color: rebeccapurple;*/
        display: inline-block;
        height: 80px;
        overflow: hidden;
        float: right;
        line-height: 90px;
    }
    .moreData>img{
        height: 20px;
    }

</style>