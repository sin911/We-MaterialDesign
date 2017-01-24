Page({
  data:{
      ripple_style:'',
      ripple_style2:'',
      reveal:"Reveal",
      reveal_style:''
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    wx.setNavigationBarTitle({
      title: options.title,
      success: function(res) {
        // success
      }
    })
  },

  onClickPaper:function(e){
      var that = this
      var offLeft = e.currentTarget.offsetLeft
      var offTop = e.currentTarget.offsetTop
      var pageX = e.changedTouches[0].pageX
      var pageY = e.changedTouches[0].pageY
      console.log(pageX-offLeft-25)
      console.log(pageY-offTop-25)
      
      this.setData({
          ripple_style:'top:'+(pageY-offTop-25)+'px ; left:'+(pageX-offLeft-25)+'px ;-webkit-animation: ripple 0.4s linear; animation: ripple 0.4s linear;'
          
      })
      setTimeout(function(){
        that.setData({
          ripple_style:' -webkit-animation: ripple-reset 0s linear; animation: ripple-reset 0s linear;'
          
      })
      },300)

    //   do something

  },

  onClickPaper2: function(e){
    var that = this
      var offLeft = e.currentTarget.offsetLeft
      var offTop = e.currentTarget.offsetTop
      var pageX = e.changedTouches[0].pageX
      var pageY = e.changedTouches[0].pageY
      console.log(pageX-offLeft-50)
      console.log(pageY-offTop-50)
      if(this.data.reveal==='Reveal'){
          this.setData({
          ripple_style2:'background-color:red;top:'+(pageY-offTop-25)+'px ; left:'+(pageX-offLeft-25)+'px ;-webkit-animation: ripple 2s linear; animation: ripple 2s linear;'
          
          })
          setTimeout(function(){
            that.setData({
            reveal_style:'background-color:red;',
            reveal:'Switch',
            ripple_style2:' -webkit-animation: ripple-reset 0s linear; animation: ripple-reset 0s linear;'
          
           })
        },1000)
     }else{
         this.setData({
          ripple_style2:'background-color:deepskyblue;top:'+(pageY-offTop-25)+'px ; left:'+(pageX-offLeft-25)+'px ;-webkit-animation: ripple 2s linear; animation: ripple 2s linear;'
          
          })
          setTimeout(function(){
            that.setData({
            reveal_style:'background-color:deepskyblue;',
            reveal:'Reveal',
            ripple_style2:' -webkit-animation: ripple-reset 0s linear; animation: ripple-reset 0s linear;'
          
           })
        },1000)
     }
      
  }

})