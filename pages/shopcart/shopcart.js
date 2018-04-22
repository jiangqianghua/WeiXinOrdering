// pages/shopcart/shopcart.js
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopCart: [],
    // userInfo:{name:'jiang',phone:'15801523721',address:'北京公益西桥'}
    userInfo:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 从缓存中获取地址列表
    let userInfolist = wx.getStorageSync("myaddress");
    if (userInfolist != undefined && userInfolist.length > 0){
      let userInfo1 = userInfolist[0];
      this.setData({
        userInfo:userInfo1
      });
  }
    // 加载shopCart缓存数据
    let shopCart1 = this.getShopCartCacheData();
    if (shopCart1 == undefined)
      shopCart1 = [];
    this.setData({
      shopCart: shopCart1
    });
  },
  getShopCartCacheData: function () {
    let shopCart1 = util.getCacheData("shopcart");
    return shopCart1;
  },

  bindTapAddUserInfo:function(e){
    wx.navigateTo({ url:"../myaddress/myaddress"}) ;
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