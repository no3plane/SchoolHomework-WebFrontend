<template>
  <el-container class="home-container">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    >
      <el-menu-item class="home_menu_item1" index="1">
        <template>
          <i class="el-icon-s-platform" style="color: #fff"></i>
          <span slot="title">农场管理系统</span>
        </template>
      </el-menu-item>
      <el-menu-item class="home_menu_item1" index="2" @click="showHome">
        <template>
          <i class="el-icon-s-home" style="color: #fff"></i>
          <span slot="title">首页</span>
        </template>
      </el-menu-item>
      <el-menu-item class="home_menu_item1" index="3" @click="shouShop">
        <template>
          <i class="el-icon-menu" style="color: #fff"></i>
          <span slot="title">商品发布</span>
        </template>
      </el-menu-item>
      <el-menu-item class="home_menu_item1" index="4" >
        <template>
          <i class="el-icon-s-order" style="color: #fff"></i>
          <span slot="title">订单列表</span>
        </template>
      </el-menu-item>
    </el-menu>
    <el-container>
      <el-header class="probably">
        <el-radio-group v-model="isCollapse">
          <i class="el-icon-s-fold" @click="yes(1)" v-if="draw1"></i>
          <i class="el-icon-s-unfold" @click="yes(2)" v-if="draw"></i>
        </el-radio-group>
        <div>
          <div class="header_class">
            <i class="el-icon-question"></i>
            <i class="el-icon-message-solid"></i>
            <img
              src="../assets/images/managerHeader.png"
              class="header_image_div"
              @click="userAvatar"
            />
            <el-button
              type="danger"
              size="mini"
              class="exitLogin"
              @click="signOutUser"
              v-if="signOut"
              >退出登录</el-button
            >
            <i class="el-icon-caret-bottom"></i>
          </div>
        </div>
      </el-header>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      draw: false,
      draw1: true,
      signOut: false,
    };
  },
  methods: {
    //跳转页面
    showHome() {
      this.$router.push("/Home");
    },
   shouShop()
   {
     this.$router.push("/Shop");
   },
    //点击头像
    userAvatar() {
      this.signOut = !this.signOut;
    },
    //点击退出登陆
    signOutUser() {},
    //点击展开/收起左侧菜单栏
    yes(num) {
      if (num == 1) {
        this.draw = true;
        this.draw1 = false;
        this.isCollapse = true;
      }
      if (num == 2) {
        this.draw = false;
        this.draw1 = true;
        this.isCollapse = false;
      }
    },
    //左侧菜单栏
    handleOpen(key, keyPath) {
      alert(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="less" scoped>
.el-menu-vertical-demo {
  height: 100%;
  background: #474d76;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 230px;
  height: 100%;
  background: #474d76;
}
.el-main {
  background-color: #eaeef7;
}
.el-aside {
  background-color: #474d76;
  height: 100%;
}
.el-header {
  line-height: 60px;
  display: flex;
  justify-content: flex-end;
}
.el-menu {
  border-right: none;
}
.home-container {
  height: 100%;
}
.home_menu_item {
  background-color: #a3d8c5;
}
.home_menu_item1 {
  background-color: #474d76;
  color: #fff;
}
.home_menu_item1:hover {
  background: linear-gradient(270deg, #7798e7 0%, #425fca 100%);
}
.probably {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 60px;
}
.el-icon-s-fold {
  color: #474d76;
  font-size: 30px;
  float: left;
  margin-top: 10px;
}
.el-icon-s-unfold {
  color: #474d76;
  font-size: 30px;
  float: left;
  margin-top: 10px;
}
.header_class {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-right: 80px;
  font-size: 15px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #666666;
  line-height: 60px;
  width: 250px;
  margin-top: 7px;
}
.header_class img {
  border-radius: 50%;
}
.el-icon-question {
  font-size: 26px;
  color: #aeb4db;
}
.el-icon-message-solid {
  font-size: 26px;
  color: #aeb4db;
}
.el-icon-caret-bottom {
  font-size: 18px;
  color: #aeb4db;
}
.exitLogin {
  position: absolute;
  top: 5.5%;
  right: 5%;
}
.header_image_div {
  width: 52px;
  height: 52px;
  cursor: pointer;
}
</style>