<template>
	<view class="content">
		<view class="user-box">
			<view class="user-bg">
				<view class="user-bg-wrap"></view>
			</view>
			<view class="user" v-if="token">
				<view class="user-avatar">
					<image class="user-img" src="https://via.placeholder.com/35x35/" />
				</view>
				<view class="user-text">
					<view class="user-name"> 你的Maya </view>
					<view class="user-desc"> 今天是您与小螺丝相伴的第 3600 天 </view>
				</view>
				<!-- <view class="button" style="padding: 8px 12px;"> 签到 </view> -->
				<view style="color: #c4c6cc;"> > </view>
			</view>
			<view class="user" v-else>
				<view class="user-avatar">
					<image class="user-img" src="https://via.placeholder.com/45x45/" />
				</view>
				<view class="user-text">
					<view class="user-name"> Hi~ 新朋友，请登录 </view>
					<view class="user-desc">为给您提供更好的服务请授权登录</view>
				</view>
				<view class="button"> 登录/注册 </view>
			</view>
		</view>
		<view class="card-box perfect">
			<view class="box">
				<view class="text-centre">
					<view class="title">
						完善个人信息
					</view>
					<view class="desc">
						积分+10
					</view>
				</view>
				<view class="btn-right">
					<text class="icon"></text>
					<text class="text">去完成</text>
				</view>
			</view>
		</view>
		<view class="card-box card-box-1">
			<view class="title-section">
				<view class="left"> 我的资产 </view>
			</view>
			<view class="list">
				<view class="item">
					<view class="icon_title">
						<text class="icon"></text>
						<text class="title">优惠券</text>
					</view>
					<view class="use">
						<text class="count">0张</text>
						<text class="title">未使用</text>
					</view>
				</view>
				<view class="item">
					<view class="icon_title">
						<text class="icon"></text>
						<text class="title">余额</text>
					</view>
					<view class="use">
						<text class="count">0元</text>
						<text class="title">未使用</text>
					</view>
				</view>
				<view class="item">
					<view class="icon_title">
						<text class="icon"></text>
						<text class="title">积分</text>
					</view>
					<view class="use">
						<text class="count">0点</text>
						<text class="title">未使用</text>
					</view>
				</view>
			</view>
		</view>
		<view class="card-box vip_day">
			<view class="title-section">
				<view class="left"> 会员日福利 </view>
			</view>
			<view class="box">
				<image class="img-left" src="../../static/logo.png"></image>
				<view class="text-centre">
					<view class="title">
						周二小料日
					</view>
					<view class="desc">
						小料免费加
					</view>
				</view>
				<view class="btn-right">
					<text class="icon"></text>
					<text class="text">可用提醒</text>
				</view>
			</view>
		</view>
		<view class="card-box card-box-2">
			<view class="title-section">
				<view class="left"> 我的订单 </view>
			</view>
			<view class="list">
				<view class="item">
					<text class="icon"></text>
					<text class="title">门店订单</text>
				</view>
				<view class="item">
					<text class="icon"></text>
					<text class="title">储值订单</text>
				</view>
				<view class="item">
					<text class="icon"></text>
					<text class="title">礼品卡订单</text>
				</view>
				<view class="item">
					<text class="icon"></text>
					<text class="title">券包订单</text>
				</view>
			</view>
		</view>
		<view class="card-box card-box-2">
			<view class="title-section">
				<view class="left"> 我的功能 </view>
			</view>
			<view class="list">
				<view class="item">
					<text class="icon"></text>
					<text class="title">我的优惠券</text>
				</view>
				<view class="item" @click="handleGoto('/pages/address/list')">
					<text class="icon"></text>
					<text class="title">地址管理</text>
				</view>
				<view class="item">
					<text class="icon"></text>
					<text class="title">消息通知</text>
				</view>
				<view class="item">
					<text class="icon"></text>
					<text class="title">官方客服</text>
				</view>
				<view class="item">
					<text class="icon"></text>
					<text class="title">加盟咨询</text>
				</view>
				<view class="item">
					<text class="icon"></text>
					<text class="title">更换号码</text>
				</view>
				<view class="item">
					<text class="icon"></text>
					<text class="title">会员协议</text>
				</view>
				<view class="item">
					<text class="icon"></text>
					<text class="title">会员码</text>
				</view>
				<view class="item">
					<text class="icon"></text>
					<text class="title">立即充值</text>
				</view>
				<view class="item">
					<text class="icon"></text>
					<text class="title">礼品卡</text>
				</view>
				<view class="item">
					<text class="icon"></text>
					<text class="title">卡券兑换</text>
				</view>
				<view class="item">
					<text class="icon"></text>
					<text class="title">抖音兑换券</text>
				</view>
				<view class="item">
					<text class="icon"></text>
					<text class="title">邀请有礼</text>
				</view>
				<view class="item">
					<text class="icon"></text>
					<text class="title">发票助手</text>
				</view>
				<view class="item">
					<text class="icon"></text>
					<text class="title">常见问题</text>
				</view>
				<view class="item">
					<text class="icon"></text>
					<text class="title">关于我们</text>
				</view>
				<view class="item">
					<text class="icon"></text>
					<text class="title">个人资料</text>
				</view>
				<view class="item">
					<text class="icon"></text>
					<text class="title">意见反馈</text>
				</view>
				<view class="item">
					<text class="icon"></text>
					<text class="title">福利社群</text>
				</view>
				<view class="item">
					<text class="icon"></text>
					<text class="title">学生卡</text>
				</view>
				<view class="item">
					<text class="icon"></text>
					<text class="title">设置</text>
				</view>
				<view class="item">
					<text class="icon"></text>
					<text class="title">我的评价</text>
				</view>
			</view>
		</view>
		<view class="" style="height: 15px;">
			
		</view>
	</view>
</template>

<script setup lang="ts">
	import {ref} from 'vue'
	const token = ref('11')
	function handleGoto(url) {
  	uni.navigateTo({ url })
	}
</script>

<style scoped lang="scss">
	.content {
		min-height: 100vh;
		background-color: #f5f6f7;
	}

	.user-box {
		position: relative;
		// display: flex;
		// align-items: center;
		height: 30vh;
		background-color: #9b9b9b;
		.user-bg{
			position: absolute;
			  top: 0;
			  left: 0;
			  right: 0;
			  height: max(50vw, 30vh);
			  background: -webkit-linear-gradient(
			    135deg,
			    #9cecfb,
			    #59e1d9,
			    #7baefc,
			    #56ccf2,
			    #0ed2f7
			  );
			  background: -o-linear-gradient(
			    135deg,
			    #9cecfb,
			    #59e1d9,
			    #7baefc,
			    #56ccf2,
			    #0ed2f7
			  );
			  background: linear-gradient(
			    315deg,
			    #9cecfb,
			    #59e1d9,
			    #7baefc,
			    #56ccf2,
			    #0ed2f7
			  );
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
			.user-bg-wrap{
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
			left: 0;
			right: 0;
			bottom: 0;
			display: flex;
			align-items: center;
			padding: 12px;
			margin: 0px 12px;
			border-radius: 12px;
			position: absolute;
			  background: -webkit-gradient(
			    linear,
			    left top,
			    left bottom,
			    from(rgba(255, 255, 255, 0.5)),
			    to(#ffffff)
			  );
			  background: -webkit-linear-gradient(
			    top,
			    rgba(255, 255, 255, 0.5) 0%,
			    #ffffff 100%
			  );
			  background: -o-linear-gradient(
			    top,
			    rgba(255, 255, 255, 0.5) 0%,
			    #ffffff 100%
			  );
			  background: linear-gradient(
			    180deg,
			    rgba(255, 255, 255, 0.5) 0%,
			    #ffffff 100%
			  );

			.user-avatar {
				width: 45px;
				height: 45px;
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
				flex: 1;
				margin: 0px 10px;

				.user-name {
					font-size: 14px;
					color: #333;
				}

				.user-desc {
					margin-top: 3px;
					font-size: 11px;
					color: #9b9b9b;
				}
			}

			.button {
				padding: 8px 10px;
				color: white;
				font-size: 12px;
				border-radius: 8px;
				background-color: #333;
			}
		}
	}
	
	.card-box{
		padding: 12px;
		margin: 0px 12px;
		margin-top: 12px;
		border-radius: 12px;
		// background-color: white;
		border: 1px solid white;
		background: -webkit-gradient(
		  linear,
		  left top,
		  left bottom,
		  from(rgba(255, 255, 255, 0.5)),
		  to(#ffffff)
		);
		background: -webkit-linear-gradient(
		  top,
		  rgba(255, 255, 255, 0.5) 0%,
		  #ffffff 100%
		);
		background: -o-linear-gradient(
		  top,
		  rgba(255, 255, 255, 0.5) 0%,
		  #ffffff 100%
		);
		background: linear-gradient(
		  180deg,
		  rgba(255, 255, 255, 0.5) 0%,
		  #ffffff 100%
		);
		.title-section{
			display: flex;
			align-items: center;
			font-size: 14px;
			margin-bottom: 10px;
			.left{
				flex: 1;
				font-weight: bold;
			}
			.right{
				flex-shrink: 0;
				font-size: 12px;
				color: #bfbfbf;
			}
		}
	}
	.card-box-1{
		.list{
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			grid-gap: 5px;
		}
		.item{
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			.icon_title{
				display: flex;
				align-items: center;
				.icon{
					width: 15px;
					height: 15px;
					border-radius: 99px;
					background-color: #59e1d9;
				}
				.title{
					font-size: 14px;
					margin-left: 3px;
					color: #333;
				}
			}
			.use{
				.count{
					color: #F53C4C;
					font-size: 14px;
				}
				.title{
					
					font-size: 12px;
					margin-left: 3px;
					color: #B9B9B9;
				}
			}
		}
	}
	.card-box-2{
		.list{
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			grid-gap: 5px;
		}
		.item{
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			.icon{
				width: 15px;
				height: 15px;
				border-radius: 99px;
				background-color: #59e1d9;
			}
			.title{
				margin-top: 8px;
				font-size: 14px;
				color: #333;
			}
		}
	}
	
	.vip_day,.perfect{
		border: 1px solid #F9F2F1;
		background-color: transparent;
		.box{
			display: flex;
			align-items: center;
			gap: 10px;
			padding: 10px;
			border-radius: 8px;
			background-color: #4FB5E6;
			.img-left{
				width: 45px;
				height:45px;
			}
			.text-centre{
				flex: 1;
				color: white;
				.title{
					font-size: 14px;
					font-weight: bold;
				}
				.desc{
					margin-top: 5px;
					font-size: 12px;
				}
			}
			.btn-right{
				display: flex;
				align-items: center;
				padding: 5px;
				border-radius: 99px;
				border: 1px solid #E4F1F9;
				background-color: white;
				.icon{
					width: 10px;
					height: 10px;
					border-radius: 99px;
					background-color: #59e1d9;
				}
				.text{
					margin-left: 3px;
					font-size: 10px;
					color: #bfbfbf;
				}
			}
		}
	}
	.perfect{
		background-color: transparent;
		padding: 0;
		border: 1px solid white;
		overflow: hidden;
		.box{
			padding: 8px 12px;
			background-color: #F2F2F2;
			
			.text-centre{
				display: flex;
				.title{
					font-weight: unset;
					font-size: 13px;
					color: #444;
				}
				.desc{
					margin-left: 10px;
					margin-top: 0px;
					color: #CBB58A;
				}
			}
			.btn-right{
				border-radius: 10px;
				background-color: #333;
				.text{
					color: white;
				}
			}
			
		}
	}
</style>