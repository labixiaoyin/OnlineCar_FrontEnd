<template>
  <view>
    <view class="navbar" @tap="toProfile">
      <view class="userIcon">
        <image src="../images/usericon.png" style="width: 30px; height: 30px" />
      </view>
      <view class="navbarText">呼叫车辆</view>
    </view>
    <map
      id="map"
      :longitude="longitude"
      :latitude="latitude"
      scale="14"
      :show-location="true"
      @regionchange="regionchange"
      @markertap="markertap"
    >
      <view class="return">
        <image
          src="../images/current-location.png"
          style="width: 30px; height: 30px"
          @tap="toCurrent"
        ></image>
      </view>
      <!-- 打车前 -->
      <view class="container" v-show="status == 0">
        <view class="from" @tap="chooseStart">
          <image src="../images/circle.png" style="width: 24px; height: 24px" />
          <text style="padding-left: 10px">{{ startPlace.name }}</text>
        </view>
        <view class="to">
          <image
            src="../images/toplace.png"
            style="width: 24px; height: 24px"
          />
          <text style="padding-left: 10px" @tap="chooseEnd">{{
            endPlace.name
          }}</text>
        </view>
        <view class="predict">预估花费：{{cost}}元</view>
        <view class="confirm">
          <button class="btn" @tap="confirmOrder" v-show="isClick">
            点击确认下单
          </button>
          <button class="btn" style="background-color: #ccc" v-show="!isClick">
            点击确认下单
          </button>
        </view>
      </view>
      <!-- 司机接单前 -->
      <view class="container" v-show="status == 1">
        <view class="calling"> 正在全力为您呼叫... </view>
        <view class="confirm-place">
          请确认上车地点
          <text
            style="
              width: 60%;
              color: #fb841e;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            "
            >{{ startPlace.name }}</text
          >
        </view>
        <view class="cancel-order">
          <button class="btn" @tap="cancelOrder">取消订单</button>
        </view>
      </view>
      <!-- 司机接单后到达前 -->
      <view class="container" v-show="status == 2">
        <view class="driver-info">
          <view class="text-info">
            <view style="font-size: 22px; color: #000">{{
              driver.licenseTag
            }}</view>
            <view style="font-size: 16px; color: rgb(94, 94, 94)">{{
              driver.carInfo
            }}</view>
            <view style="font-size: 14px"
              >{{ driver.name }} {{ driver.score }}
              {{ driver.orderNum }}单</view
            >
          </view>
          <view class="img-info">
            <image
              :src="driver.avatar"
              style="width: 50px; height: 50px; border-radius: 50%"
            />
          </view>
        </view>
        <view class="coming">
          司机正在全力赶来，请避开拥挤人群等候
          <view class="tips"
            >请前往
            <text style="color: #fb841e">{{ startPlace.name }}</text>
            上车
          </view>
        </view>
      </view>
      <!-- 司机达到后 -->
      <view class="container" v-show="status == 3">
        <view class="driver-info">
          <view class="text-info">
            <view style="font-size: 22px; color: #000">{{
              driver.licenseTag
            }}</view>
            <view style="font-size: 16px; color: rgb(94, 94, 94)">{{
              driver.carInfo
            }}</view>
            <view style="font-size: 14px"
              >{{ driver.name }} {{ driver.score }}
              {{ driver.orderNum }}单</view
            >
          </view>
          <view class="img-info">
            <image
              :src="driver.avatar"
              style="width: 50px; height: 50px; border-radius: 50%"
            />
          </view>
        </view>
        <view class="coming">
          正在前往目的地
          <view class="tips">请系好安全带，佩戴好口罩，安全出行</view>
        </view>
      </view>
      <!-- 到达目的地 -->
      <view class="container" v-show="status == 4">
        <view class="calling"> 已到达目的地 </view>
        <view class="confirm-place">
          从
          <text
            style="
              width: 40%;
              color: #fb841e;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            "
            >{{ startPlace.name }}</text
          >
          到
          <text
            style="
              width: 40%;
              color: #fb841e;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            "
            >{{ endPlace.name }}</text
          >
        </view>
        <view class="cancel-order">
          <button class="btn" @tap="payMoney">点击支付费用 {{}}元</button>
        </view>
      </view>
    </map>
  </view>
</template>
<script>
import "./taxi.less";
import Taro from "@tarojs/taro";
import {
  set as setGlobalData,
  get as getGlobalData,
} from "../../utils/global_data";
import { baseUrl } from "../../utils/baseurl";
import { getCost } from "../../utils/utils";
export default {
  data() {
    return {
      // 是否取消订单
      isCancel: false,
      // status代表状态 0：打车前；1：等待司机接单；2：司机接单后到达前；3：司机到达后
      status: 0,
      latitude: 23.099994,
      longitude: 113.32452,
      passengerId: 1,
      isClick: false,
      timeId_pick: "",
      timeId_arrive: "",
      cost: 0,
      markers: [
        {
          id: 0,
          iconPath: "",
          latitude: 23.099994,
          longitude: 113.32452,
          width: 50,
          height: 50,
        },
      ],
      startPlace: {
        address: "起点",
        name: "起点",
        latitude: 0,
        longitude: 0,
      },
      endPlace: {
        address: "您到哪下车",
        name: "您到哪下车",
        latitude: 0,
        longitude: 0,
      },
      driver: {
        id: 0,
        name: "王平",
        score: "5.0",
        licenseTag: "苏AD76571",
        carInfo: "白色 长安逸动新能源",
        orderNum: 2000,
        avatar: "../images/usericon.png",
      },
    };
  },
  onLoad() {
    this.toCurrent();
    this.getCurrentUser();
  },
  methods: {
    toProfile() {
      if (!getGlobalData("isLogin")) {
        Taro.redirectTo({
          url: "/pages/login/login",
        });
      } else {
        Taro.redirectTo({
          url: "/pages/profile/profile",
        });
      }
    },
    getCurrentUser() {
      const token = getGlobalData("token");
      Taro.request({
        url: baseUrl.passenger + "travel/passenger/currentPAX",
        method: "GET",
        header: {
          Authorization: token,
        },
      }).then((res) => {
        console.log(res.data);
        // this.passengerId = res.data
        // 登录成功，修改登录状态以及用户信息
        if (res.data.success) {
          setGlobalData("isLogin", true);
          setGlobalData("userInfo", res.data.data);
          this.passengerId = res.data.data.pkId;
        } else {
          // 登录失败，清空token并修改登录状态
          Taro.setStorageSync("token", "");
          setGlobalData("isLogin", false);
        }
      });
    },
    // 移动区域 type: begin/end
    regionchange(e) {
      console.log(e.type);
    },
    // 点击标记点
    markertap(e) {
      console.log("markertap:", e.detail.markerId);
    },
    // 回到当前所在地点
    toCurrent() {
      var that = this;
      Taro.getLocation({
        type: "wgs84",
        success(res) {
          that.latitude = res.latitude;
          that.longitude = res.longitude;
          that.$set(that.markers, 0, {
            id: 0,
            iconPath: "",
            latitude: that.latitude,
            longitude: that.longitude,
            width: 50,
            height: 50,
          });
        },
      });
    },
    chooseStart() {
      var that = this;
      Taro.chooseLocation({
        success(res) {
          console.log("起点", res);
          // "key" 记得加引号
          that.$set(that.startPlace, "name", res.name);
          that.$set(that.startPlace, "address", res.address);
          that.$set(that.startPlace, "latitude", res.latitude);
          that.$set(that.startPlace, "longitude", res.longitude);
          if (
            that.startPlace.latitude != 0 &&
            that.startPlace.longitude != 0 &&
            that.endPlace.latitude != 0 &&
            that.endPlace.longitude != 0
          ) {
            that.isClick = true;
            that.cost = getCost(that.startPlace.latitude,that.startPlace.longitude,that.endPlace.latitude,that.endPlace.longitude)
          }
          console.log("this.isClick", that.isClick);
        },
      });
    },
    chooseEnd() {
      var that = this;
      Taro.chooseLocation({
        success(res) {
          console.log("终点", res);
          that.$set(that.endPlace, "name", res.name);
          that.$set(that.endPlace, "address", res.address);
          that.$set(that.endPlace, "latitude", res.latitude);
          that.$set(that.endPlace, "longitude", res.longitude);
          if (
            that.startPlace.latitude != 0 &&
            that.startPlace.longitude != 0 &&
            that.endPlace.latitude != 0 &&
            that.endPlace.longitude != 0
          ) {
            that.isClick = true;
            that.cost = getCost(that.startPlace.latitude,that.startPlace.longitude,that.endPlace.latitude,that.endPlace.longitude)
          }
          console.log("this.isClick", that.isClick);
        },
      });
    },
    // 点击确认下单
    confirmOrder() {
      this.status = 1;
      this.isCancel = false;
      // 发送下单请求
      const payload = {
        passengerId: this.passengerId,
        beginName: this.startPlace.name,
        beginLng: this.startPlace.longitude,
        beginLat: this.startPlace.latitude,
        endName: this.endPlace.name,
        endLng: this.endPlace.longitude,
        endLat: this.endPlace.latitude,
      };
      Taro.request({
        url: baseUrl.platform + "travel/order/create",
        method: "POST",
        data: payload,
      }).then((res) => {
        console.log("下单后返回", res.data);
        // 暂时先这么写，如果存在进行中的订单
        if (res.data.data == "下单成功") {
          // 定时查询查看接单情况
          clearInterval(this.timeId_pick);
          this.timeId_pick = setInterval(() => {
            this.getResponse();
          }, 2000);
        } else if (res.data.data == "存在进行中的订单") {
          this.showTips();
        }
      });
    },
    // 查询接单情况
    getResponse() {
      console.log("baseUrl.platform", baseUrl.platform);
      Taro.request({
        url: baseUrl.platform + "travel/push/passenger",
        method: "GET",
        data: {
          passengerId: this.passengerId,
        },
      }).then((res) => {
        console.log("接单结果", res.data);
        const data = res.data;
        if (data.success) {
          this.$set(this.driver, "id", data.data.account);
          this.$set(this.driver, "name", data.data.nickname);
          this.$set(this.driver, "licenseTag", data.data.carNum);
          this.$set(this.driver, "avatar", data.data.avatar);
          this.$set(
            this.driver,
            "carInfo",
            data.data.carColor + "" + data.data.carBrand
          );
          this.status = 3;
          clearInterval(this.timeId_pick);
          clearInterval(this.timeId_arrive);
          this.timeId_arrive = setInterval(() => {
            this.getIsArrival();
          }, 2000);
        }
      });
    },
    // 查询到达目的地
    getIsArrival() {
      Taro.request({
        url: baseUrl.platform + "travel/push/getCompleteMessage",
        method: "GET",
        data: {
          passengerId: this.passengerId,
        },
      }).then((res) => {
        console.log("完成订单", res.data);
        if (res.data.code == 200) {
          clearInterval(this.timeId_arrive);
          Taro.showToast({
            title: "订单完成",
            icon: "success",
            duration: 2000,
          });
          this.status = 0;
          Taro.redirectTo({url:"/pages/taxi/taxi"})
        }
      });
    },
    // 取消订单
    cancelOrder() {
      this.isCancel = true;
      Taro.request({
        url: baseUrl.platform + "travel/order/cancel",
        method: "POST",
        data: {
          passengerId: 1,
        },
      }).then((res) => {
        this.status = 0;
        clearInterval(this.timeId_pick);
      });
    },
    // 显示提示框
    showTips() {
      var that = this;
      Taro.showModal({
        title: "提示",
        content: "您有正在进行中的订单，点击任意按钮取消进行中的订单",
        success: function (res) {
          if (res.confirm) {
            that.cancelOrder();
          } else if (res.cancel) {
            that.cancelOrder();
          }
        },
      });
    },
    payMoney() {},
  },
};
</script>
