//index.js
//获取应用实例
const app = getApp()
var server = require('../../utils/server');
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
    console.log("userInfo");
  },
  /**
  * 用户点击右上角分享
  */
  onShareAppMessage: function () {
    return{
      title:'线上选号',
      desc:'预约靓号，免费送到家!',
      path:'/pages/index/index?id=1',
      imageUrl:'/images/indextop.png',
      success:function(res){
        if (res.errMsg == 'shareAppMessage:ok') {
          wx.showToast({
            icon:'none',
            title: '分享成功',
          });
          console.log("分享成功")
      　}
      },
      fail: function (res){
        if (res.errMsg == 'shareAppMessage:fail cancel') {
          wx.showToast({
            icon:'none',
            title: '用户取消转发',
          })
        } else if (res.errMsg == 'shareAppMessage:fail') {
          wx.showToast({
            icon:'none',
            title:'转发失败',
          })
        }
      },
      complete: function (res){

      }
    }
  }
})
