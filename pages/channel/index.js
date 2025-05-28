// pages/channel/index.js
const app = getApp();
Page({
  data: {
    teamId: '',
    teamInfo: {},
    postList: []
  },

  onLoad(options) {
    console.log("onLoad");
    console.log(options);
    const teamId = options?.teamId;
    if (teamId) {
      this.loadTeamPosts(teamId);
    } else {
      const defaultTeam = app.globalData.myTeams[0];
      console.log("id", defaultTeam.id);
      this.setData({
        teamId: defaultTeam.id
      })
      wx.redirectTo({
        url: `/pages/channel/index?teamId=${defaultTeam.id}`
      })
    }
  },

  onShow(options) {
    console.log("onShow");
    console.log("this.data.teamId", this.data.teamId);
    if (this.data.teamId) {
      this.loadTeamPosts(this.data.teamId);
    }
  },

  loadTeamPosts(teamId) {
    const teamInfo = app.globalData.myTeams.find(t => t.id === teamId);
    console.log("teamId:", teamId);
    console.log("teamInfo", teamInfo);
    this.setData({
      teamId,
      teamInfo,
    });
    wx.setNavigationBarTitle({
      title: `${teamInfo.name} - 频道`
    });
    const posts = app.globalData.posts.filter(p => p.teamId === teamId);
    this.setData({
      postList: posts
    });
  },

  commitPost() {
    const teamId = this.data.teamId;
    wx.navigateTo({
      url: "/pages/channel/edit/index?teamId=${teamId}",
    })
  },

  onPullDownRefresh: function () {
    wx.stopPullDownRefresh()
    this.onShow(); //重新加载onLoad()
  },

  onLikeTap(event) {
    const id = event.currentTarget.dataset.id;
    this._updatePostField(id, 'likes', 1);
    console.log(this.data.postList);
  },

  onStarTap(event) {
    const id = event.currentTarget.dataset.id;
    this._updatePostField(id, 'stars', 1);
    console.log(this.data.postList);
  },

  _updatePostField(postId, field, increment) {
    const postList = this.data.postList;
    const newPostList = postList.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          [field]: post[field] + increment
        };
      }
      return post;
    });

    this.setData({
      postList: newPostList
    });
  },

  onSearch(e) {
    const keyword = this.data.searchKeyWord.trim();
    if (!keyword) return;

    const allPosts = app.globalData.posts.filter(p =>
      p.teamId === this.data.teamId &&
      p.content.includes(keyword)
    );

    this.setData({
      searchResults: allPosts,
      hasSearched: true
    });
  }
})