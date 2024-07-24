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
export const phoneNumberLogin =(data:PhoneNumberLoginData):Promise<PhoneNumberLoginRes>=> {
	console.log('phoneNumberLogin',data);
  return request({
    url: '/login/phoneNumberLogin',
    method: 'POST',
		data
  })
}
/**
 * 手机号码登录
 */
export const phoneCodeLogin =(data:PhoneCodeLoginData):Promise<PhoneNumberLoginRes>=> {
  return request({
    url: '/login/phoneCodeLogin',
    method: 'POST',
		data
  })
}

/**
 * 获取验证码
 */
export const getSmsCode =(phone:string):Promise<string>=> {
  return request({
    url: '/login/phoneCodeLogin',
    method: 'GET',
		params:{
			phone
		}
  })
}