//index.js
//获取应用实例
const app = getApp()
var numAi = 0;
var timer;
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    ishink:false,
    isselect:false,
    imageAiScr: '',
    //石头剪刀布图片数组
    srcs: [
      '../../images/shidou.png',
      '../../images/jiandao.png',
      '../../images/bu.png'
    ]
  },
  timerGo() {
    timer = setInterval(this.move, 100);
  },
  submitbtn: function() {
    console.log(this.data.isselect);
    if (this.data.isselect == true){
      setTimeout(this.shop2, 2000);
    }else{
      wx.showToast({
        title: '请先阅读活动规则',
        icon: 'none',
        duration: 2000
      })
    }
    
  },
  shop2(){
    clearInterval(timer)
    setTimeout(this.tipson, 500);
  },
  tipson(){
    this.setData({
      ishink: true,
      isresult: 1
    })
  },
  hclose: function(){
    this.setData({
      ishink: false,
      isresult: 0
    }) 
    this.timerGo()
  },

  move() {
    //如果大于等于3，重置
    if (numAi >= 3) {
      numAi = 0;
    }
    this.setData({
      //获取数组中Ai的，石头剪刀布相应的图片。
      imageAiScr: this.data.srcs[numAi],
    })
    numAi++;
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    this.timerGo();
  },
  label:function(){
    this.setData({
      isselect: !this.data.isselect
    })
  }
})
