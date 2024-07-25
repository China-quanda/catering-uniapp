<template>
  <view class="container">
    <view class="form">
      <view class="form-item">
        <view class="form-item-title">
          <text>联系人</text>
        </view>
        <view class="form-item-input">
          <!--这个属性失效了 placeholder-style="color: #aba1a1;" -->
          <input v-model="form.name" type="text" placeholder="请填写收货人姓名" maxlength="60" 	placeholder-style="color: #aba1a1;"/>
        </view>
      </view>
      <view class="form-item">
        <view class="form-item-title">
          <text>性别</text>
        </view>
        <view class="form-item-input">
          <view class="radios">
            <view class="radio-item" @click="form.sex = 1">
              <view class="radio" :class="{ 'active': form.sex === 1 }">
                <view class="radio-inner"></view>
              </view>
              <text>先生</text>
            </view>
            <view class="radio-item" @click="form.sex = 2">
              <view class="radio" :class="{ 'active': form.sex === 2 }">
                <view class="radio-inner"></view>
              </view>
              <text>女士</text>
            </view>
          </view>
        </view>
      </view>
      <view class="form-item">
        <view class="form-item-title">
          <text>手机号</text>
        </view>
        <view class="form-item-input">
          <input v-model="form.phone" type="number" placeholder="请填写手机号码" maxlength="11" />
        </view>
      </view>
      <view class="form-item">
        <view class="form-item-title">
          <text>收货地址</text>
        </view>
        <view class="form-item-input">
          <view class="choose" @click="chooseLocation">
            <text> {{ form.address ? form.address : '点击选择地址' }} </text>
            <text class="icon"> > </text>
          </view>
        </view>
      </view>
      <view class="form-item">
        <view class="form-item-title">
          <text>门牌号</text>
        </view>
        <view class="form-item-input">
          <input v-model="form.houseNumber" type="text" placeholder="例：A座25楼1502" />
        </view>
      </view>
      <view class="form-item">
        <view class="form-item-title">
          <text>地址标签</text>
        </view>
        <view class="form-item-input">
          <view class="tags">
            <view class="tag" :class="{ 'active': form.tag == 1 }" @click="form.tag = 1"> 家 </view>
            <view class="tag" :class="{ 'active': form.tag == 2 }" @click="form.tag = 2"> 公司 </view>
            <view class="tag" :class="{ 'active': form.tag == 3 }" @click="form.tag = 3"> 学校 </view>
          </view>
        </view>
      </view>
      <view class="form-item">
        <view class="form-item-title">
          <text>设为默认地址</text>
        </view>
        <view class="form-item-input">
          <view class="switch-box">
            <switch class="switch" :checked="form.isDefault" color="black" @change="form.isDefault = !form.isDefault" />
          </view>
        </view>
      </view>
    </view>
    <button class="button" hover-class="button-hover" :disabled="submitBtnIsDisabled || loading" @click="handleSubmit">{{ pageTitle
      }}地址</button>
  </view>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { onLoad } from '@dcloudio/uni-app'

const pageTitle = ref('添加')

const form = reactive({
  name: null,
  sex: null,
  phone: '',
  address: null,
  houseNumber: null,
  tag: null,
  isDefault: false
})

const loading = ref(false)

const submitBtnIsDisabled = computed(() => form.name && form.sex && form.phone && form.address && form.houseNumber ? false : true)

function chooseLocation() {
  uni.chooseLocation({
    success: (res) => {
      form.address = res.address
      console.log('位置名称：' + res.name);
      console.log('详细地址：' + res.address);
      console.log('纬度：' + res.latitude);
      console.log('经度：' + res.longitude);
    }
  });
}

function handleSubmit() {
  loading.value = true
  uni.showLoading({
    title: `${pageTitle.value}地址操作中...`,
    mask: true
  })
  setTimeout(()=>{
    uni.hideLoading()
    loading.value = false
    uni.showToast({
      title: `${pageTitle.value}地址成功`,
      icon: 'success'
    })
  }, 2000)
  console.log('handleSubmit', form)
}

onLoad((params) => {
  console.log('onLoad', params)
  if (params && params.addresId) {
    pageTitle.value = '修改'
    uni.setNavigationBarTitle({
      title: pageTitle.value + '地址'
    })
  }
})
</script>

<style lang="scss">
.container {
  padding: 12px;
  min-height: calc(100vh - var(--window-top) - var(--window-bottom));
  background-color: #f5f6f7;
}

.form {
  // margin: 12px;
  padding: 12px;
  border-radius: 12px;
  background-color: white;

  .form-item {
    display: flex;
    align-items: center;
    padding: 12px 0px;
    font-size: 14px;
    border-bottom: 1px solid #f5f6f7;

    .form-item-title {
      flex-shrink: 0;
      min-width: 80px;
      color: #333;
    }

    .form-item-input {
      color: #aba1a1;
      flex: 1;
      input{
        font-size: 14px;
      }

      .choose {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .tags {
        display: flex;
        align-items: center;
        gap: 10px;

        .tag {
          font-size: 11px;
          padding: 3px 10px;
          border: 1px solid #f1f1f1;
          border-radius: 99px;
        }

        .active {
          color: white;
          background-color: black;
        }
      }

      .radios {
        display: flex;
        align-items: center;
        gap: 15px;

        .radio-item {
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .radio {
          width: 14px;
          height: 14px;
          border-radius: 999px;
          border: 1px solid #aba1a1;
          padding: 2px;
          box-sizing: border-box;
        }

        .active {
          border: 1px solid #333;

          .radio-inner {
            width: 100%;
            height: 100%;
            border-radius: 999px;
            background-color: #000;
          }
        }
      }

      .switch-box {
        display: flex;
        justify-content: flex-end;

        .switch {
          margin: -10px;
          transform: scale(0.7);
        }
      }
    }
  }
}

.button {
  margin-top: 15px;
  padding: 10px;
  line-height: unset;
  font-size: 14px;
  text-align: center;
  border-radius: 8px;
  box-sizing: border-box;
  letter-spacing: 2px;
  // border: 1px solid #666;
  color: white;
  border: 1px solid black;
  background-color: black;
}

.button-hover {
  border: 1px solid #333;
  background-color: #333;
}

.button[disabled] {
  border: 1px solid black;
  border-radius: 8px !important;
  border: 1px solid #ebe7e7 !important;
  background-color: #ebe7e7 !important;

}
</style>