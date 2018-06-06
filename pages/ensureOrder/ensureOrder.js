var app = getApp();
Page({

  /** 
   * 页面的初始数据
   */
  data: {
    shoplist: [],
    countHeight: "",
    zongjia: 0,
    fengshu: 0
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options){
    var that = this;
    
    // that.setData({state:options.hc});
  
    // wx.getSystemInfo({
    //   success: function (res) {
    //     var data = wx.getStorageSync("shoplist");
    //     var zongjia = 0;
    //     var fengshu = 0;


    //     for (var i = 0; i < data.length; i++) {
    //       zongjia += data[i].goodsXj * data[i].goodscount;
    //       fengshu += data[i].goodscount;
    //     }

    //     that.setData({ shoplist: data, zongjia: zongjia, fengshu: fengshu, state: options.hc, countHeight: res.windowHeight - res.windowWidth / 750 * 184  })
       
    //     // that.setData({ countHeight: res.windowHeight - res.windowWidth / 750 * 184 });
    //     console.log("这就是data数据")
    //     console.log(that.data.shoplist)

    //   },
    //   fail(){
    //     console.log("数据拿不到")
    //   }
    // })
    var res =  wx.getSystemInfoSync()
    var data =  wx.getStorageSync("shoplist");
    var zongjia = 0;
    var fengshu = 0;


    for (var i = 0; i < data.length; i++) {
      zongjia += data[i].goodsXj * data[i].goodscount;
      fengshu += data[i].goodscount;
    }

    that.setData({ shoplist: data, zongjia: zongjia, fengshu: fengshu, state: options.hc, countHeight: res.windowHeight - res.windowWidth / 750 * 184 });

    // that.setData({ countHeight: res.windowHeight - res.windowWidth / 750 * 184 });
    console.log("这就是data数据")
    console.log(that.data.shoplist)
    
    
  },
  addSum: function (e) {
    var that = this;
    var id = e.currentTarget.dataset.id;
    var data = that.data.shoplist;
    var zongjia = 0;
    var fengshu = 0;
    if (data[id].goodscount > 99) {
      return
    } else {
      data[id].goodscount++;
    }

    data.forEach(function (val, index) {
      zongjia += val.goodsXj * val.goodscount;
      fengshu += val.goodscount;
    })

    that.setData({ shoplist: data, zongjia: zongjia, fengshu: fengshu })

  },
  delSum: function (e) {
    var that = this;
    var id = e.currentTarget.dataset.id;
    var data = that.data.shoplist;
    var zongjia = 0;
    var fengshu = 0;
    if (data[id].goodscount == 1) {
      data.splice(id, 1);
    } else {
      data[id].goodscount--;
    }

    data.forEach(function (val, index) {
      zongjia += val.goodsXj * val.goodscount;
      fengshu += val.goodscount;
    })

    that.setData({ shoplist: data, zongjia: zongjia, fengshu: fengshu })

  }
  ,
  xOrder: function () {
    var that = this;
    var a = {};
    a.zongjia = that.data.zongjia;
    a.fengshu = that.data.fengshu;
    a.list = that.data.shoplist;
    a.state = 0;
    a.time = app.getNowTime();

    if (wx.getStorageSync("allOrder")){
      var allOrder = wx.getStorageSync("allOrder");
      allOrder.push(a);
    } else {
      var allOrder = [];
      allOrder.push(a); 
    }
    wx.setStorageSync("allOrder", allOrder);
    
    wx.navigateTo({
      url: '../settlement/settlement?zongjia=' + that.data.zongjia,
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
    // var that = this;
    // var array = that.data.shoplist
    // wx.setStorageSync("shoplist", array);

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function (){
    var that = this;
    var array = that.data.shoplist;
   
    if(that.data.state){
      wx.setStorageSync("shoplist", array);
  
    }
    
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

})