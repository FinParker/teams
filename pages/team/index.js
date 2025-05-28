// pages/team/index.js
const app = getApp();

Page({
  data: {
    searchKeyWord: "",
    searchResults: [],
    hasSearched: false,
    newTeamList: [],
  },

  onLoad() {
    this.setData({
      newTeamList: app.globalData.teams
    })
  },

  onInput: function (event) {
    this.setData({
      searchKeyWord: event.detail.value
    })
  },

  async onSearch(event){
    const keyword = this.data.searchKeyWord.trim();
    if (!keyword) {
      wx.showToast({
        title: '请输入关键词',
      });
      return;
    }
    this.setData({
      isSearching: true
    });
    wx.showLoading({
      title: '搜索中...',
      mask: true,
    })
    try {
      console.log(keyword);
      const res = await wx.cloud.callFunction({
        name: "cloudFunctions",
        data: {
          type: "searchTeams",
          keyword: keyword,
        }
      });
      this.setData({
        searchResults: res.result.dataList || [],
        hasSearched: true,
      });
      this.goTop();
    } catch (e) {
      console.error('搜索失败:', e);
      wx.showToast({
        title: '网络异常',
      })
    } finally {
      this.setData({
        isSearching: false
      });
      wx.hideLoading();
    }
  },

  onCancelSearch(){
    this.setData({
      searchKeyWord: '',
      searchResults: [],
      hasSearched: false,
    })
  },

  navigateToDetailPage: function (event) {
    let teamId = event.currentTarget.dataset.teamId;
    wx.navigateTo({
      url: "/pages/team/teamDetail/index?id=" + teamId
    })
  },

  goTop() {
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 300
    });
  },
})