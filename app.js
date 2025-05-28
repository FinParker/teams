// app.js
const { initMockData } = require('./utils/mock');
App({
  globalData: {
    evaluations: [],
    teams: [],
    posts: [],
    likes: [],
    stars: [],
    myTeams: []
  },

  initGlobalData() {
    const mockData = initMockData();
    console.log(mockData);
    this.globalData = mockData;
  },

  onLaunch: function () {
    if (!wx.cloud) {
      console.error("请使用 2.2.3 或以上的基础库以使用云能力");
    } else {
      wx.cloud.init({
        env: "", //使用默认环境（第一个创建的环境）
        traceUser: true,
      });
    }
    this.initGlobalData();
    const data = this.globalData;
    console.log(data);
  },
});