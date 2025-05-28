const data = {
  evaluations: [
    {
      id: "1few5s13fs1",
      rater: "和蔼的钵钵鸡",
      ratee: "草率的吉娃娃",
      team: "第一小组",
      score: "10.0",
      comment: "认真负责",
      timestamp: "2025/5/26",
      isAnonymous: false
    },
    {
      id: "2aew6t24gt2",
      rater: "严肃的布丁",
      ratee: "拖延的柴犬",
      team: "第一小组",
      score: "8.5",
      comment: "进度较慢但态度积极",
      timestamp: "2025/5/27",
      isAnonymous: true
    },
    {
      id: "3rew7u35hu3",
      rater: "活泼的奶茶",
      ratee: "细心的柯基",
      team: "第二小组",
      score: "9.2",
      comment: "工作细致有创意",
      timestamp: "2025/5/28",
      isAnonymous: false
    }
  ],
  teams: [
    {
      id: "sleejlkfsfef",
      name: "第一小组",
      score: "9.8",
      description: "alef",
      category: "课程组队",
      creater: "ef"
    },
    {
      id: "tmmkllmgtgfg",
      name: "第二小组",
      score: "9.0",
      description: "团队协作能力强",
      category: "课程组队",
      creater: "gh"
    },
    {
      id: "unnnhhnhttht",
      name: "第三小组",
      score: "8.7",
      description: "项目进度稳定",
      category: "课外实践",
      creater: "jk"
    }
  ],
  myTeams: [
    {
      id: "sleejlkfsfef",
      name: "第一小组",
      score: "9.8",
      description: "alef",
      category: "课程组队",
      creater: "ef"
    },
    {
      id: "tmmkllmgtgfg",
      name: "第二小组",
      score: "9.0",
      description: "团队协作能力强",
      category: "课程组队",
      creater: "gh"
    }
  ],
  posts: [
    {
      id: "sleejlkfsfef_001",
      teamId: "sleejlkfsfef",
      avatar_url: "/icons/my.png",
      username: "哆啦B梦",
      timestamp: "2024-08-08 8:00:00",
      content: "我又来啦！今天的天气真不错，适合出去走走～",
      image_urls: ["/images/sunny-day.jpg"],
      tags: ["#生活", "#日常"],
      likes: 12,
      stars: 13,
      comments: [
        { username: "小明", content: "真的耶，阳光很好！", timestamp: "2024-08-08 9:00:00" },
        { username: "小红", content: "羡慕了，我也想去！", timestamp: "2024-08-08 9:30:00" }
      ]
    },
    {
      id: "tmmkllmgtgfg_001",
      teamId: "unnnhhnhttht",
      avatar_url: "/icons/my.png",
      username: "哆啦C梦",
      timestamp: "2024-09-09 9:00:00",
      content: "我又又又来啦！这次做了个新蛋糕，超好吃～",
      image_urls: ["/images/cake.jpg", "/images/ingredients.jpg"],
      tags: ["#美食", "#烘焙"],
      likes: 120,
      stars: 130,
      comments: [
        { username: "甜甜", content: "看起来好好吃啊！", timestamp: "2024-09-09 10:00:00" },
        { username: "小胖", content: "求配方！", timestamp: "2024-09-09 10:15:00" }
      ]
    },
    {
      id: "sleejlkfsfef_002",
      teamId: "unnnhhnhttht",
      avatar_url: "/icons/my.png",
      username: "哆啦D梦",
      timestamp: "2024-10-10 10:00:00",
      content: "今天去爬山了，风景美极了！",
      image_urls: ["/images/mountain-view.jpg"],
      tags: ["#旅行", "#自然"],
      likes: 56,
      stars: 78,
      comments: [
        { username: "小风", content: "山顶的风景一定很棒！", timestamp: "2024-10-10 11:00:00" },
        { username: "阿杰", content: "下次一起去吧！", timestamp: "2024-10-10 11:30:00" }
      ]
    },
    {
      id: "tmmkllmgtgfg_002",
      teamId: "sleejlkfsfef",
      avatar_url: "/icons/my.png",
      username: "哆啦E梦",
      timestamp: "2024-11-11 11:00:00",
      content: "双十一买了好多东西，钱包空空如也～",
      image_urls: ["/images/shopping-bags.jpg"],
      tags: ["#购物", "#生活"],
      likes: 200,
      stars: 230,
      comments: [
        { username: "小丽", content: "买了啥好东西？", timestamp: "2024-11-11 12:00:00" },
        { username: "小刚", content: "双十一果然是剁手节！", timestamp: "2024-11-11 12:30:00" }
      ]
    },
    {
      id: "unnnhhnhttht_001",
      teamId: "sleejlkfsfef",
      avatar_url: "/icons/my.png",
      username: "哆啦F梦",
      timestamp: "2024-12-12 12:00:00",
      content: "今晚的星空太美了，拍了好多照片！",
      image_urls: ["/images/starry-night.jpg", "/images/telescope.jpg"],
      tags: ["#天文", "#摄影"],
      likes: 89,
      stars: 95,
      comments: [
        { username: "小星", content: "星星好亮啊！", timestamp: "2024-12-12 13:00:00" },
        { username: "小宇", content: "用什么设备拍的？", timestamp: "2024-12-12 13:30:00" }
      ]
    },
    {
      id: "sleejlkfsfef_003",
      teamId: "tmmkllmgtgfg",
      avatar_url: "/icons/my.png",
      username: "哆啦G梦",
      timestamp: "2024-08-15 14:00:00",
      content: "新学的编程技巧终于掌握了，成就感满满！",
      image_urls: ["/images/code-screen.jpg"],
      tags: ["#学习", "#编程"],
      likes: 45,
      stars: 50,
      comments: [
        { username: "小智", content: "厉害了，我也要学！", timestamp: "2024-08-15 15:00:00" }
      ]
    },
    {
      id: "tmmkllmgtgfg_003",
      teamId: "sleejlkfsfef",
      avatar_url: "/icons/my.png",
      username: "哆啦H梦",
      timestamp: "2024-09-20 16:00:00",
      content: "周末去露营了，篝火晚会超有趣！",
      image_urls: ["/images/campfire.jpg", "/images/tent.jpg"],
      tags: ["#旅行", "#户外"],
      likes: 67,
      stars: 72,
      comments: [
        { username: "小露", content: "好羡慕，我也想露营！", timestamp: "2024-09-20 17:00:00" }
      ]
    }
  ],
  myPosts: [
    {
      id: "sleejlkfsfef_001",
      teamId: "sleejlkfsfef",
      avatar_url: "/icons/my.png",
      username: "可达鸭",
      timestamp: "2024-08-08 8:00:00",
      content: "我又来啦！今天的天气真不错，适合出去走走～",
      image_urls: ["/images/sunny-day.jpg"],
      tags: ["#生活", "#日常"],
      likes: 12,
      stars: 13,
      comments: [
        { username: "小明", content: "真的耶，阳光很好！", timestamp: "2024-08-08 9:00:00" },
        { username: "小红", content: "羡慕了，我也想去！", timestamp: "2024-08-08 9:30:00" }
      ]
    },
    {
      id: "tmmkllmgtgfg_001",
      teamId: "sleejlkfsfef",
      avatar_url: "/icons/my.png",
      username: "可达鸭",
      timestamp: "2024-09-09 9:00:00",
      content: "我又又又来啦！这次做了个新蛋糕，超好吃～",
      image_urls: ["/images/cake.jpg", "/images/ingredients.jpg"],
      tags: ["#美食", "#烘焙"],
      likes: 120,
      stars: 130,
      comments: [
        { username: "甜甜", content: "看起来好好吃啊！", timestamp: "2024-09-09 10:00:00" },
        { username: "小胖", content: "求配方！", timestamp: "2024-09-09 10:15:00" }
      ]
    }
  ],
  likes: [
    {
      id: "sleejlkfsfef_001",
      team: "第一小组",
      avatar_url: "/icons/my.png",
      username: "可达鸭",
      timestamp: "2024-08-08 8:00:00",
      content: "我又来啦！今天的天气真不错，适合出去走走～",
      image_urls: ["/images/sunny-day.jpg"],
      tags: ["#生活", "#日常"],
      likes: 12,
      stars: 13,
      comments: [
        { username: "小明", content: "真的耶，阳光很好！", timestamp: "2024-08-08 9:00:00" },
        { username: "小红", content: "羡慕了，我也想去！", timestamp: "2024-08-08 9:30:00" }
      ]
    },
    {
      id: "tmmkllmgtgfg_001",
      team: "第二小组",
      avatar_url: "/icons/my.png",
      username: "可达鸭",
      timestamp: "2024-09-09 9:00:00",
      content: "我又又又来啦！这次做了个新蛋糕，超好吃～",
      image_urls: ["/images/cake.jpg", "/images/ingredients.jpg"],
      tags: ["#美食", "#烘焙"],
      likes: 120,
      stars: 130,
      comments: [
        { username: "甜甜", content: "看起来好好吃啊！", timestamp: "2024-09-09 10:00:00" },
        { username: "小胖", content: "求配方！", timestamp: "2024-09-09 10:15:00" }
      ]
    }
  ],
  stars: [
    {
      id: "sleejlkfsfef_003",
      avatar_url: "/icons/my.png",
      username: "哆啦G梦",
      timestamp: "2024-08-15 14:00:00",
      content: "新学的编程技巧终于掌握了，成就感满满！",
      image_urls: ["/images/code-screen.jpg"],
      tags: ["#学习", "#编程"],
      likes: 45,
      stars: 50,
      comments: [
        { username: "小智", content: "厉害了，我也要学！", timestamp: "2024-08-15 15:00:00" }
      ]
    },
    {
      id: "tmmkllmgtgfg_003",
      avatar_url: "/icons/my.png",
      username: "哆啦H梦",
      timestamp: "2024-09-20 16:00:00",
      content: "周末去露营了，篝火晚会超有趣！",
      image_urls: ["/images/campfire.jpg", "/images/tent.jpg"],
      tags: ["#旅行", "#户外"],
      likes: 67,
      stars: 72,
      comments: [
        { username: "小露", content: "好羡慕，我也想露营！", timestamp: "2024-09-20 17:00:00" }
      ]
    }
  ],
  tasksList : [
    {
      taskId: '001',
      groupId: '001',
      title: '年终总结报告',
      deadline: '2025/6/15',
      status: 'pending',
      description: '整理部门年度工作成果并提交',
      participants: ['哆啦B梦', '哆啦E梦', '哆啦F梦']
    },
    {
      taskId: '002',
      groupId: '002',
      title: '系统维护更新',
      deadline: '2025/5/28',
      status: 'completed',
      description: '服务器版本升级与漏洞修复',
      participants: ['哆啦C梦', '哆啦G梦']
    },
    {
      taskId: '003',
      groupId: '003',
      title: '市场调研分析',
      deadline: '2025/5/20',
      status: 'canceled',
      description: '客户临时取消需求变更',
      participants: ['哆啦D梦', '哆啦H梦']
    },
    {
      taskId: '004',
      groupId: '001',
      title: '新产品推广计划',
      deadline: '2025/6/5',
      status: 'processing',
      description: '制定线上线下推广方案',
      participants: ['哆啦B梦', '哆啦C梦', '哆啦Z梦']
    },
    {
      taskId: '005',
      groupId: '002',
      title: '节日活动策划',
      deadline: '2025/5/10',
      status: 'timeout',
      description: '儿童节主题方案设计',
      participants: ['哆啦X梦', '哆啦Y梦']
    },
    {
      taskId: '006',
      groupId: '003',
      title: '技术培训会议',
      deadline: '2025/6/12',
      status: 'pending',
      description: '组织全员前端框架学习',
      participants: ['哆啦E梦', '哆啦F梦', '哆啦G梦']
    },
    {
      taskId: '007',
      groupId: '001',
      title: '财务审计准备',
      deadline: '2025/5/25',
      status: 'completed',
      description: '收集整理Q2季度财务数据',
      participants: ['哆啦B梦', '哆啦D梦']
    },
    {
      taskId: '008',
      groupId: '002',
      title: 'APP版本迭代',
      deadline: '2025/5/18',
      status: 'canceled',
      description: '需求优先级调整取消开发',
      participants: ['哆啦C梦', '哆啦H梦']
    },
    {
      taskId: '009',
      groupId: '003',
      title: '用户增长方案',
      deadline: '2025/6/20',
      status: 'processing',
      description: '制定Q3季度用户留存策略',
      participants: ['哆啦E梦', '哆啦X梦']
    },
    {
      taskId: '010',
      groupId: '001',
      title: '团队建设活动',
      deadline: '2025/6/1',
      status: 'timeout',
      description: '户外拓展训练计划执行',
      participants: ['哆啦B梦', '哆啦C梦', '哆啦Y梦']
    }
  ]
};

export default data;