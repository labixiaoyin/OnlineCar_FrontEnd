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
      :markers="markers"
      :show-location="true"
      @regionchange="regionchange"
      @markertap="markertap"
    >
      <view class="return" @tap="toCurrent">
        <image
          src="../images/current-location.png"
          style="width: 30px; height: 30px"
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
        <view class="predict">预估花费：--元</view>
        <view class="confirm">
          <button class="btn" @tap="confirmOrder">点击确认下单</button>
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
          <button class="btn" @tap="cancelOrder">点击取消订单</button>
        </view>
      </view>
      <!-- 司机接单后到达前 -->
      <view class="container" v-show="status == 2">
        <view class="driver-info">
          <view class="text-info">
            <view style="font-size: 22px; color: #000">{{driver.licenseTag}}</view>
            <view style="font-size: 16px; color: rgb(94, 94, 94)">{{driver.carInfo}}</view>
            <view style="font-size: 14px">{{driver.name}} {{driver.score}} {{driver.orderNum}}单</view>
          </view>
          <view class="img-info">
            <image :src="driver.avatar" style="width: 50px;height: 50px;border-radius: 50%;" />
          </view>
        </view>
        <view class="coming">
          司机正在全力赶来，请避开拥挤人群等候
          <view class="tips">请前往
            <text style="color: #fb841e">{{startPlace.name}}</text>
            上车
          </view>
        </view>
      </view>
      <!-- 司机达到后 -->
      <view class="container" v-show="status == 3">
        <view class="driver-info">
          <view class="text-info">
            <view style="font-size: 22px; color: #000">{{driver.licenseTag}}</view>
            <view style="font-size: 16px; color: rgb(94, 94, 94)">{{driver.carInfo}}</view>
            <view style="font-size: 14px">{{driver.name}} {{driver.score}} {{driver.orderNum}}单</view>
          </view>
          <view class="img-info">
            <image :src="driver.avatar" style="width: 50px;height: 50px;border-radius: 50%;" />
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
import { baseUrl } from "../../utils/baseurl"
const mapCtx = Taro.createMapContext("map");
export default {
  data() {
    return {
      // status代表状态 0：打车前；1：等待司机接单；2：司机接单后到达前；3：司机到达后
      status: 0,
      latitude: 23.099994,
      longitude: 113.32452,
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
        latitude: 23.099994,
        longitude: 113.32452,
      },
      endPlace: {
        address: "您到哪下车",
        name: "您到哪下车",
        latitude: 23.099994,
        longitude: 113.32452,
      },
      driver: {
        id: 0,
        name: '王平',
        score: '5.0',
        licenseTag: '苏AD76571',
        carInfo: '白色 长安逸动新能源',
        orderNum: 2000,
        avatar: '../images/usericon.png'
      }
    };
  },
  onLoad() {
    this.toCurrent();
    this.getCurrentUser();
    console.log("baseUrl", baseUrl);
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
    getCurrentUser(){
      const token = getGlobalData('token')
      Taro.request({
        url: baseUrl+'travel/passenger/currentPAX',
        method: 'GET',
        header:{
          'Authorization': token
        }
      })
      .then((res)=>{
        console.log(res.data);
        setGlobalData('isLogin', true)
      })
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
        },
      });
    },
    // 点击确认下单
    confirmOrder() {
      this.status = 1;
      // 发送下单请求
      // 定时查询查看接单情况
    },
    // 取消订单
    cancelOrder() {
      this.status = 0;
    },
    payMoney(){},
  },
};
</script>
