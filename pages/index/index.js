//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
     
    ],
    //中间圆形图标
    centerimgs: [
      { 
        img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        text:"人气推荐"
      },
       {
        img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        text: "经典汤类"
      }, 
      {
        img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        text: "四川炒菜"
      },
       {
        img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        text: "人气推荐"
      },
       {
        img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        text: "经典汤类"
      },
       {
         img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
         text: "四川炒菜"
       }
      ,
       {
         img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
         text: "待定"
       }
      ,
       {
         img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
         text: "待定"
       }
      ],
  //主力推荐圆形数据
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },
  go_fenlei:function(e){
    var id = e.currentTarget.dataset.id;

      wx.switchTab({
        url: '../shoplist/shoplist'
      });
    
      // wx.navigateTo({
      //   url: '../shoplist/shoplist'
      // })
      
    },
    clear:function(){
      wx.clearStorage();
    }
   
   
  
})
