<template>
  <view class="container">
    <view class="user-box">
      <view class="user-bg">
        <view class="user-bg-wrap"></view>
      </view>
      <button class="user" open-type="chooseAvatar" @chooseavatar="chooseAvatar">
        <view class="user-avatar">
          <image class="user-img" :src="form.avatar ? form.avatar : 'https://via.placeholder.com/65x65/'" />
        </view>
        <view class="user-text"> 修改头像 </view>
      </button>
    </view>
    <view class="form">
      <view class="form-item">
        <view class="form-item-title">
          <text>昵称</text>
        </view>
        <view class="form-item-input">
          <!--这个属性失效了 placeholder-style="color: #aba1a1;" -->
          <input v-model="form.name" type="nickname" placeholder="请填写昵称" maxlength="60"
            placeholder-style="color: #aba1a1;" />
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
          <text>生日</text>
        </view>
        <view class="form-item-input">
          <picker mode="date" :value="form.birthday" :start="startDate" :end="endDate" @change="chooseBirthday">
            <view class="choose">
              <text> {{ form.birthday ? form.birthday : '生日一经提交，不可更改哦' }} </text>
              <my-icon icon="icon-xiangyou" color="#aba1a1" />
            </view>
          </picker>
        </view>
      </view>
    </view>
    <button class="button" hover-class="button-hover" :disabled="submitBtnIsDisabled || loading"
      @click="handleSubmit">{{ loading ? '保存资料中...' : '保存' }}</button>
    <view style="margin-top: 20px;font-size: 14px;color: #444;text-align: center;" @click="chooseAddress">从微信地址导入资料
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { onLoad } from '@dcloudio/uni-app'

const form = reactive({
  name: null,
  sex: 1,
  phone: '',
  birthday: null,
  avatar: null,
})
const startDate = computed(() => getDate('start'))
const endDate = computed(() => getDate('end'))
function getDate(type) {
  const date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  if (type === 'start') {
    year = year - 60;
  } else if (type === 'end') {
    year = year + 2;
  }
  month = month > 9 ? month : '0' + month;
  day = day > 9 ? day : '0' + day;
  return `${year}-${month}-${day}`;
}

const loading = ref(false)

const submitBtnIsDisabled = computed(() => form.name && form.sex && form.phone && form.birthday ? false : true)

function chooseAddress() {
  uni.chooseAddress({
    success(res) {
      form.name = res.userName
      form.phone = res.telNumber
    }
  })
}

function chooseBirthday(e) {
  form.birthday = e.detail.value
}



async function chooseAvatar(e) {
  form.avatar = e.detail.avatarUrl

  //对临时图片链接进行base64编码
  uni.getFileSystemManager().readFile({
    filePath: e.detail.avatarUrl, //选择图片返回的相对路径
    encoding: 'base64', //编码格式
    success: res => {
      form.avatar = 'data:image/jpeg;base64,' + res.data
    },
    fail: res => {
      console.log('err', res)
    }
  })


  // // 获取到头像路径
  // var path = e.detail.avatarUrl;
  // // 创建上传任务
  // const uploadTask = uni.uploadFile({
  //   url: '你的服务器地址', // 开发者服务器接口地址
  //   filePath: path, // 要上传文件资源的路径
  //   name: 'file', // 文件对应的 key
  //   formData: {
  //     'user': 'test' // 其他要上传的参数
  //   },
  //   success: function (uploadFileRes) {
  //     // 上传成功处理逻辑
  //     console.log(uploadFileRes.data);
  //   },
  //   fail: function (uploadFileErr) {
  //     // 上传失败处理逻辑
  //     console.log(uploadFileErr);
  //   }
  // });

  // // 上传进度
  // uploadTask.onProgressUpdate((res) => {
  //   console.log('上传进度' + res.progress + '%');
  // });

  // // 上传错误处理
  // uploadTask.onError((error) => {
  //   console.error('上传失败', error);
  // });


  // uni.login({
  //   provider: 'weixin',
  //   success: function (loginRes) {
  //     console.log(loginRes)
  //     console.log(loginRes.authResult); // 打印登录凭证
  //     // 使用登录凭证获取用户信息
  //     uni.getUserInfo({
  //       provider: 'weixin',
  //       success: function (infoRes) {
  //         console.log(infoRes)
  //         console.log(infoRes.userInfo); // 打印用户信息
  //         console.log('用户昵称为: ' + infoRes.userInfo.nickName); // 打印用户昵称
  //         // 在这里，你可以将用户的头像和昵称保存到本地或者发送到后端进行处理
  //         // infoRes.userInfo.avatarUrl是用户的头像链接
  //         // infoRes.userInfo.nickName是用户的昵称
  //       }
  //     });
  //   }
  // });
}

function handleSubmit() {
  loading.value = true
  uni.showLoading({
    title: `保存资料操作中...`,
    mask: true
  })
  setTimeout(() => {
    uni.hideLoading()
    loading.value = false
    uni.showToast({
      title: `保存资料成功`,
      icon: 'success'
    })
  }, 2000)
  console.log('handleSubmit', form)
}

onLoad((params) => {

})
</script>

<style lang="scss">
.container {
  min-height: calc(100vh - var(--window-top) - var(--window-bottom));
  box-sizing: border-box;
  background-color: #f5f6f7;
}

.user-box {
  position: relative;
  // display: flex;
  // align-items: center;
  height: 30vh;
  background-color: #9b9b9b;

  .user-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: max(50vw, 30vh);
    background: -webkit-linear-gradient(135deg,
        #9cecfb,
        #59e1d9,
        #7baefc,
        #56ccf2,
        #0ed2f7);
    background: -o-linear-gradient(135deg,
        #9cecfb,
        #59e1d9,
        #7baefc,
        #56ccf2,
        #0ed2f7);
    background: linear-gradient(315deg,
        #9cecfb,
        #59e1d9,
        #7baefc,
        #56ccf2,
        #0ed2f7);
    -webkit-animation: gradient 15s ease infinite;
    animation: gradient 15s ease infinite;
    -webkit-background-size: 400% 400%;
    background-size: 400%;

    @keyframes gradient {
      0% {
        background-position: 0% 50%;
      }

      50% {
        background-position: 100% 50%;
      }

      100% {
        background-position: 0% 50%;
      }
    }

    .user-bg-wrap {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(180deg, rgba(243, 245, 247, 0) 0%, #f5f6f7 99%);
    }
  }

  .user {
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: transparent;
    border: unset;

    &::after {
      border: 0px solid transparent !important;
    }

    &:focus {
      border: unset;
      outline: none;
      /* 也可以设置outline为去掉焦点时的轮廓线 */
    }

    &:active {
      border: unset;
      outline: none;
      /* 也可以设置outline为去掉焦点时的轮廓线 */
    }


    .user-avatar {
      width: 65px;
      height: 65px;
      border-radius: 999px;
      overflow: hidden;
      border: 2px solid white;
      box-sizing: border-box;

      .user-img {
        width: 100%;
        height: 100%;
      }
    }

    .user-text {
      margin-top: 8px;
      font-size: 11px;
      color: #9b9b9b;
    }
  }
}

.form {
  margin: 12px;
  padding: 5px 12px;
  border-radius: 12px;
  transform: translateY(-20px);

  background: -webkit-gradient(linear,
      left top,
      left bottom,
      from(rgba(255, 255, 255, 0.5)),
      to(#ffffff));
  background: -webkit-linear-gradient(top,
      rgba(255, 255, 255, 0.5) 0%,
      #ffffff 100%);
  background: -o-linear-gradient(top,
      rgba(255, 255, 255, 0.5) 0%,
      #ffffff 100%);
  background: linear-gradient(180deg,
      rgba(255, 255, 255, 0.5) 0%,
      #ffffff 100%);

  .form-item {
    display: flex;
    align-items: center;
    padding: 12px 0px;
    font-size: 14px;
    border-bottom: 1px solid #f5f6f7;

    &:last-child {
      border-bottom: none;
    }

    .form-item-title {
      flex-shrink: 0;
      min-width: 80px;
      color: #333;
    }

    .form-item-input {
      color: #aba1a1;
      flex: 1;

      input {
        font-size: 14px;
      }

      .choose {
        display: flex;
        align-items: center;
        justify-content: space-between;
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

    }
  }
}

.button {
  margin: 12px;
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

  &::after {
    border: 0px solid transparent !important;
  }

}
</style>