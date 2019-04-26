全局配置
window + tabbar
assets目录 pages

UI 框架
app.wxss 引入weui

数据 
生命周期  wx.request

 /assets/images/a.png

- list 有套路
  onLoad onReachBottom onPullDownRefresh 
  inLoading 加载 状态 
  currentPage  传参
  totalPage 最后一页

- template 
  共用的界面
  <template data={{}}>
  <template name="loading"/>
  API