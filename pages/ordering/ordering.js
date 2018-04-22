// ordering.js

var util = require('../../utils/util.js');
var app = getApp();
var defaultIndex = 1 ;
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
 
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let that = this ;
    util.req(
"http://192.168.1.102:8085/sell/buyer/product/list",
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
    for(let i = 0 ; i < currentProductist1.length ; i++){
      if (produceId == currentProductist1[i]['id']){
        if (this.isContainer(shoppingCart1, produceId)){
          for(let j = 0 ;j < shoppingCart1.length ; j++){
            if (shoppingCart1[j]['id'] == produceId){
              shoppingCart1[j]['num']++;
              shoppingCart1[j]['price'] += currentProductist1[i]['price'];
              totalPrice1 += currentProductist1[i]['price'];
              break;
            }
          }
        }
        else{
          shoppingCart1.push({ id: produceId, num: 1, name: currentProductist1[i]['name'], price: currentProductist1[i].price});
          totalPrice1 += currentProductist1[i]['price'];
        }
        this.setData({
          shoppingCart: shoppingCart1,
          totalPrice: totalPrice1
        });
        break;
      }
    }
  },

  bindTapReduc:function(event){
    let produceId = event.currentTarget.dataset.procudeid;
    let shoppingCart1 = this.data.shoppingCart;
    let currentProductist1 = this.data.currentProductist;
    let totalPrice1 = this.data.totalPrice;
    for (let i = 0; i < currentProductist1.length; i++) {
      if (produceId == currentProductist1[i]['id']) {
        if (this.isContainer(shoppingCart1, produceId)) {
          for (let j = 0; j < shoppingCart1.length; j++) {
            if (shoppingCart1[j]['id'] == produceId) {
              shoppingCart1[j]['num']--;
              shoppingCart1[j]['price'] -= currentProductist1[i]['price'];
              totalPrice1 -= currentProductist1[i]['price'];
              if (shoppingCart1[j]['num'] == 0)
                shoppingCart1.splice(j,1);
              this.setData({
                shoppingCart: shoppingCart1,
                totalPrice: totalPrice1
              });
              break;
            }
          }
        }
      }
    }
  },

  isContainer:function(arr,id){
    for(let k = 0 ; k < arr.length ; k++){
      if(arr[k]['id'] == id)
        return true ;
    }
    return false ;
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