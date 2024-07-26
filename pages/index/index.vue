<template>
	<view class="home-container">
		<swiper class="swiper radius-8" circular :indicator-dots="true" :autoplay="true" :interval="2500" :duration="500">
			<swiper-item class="swiper-item">
				<image class="swiper-item-img" src="@/static/images/index/banner01.png" mode="aspectFill" :draggable="false" />
			</swiper-item>
			<swiper-item class="swiper-item">
				<image class="swiper-item-img" src="@/static/images/index/banner02.png" mode="aspectFill" :draggable="false" />
			</swiper-item>
		</swiper>
		<view class="user">
			<view class="user-avatar">
				<image class="user-img" src="https://via.placeholder.com/35x35/" />
			</view>
			<view class="user-text">
				<view class="user-name"> Hi~ 新朋友，请登录</view>
				<view class="user-desc">为给您提供更好的服务请授权登录</view>
			</view>
			<view class="button"> 登录/注册 </view>
		</view>
		<view class="master">
			<div class="card card-1">
				<text class="text">外卖配送</text>
			</div>
			<div class="card card-2">
				<text class="text">到店自取</text>
			</div>
			<div class="card card-3">
				<text class="text">扫码点餐</text>
			</div>
			<div class="card card-4">
				<text class="text">电商购</text>
			</div>
		</view>
		<view class="services">
			<view class="service-item">
				<image class="img" src="@/static/logo.png" mode="aspectFill" :draggable="false" />
				<text class="text">呼叫服务</text>
			</view>
			<view class="service-item">
				<image class="img" src="@/static/logo.png" mode="aspectFill" :draggable="false" />
				<text class="text">加熟客群</text>
			</view>
			<view class="service-item">
				<image class="img" src="@/static/logo.png" mode="aspectFill" :draggable="false" />
				<text class="text">优惠券</text>
			</view>
			<view class="service-item">
				<image class="img" src="@/static/logo.png" mode="aspectFill" :draggable="false" />
				<text class="text">领券中心</text>
			</view>
			<view class="service-item">
				<image class="img" src="@/static/logo.png" mode="aspectFill" :draggable="false" />
				<text class="text">钱包充值</text>
			</view>
			<view class="service-item">
				<image class="img" src="@/static/logo.png" mode="aspectFill" :draggable="false" />
				<text class="text">邀请有礼</text>
			</view>
			<view class="service-item">
				<image class="img" src="@/static/logo.png" mode="aspectFill" :draggable="false" />
				<text class="text">成为合伙人</text>
			</view>
			<view class="service-item">
				<image class="img" src="@/static/logo.png" mode="aspectFill" :draggable="false" />
				<text class="text">活动中心</text>
			</view>
			<view class="service-item">
				<image class="img" src="@/static/logo.png" mode="aspectFill" :draggable="false" />
				<text class="text">每日抽奖/会员免费抽</text>
			</view>
			<view class="service-item">
				<image class="img" src="@/static/logo.png" mode="aspectFill" :draggable="false" />
				<text class="text">签到</text>
			</view>
		</view>
		<view class="">
			活动专区/优惠专区/我的优惠专区
			热销推荐
			福利中心。
			必喝榜
			xx月好喝榜
		</view>
		
		<view class="card-box discounts-box">
			<view class="title-section">
				<view class="left"> 我的优惠专区 </view>
				<view class="right"> 查看全部 </view>
			</view>
			<view class="list">
				<view class="item" v-for="item in 3">
					<view class="text">
						<view class="product-name">拿铁</view>
						<view class="product-quan">
							<view class="quan-type">直减价</view>
							<view class="quan-price">
								<text class="currency">¥</text>
								<text class="presentPrice">9.9</text>
								<text class="originalPrice">¥29</text>
							</view>
						</view>
					</view>
					<image class="product-img" src="../../static/logo.png"></image>
				</view>
			</view>
		</view>
		
		<view class="card-box weal-box">
			<view class="title-section">
				<view class="left"> 福利中心 </view>
				<view class="right"> 查看全部 </view>
			</view>
			<view class="list">
				<view class="item">
					<view class="title">#吃螺狮粉挑战</view>
					<view class="desc">再吃5碗达成</view>
				</view>
				<view class="item">
					<view class="title">本月螺狮粉达人</view>
					<view class="desc">马上冲榜</view>
				</view>
				<view class="item">
					<view class="title">邀请有礼</view>
					<view class="desc">邀请免费吃</view>
				</view>
				<view class="item">
					<view class="title">#吃螺狮粉挑战</view>
					<view class="desc">再吃5碗达成</view>
				</view>
			</view>
		</view>
		
		<view class="monthHot-box">
			<view class="title-section">
				8月好吃榜
			</view>
			<view class="shop">
				<text class="shop-icon iconfont"></text>
				<text class="shop-name">郴州友阿国际店</text>
			</view>
			<view class="list" >
				<view class="item" v-for="item in 3">
					<view class="product-item" v-for="i in 5">
						<view class="left">
							<text class="no">TOP1</text>
							<image class="img" src="../../static/logo.png" mode=""></image>
						</view>
						<view class="content">
							<view class="name">
								生椰拿铁
							</view>
							<view class="price">
								<text class="currency">¥</text>
								<text class="presentPrice">9.9</text>
								<text class="originalPrice">¥29</text>
							</view>
						</view>
						<view class="right">
							<view class="icon">
								+
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<view class="selectShop-box">
			<view class="selectShop-left">
				<view class="title">
					选择门店>
				</view>
				<view class="desc">
					发现你的幸运门店
				</view>
			</view>
			<view class="selectShop-right">
				<!-- <image class="img" src="../../static/logo.png" mode=""></image> -->
			</view>
		</view>
		
		<view style="height: 15px;"></view>
	</view>
</template>

<script setup lang="ts">
	import { onShareAppMessage,onShareTimeline } from '@dcloudio/uni-app';
	// import {ref} from 'vue'
	
	// 发送给朋友
	onShareAppMessage(() => {
		return {
			title:'xxx螺狮粉',
		}
	})
	
	// 分享到朋友圈
	onShareTimeline(() => {
		return {
			title:'xxx螺狮粉',
		}
	});
</script>

<style scoped lang="scss">
	@font-face {
	  font-family: "kksjt";
	  src: url('@/static/fonts/kksjt.ttf') format('truetype')
	}
	.home-container {
		--catering-home-border-radius: 12px;
		--catering-home-margin-y: 12px;
		--catering-home-margin-x: 12px;
		--catering-home-padding-y: 12px;
		--catering-home-padding-x: 12px;
		background-color: #f5f6f7;
		min-height: 100vh;
	}

	.swiper {
		--catering-home-swiper-height: 230px;
		height: var(--catering-home-swiper-height);
		background-color: cadetblue;

		.swiper-item {
			display: block;
			height: var(--catering-home-swiper-height);

			.swiper-item-img {
				width: 100%;
				height: var(--catering-home-swiper-height);
			}
		}
	}

	.user {
		display: flex;
		align-items: center;
		padding: var(--catering-home-padding-x);
		margin: 0px var(--catering-home-margin-x);
		border-radius: var(--catering-home-border-radius);
		background-color: white;
		transform: translateY(-20px);

		.user-avatar {
			width: 38px;
			height: 38px;
			border-radius: 999px;
			overflow: hidden;
			border: 1px solid $uni-color-primary;
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
				font-size: 13px;
				color: #333333;
			}

			.user-desc {
				margin-top: 3px;
				font-size: 10px;
				color: #AAAAAA;
			}
		}

		.button {
			padding: 8px 10px;
			color: white;
			font-size: 12px;
			border-radius: 8px;
			background-color: $uni-color-primary;
		}
	}


	.master {
		margin: 0px var(--catering-home-margin-x);
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 5px;
		transform: translateY(-5px);
		
		.card {
			// font-size: 2em;
			// text-align: center;
			// border: 1px solid #e5e4e9;
			border: 1px solid white;
			box-sizing: border-box;
			padding: 10px;
			border-radius: var(--catering-home-border-radius);
			background-color: white;
			 // -webkit-backdrop-filter: saturate(180%) blur(3px);
			  // backdrop-filter: saturate(180%) blur(3px);
			  // background: hsla(0, 0%, 100%, .5);
				// box-shadow: 8px 8px 20px 0 rgba(55, 99, 170, .1);
				box-shadow: 8px 8px 20px 0 rgba(55, 99, 170, .1);
			.text{
				font-size: 14px;
				// font-weight: 500;
				font-family: 'kksjt';
				color: #323232;
				color: white;
				letter-spacing: 2px;
			} 
		}
		
		
		.card-1 {
			background-image: linear-gradient(320deg, #4488de, #0048b3);
			grid-row: 1 / 3;
			/* 合并占据 1到2 行，不包括3 */
			grid-column: 1 / 2;
			/* 合并占据 1到1 列，不包括2 */
		}
		
		.card-2 {
			// background-color: #f68f26;
			height: 70px;
			// background-image: linear-gradient(160deg, #6d6fdb, #645aca);
			// background-image: linear-gradient(160deg, #e58869, #e7a57e);
			background-image: linear-gradient(160deg, #58bc58, #89dbbd);
		}
		
		.card-3 {
			// background-color: #4ba946;
			height: 70px;
			background-image: linear-gradient(160deg, #e94987, #ef8d56);
		}
		
		.card-4 {
			// background-color: #0376c2;
			background-image: linear-gradient(200deg, #ba59cd, #8138df);
			grid-row: 2 / 3;
			/* 占据3行 */
			grid-column: 2 / 4;
			/* 合并占据1到2列 */
			height: 70px;
		}
	}

	.services{
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-gap: 5px;
		padding: var(--catering-home-padding-x);
		margin: 0px var(--catering-home-margin-x);
		margin-top: var(--catering-home-margin-y);
		border-radius: var(--catering-home-border-radius);
		background-color: white;
		.service-item{
			display: flex;
			flex-direction: column;
			align-items: center;
			.img{
				width: 40px;
				height: 40px;
			}
			.text{
				margin-top: 5px;
				font-size: 13px;
			}
		}
	}
	
	.card-box{
		padding: var(--catering-home-padding-x);
		margin: 0px var(--catering-home-margin-x);
		margin-top: var(--catering-home-margin-y);
		border-radius: var(--catering-home-border-radius);
		background-color: white;
		.title-section{
			display: flex;
			align-items: center;
			font-size: 15px;
			margin-bottom: 10px;
			.left{
				flex: 1;
				font-weight: 500;
			}
			.right{
				flex-shrink: 0;
				font-size: 12px;
				color: #bfbfbf;
			}
		}
	}
	
	.discounts-box{
		.list{
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-gap: 10px;
			.item{
				position: relative;
				color: white;
				padding: 10px;
				padding-bottom: 15px;
				box-sizing: border-box;
				border-radius: 8px;
				background-color: #F5F5F5;
				&:first-child{
					height: unset;
					grid-row: 1 / 3;
					grid-column: 1 / 2;
					.product-img{
						width: 80px;
						height: 80px;
					}
				}
				.text{
					width: 60px;
					.product-name{
						color: #333;
						font-family: 'kksjt';
						letter-spacing: 2px;
					}
					.quan-type{
						height: 20px;
						line-height: 20px;
						text-align: center;
						font-size: 11px;
						font-weight: 500;
						border-radius: 3px 3px 6px 6px;
						transform: translateY(5px);
						background-color: #0022AA;
						z-index: 1;
					}
					.quan-price{
						padding-top: 4px;
						padding-bottom: 3px;
						text-align: center;
						// transform: translateY(-10px);
						border-radius: 0 0 6px 6px;
						background-color: #C2A279;
						z-index: 0;
					}
					.currency{
						font-size: 12px;
					}
					.presentPrice{
						font-size: 13px;
						font-weight: 500;
					}
					.originalPrice{
						margin-left: 3px;
						text-decoration: line-through;
						color: #f4e0ca;
						font-size: 10px;
						font-weight: 500;
					}
				}
				.product-img{
					position: absolute;
					bottom: 6px;
					right: 6px;
					width: 60px;
					height: 60px;
				}
			}
		}
		
	}
	
	.weal-box{
		.list{
			display: flex;
			gap: 10px;
			overflow-x: scroll;
			&::-webkit-scrollbar{
				display: none;
			}
			.item{
				padding: 10px 10px 15px 15px;
				box-sizing: border-box;
				min-width: 50%;
				border-radius: 8px;
				background-color: #FDEEE9;
				.title{
					color: #333;
					font-size: 14px;
					font-weight: 500;
				}
				.desc{
					font-size: 12px;
					color: #E06144;
				}
			}
		}
	}
	
	.monthHot-box{
		padding: var(--catering-home-padding-x);
		margin: 0px var(--catering-home-margin-x);
		margin-top: var(--catering-home-margin-y);
		border-radius: var(--catering-home-border-radius);
		// overflow: hidden;
		background-image: linear-gradient(82deg, #15c3db, #BFE8EE);
		.title-section{
			font-size: 15px;
			font-weight: bold;
			color: white;
		}
		.shop{
			display: flex;
			align-items: center;
			color: white;
			.shop-name{
				font-size: 12px;
			}
		}
		.list{
			margin-top: 10px;
			display: flex;
			gap:10px;
			border-radius: var(--catering-home-border-radius);
			overflow-x: scroll;
			&::-webkit-scrollbar{
				display: none;
			}
			.item{
				display: flex;
				flex-direction: column;
				gap: 10px;
				width: 60%;
				min-width: 60%;
				max-width: 60%;
				padding: 10px;
				border-radius: 8px;
				background-color: rgba(255,255,255, 0.3);
				backdrop-filter: blur(5px);
				-webkit-backdrop-filter: blur(5px); /* 针对Safari和Chrome */
			}
		}
		.product-item{
			width: 100%;
			// background-color: #28d8f1;
			display: flex;
			gap: 10px;
			
			.left{
				position: relative;
				width: 40px;
				height: 40px;
				flex-shrink: 0;
				border-radius: 4px;
				overflow: hidden;
				.no{
					position: absolute;
					top: 0;
					left:0;
					color: white;
					padding: 1px 3px;
					font-size: 8px;
					border-radius: 0 0 5px 0;
					background-color: #0022AA;
					z-index: 1;
				}
				.img{
					width: 40px;
					height: 40px;
				}
			}
			.content{
				flex: 1;
				.name{
					color: #333;
					font-size: 13px;
				}
				.price{
					.currency{
						font-size: 12px;
					}
					.presentPrice{
						color: #000;
						font-size: 14px;
						font-weight: 500;
					}
					.originalPrice{
						margin-left: 5px;
						text-decoration: line-through;
						color: #6B6D6C;
						font-size: 10px;
						font-weight: 500;
					}
				}
			}
			.right{
				display: flex;
				align-items: center;
				width: 15px;
				.icon{
					// position: abs
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 15px;
					width: 15px;
					height: 15px;
					border-radius: 999px;
					background-color: white;
				}
			}
		}
	}
	
	.selectShop-box{
		padding: 20px;
		margin: 0px var(--catering-home-margin-x);
		margin-top: var(--catering-home-margin-y);
		border-radius: var(--catering-home-border-radius);
		background-color: white;
		position: relative;
		display: flex;
		justify-content: space-between;
		.selectShop-left{
			.title{
				color: #000;
				font-size: 14px;
			}
			.desc{
				margin-top: 5px;
				color: #676767;
				font-size: 12px;
			}
		}
		.selectShop-right{
			position: absolute;
			right: 20px;
			top: 15px;
			bottom: 15px;
			width: 60px;
			background-image: url('../../static/logo.png');
			background-repeat: no-repeat;
			background-size: cover;
			// .img{
			// 	width: 40px;
			// 	height: 40px;
			// }
		}
	}
</style>