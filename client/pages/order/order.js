Page({

  /**
   * 页面的初始数据
   */
  data: {
   date:"2018-01-01",
   time1:"09:00",
   time2:"10:00"
  },
  
  bindDateChange:function(e){
    console.log(e.detail.value);
    this.setData({
      date:e.detail.value
    });
  },
  
  bindTimeChange1:function(e){
    console.log(e.detail.value);
    this.setData({
      time1:e.detail.value
    });
  },

  bindTimeChange2: function (e) {
    console.log(e.detail.value);
    this.setData({
      time2: e.detail.value
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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