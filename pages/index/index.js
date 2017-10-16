//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    userOperate:[{
      icon:"../../images/home.png",
      text:"当面支付",
      type:"gotopPayment"
    },{
        icon: "../../images/home.png",
        text: "点餐",
        type: "gotoOrdering"
    },{
      icon: "../../images/home.png",
      text: "团购",
      type: "gotoTuanGou"
    },
    {
      icon: "../../images/home.png",
      text: "我的订单",
      type: "gotoMyOrder"
    },
    {
      icon: "../../images/home.png",
      text: "导航前往",
      type: "gotoNavigation"
    },
    {
      icon: "../../images/home.png",
      text: "推荐好友",
      type: "gotoShare"
    },
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  gotoDemo:function(){
    wx.navigateTo({
      url: '../demo/demo'
    })
  },
  gotoOrdering:function(events){
    console.log(events.target);
    wx.navigateTo({
      url: '../ordering/ordering'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
