<template>
  <view class="container">
    <view class="list" v-if="list.length">
      <view class="item" v-for="item in list" :key="item.id" @click="handleGotoAddAddress('edit', item.id)">
        <view class="item-left">
          <view class="item-left-top">
            <view class="tags" v-if="item.tag">
              <view class="tag" v-if="item.tag == 1"> 家 </view>
              <view class="tag" v-if="item.tag == 2"> 公司 </view>
              <view class="tag" v-if="item.tag == 3"> 学校 </view>
            </view>
            <text class="address">{{ item.address }}{{ item.houseNumber }}</text>
          </view>
          <view class="item-left-bottom">
            <text class="name">{{ item.name }}</text>
            <text class="sex">{{ item.sex == 1 ? '先生' : '女士' }}</text>
            <text>{{ phonePrivate(item.phone) }}</text>
          </view>
        </view>
        <view class="item-right">
          <my-icon icon="icon-bianji" color="#999" size="16" />
          <view class="isDefault" v-if="item.isDefault">
            默认
          </view>
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
import { ref, onMounted } from 'vue'

const list = ref([])

function loadAddressList() {
  setTimeout(() => {
    list.value = [
      {
        id: 1,
        name: '张三',
        sex: 1,
        phone: '18684868151',
        address: '湖南省郴州市北湖区青年大道49号天一华府',
        tag: 1,
        houseNumber: 'A栋二单元2906',
        isDefault: false
      },
      {
        id: 2,
        name: '李四',
        sex: 2,
        phone: '18888888888',
        address: '北京市朝阳区朝阳公园',
        tag: 2,
        houseNumber: 'A栋二单元2906',
        isDefault: true
      },
      {
        id: 3,
        name: '王五',
        sex: 1,
        phone: '18888888888',
        address: '北京市朝阳区朝阳公园',
        tag: 3,
        houseNumber: 'A栋二单元2906',
        isDefault: false
      },
      {
        id: 4,
        name: '张三',
        sex: 1,
        phone: '18888888888',
        address: '北京市朝阳区朝阳公园',
        tag: 1,
        houseNumber: 'A栋二单元2906',
        isDefault: false
      },
      {
        id: 5,
        name: '张三',
        sex: 1,
        phone: '18888888888',
        address: '北京市朝阳区朝阳公园',
        tag: 1,
        houseNumber: 'A栋二单元2906',
        isDefault: false
      },
      {
        id: 6,
        name: '张三',
        sex: 1,
        phone: '18888888888',
        address: '北京市朝阳区朝阳公园',
        tag: 1,
        houseNumber: 'A栋二单元2906',
        isDefault: false
      },
      {
        id: 7,
        name: '张三',
        sex: 1,
        phone: '18888888888',
        address: '北京市朝阳区朝阳公园',
        tag: 1,
        houseNumber: 'A栋二单元2906',
        isDefault: false
      },
      {
        id: 8,
        name: '张三',
        sex: 1,
        phone: '18888888888',
        address: '北京市朝阳区朝阳公园',
        tag: 1,
        houseNumber: 'A栋二单元2906',
        isDefault: false
      },
    ]
  }, 1000);
}

const phonePrivate = (phone: string): string => phone.replace(phone.substring(3, 7), '****')
function handleGotoAddAddress(type, id = null) {
  let url = `/pages/address/add`
  if (type === 'edit') {
    url = `/pages/address/add?addressId=${id}`
  }
  uni.navigateTo({ url })
}

onMounted(() => {
  loadAddressList()
})
</script>

<style scoped lang="scss">
.container {
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
  padding: 12px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 12px;

  // background-color: rgb(139, 189, 233);
  .item {
    display: flex;
    padding: 12px;
    border-radius: 6px;
    background-color: white;

    .item-left {
      flex: 1;

      .item-left-top {
        display: flex;
        align-items: center;
        align-items: flex-start;
        align-items: start;

        .tags {
          margin-right: 5px;
          display: flex;
          align-items: center;
          gap: 10px;

          .tag {
            font-size: 10px;
            padding: 0px 2px;
            border: 1px solid #f1f1f1;
            border: 1px solid black;
            border-radius: 4px;
          }


        }

        .address {
          font-size: 14px;
          color: #4B4C4F;
        }
      }

      .item-left-bottom {
        margin-top: 8px;
        display: flex;
        gap: 10px;
        font-size: 13px;
        color: #696969;
      }
    }

    .item-right {
      position: relative;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 30px;

      .isDefault {
        position: absolute;
        right: -12px;
        top: -12px;
        padding: 3px 5px;
        font-size: 10px;
        color: white;
        border-radius: 0px 6px 0px 6px;
        background-color: black;
      }
    }
  }

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