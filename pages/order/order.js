// order.js
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      // 加载shopCart缓存数据
    let shopCart1 = this.getShopCartCacheData();
    if(shopCart1 == undefined)
      shopCart1 = [];
    this.setData({
      shopCart:shopCart1
    });
  },

  getShopCartCacheData: function () {
    let shopCart1 = util.getCacheData("shopcart");
    return shopCart1;
  },


})