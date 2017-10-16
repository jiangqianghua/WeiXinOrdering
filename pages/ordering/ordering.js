// ordering.js

var util = require('../../utils/util.js');
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
    mealType:[{
      id:"1",
      name:"包子",
      },
      {
        id: "2",
        name: "汤类",
      },
      {
        id: "3",
        name: "硬菜",
      }],

      mealinfo:{}
      
  },

  requestMealCallBack:function(data){
    console.log('requestMealCallBack ' + data);
  },

  mealTypeClick:function(event){
   // console.log(event.target);
    var mealTypeId = event.target.dataset.mealtype ;
    util.req(
    "http://127.0.0.1:8080/Shop/shop/allFoods",
    { "shopId": mealTypeId }, 
    null,
    "post"
     );
    /** 
    var mealinfo = [{
      image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1498247596883&di=65625165d691a52a0563927ed4d7b115&imgtype=0&src=http%3A%2F%2Fimgup.100ye.com%2Fmnt%2Fimg2%2F0%2F1%2F77%2F1577%2Fnewsimage%2Fb8afd964938565cc518909b853bcdcac.png",
      name:"酱香包子",
      mothlyScalesNum:"20",
      onlineScaleNum:"8",
      price:"20"
    },{
        image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1498247596883&di=65625165d691a52a0563927ed4d7b115&imgtype=0&src=http%3A%2F%2Fimgup.100ye.com%2Fmnt%2Fimg2%2F0%2F1%2F77%2F1577%2Fnewsimage%2Fb8afd964938565cc518909b853bcdcac.png",
        name: "猪肉大葱大脖子包子",
        mothlyScalesNum: "20",
        onlineScaleNum: "3",
        price: "20"
    },{
        image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1498247596883&di=65625165d691a52a0563927ed4d7b115&imgtype=0&src=http%3A%2F%2Fimgup.100ye.com%2Fmnt%2Fimg2%2F0%2F1%2F77%2F1577%2Fnewsimage%2Fb8afd964938565cc518909b853bcdcac.png",
        name: "传统包子",
        mothlyScalesNum: "20",
        onlineScaleNum: "38",
        price: "20"
    }, {
      image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1498247596883&di=65625165d691a52a0563927ed4d7b115&imgtype=0&src=http%3A%2F%2Fimgup.100ye.com%2Fmnt%2Fimg2%2F0%2F1%2F77%2F1577%2Fnewsimage%2Fb8afd964938565cc518909b853bcdcac.png",
      name: "传统包子",
      mothlyScalesNum: "20",
      onlineScaleNum: "38",
      price: "20"
    }
      , {
      image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1498247596883&di=65625165d691a52a0563927ed4d7b115&imgtype=0&src=http%3A%2F%2Fimgup.100ye.com%2Fmnt%2Fimg2%2F0%2F1%2F77%2F1577%2Fnewsimage%2Fb8afd964938565cc518909b853bcdcac.png",
      name: "传统包子",
      mothlyScalesNum: "20",
      onlineScaleNum: "38",
      price: "20"
    }
      , {
        image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1498247596883&di=65625165d691a52a0563927ed4d7b115&imgtype=0&src=http%3A%2F%2Fimgup.100ye.com%2Fmnt%2Fimg2%2F0%2F1%2F77%2F1577%2Fnewsimage%2Fb8afd964938565cc518909b853bcdcac.png",
        name: "传统包子",
        mothlyScalesNum: "20",
        onlineScaleNum: "38",
        price: "20"
      }
      , {
        image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1498247596883&di=65625165d691a52a0563927ed4d7b115&imgtype=0&src=http%3A%2F%2Fimgup.100ye.com%2Fmnt%2Fimg2%2F0%2F1%2F77%2F1577%2Fnewsimage%2Fb8afd964938565cc518909b853bcdcac.png",
        name: "传统包子",
        mothlyScalesNum: "20",
        onlineScaleNum: "38",
        price: "20"
      }
    ];
    
  //  console.log("---" + mealinfo);
    this.setData({
      mealinfo:mealinfo
    });
    **/

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