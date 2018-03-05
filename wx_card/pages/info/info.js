// pages/info.js
var wait = 60;
function time(that) {
  if (wait == 0) {
    that.setData({
      statebtn: false,
      recodetext: "获取",
    })
    wait = 60;
  } else {
    that.setData({
      statebtn: true,
      recodetext: "重新获取" + wait,
    });
    wait--;
    setTimeout(function () {
      time(that);
    }, 1000);
  }
};
Page({
  /**
   * 页面的初始数据
   */
  data: {
    region: ['请选择所在地区', '', ''],
    recodetext:"获取",
    hink:false,
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this;
    wx.request({
      url: 'https://github.com/qianyezhu/cheshijson/blob/master/tellist.json',
      method: 'GET',
      success: function (res) {
        self.setData({
          city: res.data.city,
          list: res.data.tellist,
        })
      },
      fail: function () {

      },
      complete: function () {

      }
    })
  },

  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      clickpicker: 0,
      region: e.detail.value
    })
  },

  // 获取验证码
  authcard: function(e){
    var that = this;
    var mobile = this.data.mobile;
    var regMobile = /^1[3-9][0-9]\d{4,8}$/;
    if (!regMobile.test(mobile)) {
      wx.showToast({
        icon:'none',
        title: '手机号有误！'
      })
      return false;
    }else{
      time(that);
    }
  },
  nameInputEvent: function(e){
    this.setData({
      name: e.detail.value
    })
  },
  idcardInputEvent: function(e){
    this.setData({
      idcard: e.detail.value
    })
  },
  mobileInputEvent: function (e) {
    this.setData({
      mobile: e.detail.value
    })
  },
  moreInputEvent: function(e){
    this.setData({
      more: e.detail.value
    })
  },
  recodeInputEvent:function(e){
    this.setData({
      recode: e.detail.value
    })
  },
  btnsubmit: function(e){
    var that = this;
    var name = that.data.name;
    var idcard = that.data.idcard;
    var mobile = that.data.mobile;
    var clickpicker = that.data.clickpicker;
    var more = that.data.more;
    var recode = that.data.recode;
    var pattern = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    if (name == 0 || name == null || name ==undefined){
      wx.showToast({
        icon: 'none',
        title: '请输入姓名'
      })
    }else if (idcard == 0 || idcard == null || idcard == undefined){
      wx.showToast({
        icon: 'none',
        title: '请输入身份证号码'
      })
    } else if (mobile == 0 || mobile == null || mobile == undefined){
      wx.showToast({
        icon: 'none',
        title: '请输入手机号'
      })
    } else if (!clickpicker == 0 || clickpicker == undefined){
      wx.showToast({
        icon: 'none',
        title: '请选择所在地区'
      })
    } else if (more == 0 || more == null || more == undefined){
      wx.showToast({
        icon: 'none',
        title: '请输入详细地址'
      })
    } else if (recode == 0 || recode == null || recode == undefined){
      wx.showToast({
        icon: 'none',
        title: '请输入短信验证码'
      })
    }else{
      if (!(pattern.test(idcard))){
        wx.showToast({
          icon: 'none',
          title: '请输入正确的身份证号码'
        })
      }else{
        // wx.navigateTo({ url: '/pages/info/info' });
        that.setData({
          hink:true,
        })
      }
    }
  },

  //立即预约
  submittwice: function(e){
    var that = this;
    var name = that.data.name;
    var idcard = that.data.idcard;
    var mobile = that.data.mobile;
    var clickpicker = that.data.clickpicker;
    var more = that.data.more;
    var recode = that.data.recode;
    console.log(name);
    this.setData({
      hink: false,
    })
    wx.navigateTo({ url: '/pages/result/result?id=2' });
  },

  //关闭二次确认弹窗
  close:function(e){
    this.setData({
      hink: false,
    })
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