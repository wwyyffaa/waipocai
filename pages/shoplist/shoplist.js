const app = getApp();
Page({

  /** 
   * 页面的初始数据
   */
  data: {
    yangshi_id: 0,
    fengshu: 0,
    zongjia: 0,
    hc:true,
    list_left: [
      { goodsName: "人气推荐", goodsId: 0, goodsCount: 0, goodsTotalPrice: 0, goodsUnit: 0 },
      { goodsName: "经典汤类", goodsId: 1, goodsCount: 0, goodsTotalPrice: 0, goodsUnit: 0 },
      { goodsName: "四川炒菜", goodsId: 2, goodsCount: 0, goodsTotalPrice: 0, goodsUnit: 0 }
    ],
    list_right: [
      [
        {
          goodsImage: "../../imgs/11.png",
          imageUrl: "../../imgs/11.png",
          goodsName: "香蕉",
          goodsEnName: "banner",
          hot: "../../icon/hot5.svg",
          goodsYj: 300,
          goodsXj: 100,
          goodscount: 0,
          goodsId: 0,
          goodspage: 0

        },
        {
          goodsImage: "../../imgs/12.png",
          imageUrl: "../../imgs/12.png",
          goodsName: "草莓",
          goodsEnName: "banner",
          hot: "../../icon/hot5.svg",
          goodsYj: 300,
          goodsXj: 100,
          goodscount: 0,
          goodsId: 1,
          goodspage: 0

        }
      ]
      ,
      [
        {
          goodsImage: "../../imgs/11.png",
          imageUrl: "../../imgs/11.png",
          goodsName: "西瓜",
          goodsEnName: "banner",
          hot: "../../icon/hot5.svg",
          goodsYj: 300,
          goodsXj: 100,
          goodscount: 0,
          goodsId: 0,
          goodspage: 1
        },
        {
          goodsImage: "../../imgs/12.png",
          imageUrl: "../../imgs/12.png",
          goodsName: "菠萝",
          goodsEnName: "banner",
          hot: "../../icon/hot5.svg",
          goodsYj: 300,
          goodsXj: 100,
          goodscount: 0,
          goodsId: 1,
          goodspage: 1

        },
        {
          goodsImage: "../../imgs/11.png",
          imageUrl: "../../imgs/11.png",
          goodsName: "哈密瓜",
          goodsEnName: "banner",
          hot: "../../icon/hot5.svg",
          goodsYj: 300,
          goodsXj: 100,
          goodscount: 0,
          goodsId: 2,
          goodspage: 1

        }
      ]
      ,
      [
        {
          goodsImage: "../../imgs/12.png",
          imageUrl: "../../imgs/12.png",
          goodsName: "葡萄",
          goodsEnName: "banner",
          hot: "../../icon/hot5.svg",
          goodsYj: 300,
          goodsXj: 100,
          goodscount: 0,
          goodsId: 0,
          goodspage: 2
        },
        {
          goodsImage: "../../imgs/11.png",
          imageUrl: "../../imgs/11.png",
          goodsName: "开心果",
          goodsEnName: "banner",
          hot: "../../icon/hot5.svg",
          goodsYj: 300,
          goodsXj: 100,
          goodscount: 0,
          goodsId: 1,
          goodspage: 2
        },
        {
          goodsImage: "../../imgs/12.png",
          imageUrl: "../../imgs/12.png",
          goodsName: "火龙果",
          goodsEnName: "banner",
          hot: "../../icon/hot5.svg",
          goodsYj: 300,
          goodsXj: 100,
          goodscount: 0,
          goodsId: 2,
          goodspage: 2
        },
        {
          goodsImage: "../../imgs/11.png",
          imageUrl: "../../imgs/11.png",
          goodsName: "西红柿",
          goodsEnName: "banner",
          hot: "../../icon/hot5.svg",
          goodsYj: 300,
          goodsXj: 100,
          goodscount: 0,
          goodsId: 3,
          goodspage: 2
        }
        ,
        {
          goodsImage: "../../imgs/12.png",
          imageUrl: "../../imgs/12.png",
          goodsName: "开心果",
          goodsEnName: "banner",
          hot: "../../icon/hot5.svg",
          goodsYj: 300,
          goodsXj: 100,
          goodscount: 0,
          goodsId: 4,
          goodspage: 2
        },
        {
          goodsImage: "../../imgs/12.png",
          imageUrl: "../../imgs/12.png",
          goodsName: "火龙果",
          goodsEnName: "banner",
          hot: "../../icon/hot5.svg",
          goodsYj: 300,
          goodsXj: 100,
          goodscount: 0,
          goodsId: 5,
          goodspage: 2
        },
        {
          goodsImage: "../../imgs/11.png",
          imageUrl: "../../imgs/11.png",
          goodsName: "西红柿",
          goodsEnName: "banner",
          hot: "../../icon/hot5.svg",
          goodsYj: 300,
          goodsXj: 100,
          goodscount: 0,
          goodsId: 6,
          goodspage: 2
        }
      ]
    ]
  },
  changeys: function (e) {
    var id = e.currentTarget.dataset.id;
    this.setData({ yangshi_id: id })

  },
  // 点击跳转到商品的详细页
  shopDetailed: function (e) {
    var that = this;
    var id = e.currentTarget.dataset.id;
    var page = e.currentTarget.dataset.page;
    var data = this.data.list_right[page][id];
    data = JSON.stringify(data);


    var rD = that.data.list_right;
    var array = [];
    rD.forEach(function (v, i) {
      v.forEach(function (v, i) {
        if (v["goodscount"] != 0) {
          array.push(v)
        }
      })
    });
    
    wx.setStorage({
      key: 'shoplist',
      data: array,
    })
    
   
    wx.navigateTo({
      url: '../spxj/spxj?shopDetailed=' + data,
    })
  },
  // 商品数量增加
  add_commodity: function (e) {
    var that = this;
    var id = e.currentTarget.dataset.goodsid;
    var page = that.data.yangshi_id;

    var zongge = that.data.list_left;
    var zgString = "list_left[" + page + "]";
    var newRight = that.data.list_right[page];
    var newString = 'list_right[' + page + ']';
    var lCstring = 'list_left[' + page + '].goodsCount';

    var listCount = 0;
    if (newRight[id].goodscount > 99) {
      return
    } else {
      newRight[id].goodscount++;
    }
    if (newRight[id].goodscount == 1) {
      for (var i = 0; i < newRight.length; i++) {
        if (newRight[i].goodscount != 0) {
          listCount++;
        }
      }
      that.setData({ [lCstring]: listCount })
    }
    zongge[page].goodsTotalPrice = 0;
    zongge[page].goodsUnit = 0;
    for (var i = 0; i < newRight.length; i++) {
      if (newRight[i].goodscount != 0) {
        zongge[page].goodsTotalPrice += newRight[i].goodsXj * newRight[i].goodscount;
        zongge[page].goodsUnit += newRight[i].goodscount;

      }
    }

    var zongsum = app.qiuhe({ array: zongge, key: "goodsTotalPrice" });
    var fengshu = app.qiuhe({ array: zongge, key: "goodsUnit" });
    this.setData({ [newString]: newRight, list_left: zongge, zongjia: zongsum, fengshu, fengshu })
  },




  // 商品数量减少
  jian: function (e) {
    var that = this;
    var id = e.currentTarget.dataset.goodsid;
    var page = that.data.yangshi_id;

    var zongge = that.data.list_left;
    var zgString = "list_left[" + page + "]";
    var newRight = that.data.list_right[page];
    var newString = 'list_right[' + page + ']';
    var lCstring = 'list_left[' + page + '].goodsCount';

    var listCount = 0;
    if (newRight[id].goodscount < 0) {
      return
    } else {
      newRight[id].goodscount--;
    }
    if (newRight[id].goodscount == 0) {
      for (var i = 0; i < newRight.length; i++) {
        if (newRight[i].goodscount != 0) {
          listCount += 1;
        }
      }
      this.setData({ [lCstring]: listCount })
    }
    zongge[page].goodsTotalPrice = 0;
    zongge[page].goodsUnit = 0;
    for (var i = 0; i < newRight.length; i++) {
      if (newRight[i].goodscount != 0) {
        zongge[page].goodsTotalPrice += newRight[i].goodsXj * newRight[i].goodscount;
        zongge[page].goodsUnit += newRight[i].goodscount;
      }
    }


    var zongsum = app.qiuhe({ array: zongge, key: "goodsTotalPrice" });
    var fengshu = app.qiuhe({ array: zongge, key: "goodsUnit" });
    this.setData({ [newString]: newRight, list_left: zongge, zongjia: zongsum, fengshu, fengshu })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    // 获取数据
    // wx.request({
    //   url: "http://10.0.0.12:3001/api/v1/goodstypes/query?serial=st_store515136801224",
    //   method:"GET",
    //   success:function(res){
    //     console.log(res)
    //   }
    // })
    wx.getSystemInfo({
      success: function (res) {
        

        that.setData({ countHeight: res.windowHeight - res.windowWidth / 750 * 80});

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
    var that = this;
    
    if (wx.getStorageSync("shoplist").length> 0) {
      
      var list_right = that.data.list_right;
      var list_left = that.data.list_left;
      var data = wx.getStorageSync("shoplist");
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
      }
      // 拿数据进行对比
      for (var i = 0; i < data.length; i++) {
        list_right[data[i]["goodspage"]][data[i]["goodsId"]]["goodscount"] = data[i]["goodscount"];
      }
      for (var i = 0; i < list_right.length; i++){
        for (var j = 0; j < list_right[i].length; j++){
          if (list_right[i][j]["goodscount"] != 0){
            list_left[i]["goodsCount"] += 1;
            list_left[i]["goodsUnit"] = list_left[i]["goodsUnit"] + list_right[i][j]["goodscount"];
            list_left[i]["goodsTotalPrice"] += list_right[i][j]["goodscount"] * list_right[i][j]["goodsXj"]
          }
        }
      }

      var zongsum = app.qiuhe({ array: list_left, key: "goodsTotalPrice" });
      var fengshu = app.qiuhe({ array: list_left, key: "goodsUnit" });
      that.setData({ list_right: list_right, list_left: list_left, zongjia: zongsum, fengshu: fengshu });
     

    }
  },

  // /**
  //  * 生命周期函数--监听页面隐藏
  //  */
  onHide: function (){
    var that = this;
    var rD = that.data.list_right;
    var array = [];
    rD.forEach(function (v, i) {
      v.forEach(function (v, i) {
        if (v["goodscount"] != 0) {
          array.push(v)
        }
      })
    });
    
    wx.setStorage({
      key: 'shoplist',
      data: array,
    })

      







  },
  // 下单页面跳到确认订单页面 并且缓存数据；
  xOrder: function () {
    var that = this;
    var rD = that.data.list_right;
    var array = [];
    rD.forEach(function (v, i) {
      v.forEach(function (v, i) {
        if (v["goodscount"] != 0) {
          array.push(v)
        }
      })
    });

    wx.setStorage({
      key: 'shoplist',
      data: array,
    })
    
    wx.navigateTo({
      url: '../ensureOrder/ensureOrder?hc='+ that.data.hc
    })
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