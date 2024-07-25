<template>
  <view class="content">
    <!-- <view class="search-box">
      <icon type="search" size="13" style="margin-right: 12rpx;"></icon>
      <text>搜索</text>
    </view> -->
    <view v-if="showOrder" class="category-wrap">
      <scroll-view scroll-y scroll-with-animation class="category-bar">
        <view v-for="(item, index) in cateData" :key="index" class="category-item"
          :class="[current === index ? 'current' : '']" @click="switchCate(index)">
          <text class="line-1">{{ item.name }}</text>
        </view>
      </scroll-view>
      <scroll-view scroll-y scroll-with-animation class="category-content" :scroll-top="scrollRightTop"
        @scroll="rightScroll">
        <view style="padding: 16rpx; background-color: #f9f9f9">
          <view v-for="(item, index) in cateData" :key="index" class="category-right-item"
            :class="{ 'category-right-item-last': cateData.length == index + 1 }">
            <view class="item-title">
              <text>{{ item.name }}</text>
            </view>
            <view class="item-container">
              <view v-for="(item1, index1) in item.foods" :key="index1" class="thumbnail-box"
                @click="toPage('/packagesA/pages/angsi/webview', true)">
                <c-image class="item-cate-image" :src="item1.icon" resize="_r60xp"></c-image>
                <view class="item-cate-name">{{ item1.name }}</view>
              </view>
            </view>
          </view>
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      cateData: [], //分类数据结构
      current: 0, //左边分类栏当前的选中的项
      scrollLeftTop: 0, //左边分类栏项的高度
      cateItemHeight: 0, //右边栏项的高度
      cateBarHeight: 0, //左边分类栏的总高度
      rightScrollArr: [], //右边栏每项高度组成的数组
      scrollRightTop: 0, //当前右边栏滚动的高度
      showOrder: true,
    };
  },
  onReady() {
    // this.getCateTreeByCateLevel1();

    this.cateData = [
      {
        name: '热门推荐',
        foods: [
          {
            icon: 'https://livestreaming-prod.oss-cn-shenzhen.aliyuncs.com/product/2022/5/23/1528621303328800768.png',
            name: '话费慢充',
          },
          {
            icon: 'https://livestreaming-prod.oss-cn-shenzhen.aliyuncs.com/product/2022/5/23/1528621303328800768.png',
            name: '美团外卖',
          },
        ],
      },
      {
        name: '视频会员',
        foods: [
          {
            icon: 'https://livestreaming-prod.oss-cn-shenzhen.aliyuncs.com/product/2022/5/23/1528621303328800768.png',
            name: '话费慢充',
          },
          {
            icon: 'https://livestreaming-prod.oss-cn-shenzhen.aliyuncs.com/product/2022/5/23/1528621303328800768.png',
            name: '美团外卖',
          },
          {
            icon: 'https://livestreaming-prod.oss-cn-shenzhen.aliyuncs.com/product/2022/5/23/1528621303328800768.png',
            name: '美团外卖',
          },
          {
            icon: 'https://livestreaming-prod.oss-cn-shenzhen.aliyuncs.com/product/2022/5/23/1528621303328800768.png',
            name: '美团外卖',
          },
          {
            icon: 'https://livestreaming-prod.oss-cn-shenzhen.aliyuncs.com/product/2022/5/23/1528621303328800768.png',
            name: '美团外卖',
          },
          {
            icon: 'https://livestreaming-prod.oss-cn-shenzhen.aliyuncs.com/product/2022/5/23/1528621303328800768.png',
            name: '美团外卖',
          },
          {
            icon: 'https://livestreaming-prod.oss-cn-shenzhen.aliyuncs.com/product/2022/5/23/1528621303328800768.png',
            name: '美团外卖',
          },
          {
            icon: 'https://livestreaming-prod.oss-cn-shenzhen.aliyuncs.com/product/2022/5/23/1528621303328800768.png',
            name: '美团外卖',
          },
        ],
      },
      {
        name: '生活服务',
        foods: [
          {
            icon: 'https://livestreaming-prod.oss-cn-shenzhen.aliyuncs.com/product/2022/5/23/1528621303328800768.png',
            name: '话费慢充',
          },
          {
            icon: 'https://livestreaming-prod.oss-cn-shenzhen.aliyuncs.com/product/2022/5/23/1528621303328800768.png',
            name: '美团外卖',
          },
          {
            icon: 'https://livestreaming-prod.oss-cn-shenzhen.aliyuncs.com/product/2022/5/23/1528621303328800768.png',
            name: '美团外卖',
          },
          {
            icon: 'https://livestreaming-prod.oss-cn-shenzhen.aliyuncs.com/product/2022/5/23/1528621303328800768.png',
            name: '美团外卖',
          },
          {
            icon: 'https://livestreaming-prod.oss-cn-shenzhen.aliyuncs.com/product/2022/5/23/1528621303328800768.png',
            name: '美团外卖',
          },
        ],
      },
      {
        name: '音乐会员',
        foods: [
          {
            icon: 'https://livestreaming-prod.oss-cn-shenzhen.aliyuncs.com/product/2022/5/23/1528621303328800768.png',
            name: '话费慢充',
          },
          {
            icon: 'https://livestreaming-prod.oss-cn-shenzhen.aliyuncs.com/product/2022/5/23/1528621303328800768.png',
            name: '美团外卖',
          },
          {
            icon: 'https://livestreaming-prod.oss-cn-shenzhen.aliyuncs.com/product/2022/5/23/1528621303328800768.png',
            name: '美团外卖',
          },
          {
            icon: 'https://livestreaming-prod.oss-cn-shenzhen.aliyuncs.com/product/2022/5/23/1528621303328800768.png',
            name: '美团外卖',
          },
          {
            icon: 'https://livestreaming-prod.oss-cn-shenzhen.aliyuncs.com/product/2022/5/23/1528621303328800768.png',
            name: '美团外卖',
          },
        ],
      },
      {
        name: '美食餐饮',
        foods: [
          {
            icon: 'https://livestreaming-prod.oss-cn-shenzhen.aliyuncs.com/product/2022/5/23/1528621303328800768.png',
            name: '话费慢充',
          },
          {
            icon: 'https://livestreaming-prod.oss-cn-shenzhen.aliyuncs.com/product/2022/5/23/1528621303328800768.png',
            name: '美团外卖',
          },
          {
            icon: 'https://livestreaming-prod.oss-cn-shenzhen.aliyuncs.com/product/2022/5/23/1528621303328800768.png',
            name: '美团外卖',
          },
          {
            icon: 'https://livestreaming-prod.oss-cn-shenzhen.aliyuncs.com/product/2022/5/23/1528621303328800768.png',
            name: '美团外卖',
          },
          {
            icon: 'https://livestreaming-prod.oss-cn-shenzhen.aliyuncs.com/product/2022/5/23/1528621303328800768.png',
            name: '美团外卖',
          },
        ],
      },
      {
        name: '读书会员',
        foods: [
          {
            icon: 'https://livestreaming-prod.oss-cn-shenzhen.aliyuncs.com/product/2022/5/23/1528621303328800768.png',
            name: '话费慢充',
          },
          {
            icon: 'https://livestreaming-prod.oss-cn-shenzhen.aliyuncs.com/product/2022/5/23/1528621303328800768.png',
            name: '美团外卖',
          },
          {
            icon: 'https://livestreaming-prod.oss-cn-shenzhen.aliyuncs.com/product/2022/5/23/1528621303328800768.png',
            name: '美团外卖',
          },
          {
            icon: 'https://livestreaming-prod.oss-cn-shenzhen.aliyuncs.com/product/2022/5/23/1528621303328800768.png',
            name: '美团外卖',
          },
          {
            icon: 'https://livestreaming-prod.oss-cn-shenzhen.aliyuncs.com/product/2022/5/23/1528621303328800768.png',
            name: '美团外卖',
          },
        ],
      },
      {
        name: '健康权益',
        foods: [
          {
            icon: 'https://livestreaming-prod.oss-cn-shenzhen.aliyuncs.com/product/2022/5/23/1528621303328800768.png',
            name: '话费慢充',
          },
          {
            icon: 'https://livestreaming-prod.oss-cn-shenzhen.aliyuncs.com/product/2022/5/23/1528621303328800768.png',
            name: '美团外卖',
          },
          {
            icon: 'https://livestreaming-prod.oss-cn-shenzhen.aliyuncs.com/product/2022/5/23/1528621303328800768.png',
            name: '美团外卖',
          },
          {
            icon: 'https://livestreaming-prod.oss-cn-shenzhen.aliyuncs.com/product/2022/5/23/1528621303328800768.png',
            name: '美团外卖',
          },
          {
            icon: 'https://livestreaming-prod.oss-cn-shenzhen.aliyuncs.com/product/2022/5/23/1528621303328800768.png',
            name: '美团外卖',
          },
        ],
      },
    ];

    this.getCateItemTop();
  },
  methods: {
    getCateTreeByCateLevel1() {
      const that = this;
      const params = {
        type: that.cateType,
        code: that.cateLevel1[that.cateLevel1Index].code,
      };
      return that.apiUrl
        .productGetCategoryByTreeByCode({ data: params })
        .then((res) => {
          if (res.data.status == 1) {
            that.cateData = res.data.data;
            that.getCateItemTop();
          }
        })
        .finally(() => {
          if (this.cateData && this.cateData.length > 0) {
            this.showOrder = true;
          } else {
            this.showOrder = false;
          }
        });
    },
    getCateItemTop() {
      let query = uni.createSelectorQuery();
      query
        .selectAll('.category-right-item')
        .boundingClientRect((rects) => {
          rects.forEach((rect) => {
            // this.rightScrollArr.push(rect.top - rects[0].top)
            this.rightScrollArr.push(rect.top);
          });
        })
        .exec(function () { });
    },
    async switchCate(index) {
      if (this.rightScrollArr.length == 0) {
        await this.getCateItemTop();
      }
      if (index === this.current) return;
      //将右边的scroll高度重设
      this.scrollRightTop = this.rightScrollArr[index];

      // 分类选中的居中
      // this.scrollRightTop = this.rightScrollArr[index-1];

      this.cateDataStatus(index);
    },
    //设置 左边分类的滚动状态
    cateDataStatus(index) {
      console.log('index', index)
      //当前选择的项
      this.current = index;
      // 如果为0，意味着尚未初始化，调用getElRect获取目标元素的高度
      if (this.cateBarHeight == 0 || this.cateItemHeight == 0) {
        this.getElRect('.category-bar', 'cateBarHeight');
        this.getElRect('.category-item', 'cateItemHeight');
      }
      //将该项垂直居中，算法： 左边scroll的scrollTop = 当前项的高度 - 分类栏的一半高度
      this.scrollLeftTop =
        index * this.cateItemHeight + this.cateItemHeight / 2 - this.cateBarHeight / 2;
    },
    //获取一个目标元素的高度
    getElRect(elClass, dataVal) {
      const query = uni.createSelectorQuery();
      query
        .select(elClass)
        .fields(
          {
            size: true,
          },
          (res) => {
            this[dataVal] = res.height;
          }
        )
        .exec(function () { });
    },
    async rightScroll(e) {
      if (this.rightScrollArr.length == 0) {
        await this.getCateItemTop();
      }
      if (!this.cateBarHeight) {
        await this.getElRect('.category-bar', 'cateBarHeight');
      }
      // scrollHeight的值等于滚动位置加上左边栏的高度一半是为了始终拿的是中间显示的右边项做对比
      // let scrollHeight = e.detail.scrollTop + this.cateBarHeight / 2;
      let scrollHeight = e.detail.scrollTop;

      for (let i = 0; i < this.rightScrollArr.length; i++) {
        let height1 = this.rightScrollArr[i];
        let height2 = this.rightScrollArr[i + 1];
        //如果不存在height2，意味着数据循环已经到了最后一个，设置左边菜单为最后一项即可。
        // if (!height2 || (scrollHeight >= height1 && scrollHeight < height2)) {
        if (!height2 || scrollHeight <= height1) {
          this.cateDataStatus(i);
          return;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
page {
  font-size: 28rpx;
  color: #303133;
}

.content {
  display: flex;
  flex-direction: column;
  height: calc(100vh - var(--window-top) - var(--window-bottom));
}

.category-wrap {
  flex: 1;
  display: flex;
  overflow: hidden;
}

.category-bar {
  width: 170rpx;
  background-color: #f6f6f6;

  .category-item {
    text-align: center;
    height: 92rpx;
    line-height: 92rpx;

    &.current {
      color: #e93b3d;
      background-color: #ffffff;
    }
  }
}

.search-box {
  display: flex;
  align-items: center;
  margin: 24rpx;
  background-color: #eaeaea;
  border-radius: 50rpx;
  padding: 10rpx 16rpx;
  font-size: 26rpx;
  color: #909399;
}

.line-1 {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.category-right-item {
  margin-bottom: 30rpx;
  background-color: #fff;
  padding: 16rpx;
  border-radius: 8rpx;
}

.category-right-item-last {
  // height: calc(100vh - 84rpx - var(--window-top));
  height: calc(100vh - 114rpx - var(--window-top));
}

.item-title {
  font-size: 26rpx;
  font-weight: bold;
  color: #303133;
  text-align: center;
}

.item-container {
  display: flex;
  flex-wrap: wrap;
}

.thumbnail-box {
  width: 33.33%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 20rpx;
}

.item-cate-name {
  font-weight: normal;
  font-size: 24rpx;
  color: #303133;
}

.item-cate-image {
  width: 120rpx;
  height: 120rpx;
}
</style>
