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
                            <div contenteditable="true" class="inpt">{{ userName }}</div>
                        </div>
                        <div class="form_item_infos">
                            <div class="password-a">密码</div>
                            <div contenteditable="true" class="inpts">{{ password }}</div>
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
                url: "/GetMyFavorite",
                data: { userId: "admin", passWord: "123" },
            })
                .then((res) => {
                    debugger;
                    if (res) {
                        //調轉到首頁
                        this.$router.push("/Home");
                    }
                })
                .catch(() => { });
        },
    },
};
</script>

<style scoped>
.total_div_login {
    background: url("../src/assets/images/bei.png") no-repeat;
    background-size: 100%;
    position: relative;
}

/* 登录表 */
.login {
    display: flex;
    position: absolute;
    top: 20%;
    left: 25%;
}

.img img {
    width: 500px;
    height: 626px;
}

.white {
    background-color: #fff;
    height: 626px;
    width: 500px;
}

.name {
    width: 170px;
    height: 45px;
    font-size: 32px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #474D76;
    line-height: 45px;
    margin: 10% auto;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.form_item_info {
    height: 70px;
    line-height: 20px;
    margin-bottom: 15px;
    margin-top: 15px !important;
}

.form_item_infos {
    height: 50px;
    line-height: 15px;
}

.inpt {
    border-bottom: 1px solid #e0e0e0 !important;
    width: 296px;
    min-height: 25px;
    height: 25px;
    outline: 0px;
    margin-top: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #474D76;
}

.inpts {
    border-bottom: 1px solid #e0e0e0 !important;
    width: 296px;
    min-height: 20px;
    height: 20px;
    outline: 0px;
    margin-top: 10px;
    -webkit-text-security: disc;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #474D76;
}

.user-name {
    color: #999;
    font-size: 15px;
}

.password-a {
    color: #999;
    font-size: 15px;
}

.forget {
    width: 296px;
    display: flex;
    justify-content: space-between;
    margin: 10px auto;
}

.selects {
    display: flex;
    width: 31%;
}

.radios {
    margin-right: 6px;
    margin-top: 4px;
}

.forget-s {
    font-size: 15px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #474D76;
}

.remember {
    color: #999;
    font-size: 15px;
}

.content {
    width: 50%;
    margin-top: 15%;
    margin-left: 20%;
    margin-bottom: 8%;
}

.sign {
    width: 296px;
    height: 32px;
    background: #474D76;
    color: #fff;
    text-align: center;
    padding-top: 10px;
    margin: 0 auto;
}
</style>