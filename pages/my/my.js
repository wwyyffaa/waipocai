Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl:"",
    nickName:"",
    noComment:0,
    noMoney:0
  },
  // 跳转到全部订单
  toAllOrder:function(){
    wx.navigateTo({
      url: '../allOrder/allOrder',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this ;
    wx.getUserInfo({
      success:function(res){
        console.log(res)
        that.setData({
          avatarUrl: res.userInfo.avatarUrl,
          nickName:  res.userInfo.nickName
        })
         
      },
      fail: function () {
        // fail  
        console.log("获取失败！")
      },
      complete: function () {
       
      } 
    });
   
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
    var that = this;
    wx.getStorage({
      key: 'allOrder',
      success: function (res) {
          var array =    res.data;
          var sum = 0;
          var num = 0;
          array.forEach(function(v){
                if(v.state == 0){
                    sum += 1;
                }
                num +=1;
          })
          that.setData({ noMoney: sum, noComment:num})
      },
      
    })
    console.log("这是个什么鬼啊")
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
  ,
  toAllOrder:function(e){
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../allOrder/allOrder?id=' + id,
    })
  }
})