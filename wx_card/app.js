
var server = require('./utils/server');
App({
  onLaunch: function () {
    console.log('App Launch')
    var self = this;
    var logs = wx.getStorageSync('logs') || [];

    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    console.log('logs', logs)
    if (!logs) {
      self.login();
    } else {
      wx.checkSession({
        success: function () {
          // 登录态未过期
          console.log('登录态未过期')
          self.logs = logs;
          self.getUserInfo();
        },
        fail: function () {
          //登录态过期
          self.login();
        }
      })
    }
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },
  globalData: {
    hasLogin: false,
  },
  logs: null,
  login: function () {
    var self = this;
    wx.login({
      success: function (res) {
        console.log('wx.login', res)
        server.getJSON('/WxAppApi/setUserSessionKey', { code: res.code }, function (res) {
          console.log('setUserSessionKey', res)
          self.logs = res.data.logs;
          self.globalData.hasLogin = true;
          wx.setStorageSync('logs', self.logs);
          self.getUserInfo();
        });
      }
    });
  },
  getUserInfo: function () {
    var self = this;
    wx.getUserInfo({
      success: function (res) {
        console.log('getUserInfo', res)
        self.globalData.userInfo = res.userInfo;
        server.getJSON('/WxAppApi/checkSignature', {
          logs: self.logs,
          result: res
        }, function (res) {
          console.log('checkSignature', res)
          if (res.data.errorcode) {
            // TODO:验证有误处理
          }
        });
      }
    });
  }
})
