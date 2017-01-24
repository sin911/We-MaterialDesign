Page({
  data:{
      txs:['input','ripple、reveal'],
      url:''
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    
  },
 
  onItemClick : function(e){
      console.log(e.currentTarget.dataset.id)
      this.url='?title='+this.data.txs[e.currentTarget.dataset.id]
      var tempTitle=''
      switch(e.currentTarget.dataset.id){
        case 0:
          tempTitle = '../input/input'
          
          break;
        case 1:
           tempTitle = '../ripple/ripple'
          break;
        case 2:
            tempTitle = '../pallete/pallete'
          break;
      }
      wx.navigateTo({
          url: tempTitle+this.url,
          success: function(res){
            // success
          },
          fail: function() {
            // fail
          },
          complete: function() {
            // complete
          }
        })
  }
})