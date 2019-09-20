// pages/movie/movie.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
movieList:[]
  },

getMovieList:function(){
wx.showLoading({
  title: '加载中',
});

  var self = this;
  wx.request({
    url: 'https://douban.uieee.com/v2/movie/in_theaters',  //请求豆瓣电影api,参考资料地址：https://blog.csdn.net/qq_40511966/article/details/83242984
    data: {
      start: self.data.movieList.length,
      count: 10
    },
    header: {
      "content-type": "json"
    },
    success: res => {
      console.log(res);
      console.log(self.data.movieList.concat(res.data.subjects));
      self.setData({
        //movieList: res.data.subjects
        movieList: self.data.movieList.concat(res.data.subjects)
      });
      wx.hideLoading();
    }, error: err => {
      console.log(err);
      wx.hideLoading();
    }
  });
},
  gotoComment:function(e){
    console.log(e);
var movieid = e.target.dataset.movieid;
wx.navigateTo({
  url: `../comment/comment?movieid=${movieid}`,
})
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
this.getMovieList();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
this.getMovieList();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})