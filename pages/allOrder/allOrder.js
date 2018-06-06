var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
      top_sonId:0,
      DataOrder:[]   
  },
  //改变顶栏的颜色
  gBcolor:function(e){
    var id = e.currentTarget.dataset.id;
    console.log(e.currentTarget.dataset.id);
    this.setData({top_sonId : id})
  }
  ,
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      console.log(options);
      var that = this;
      var data = wx.getStorageSync("allOrder");
      console.log(data);
      this.setData({DataOrder:data,top_sonId:options.id});
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
    
  },
  todetailed:function(e){
    var that = this;
    var id = e.currentTarget.dataset.id;
    var string = JSON.stringify(that.data.DataOrder[id]);
    wx.navigateTo({
      url: '../allOrderlist/allOrderlist?data='+string,
    })
  }
})