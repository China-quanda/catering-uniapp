<template>
  <view class="login">
    <view class="login-main">
      <view class="main">
        <view class="logo">
          <image class="img" src="@/static/logo.png"></image>
          <view class="title">密雪冰城</view>
        </view>
      </view>
      <view class="login-type-ksdl" v-if="loginType === 'ksdl'">
        <view class="title">成为会员，立享更多优惠福利</view>
        <view class="desc">未注册将获取您的公开信息（昵称、头像等）注册并登录</view>
      </view>
      <view class="login-type-vfdl" v-else>
        <view class="form">
          <view class="input">
            <input v-model="form.number" type="number" maxlength="11" placeholder="请输入手机号" />
          </view>
          <view class="input code">
            <input v-model="form.code" type="number" maxlength="4" placeholder="请输入短信验证码" />
            <view class="code_btn" :class="{ 'is-disabled': codeTime !== 60 }" @click="getCode">{{ codeTips }}</view>
          </view>
        </view>
      </view>
      <view class="login-btns">
        <!-- <button v-if="loginType === 'ksdl' && isCheckd" class="btn yjdl" open-type="getPhoneNumber"  @getphonenumber="handlePhoneNumberLogin">一键登录</button> -->
        <button v-if="loginType === 'ksdl' && isCheckd" class="btn yjdl" @click="login">一键登录</button>
        <button v-if="loginType === 'ksdl' && !isCheckd" class="btn yjdl" @click="tipsCheck">一键登录</button>
        <view v-if="loginType === 'ksdl'" class="btn yzmdl" @click="loginType = 'vfdl'">验证码登录</view>
        <view v-if="loginType === 'vfdl'" class="btn yjdl" @click="handleVfLogin">登录/注册</view>
        <view v-if="loginType === 'vfdl'" class="btn yzmdl" @click="loginType = 'ksdl'">一键登录</view>
        <view class="nologin" @click="backPage">暂不登录</view>
      </view>
    </view>
    <view class="login-privacy">
      <view :class="[isCheckd ? 'is-checkd' : '', 'checkbox']" @click="isCheckd = !isCheckd">
        <view class="checkd"></view>
      </view>
      <text class="text" @click="isCheckd = !isCheckd">登录需阅读并同意</text>
      <text class="text-blue">《用户协议》</text>
      <text class="text-blue">《隐私协议》</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import {phoneNumberLogin,phoneCodeLogin,getSmsCode,login} from '@/api/login'
const isCheckd = ref(false)
const loginType = ref('ksdl')
const codeTips = ref('获取验证码')
const codeTime = ref(60)
const form = reactive({
  number: '',
  code: ''
})

/**账户密码登录注册 */
function handleVfLogin() {
  if (form.number.length !== 11) {
    return uni.showModal({
      title: '提示',
      content: '手机号码无效！',
      showCancel: false,
    })
  }
  if (form.code.length !== 4) {
    return uni.showModal({
      title: '提示',
      content: '验证码无效！',
      showCancel: false,
    })
  }
  if (!tipsCheck()) return 
	
	uni.showLoading({ title: '操作中...', mask: true });

	phoneCodeLogin(form).then(res=>{
		uni.reLaunch({ url:'/pages/mine/index' })
	}).finally(()=>{
		uni.hideLoading()
	})
}

let interval
/**获取验证码 */
function getCode() {
  if (!isCheckd.value) {
    return uni.showModal({
      title: '提示',
      content: '登录需阅读并同意底部协议',
      showCancel: false,
    })
  }
  if (codeTime.value !== 60) return
	// getSmsCode().then(res=>{ })
  codeTime.value = 59
  codeTips.value = `${codeTime.value}s 后再获取`
  interval = setInterval(() => {
    if (codeTime.value === 0) {
      codeTime.value = 60
      codeTips.value = `获取验证码`
      clearInterval(interval)
    } else {
      codeTime.value--
      codeTips.value = `${codeTime.value}s 后再获取`
    }
  }, 1000)
}

/**返回上一页 */
function backPage() {
  uni.navigateBack()
}

function wxLogin(){
	login()
}

/**手机号码登录 */
async function  handlePhoneNumberLogin(e) {
	console.log('e',e);
	uni.login({
	  provider: 'weixin',
	  success: ({code})=> {
			console.log('login-code',code);
			phoneNumberLogin({ encryptedData:'encryptedData', iv:'iv', code }).then(res=>{
				console.log('res',res);
			})
			uni.getUserInfo({
			  provider: 'weixin',
			  success:  (infoRes)=> {
			    console.log('getUserInfo',infoRes );
			  }
			});
	  },
		fail:()=>{
			reject('登录失败')
		}
	});
	return 
	
  const { detail: { encryptedData, iv ,errMsg,code} } = e;

  if(errMsg !== 'getPhoneNumber:ok'){
    return 
  }
	
	uni.showLoading({ title: '操作中...', mask: true });
	
	// 发送code、encryptedData、iv到后端
	phoneNumberLogin({ encryptedData, iv, code }).then(res=>{
		// uni.reLaunch({ url:'/pages/mine/index' })
		console.log('res',res);
	}).finally(()=>{
		uni.hideLoading()
	})
	
}

/**检查提示是否阅读并同意了协议 */
function tipsCheck() {
	let flag = true
  if (!isCheckd.value) {
		flag = false
    uni.showModal({
      title: '提示',
      content: '登录需阅读并同意底部协议',
      showCancel: false,
    })
  }else{
		return flag
	}
}
</script>

<style scoped lang="scss">
.login {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-size: 14px;
  background-color: white;

  .login-main {
    flex: 1;

    .main {
      display: flex;
      align-items: center;
      ;
      justify-content: center;
      height: 35vh;

      // background-color: aqua;
      .logo {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;

        .img {
          width: 50px;
          height: 50px;
          border-radius: 999px;
        }

        .title {
          color: #333;
        }
      }
    }
  }

  .login-type-ksdl {
    .title {
      color: #333;
      text-align: center;
    }

    .desc {
      margin-top: 30px;
      text-align: center;
      color: #808080;
      font-size: 11px;
    }
  }

  .login-type-vfdl {
    margin: 0 25px;

    .form {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-bottom: 25px;

      .input {
        padding: 10px;
        border-radius: 8px;
        // border: 1px solid #333;
        background-color: #f6f6f6;
      }

      .code {
        display: flex;

        input {
          flex: 1;
        }

        .code_btn {
          margin-left: 15px;
        }

        .is-disabled {
          color: #6b6b6b;
        }
      }
    }
  }

  .login-btns {
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    .btn {
      margin: 0 25px;
      padding: 10px;
      line-height: unset;
      font-size: 14px;
      text-align: center;
      border-radius: 8px;
      box-sizing: border-box;
      letter-spacing: 2px;
    }

    .yjdl {
      color: white;
      border: 1px solid #333;
      background-color: #333;
    }

    .yzmdl {
      border: 1px solid #666;
    }

    .nologin {
      text-align: center;
      color: #666;
    }
  }

  .login-privacy {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 25px;
    padding-bottom: 35px;
    font-size: 12px;

    .checkbox {
      width: 14px;
      height: 14px;
      border-radius: 999px;
      border: 1px solid #333;
      padding: 2px;
      box-sizing: border-box;
    }

    .is-checkd {
      .checkd {
        width: 100%;
        height: 100%;
        border-radius: 999px;
        background-color: #000;
      }
    }

    .text {
      padding: 0 5px;
    }

    .text-blue {
      color: steelblue;
    }
  }
}
</style>