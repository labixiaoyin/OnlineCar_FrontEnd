<template>
  <view>
    <view class="title">请输入您的手机号码</view>
    <view class="phoneNum">
      <picker @bindchange="bindPickerChange" :value="index" :range="areaCode" class="picker">
        +{{areaCode[index]}}
      </picker>
      <input type="number" maxlength="11" placeholder="请输入您的手机号" class="numInput"/>
    </view>
  </view>
</template>
<script>
import "./sign.less"
export default {
  data(){
    return{
      areaCode:['86','886','00','853'],
      index: 0
    }
  },
  methods:{
    bindPickerChange(e){
      this.index = e.detail.value
    }
  }
}
</script>
