<template>
    <div class="mainTabber">
        <tabbar>
            <div slot="tabaritems" class="tabControl">

                    <tabbar_item :path="'/suppermall/home'" >
                        <div slot="img" ><img src="../../../assets/img/tabbar/Iron/home.svg" alt=""></div>
                        <div slot="img_active"><img src="../../../assets/img/tabbar/Iron/home_active.svg" alt=""></div>
                        <div slot="font">主页</div>
                    </tabbar_item>

                    <tabbar_item :path="'/suppermall/category'">
                        <div slot="img"><img src="../../../assets/img/tabbar/Iron/classify.svg" alt=""></div>
                        <div slot="img_active"><img src="../../../assets/img/tabbar/Iron/classify_active.svg" alt=""></div>
                        <div slot="font">分类</div>
                    </tabbar_item>

                    <tabbar_item :path="'/suppermall/cart'">
                        <div slot="img"><img src="../../../assets/img/tabbar/Iron/cart.svg" alt=""></div>
                        <div slot="img_active"><img src="../../../assets/img/tabbar/Iron/cart_active.svg" alt=""></div>
                        <div slot="font">购物车</div>
                    </tabbar_item>

                    <tabbar_item :path="'/suppermall/profile'">
                        <div slot="img"><img src="../../../assets/img/tabbar/Iron/profile.svg" alt=""></div>
                        <div slot="img_active"><img src="../../../assets/img/tabbar/Iron/profile_active.svg" alt=""></div>
                        <div slot="font">个人中心</div>
                    </tabbar_item>

            </div>
        </tabbar>
    </div>
</template>

<script>
    import tabbar from "../../common/tabbar/tabbar";
    import tabbar_item from "../../common/tabbar/tabbar_item";
  export default {
    name: "mainTabbar",
    components:{
      tabbar,
      tabbar_item
    }
  }
</script>

<style scoped>
.mainTabber{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color:#fcfcfc;
    box-shadow: 0 -0.3px 2px rgba(0,0,0,0.1);
}
</style>