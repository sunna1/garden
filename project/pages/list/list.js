Page({
  data: {
    uhide: false,
    list: [{
      text: '多肉的养殖经验',

    }, {
      text: '多肉的养殖经验',

    },
    {
      text: '多肉的养殖经验',

    },
    {
      text: '多肉的养殖经验',

    },
    {
      text: '多肉的养殖经验',

    }, {
      text: '多肉的养殖经验',

    }
    ],
   
    array2: [
      {

        
        imgArr2:
          '../../image/17.jpg',
        head2:'新手养花小技巧',
        number2:'2030'

      },
      {
        imgArr2:
          '../../image/12.jpg',
        head2: '这样养殖让花开更美',
        number2: '2030'

      }
      ,
      {
        imgArr2:
          '../../image/5.jpg',
        head2: '最不起眼的养花小技巧',
        number2: '2030'

      }
    ],
    brand: [
      {

        imgArr1:
          '../../image/3.jpg'

      },
      {

        imgArr1:
          '../../image/10.jpg'

      }
      ,
      {

        imgArr1:
          '../../image/9.jpg'

      }
     
    ],
  },
  
  onLoad: function () {
    var that = this;
    wx.request({
      url: getApp().globalData.path + 'randowPlant' + getApp().globalData.path2,
      success:function(res){
        console.log(res.data)
      }
    })
    wx.request({
      url: getApp().globalData.path + 'recommendTech' + getApp().globalData.path2,
      success: function (res) {
          console.log(res.data)
        that.setData({
          techlist: res.data
        })
      },
      fail: function (res) {
        console.log(".....fail.....");
      }
    })
  }

,
  //搜索方法 key为用户输入的查询字段
  search: function (key) {
    /*console.log('搜索函数触发')*/

    var that = this;
    wx.navigateTo({
      url: "../result/result?word=" + key,
    })
  
  },
//搜素时触发，调用search: function (key)，传入输入的e.detail.value值
wxSearchInput: function (e) {
   this.setData({
     word:e.detail.value
   })
    
  },
wxSearchFn : function() {

  this.search(this.data.word);
  },
 
  //切换隐藏和显示
  toggleBtn: function () {
    var that = this;
    var toggleBtnVal = that.data.uhide;
    if (toggleBtnVal) {
      that.setData({
        uhide: false
      })
    } else {
      that.setData({
        uhide: true
      })
    }
  },

 
})
