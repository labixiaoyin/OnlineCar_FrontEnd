<template>
  <view>
    <view class="logintitle">欢迎登录满满打车</view>
    <view>
      <input
        type="number"
        maxlength="11"
        placeholder="请输入用户名"
        class="inputNum"
        @input="getUsernme"
      />
      <input
        type="password"
        placeholder="请输入登录密码"
        class="inputpwd"
        @input="changeLoginColor"
      />
      <button
        class="loginBtn"
        :style="{ backgroundColor: loginColor }"
        @tap="login"
      >
        登录
      </button>
    </view>
    <view class="signText" @tap="toSingin">点击注册账号 或</view>
    <button class="wechatBtn" @tap="loginWechat">使用微信一键登录</button>
    <view class="foot">
      登录即表示您同意
      <view class="footText">《服务条款》</view>
    </view>
  </view>
</template>
<script>
import "./login.less";
import Taro from "@tarojs/taro";
import {
  set as setGlobalData,
  get as getGlobalData,
} from "../../utils/global_data";
import {baseUrl} from "../../utils/baseurl"
export default {
  data() {
    return {
      loginColor: "#ccc",
      userInfo: null,
      isLogin: false,
      userName: "",
      password: "",
    };
  },
  onload(){
    
  },
  methods: {
    changeLoginColor(e) {
      this.password = e.target.value;
      if (e.target.value.length != 0) {
        this.loginColor = "#FB841E";
      } else {
        this.loginColor = "#ccc";
      }
    },
    toSingin() {
      // navigateTo向下一级跳转，可以返回
      Taro.navigateTo({
        url: "/pages/login/sign/sign",
      });
    },
    getUsernme(e) {
      this.userName = e.target.value;
    },
    login() {
      console.log("请求登录");
      Taro.request({
        url: baseUrl+"travel/passenger/login",
        method: "POST",
        data: {
          account: this.userName,
          password: this.password,
        },
        // success(res){
        //   const token = res.data.data
        //   setGlobalData('token', token)
        //   Taro.setStorageSync('token', token)
        //   console.log(res.data);
        // }
      })
      .then((res) => {
        const token = res.data.data;
        setGlobalData("token", token);
        setGlobalData("isLogin", true)
        Taro.setStorageSync("token", token);
        Taro.redirectTo({url: '/pages/taxi/taxi'})
      })
      .catch((err)=>{
        console.log(err);
      });
    },
    loginWechat() {
      Taro.getUserProfile({
        desc: "用于完善用户资料", // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
        success: (res) => {
          console.log(res);
          setGlobalData("userInfo", res.userInfo);
          setGlobalData("isLogin", true);
          this.userInfo = getGlobalData("userInfo");
          this.isLogin = getGlobalData("isLogin");
          //redirectTo同级跳转，无法返回上一步
          Taro.redirectTo({ url: "/pages/taxi/taxi" });
        },
        fail: (err) => {
          console.log("获取用户信息失败");
        },
      });
    },
  },
};
</script>
