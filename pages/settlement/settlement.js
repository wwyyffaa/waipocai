var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    zongjia:"",
    OrderList:[]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ zongjia: options.zongjia}) 
    
     
  },
  //跳转到订单页
  toList:function(){
    wx.navigateBack({
      delta: 2
    })
  },
  settlement:function(){
    var that = this;
    // // 所有完成订单列表
    // var neworderlist =  wx.getStorageSync('shoplist');
    // var OrderList = that.data.OrderList;
    // neworderlist[0][0]["orderState"] = 1;
    // console.log(neworderlist[0])
    // OrderList.push(neworderlist);
    // that.setData({ OrderList: OrderList})
    // wx.setStorageSync("OrderList", OrderList);
    // var pages = getCurrentPages();
    // var listpage = pages[pages.length - 3];
    // listpage.setData({ qingkong: false });

    var allOrder = wx.getStorageSync("allOrder");
    allOrder[allOrder.length - 1].state = 1;
    wx.setStorageSync("allOrder", allOrder);
    
    // wx.clearStorage();




    // wx.navigateBack({
    //   delta: 2
    // })
    wx.removeStorage({
      key: 'shoplist',
      success: function(res){
        var pages = getCurrentPages();
        var ensureOrderPage = pages[pages.length - 2];
        ensureOrderPage.setData({ state: false });



        var shoplistPage = pages[pages.length - 3];
        var list_right = shoplistPage.data.list_right;
        var list_left =  shoplistPage.data.list_left;
        //将数据清零
        list_right.forEach(function (v, i) {
          v.forEach(function (v, i) {
            v["goodscount"] = 0;
          })
        });
        for (var i = 0; i < list_left.length; i++) {
          list_left[i].goodsCount = 0;
          list_left[i].goodsTotalPrice = 0;
          list_left[i].goodsUnit = 0;
        };
        shoplistPage.setData({ zongjia: 0, fengshu: 0, list_right: list_right, list_left: list_left})
        








        wx.switchTab({
          url: '../shoplist/shoplist'
        })

      },
    })
    // wx.switchTab({
    //   url: '../shoplist/shoplist',
    //   success:function(){
    //     wx.removeStorageSync("shoplist");
    //     console.log("dfsafsdfdsfsdfsdfsdfds")
    //   }
    // })



    // wx.getStorage({
    //   key: 'shoplist',
    //   success: function(res) {
    //     res.data[0][0]["orderState"] = 1;
    //     var neworderlist = that.data.OrderList;
    //     neworderlist.push(res.data);
    //     that.setData({ OrderList: neworderlist });
    //     wx.setStorageSync("OrderList", neworderlist );
    //     console.log("sdfsfsfsdf")
        
    //     wx.removeStorage({
    //       key: 'shoplist',
    //       success: function(res) {
    //         var pages = getCurrentPages()
    //         var listpage = pages[pages.length - 3];
    //         var listpageData = wx.getStorageSync("listData");
            
    //        listpage.setData({fengshu: "0" });
    //         console.log(listpage)
            
    //       },

    //     })
        
        // 拿到全部页数  
       


       
        // wx.navigateTo({
        //   url: '../my/my',
        // })
        // wx.switchTab({
        //   url: '../shoplist/shoplist',
        // })


    //   },
    // })
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