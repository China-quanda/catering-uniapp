<template>
	<view class="content">
		<swiper class="swiper radius-8" circular :indicator-dots="true" :autoplay="true" :interval="2500" :duration="500">
			<swiper-item class="swiper-item">
				<image class="swiper-item-img" src="@/static/images/index/banner01.png" mode="aspectFill" :draggable="false" />
			</swiper-item>
			<swiper-item class="swiper-item">
				<image class="swiper-item-img" src="@/static/images/index/banner02.png" mode="aspectFill" :draggable="false" />
			</swiper-item>
		</swiper>
	</view>
</template>

<script setup lang="ts">
	// import {ref} from 'vue'
</script>

<style scoped lang="scss">
.swiper {
	--catering-home-swiper-height:230px;
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
</style>