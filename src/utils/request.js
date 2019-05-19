const request = (path,method ='GET',data={}) => {
  let url = 'https://www.zhengzhicheng.cn/api/public/v1/'+ path
  return new Promise(function(resolve,reject) {
    mpvue.request({
      url: url,
      method:method,
      data: data,
      success: function (res) {
        resolve(res)
      }
    })
  })
}
export default request