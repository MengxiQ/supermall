<template>
    <div class="profile">
        <div class="profile_navbar"><nav-bar><div slot="center">个人中心</div></nav-bar></div>
        <base-info></base-info>
        <assets></assets>
        <other-info></other-info>
    </div>
</template>

<script>
  import BaseInfo from "./profilechildren/baseInfo";
  import Assets from "./profilechildren/assets";
  import OtherInfo from "./profilechildren/otherInfo";
  import NavBar from "../../components/common/nav-bar/nav_bar";
  export default {
    name: "profile",
    components: {NavBar, OtherInfo, Assets, BaseInfo}
  }
</script>

<style scoped>
    .profile{
        width: 100%;
        height: 100vh;
        position: relative;
        background-color: #fafafa;
    }
    .profile_navbar{
        /*position: fixed;*/
        /*top: 0;*/
        /*right: 0;*/
        height: 44px;
        width: 100%;
        overflow: hidden;
        background-color: deeppink;
        color: white;
        /*box-shadow: 0 1px 1px rgba(147, 147, 147, 0.2);*/
    }
</style>