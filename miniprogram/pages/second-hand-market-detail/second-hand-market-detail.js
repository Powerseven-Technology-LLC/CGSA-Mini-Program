// pages/second-hand-market-detail/second-hand-market-detail.js
// 二手市场详情页
Page({
  data: {
    shareImage: "../../images/second-hand-market-detail/share_icon.jpg",
    liked: false,
    likeImage: "../../images/second-hand-market-detail/like_icon.jpg",
    likedImage: "../../images/second-hand-market-detail/liked_icon.jpg",
    swiperImages: [
      "../../images/second-hand-market-detail/swiper1.jpg",
      "../../images/second-hand-market-detail/swiper2.jpg",
    ],
    descOverflowStatus: false, // 默认描述未超出三行
    descCollapseStatus: true, // 默认状态下描述部分没有点击展开信息
    showMoreImage: "../../images/second-hand-market-detail/show_more_icon.jpg",
    showLessImage: "../../images/second-hand-market-detail/show_less_icon.jpg",
    userAvatarImage: "../../images/second-hand-market-detail/user_avatar.jpg",
    commentList: [{
      username: "用户",
      avatar: "../../images/second-hand-market-detail/user_avatar.jpg",
      date: "2023-02-20",
      text: "GT3上运输用轮胎，基本不用，生产日期Front 2218 rear，line9sade，微信：hu22001gulize",
      likes: 0,
      liked: false
    }, {
      username: "Stella1",
      avatar: "../../images/second-hand-market-detail/user_avatar.jpg",
      date: "2019-11-12",
      text: "这个得先有911",
      likes: 1,
      liked: true
    }],
    commentImage: "../../images/second-hand-market-detail/comment_icon.jpg",
    hideCommentModal: true,  // 隐藏用户评论对话框
    modalAddImageImage: '../../images/second-hand-market-detail/modal_add_image.jpg'
  },
  onReady: function () {
    this.calcDescOverflow();
  },
  calcDescOverflow() {
    const query = this.createSelectorQuery();
    query.select(".description-content-text").boundingClientRect();
    query.select(".description-content-text-hidden").boundingClientRect();
    query.exec((res) => {
      this.setData({
        descOverflowStatus: res[1].height - res[0].height > 0 ? true : false
      });
    });
  },
  // 用户点击展开信息或收起信息
  showMoreTapped() {
    this.setData({
      descCollapseStatus: !this.data.descCollapseStatus
    });
  },
  // 用户点击评论框
  commentTextBoxTapped() {
    console.log("编辑评论");
    this.setData({
      hideCommentModal: !this.data.hideCommentModal
    });
  },
  // 用户点击评论对话框的发布按钮
  commentModalPost() {
    console.log("发布评论");
    this.setData({
      hideCommentModal: !this.data.hideCommentModal
    });
  },
  commentModalAddImage() {
    console.log('添加图片');
  },
  // 用户点击某条评论的点赞按钮
  commentListLikeBtnTapped(e) {
    let index = e.currentTarget.dataset.index;
    let key = 'commentList[' + index + ']';
    let item = this.data.commentList[index];
    item.liked = !item.liked;
    if (item.liked) {
      item.likes += 1;
    } else {
      item.likes -= 1;
    }
    this.setData({
      [key]: item
    });
  },
  // 用户点击分享按钮
  shareBtnTapped() {
    console.log("分享");
  },
  // 用户点击点赞按钮
  likeBtnTapped() {
    this.setData({
      liked: !this.data.liked
    });
  },
  // 用户点击聊天按钮
  chatBtnTapped() {
    console.log("聊天");
  }
});
