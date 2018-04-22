// pages/adduserinfo/adduserinfo.js
var QQMapWX = require('../../utils/qqmap-wx-jssdk.js');
var qqmapsdk = new QQMapWX({
  key: 'ACLBZ-ZDZ63-I2T3G-YB2JM-HCZOS-S2FQU' // 必填
});
var app = getApp();
Page({
  data: {
    map_width: 380,
    map_height: 380,
    longitude: 0,
    latitude: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    //set the width and height
    // 动态设置map的宽和高
    wx.getSystemInfo({
      success: function (res) {
        console.log('getSystemInfo');
        console.log(res.windowWidth);
        that.setData({
          map_width: res.windowWidth
          , map_height: res.windowWidth
          , controls: [{
            id: 1,
            iconPath: '../../images/mappostion.png',
            position: {
              left: res.windowWidth / 2 - 8,
              top: res.windowWidth / 2 - 16,
              width: 30,
              height: 30
            },
            clickable: true
          }]
        })
      }
    })

    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        var latitude1 = res.latitude
        var longitude1 = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy
        that.setData({
          latitude: latitude1,
          longitude: longitude1,
          markers: [{
            id: "1",
            latitude: latitude1,
            longitude: longitude1,
            width: 50,
            height: 50,
            iconPath: "../../images/mappostion.png",
            title: "哪里"
          }],
          circles: [{
            latitude: latitude1,
            longitude: longitude1,
            color: '#FF0000DD',
            fillColor: '#7cb5ec88',
            radius: 3000,
            strokeWidth: 1
          }]
        });

        that.getMapName(latitude1, longitude1);
      }
    })
  },

  getMapName: function (latitude1, longitude1) {
    qqmapsdk.reverseGeocoder({
      location: {
        latitude: latitude1,
        longitude: longitude1
      },
      success: function (addressRes) {
        var address = addressRes.result.formatted_addresses.recommend;
        console.log(address);
      }
    })
  },
  regionchange: function (e) {
    // 地图发生变化的时候，获取中间点，也就是用户选择的位置
    if (e.type == 'end') {
      this.getLngLat()
    }
  },
  getLngLat: function () {
    var that = this;
    this.mapCtx = wx.createMapContext("map4select");
    this.mapCtx.getCenterLocation({
      success: function (res) {

        that.setData({
          longitude: res.longitude
          , latitude: res.latitude
          , markers: [
            {
              id: 0
              , iconPath: "../../images/mappostion.png"
              , longitude: res.longitude
              , latitude: res.latitude
              , width: 30
              , height: 30
            }
          ]
        })

        that.getMapName(that.data.latitude, that.data.longitude);

      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})