<template>
    <div>
        <div class="total_div_login" :style="conheight">
            <!-- 登录表 -->
            <div class="login">
                <div class="img"><img src="../assets/images/lan.png"></div>
                <div class="white">
                    <div class="name">Sign &nbsp; in</div>
                    <div class="content">
                        <div class="form_item_info">
                            <div class="user-name">用户名</div>
                            <div contenteditable="true" class="inpt">{{userName}}</div>
                        </div>
                        <div class="form_item_infos">
                            <div class="password-a">密码</div>
                            <div contenteditable="true" class="inpts">{{password}}</div>
                        </div>
                        <div class="forget">
                            <div class="forget-s">忘记密码</div>
                            <div class="selects">
                                <el-radio v-model="radio" class="radios"></el-radio>
                                <div class="remember">记住密码</div>
                            </div>
                        </div>

                    </div>
                    <div class="sign" @click="login">登录</div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import request from "../util/request";
export default {
    created() {
        window.addEventListener("resize", this.getHeight);
        this.getHeight();
    },
    data() {
        return {
            radio: "1",
            userName: "",
            password: "",
            conheight: {
                height: "",
            },
        };
    },
    methods: {
        getHeight() {
            this.conheight.height = window.innerHeight - 0 + "px";
        },

        //登录
        login() {
            request({
                method: "post",
                url:"/GetMyFavorite",
                data: { userId: "admin", passWord: "123" },
            })
                .then((res) => {
                    debugger;
                    if (res) {
                        //調轉到首頁
                        this.$router.push("/Home");
                    }
                })
                .catch(() => {});
        },
    },
};
</script>

<style lang="less" scoped>
@import url("../assets/css/Login.css");
</style>