// pages/info.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    selectid: ''
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

  selecttel: function (e) {
    var self = this;
    console.log(e);
    if (e.target.dataset.isno == 1) {
      return;
    } else {
      self.setData({
        selectid: e.target.dataset.id,
      });
    }
  },

  telsubmit: function (e) {
    console.log(this.data.selectid);
    if (this.data.selectid) {
      wx.navigateTo({ url: '/pages/info/info' });
    }
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