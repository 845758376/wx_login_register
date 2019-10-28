// pages/login/login.js
var inputName = "";
var inputPassword = "";
Page({

  /**
   * 页面的初始数据
   */
  btnReg: function() {
    wx.redirectTo({
      url: '/pages/register/register'
    })
  },
  //获取用户输入的值a
  inputName: function(e) {
    inputName = e.detail.value;
  },
  //获取用户输入的值b
  inputPassword: function(e) {
    inputPassword = e.detail.value;
    console.log("输入的密码：" + inputPassword);
  },
  data: {
    isLogin: false
  },
  //获取用户输入的值a
  inputName: function(e) {
    inputName = e.detail.value;
  },
  //获取用户输入的值b
  inputPassword: function(e) {
    inputPassword = e.detail.value;
    console.log("输入的密码：" + inputPassword);
  },
  // 登陆
  login: function() {
    var that = this;
    var isrightful = that.checkInput();
    if (isrightful) {
      wx.request({
        url: 'https://wxabc.xyz/wxserver/userLogin.php',
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: "POST",
        data: {
          userid: inputName,
          password: inputPassword
        },
        success: function(res) {
          console.log(res)
          if (res.statusCode != 200) {
            wx.showToast({ //这里提示失败原因
              title: res.data.message,
              icon: 'loading',
              duration: 1500
            })
          } else {
            if (res.data.state == 1) {
              console.log(res.data.state)
              wx.redirectTo({
                url: '/pages/index/index?userid=' + inputName,
              })
              wx.showToast({
                title: '登陆成功', //这里成功
                icon: 'success',
                duration: 1000
              });
            } else {
              wx.redirectTo({
                url: '/pages/login/login',
              })
              wx.showToast({
                title: '登陆失败', //这里成功
                icon: 'none',
                duration: 1000
              });
            }
            that.setData({
              isLogin: true,
            })
          }
        },
        fail: function(res) {
          console.log(res)
          wx.showToast({
            title: '请求失败',
            icon: 'none',
            duration: 1500
          })
        }
      });
    }
  },
  //检测输入值
  checkInput: function() {
    if (inputName == "" || inputName == null ||
      inputName == undefined) {
      this.showErrorToastUtils('请输入用户名');
    } else if (inputPassword == "" || inputPassword == null || inputPassword == undefined) {
      this.showErrorToastUtils('请输入密码');
    } else if (inputPassword.length != 8) {
      this.showErrorToastUtils('密码为8位数');
    }
    return true;
  },

  // 错误提示
  showErrorToastUtils: function(e) {
    wx.showModal({
      title: '提示！',
      confirmText: '朕知道了',
      showCancel: false,
      content: e,
      success: function(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        }
      }
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