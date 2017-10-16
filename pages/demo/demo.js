var app = getApp()
var initdata = "first line \n second line";
var extraLine=[];
Page({
  data: {
    title: 'demo',
    iconSize:[20,30,40,50,60],
    text:initdata
  },

add:function(e){
  extraLine.push("add line");
  this.setData({
    text:initdata+"\n"+extraLine.join('\n')
  })
},

remove: function (e) {
    extraLine.pop();
    this.setData({
      text: initdata + "\n" + extraLine.join('\n')
    })
  }

})