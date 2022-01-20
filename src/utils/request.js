import Taro from "@tarojs/taro"
export function taroGet(getUrl, token){
  Taro.request({
    url: getUrl,
    method: "GET",
    header:{
      Authorization: token?token:"",
    }
  })
  .then((res)=>{
    return res.data
  })
}

export function taroPost(postUrl, payload){
  Taro.request({
    url: postUrl,
    method: "POST",
    data: payload
  })
  .then((res)=>{
    return res.data
  })
}