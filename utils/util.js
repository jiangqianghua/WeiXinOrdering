function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function req(url, data, cb, method = 'get') {
  console.log("req "+url);
  wx.request({
    url: url,
    data: data,
    method: 'get',
    header: { 'Content-Type': 'application/json' },
    success: function (res) {
      return typeof cb == "function" && cb(res.data)
    },
    fail: function () {
      return typeof cb == "function" && cb(false)
    }
  })
}

var cacheData = function (key, data, cb) {
  wx.setStorage({
    key: key,
    data: data,
    success: function (res) { console.log(res) },
    fail: function (res) { console.log(res) },
    complete: function (res) { console.log(res) },
  })
}

var getCacheDataSync = function(key){
  return wx.getStorageSync(key);
}

module.exports = {
  formatTime: formatTime,
  req: req,
  cacheData:cacheData,
  getCacheData: getCacheDataSync
}

