<template>
  <view>
    <view class="title">欢迎注册满满打车</view>
    <view>
      <input
        type="number"
        maxlength="11"
        placeholder="请输入用户名"
        class="inputNum"
        @input="getUsername"
      />
      <input
        type="password"
        placeholder="请输入登录密码"
        class="inputpwd"
        @input="getPsd"
      />
      <button class="loginBtn" style="backgroundColor: #FB841E" @tap="singin">
        注册
      </button>
    </view>
  </view>
</template>
<script>
import "./sign.less";
export default {
  data() {
    return {
      areaCode: ["86", "886", "00", "853"],
      index: 0,
      userName: '',
      password: ''
    };
  },
  methods: {
    bindPickerChange(e) {
      this.index = e.detail.value;
    },
    getUsername(e){
      this.userName = e.target.value
    },
    getPsd(e){
      this.password = e.target.value
    },
    singin(){
      console.log("请求登录");
    }
  },
};
</script>
