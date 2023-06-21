// pages/publish-second-hand/publish-second-hand.js
// 发布二手信息
Page({
  /**
   * 页面的初始数据
   */
  data: {
    addImage: 'cloud://cgsa-mini-program-9e3o2q71fdb4e3.6367-cgsa-mini-program-9e3o2q71fdb4e3-1315632320/images/publish-second-hand/add_image.jpg',
    forwardArrow: '../../images/publish-second-hand/forward_arrow.jpg'
  },
  addImage() {
    console.log('添加图片');
  },
  selectCategory() {
    console.log('选择类别');
  },
  inputPrice() {
    console.log('输入价格');
  },
  inputContactInfo() {
    console.log('输入联系方式');
  },
  postBtnTapped() {
    console.log('发布');
  }
})