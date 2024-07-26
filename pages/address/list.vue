<template>
  <view class="container">
    <view class="list" v-if="false">
      <view class="item" v-for="item in 20">
        <view class="item-left">
          <view class="item-left-top">
            <text>{{ item }}-张三</text>
            <text>18888888888</text>
          </view>
          <view class="item-left-bottom">
            <text>北京市朝阳区朝阳公园</text>
          </view>
        </view>
        <view class="item-right">
        </view>
      </view>
    </view>
    <view class="empty" v-else>
      <view class="empty-wrap">
        <my-icon icon="icon-dingwei" color="#999" size="60" />
        <view class="empty-text">
          <text class="empty-text-title">暂无收货地址</text>
          <text class="empty-text-desc">点击下方按钮添加收货地址</text>
        </view>
      </view>
    </view>
    <view class="bottom-button">
      <button class="button" hover-class="button-hover" @click="handleGotoAddAddress('add')">
        <my-icon icon="icon-jiahao" color="white" />
        <text>添加收货地址</text>
      </button>
    </view>
  </view>
</template>

<script setup lang="ts">
function handleGotoAddAddress(type,id=null) {
  let url = `/pages/address/add`
  if(type !== 'add'){
    url = `/pages/address/add?addressId=${id}`
  }
  uni.navigateTo({ url })
}
</script>

<style scoped lang="scss">
.container {
  // padding: 12px;
  // display: flex;
  // flex-direction: column;
  min-height: calc(100vh - var(--window-top) - var(--window-bottom));
  background-color: #f5f6f7;
}

.empty {
  position: relative;
  height: calc(100vh - 45px - 24px);

  .empty-wrap {
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;

    .empty-text {
      margin-top: 15px;
      display: flex;
      flex-direction: column;
      align-items: center;

      &-title {
        font-size: 15px;
        font-weight: bold;
        color: #666;
      }

      &-desc {
        margin-top: 10px;
        font-size: 12px;
        color: #999;
      }
    }
  }
}

.list {
  height: calc(100vh - 45px - 24px);
  overflow: scroll;
  // background-color: rgb(139, 189, 233);
}

.bottom-button {
  height: calc(45px + 24px);
  padding: 12px;
  box-sizing: border-box;

  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    line-height: unset;
    font-size: 14px;
    border-radius: 8px;
    box-sizing: border-box;
    letter-spacing: 2px;
    color: white;
    border: 1px solid black;
    background-color: black;
  }

  .button-hover {
    border: 1px solid #333;
    background-color: #333;
  }
}
</style>