// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  btnLogin: function (e) {
    wx.redirectTo({
      url: '/pages/login/login'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    var userid = options.userid
    console.log(options.userid)
    wx.request({
      url: 'https://wxabc.xyz/wxserver/userGetInfo.php',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST",
      data: {
        userid: userid,
      },
      success: function(res) {
        console.log(res)
        that.setData({
          userid: res.data.userid,
          username: res.data.username,
          sex: res.data.sex,
          birthday: res.data.birthday,
          interest: res.data.interest,
          phone: res.data.phone
        })
      },
      fail: function(res) {
        console.log(res)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})