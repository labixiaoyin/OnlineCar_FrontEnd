<template>
  <view>
    <view class="info">
      <view class="avatar">
        <image :src="userInfo.avatar" class="img" />
      </view>
      <view class="username">{{ userInfo.nickname }}</view>
    </view>
    <view class="middle">
      <view class="item">
        <image src="../images/personal.png" class="middle_image" />
        <text style="padding-left: 10px">个人资料</text>
        <image src="../images/right.png" class="arrow_right" />
      </view>
      <view class="item">
        <image src="../images/history.png" class="middle_image" />
        <text style="padding-left: 10px">历史订单</text>
        <image src="../images/right.png" class="arrow_right" />
      </view>
      <view class="item">
        <image src="../images/wallet.png" class="middle_image" />
        <text style="padding-left: 10px">钱包</text>
        <image src="../images/right.png" class="arrow_right" />
      </view>
      <view class="item_last">
        <image src="../images/config.png" class="middle_image" />
        <text style="padding-left: 10px">设置</text>
        <image src="../images/right.png" class="arrow_right" />
      </view>
    </view>
  </view>
</template>
<script>
import "./profile.less";
import {
  set as setGlobalData,
  get as getGlobalData,
} from "../../utils/global_data";
export default {
  data() {
    return {
      userInfo: {
        account: "",
        avatar: "../images/usericon.png",
        nickname: "用户名",
        pkId: 0,
      },
    };
  },
  onLoad() {
    this.userInfo = getGlobalData("userInfo");
  },
};
</script>