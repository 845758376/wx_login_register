// pages/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: '2010-09-26',
    items: [{
        name: '篮球',
        value: '篮球'
      },
      {
        name: '足球',
        value: '足球'
      },
      {
        name: '羽毛球',
        value: '羽毛球'
      },
      {
        name: '篮球',
        value: '篮球'
      },
      {
        name: '篮球',
        value: '篮球'
      },
    ]
  },
  btnLogin: function(e) {
    wx.redirectTo({
      url: '/pages/login/login'
    })
  },
  formSubmit: function(e) {
    console.log('from提交', e.detail.value);
    wx.request({
      url: 'https://wxabc.xyz/wxserver/userAdd.php',
      data: {
        'userid': e.detail.value.userid,
        'username': e.detail.value.username,
        'password': e.detail.value.password,
        'sex': e.detail.value.sex,
        'phone': e.detail.value.phone,
        'birthday': e.detail.value.birthday,
        'interest': e.detail.value.interest,
        'suggest': e.detail.value.suggest,
      },
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function(res) {
        console.log("返回值");
        if (res.data.state == 1) {
          wx.showToast({
            title: res.data.info,
            icon: 'success'
          });
        } else {
          wx.showToast({
            title: res.data.info,
            icon: 'warn'
          })
        }
      },
      formReset: function() {
        console.log('foem重置')
      },
      PickerChange: function(e) {
        console.log(e);
        this.setData({
          index: e.detail.value
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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