// pages/comment/comment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail:{},
    content:'',//评论内容
    score:5,
    images:[]  //上传的图片
  },

  onCommentChange:function(e){
this.setData({
  content:e.detail
});
  },

  onScorehange:function(e){
   
    this.setData({
      score: e.detail
    });
  },
  uploadImg:function(){
wx.chooseImage({
  count: 3, //一次上传最多张数
  sizeType: ['original', 'compressed'],  //图片的格式，原文件/压缩
  sourceType: ['album', 'camera'],  //相册/相机
  success:res=> {
    // tempFilePath可以作为img标签的src属性显示图片
    const tempFilePaths = res.tempFilePaths;
    this.setData({
      images: this.data.images.concat(tempFilePaths)
    });
  }
})
  },
  submit:function(){
    console.log(this.data.score);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
console.log("comment");
console.log(options);
var movieid = options.movieid;
wx.request({
  url: `https://douban.uieee.com/v2/movie/subject/${movieid}`,
  header: {
    "content-type": "json"
  },
  success: res=>{
console.log("电影详情");
console.log(res);
this.setData({
detail:res.data
});
  },error:err=>{


  }
})
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})