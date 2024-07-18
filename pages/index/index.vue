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
		</view>
		活动专区/优惠专区/我的优惠专区
		热销推荐
		福利中心。
		必喝榜
		xx月好喝榜
		
	</view>
</template>

<script setup lang="ts">
	// import {ref} from 'vue'
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
		height: 100vh;
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
</style>