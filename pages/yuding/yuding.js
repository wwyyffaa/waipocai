// pages/yuidng/yuding.js
var app = getApp(); 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    top_id: 0,
    date: '2016-09-01',
    time: "11:55",
    array: ["二人桌", "三人桌", "四人桌", "五人桌", "六人桌"],
    section__title_index: 0,
    picker_selece_index: 0,
    result: {},
    submitState: true,
    shopPhone: "13971708966",
    nameValue:"请输入姓名",
    phoneValue:"请输入电话"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var time = this.newTime();
    var date = this.newDate();
    this.setData({ time: time, date: date })

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
    // var time = this.newTime();
    // var date = this.newDate();
    // this.setData({ time: time, date: date })
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
  // 改变样式和显示的内容
  top_btn: function (e) {
    var id = e.currentTarget.dataset.id;
    this.setData({ top_id: id })

  },
  bindDateChange: function (e) {
    
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function (e) {
    
    this.setData({
      time: e.detail.value
    })
  },
  PickerChange: function (e) {
    
    this.setData({
      picker_selece_index: e.detail.value
    })
  },
  // 提交订单
  formSubmit: function (e) {
    var result = e.detail.value;
    var reg = /^1[3|4|5|7|8][0-9]{9}$/;

    if (result.name == "") {
      this.setData({
        toast: {
          toastClass: 'toast',
          toastMessage: '亲，忘了填您的名字哟！'
        }
      });
      setTimeout(() => {
        this.setData({
          toast: {
            toastClass: '',
            toastMessage: ''
          }
        });
      }, 2000);
      return;
    }

    if (result.phone == "") {
      this.setData({
        toast: {
          toastClass: 'toast',
          toastMessage: '亲，忘了填手机号哟！'
        }
      });
      setTimeout(() => {
        this.setData({
          toast: {
            toastClass: '',
            toastMessage: ''
          }
        });
      }, 2000);
      return;
    }

    if (!reg.test(result.phone)){
      this.setData({
        toast: {
          toastClass: 'toast',
          toastMessage: '亲，手机号不正确哟！'
        }
      });
      setTimeout(() => {
        this.setData({
          toast: {
            toastClass: '',
            toastMessage: ''
          }
        });
      }, 2000);
      return;
    }
    result.peopleNum = this.data.array[result.peopleNum];
    this.setData({ result: result, submitState: false });
  },
  // 获取当前的日期
  newDate: function () {
    var date = new Date();
    var seperator1 = "-";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
      month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate;
    return currentdate;
  },
  // 获取当前时间
  newTime: function () {
    var date = new Date();
    var seperator2 = ":";
    var min = date.getMinutes();
    if (min <= 9) {
      min = "0" + min
    }
    var currentdate = date.getHours() + seperator2 + min;
    return currentdate;
  },
  // 取消约定
  cancelYY: function () {
    this.setData({ submitState: true })
  },
  // 拨打电话
  callphone: function () {
    var that = this;
    wx.makePhoneCall({
      phoneNumber: that.data.shopPhone
    })
  },
  // input获取焦点
  inputFocusName:function(e){
    var value = e.detail.value;
    console.log("获取焦点");
    if(value != "请输入姓名"){
      this.setData({ nameValue: value });
    }else{
      this.setData({ nameValue: "" });
    }
    
  },
  inputFocusPhone: function (e) {
    var value = e.detail.value;
    console.log("获取焦点");
    if (value != "请输入电话") {
      this.setData({ phoneValue: value });
    } else {
      this.setData({ phoneValue: "" });
    }

  },
  //input失去焦点 
  inputBindblurName:function(e){
    var value = e.detail.value;
    console.log("失去焦点");
    if(value.length<=0){
      this.setData({nameValue:"请输入姓名" });
    }else{
      this.setData({nameValue: value });
    }
  },
  inputBindblurPhone: function (e) {
    var value = e.detail.value;
    console.log("失去焦点");
    if (value.length <= 0) {
      this.setData({ phoneValue: "请输入电话" });
    } else {
      this.setData({ phoneValue: value });
    }
  }
  
})
