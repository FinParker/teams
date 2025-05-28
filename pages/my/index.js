// pages/my/index.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: '可达鸭',
    account: '',
    is_login: false,
    have_reply: false,
    login_url: '/pages/my/login/login',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  handleItemTap(event) {
    const index = event.currentTarget.dataset.index;
    switch (index) {
      case 0:
        wx.navigateTo({
          url: "/pages/my/myEvaluationList/index",
        });
        break;
      case 1:
        wx.navigateTo({
          url: "/pages/my/myTeamList/index",
        });
        break;
      case 2:
        wx.navigateTo({
          url: "/pages/my/myPostList/index",
        });
        break;
      case 3:
        wx.navigateTo({
          url: "/pages/my/myLikes/index",
        });
        break;
      case 4:
        wx.navigateTo({
          url: "/pages/my/myStars/index",
        });
        break;
    }
  }
})