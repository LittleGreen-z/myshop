const request = (url) => {
  return new Promise(function(resolve,reject) {
    mpvue.request({
      url: url,
      success: function (res) {
        resolve(res)
      }
    })
  })
}
export default request