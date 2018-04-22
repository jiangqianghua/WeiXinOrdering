
var app = getApp();
var myAddress ;
Page({
  data: {
    address:'',
    name:'',
    phone:''

  },

  bindTapMappostion:function(e){
    wx.navigateTo({ url: "../map/map" });
  },

  addUserInfoBindTap:function(e){
    if(this.data.name.length > 0 &&
      this.data.phone.length == 11 &&
      this.data.address.length > 0){

        var pages = getCurrentPages();
        var currPage = pages[pages.length - 1];  //当前页面
        var prevPage = pages[pages.length - 2]; //上一个页面

        //直接调用上一个页面的setData()方法，把数据存到上一个页面中去
        let name1 = this.data.name ; 
        let phone1 = this.data.phone ; 
        let address1 = this.data.address ;
        let userObj = {
          name:name1,
          phone:phone1,
          address:address1
        };
        // 从内存中获取到数据

        let myAddress1 = wx.getStorageSync("myaddress");
        if (myAddress1 == undefined ||
          myAddress1 == '') {
          // 跳转到添加
          myAddress1 = [];
        }
        myAddress1.push(userObj);

        wx.setStorage({
          key: 'myaddress',
          data: myAddress1
        });

        prevPage.setData({
          myAddress: myAddress1
        });
        wx.navigateBack();
      }
  },

  nameBindInput:function(e){
    this.setData({
      name: e.detail.value
    });
  },

  phoneBindInput:function(e){
    this.setData({
      phone: e.detail.value
    });
  },

  addressBindInput:function(e){
    this.setData({
      address : e.detail.value 
    });
    
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