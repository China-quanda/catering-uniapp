import request from '@/utils/request'
export interface PhoneNumberLoginData {
  code: string
  encryptedData: string
  iv: string
}
export interface PhoneNumberLoginRes {
  username: string
  password: string
  token: string
}
export interface PhoneCodeLoginData {
  number: string
  code: string
}
/**
 * 快捷登录
 */
export const phoneNumberLogin = (data: PhoneNumberLoginData): Promise<PhoneNumberLoginRes> => {
  console.log('phoneNumberLogin', data);
  return request({
    url: '/login/phoneNumberLogin',
    method: 'POST',
    data
  })
}
/**
 * 手机号码登录
 */
export const phoneCodeLogin = (data: PhoneCodeLoginData): Promise<PhoneNumberLoginRes> => {
  return request({
    url: '/login/phoneCodeLogin',
    method: 'POST',
    data
  })
}

/**
 * 获取验证码
 */
export const getSmsCode = (phone: string): Promise<string> => {
  return request({
    url: '/login/phoneCodeLogin',
    method: 'GET',
    params: {
      phone
    }
  })
}

/**
 * 获取code
 */
export const getCode = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    uni.login({
      provider: 'weixin',
      success: (result) => {
        if (result && result.code) {
          resolve(result.code)
        } else {
          reject(result)
        }
      },
      fail: (error) => {
        reject(error)
        uni.showToast({
          title: error.errMsg || '获取code失败！',
          icon: 'none'
        })
      }
    })
  })
}

export const weixinLogin = (code: string) => {
  return request({
    url: '/auth/login',
    method: 'POST',
    data: {
      code
    }
  })
}

/**
 * 登录
 * @returns 
 */
export const login = async () => {
  const code = await getCode()
  const result = await weixinLogin(code);
  console.log('result', result);
  return result
}