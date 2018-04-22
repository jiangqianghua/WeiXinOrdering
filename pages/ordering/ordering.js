// ordering.js

var util = require('../../utils/util.js');
var app = getApp();
var defaultIndex = 0 ;
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
    productList:[],
    currentProductist:[],
    totalPrice:0,
    shoppingCart:[],
    isShopCart:false
  },
  requestMealCallBack:function(data){
    console.log('requestMealCallBack ' + data);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    let _this = this ;
    wx.getSystemInfo({
      success: function (res) {
        //设置map高度，根据当前设备宽高满屏显示
        _this.setData({
          view: {
            height: res.windowHeight
          }

        })}});

    let shopingCart1 = this.getShopCartCacheData();
    if(shopingCart1 == undefined)
      shopingCart1 = [];

    let totalPrice1 = 0;
    for(let i = 0 ; i < shopingCart1.length ; i++){
      totalPrice1 += shopingCart1[i]['price'] * shopingCart1[i]['num'];
    }
    this.setData({
      shoppingCart: shopingCart1,
      totalPrice: totalPrice1
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
    let that = this ;
    util.req(
"http://172.30.215.2:8085/sell/buyer/product/list",
      '',
      function (data) {
        //console.log(data);
        let dataArr = data.data;
        let currentProductist1 = [];
        for(let i = 0 ; i < dataArr.length ; i++){
          if(i == defaultIndex){
            dataArr[i]['isSelected'] = true;
            currentProductist1 = dataArr[i]['foods'];
            }
          else
            dataArr[i]['isSelected'] = false;
        }

        that.setData({
          productList: dataArr,
          currentProductist: currentProductist1
        });
      },
      "get"
    );
  },

  bindTapType:function(event){
    let currentProductist1 = [];
    let type = event.currentTarget.dataset.producttype;
    let dataArr = this.data.productList;
    for (let i = 0; i < dataArr.length; i++) {
      if (dataArr[i]['type'] == type){
        dataArr[i]['isSelected'] = true;
        currentProductist1 = dataArr[i]['foods'];
      }
      else{
        dataArr[i]['isSelected'] = false;
      }
    }
    this.setData({
      productList: dataArr,
      currentProductist: currentProductist1
    });
  },

  bindTapAdd:function(event){
    let produceId = event.currentTarget.dataset.procudeid;
    let shoppingCart1 = this.data.shoppingCart ;
    let currentProductist1 = this.data.currentProductist ;
    let totalPrice1 = this.data.totalPrice ;
    if (this.isContainer(shoppingCart1, produceId)) {
      for (let j = 0; j < shoppingCart1.length; j++) {
        if (shoppingCart1[j]['id'] == produceId) {
          shoppingCart1[j]['num']++;
          totalPrice1 += shoppingCart1[j]['price'];
          break;
        }
      }
    }else{
      for (let i = 0; i < currentProductist1.length; i++) {
        if (produceId == currentProductist1[i]['id']) {
          shoppingCart1.push({ icon: currentProductist1[i]['icon'], id: produceId, num: 1, name: currentProductist1[i]['name'], price: currentProductist1[i].price });
          totalPrice1 += currentProductist1[i]['price'];
          break;
        }
      }
    }

    this.setData({
      shoppingCart: shoppingCart1,
      totalPrice: totalPrice1
    });
    this.saveShopCartCacheData();
  },

  bindTapReduc:function(event){
    let produceId = event.currentTarget.dataset.procudeid;
    let shoppingCart1 = this.data.shoppingCart;
    //let currentProductist1 = this.data.currentProductist;
    let totalPrice1 = this.data.totalPrice;
    //for (let i = 0; i < currentProductist1.length; i++) {
    //  if (produceId == currentProductist1[i]['id']) {
        if (this.isContainer(shoppingCart1, produceId)) {
          for (let j = 0; j < shoppingCart1.length; j++) {
            if (shoppingCart1[j]['id'] == produceId) {
              shoppingCart1[j]['num']--;
              totalPrice1 -= shoppingCart1[j]['price'];
              if (shoppingCart1[j]['num'] == 0)
                shoppingCart1.splice(j,1);
              this.setData({
                shoppingCart: shoppingCart1,
                totalPrice: totalPrice1
              });
              this.saveShopCartCacheData();
              break;
            }
          }
        }
    //  }
    //}
  },

  isContainer:function(arr,id){
    for(let k = 0 ; k < arr.length ; k++){
      if(arr[k]['id'] == id)
        return true ;
    }
    return false ;
  },

  saveShopCartCacheData:function(){
    util.cacheData("shopcart", this.data.shoppingCart);
  },

  getShopCartCacheData:function(){
    let shopCart1 = util.getCacheData("shopcart");
    return shopCart1 ;
  },
  bindTapShopCart:function(e){
    if (this.data.isShopCart){
      this.setData({
        isShopCart:false
      });
    }else{
      this.setData({
        isShopCart: true
      });
    }
  },

  bindTapSettlementBtn:function(e){
    wx.navigateTo({
      url: '../shopcart/shopcart'
    })
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