// v2ex 每日最热帖子列表
const Bot = require('../modules/bot');
const axios = require('axios').default;

class Plugin extends Bot {
  constructor () {
    super();
    this.API = "http://lin123456.web3v.com/测试/定时推送.html";
  }
  run () {
    axios.get(this.API).then(res => {
      const { data } = res;
      const articles = [];
      data.map(d => {
        articles.push({
          title: d.title,
          description: d.content,
          url: d.url,
          picurl: d.member.avatar_large.replace('_mini', '_large')
        })
      });
      this.sendNews(articles.slice(0, 8));
    })
  }
}

new Plugin().run();
