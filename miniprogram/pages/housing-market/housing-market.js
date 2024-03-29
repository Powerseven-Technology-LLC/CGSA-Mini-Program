// pages/housing-market/housing-market.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
        minPrice: "",
        maxPrice: "",
        comprehensiveSortValue: 0,
        comprehensiveSortOptions: [
            { text: "综合排序", value: 0, icon: "" },
            { text: "最新发布", value: 1, icon: "" },
            { text: "价格降序", value: 2, icon: "" },
            { text: "价格升序", value: 3, icon: "" },
        ],
        priceTitle: "价格不限",
        priceSortValue: 0,
        priceSortOptions: [
            { text: "价格不限", value: 0, icon: "" },
            { text: "$800以下", value: 1, icon: "" },
            { text: "$800-$1200", value: 2, icon: "" },
            { text: "$1200-$1600", value: 3, icon: "" },
            { text: "$1600以上", value: 4, icon: "" },
        ],
        furnitureOptions: [
            { text: "Any", value: 0, toggled: true },
            { text: "有家具", value: 1, toggled: false },
            { text: "无家具", value: 2, toggled: false },
        ],
        bedroomOptions: [
            { text: "Any", value: -1, toggled: true },
            { text: "Studio", value: 0, toggled: false },
            { text: "1", value: 1, toggled: false },
            { text: "2", value: 2, toggled: false },
            { text: "3", value: 3, toggled: false },
            { text: "4+", value: 4, toggled: false },
        ],
        selectedBedroomOptions: [],
        bathroomOptions: [
            { text: "Any", value: -1 },
            { text: "1", value: 1 },
            { text: "2", value: 2 },
            { text: "3", value: 3 },
            { text: "4+", value: 4 },
        ],
        leaseLengthOptions: [
            { text: "Any", value: 0, toggled: true },
            { text: "小于一年", value: 1, toggled: false },
            { text: "大于一年", value: 2, toggled: false },
        ],
        selectedBathroomOptions: [],
        searchIcon: "../../images/second-hand-market/search_icon.jpg",
        searchBarKeyword: "",
        filterItemIcon: "../../images/second-hand-market/filter_item_icon.jpg",
        tags: [
            "全部",
            "电子产品",
            "交通工具",
            "家具家电",
            "厨房用品",
            "学习资料",
        ],
        activeTagIndex: 0,
        products: [
            {
                image: "../../images/second-hand-market/product_1.jpg",
                title: "红色 高颜值自行车 骨折随缘出",
                price: "60",
                views: "72",
                avatar: "../../images/second-hand-market/product_1_avatar.jpg",
                username: "徐明玺Aaron",
                location: "Los Angeles",
                date: "04-26",
            },
            {
                image: "../../images/second-hand-market/product_1.jpg",
                title: "红色 高颜值自行车 骨折随缘出",
                price: "60",
                views: "72",
                avatar: "../../images/second-hand-market/product_1_avatar.jpg",
                username: "徐明玺Aaron",
                location: "Los Angeles",
                date: "04-26",
            },
            {
                image: "../../images/second-hand-market/product_1.jpg",
                title: "红色 高颜值自行车 骨折随缘出",
                price: "60",
                views: "72",
                avatar: "../../images/second-hand-market/product_1_avatar.jpg",
                username: "徐明玺Aaron",
                location: "Los Angeles",
                date: "04-26",
            },
            {
                image: "../../images/second-hand-market/product_1.jpg",
                title: "红色 高颜值自行车 骨折随缘出",
                price: "60",
                views: "72",
                avatar: "../../images/second-hand-market/product_1_avatar.jpg",
                username: "徐明玺Aaron",
                location: "Los Angeles",
                date: "04-26",
            },
            {
                image: "../../images/second-hand-market/product_1.jpg",
                title: "红色 高颜值自行车 骨折随缘出",
                price: "60",
                views: "72",
                avatar: "../../images/second-hand-market/product_1_avatar.jpg",
                username: "徐明玺Aaron",
                location: "Los Angeles",
                date: "04-26",
            },
            {
                image: "../../images/second-hand-market/product_1.jpg",
                title: "红色 高颜值自行车 骨折随缘出",
                price: "60",
                views: "72",
                avatar: "../../images/second-hand-market/product_1_avatar.jpg",
                username: "徐明玺Aaron",
                location: "Los Angeles",
                date: "04-26",
            },
        ],
        addPostImage: "../../images/second-hand-market/add_post.png",
    },
    getPriceRange() {
        if (!this.data.minPrice || !this.data.maxPrice) {
            this.selectComponent("#price-range").toggle();
            return;
        }
        if (parseInt(this.data.minPrice) > parseInt(this.data.maxPrice)) {
            let min = this.data.maxPrice;
            let max = this.data.minPrice;
            this.setData({
                minPrice: min,
                maxPrice: max,
            });
        }
        console.log("价格范围" + this.data.minPrice + "-" + this.data.maxPrice);
        this.setData({
            priceTitle: "$" + this.data.minPrice + "-$" + this.data.maxPrice,
            priceSortValue: 0,
        });
        this.selectComponent("#price-range").toggle();
    },
    clearPrice() {
        this.setData({
            minPrice: "",
            maxPrice: "",
        });
    },
    onPriceOptionSelect(e) {
        // console.log(e);
        if (!typeof e.detail === "number") {
            return;
        }
        this.setData({
            priceSortValue: e.detail,
            priceTitle: this.data.priceSortOptions[e.detail].text,
            minPrice: "",
            maxPrice: "",
        });
        // console.log(
        //     "价格排序" +
        //         this.data.priceSortOptions[this.data.priceSortValue].text
        // );
    },
    onBedroomButtonTap(e) {
        console.log(e);
        let idx = e.currentTarget.dataset.currentIndex;
        // 选中不是any的选项
        if (idx !== 0) {
            this.setData({
                ["bedroomOptions[" + idx + "].toggled"]:
                    !this.data.bedroomOptions[idx].toggled,
                ["bedroomOptions[0].toggled"]: false,
            });
            // 如果选中了any，其他选项都取消选中
        } else {
            if (this.data.bedroomOptions[0].toggled) {
                this.setData({
                    ["bedroomOptions[0].toggled"]:
                        !this.data.bedroomOptions[idx].toggled,
                });
            } else {
                let options = this.data.bedroomOptions;
                options[0].toggled = true;
                for (let i = 1; i < options.length; i++) {
                    options[i].toggled = false;
                }
                this.setData({
                    bedroomOptions: options,
                });
            }
        }
        // console.log(this.data.bedroomOptions[idx]);
    },
    onFurnitureButtonTap(e) {
        for (let i = 0; i < this.data.furnitureOptions.length; i++) {
            if (i === e.currentTarget.dataset.currentIndex) {
                this.setData({
                    ["furnitureOptions[" + i + "].toggled"]:
                        !this.data.furnitureOptions[i].toggled,
                });
            } else {
                this.setData({
                    ["furnitureOptions[" + i + "].toggled"]: false,
                });
            }
        }
    },
    onLeaseLengthButtonTap(e) {
        for (let i = 0; i < this.data.leaseLengthOptions.length; i++) {
            if (i === e.currentTarget.dataset.currentIndex) {
                this.setData({
                    ["leaseLengthOptions[" + i + "].toggled"]:
                        !this.data.leaseLengthOptions[i].toggled,
                });
            } else {
                this.setData({
                    ["leaseLengthOptions[" + i + "].toggled"]: false,
                });
            }
        }
    },
    searchBtnTapped() {
        console.log("搜索" + this.data.searchBarKeyword);
    },
    searchInput(e) {
        this.setData({
            searchBarKeyword: e.detail.value,
        });
    },
    changeTag(e) {
        this.setData({
            activeTagIndex: e.currentTarget.dataset.currentIndex,
        });
    },
    productTapped(e) {
        console.log("打开商品页" + e.currentTarget.dataset.productIndex);
        wx.navigateTo({
            url: "../../pages/second-hand-market-detail/second-hand-market-detail",
        });
    },
    addPostTapped() {
        wx.navigateTo({
            url: "../publish-housing-info/publish-housing-info",
        });
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {},

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {},

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {},

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {},

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {},

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {},

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {},

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {},
});
