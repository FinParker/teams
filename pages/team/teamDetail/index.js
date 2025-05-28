// pages/team/teamdetail/index.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    teamid: "",
    teamList: [],
    teamDetail: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const teamId = options.id;
    console.log("detailPage:", options, teamId);
    this.setData({
      teamid: teamId,
      teamList: app.globalData.teams,
    })
    if (!teamId) {
      this.handleLoadError();
      return;
    }
    this.fetchTeamDetail(teamId);
  },

  fetchTeamDetail(teamId) {
    const team = this.data.teamList.find(item => item.id === teamId);
    if (team) {
      this.setData({
        teamDetail: team
      });
      console.log("找到团队详情:", team);
    } else {
      wx.showToast({
        title: '团队不存在或已被删除',
        icon: 'error',
        duration: 1500
      });
      setTimeout(() => {
        wx.navigateBack();
      }, 1500);
    }
  },

  handleJoinTeam() {
    wx.showModal({
      title: '确认加入',
      content: '确定要申请加入该团队吗？',
      success: (res) => {
        if (res.confirm) {
          wx.showToast({
            title: '申请已提交',
            icon: 'success',
            duration: 1500
          });
        }
      }
    });
  },
  
  navigateBack() {
    wx.navigateBack();
  }
})