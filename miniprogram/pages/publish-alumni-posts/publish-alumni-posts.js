// pages/publish-alumni-posts/publish-alumni-posts.js
// 发布校友说
Page({
  /**
   * 页面的初始数据
   */
  data: {
    forwardArrow: '../../images/publish-alumni-posts/forward_arrow.jpg',
    upArrow: '../../images/publish-alumni-posts/up_arrow.jpg',
    downArrow: '../../images/publish-alumni-posts/down_arrow.jpg',
    crossArrow: '../../images/publish-alumni-posts/cross_arrow.jpg',
    textIcon: '../../images/publish-alumni-posts/text_icon.jpg',
    imageIcon: '../../images/publish-alumni-posts/image_icon.jpg'
  },
  topicTapped() {
    wx.navigateTo({
      url: '../../pages/topic-selection/topic-selection',
    })
  },
  addText() {
    console.log('增加文本');
  },
  addImage() {
    console.log('增加图片');
  },
  postBtnTapped() {
    console.log('发布');
  }
});