// pages/spxj/spxj.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopDetailed:{}

  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
          var data =  JSON.parse(options.shopDetailed);
          console.log(data)
          this.setData({shopDetailed:data})

  
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
  // 返回列表页并且商品数量增加
  backToShoplist:function(){
    var that = this;
    var state = true;
    if (wx.getStorageSync("shoplist").length>0) {
      var array = wx.getStorageSync("shoplist");
      
      for(var i=0;i<array.length;i++){
        if (array[i].goodsId == that.data.shopDetailed.goodsId && array[i].goodspage == that.data.shopDetailed.goodspage){
          array[i].goodscount += 1;
          state = false;
          break;
        }
      }
      if (state){
        that.data.shopDetailed.goodscount = that.data.shopDetailed.goodscount + 1;
        array.push(that.data.shopDetailed);
      }
      
    } else {
      var array = [];
      that.data.shopDetailed.goodscount = that.data.shopDetailed.goodscount + 1;
      array.push(that.data.shopDetailed);
    
    }
    wx.setStorage({
      key: 'shoplist',
      data: array,
    })
    wx.navigateBack({
      delta: 1
    })
  }
})