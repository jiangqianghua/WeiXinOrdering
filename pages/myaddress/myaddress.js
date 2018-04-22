// pages/myaddress/myaddress.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    myAddress:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let myAddress1 = wx.getStorageSync("myaddress");
    if(myAddress1 == undefined || 
    myAddress1 == ''){
      // 跳转到添加
      wx.navigateTo({ url: "../adduserinfo/adduserinfo" });
    }
    else{
      this.setData({
        myAddress:myAddress1
      });
    }
  },

  bindTapUserInfo:function(e){
    let index = e.currentTarget.dataset.index;
    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1];  //当前页面
    var prevPage = pages[pages.length - 2]; //上一个页面

    //直接调用上一个页面的setData()方法，把数据存到上一个页面中去
    let name1 = this.data.myAddress[index].name;
    let phone1 = this.data.myAddress[index].phone;
    let address1 = this.data.myAddress[index].address;
    prevPage.setData({
      userInfo:{
        address: address1,
        name: name1,
        phone: phone1
      }
    });
    wx.navigateBack();
  },

  addAddressBindTap:function(e){
    // 跳转到添加
    wx.navigateTo({ url: "../adduserinfo/adduserinfo" });
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