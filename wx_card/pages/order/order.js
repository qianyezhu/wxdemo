// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemstate:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'https://github.com/qianyezhu/cheshijson/blob/master/order.json',
      method: 'GET',
      success: function (res) {
        that.setData({
          orderlist: res.data.order,
        })
        console.log(res.data.order);
      },
      fail: function () {

      },
      complete: function () {

      }
    })
  },
  //查看订单状态
  onoff: function(e){
    var that = this;
    console.log(e.currentTarget.dataset.id);
    if (that.data.itemstate == e.currentTarget.dataset.id){
      that.setData({
        itemstate: false,
      })
    }else{
      that.setData({
        itemstate: e.currentTarget.dataset.id,
      })
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