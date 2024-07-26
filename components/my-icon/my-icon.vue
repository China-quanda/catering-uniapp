<template>
	<view class="my-icon">
		<template v-if="type == 'font-class'">
			<text :class="['iconfont', icon]" :style="[style]">
				<slot></slot>
			</text>
		</template>
		<template v-if="type == 'svg'">
			<svg :class="svgClass" aria-hidden="true" :style="style">
				<use :xlink:href="'#' + icon" :fill="color" />
			</svg>
		</template>
	</view>
</template>
<script setup lang="ts">
import { computed, defineProps } from 'vue'
const props = defineProps({
	type: {
		type: String,
		default: 'font-class'
	},
	className: {
		type: String,
		default: ''
	},
	icon: {
		type: String,
		require: true
	},
	size: {
		type: [String, Number],
		default: '16'
	},
	color: {
		type: String,
		default: '#8a8a8a'
	}
})
const style = computed(() => {
	return {
		fontSize: props.size + 'px',
		color: props.color
	}
})
const svgClass = computed(() => props.className ? `svg-icon ${props.className}` : 'svg-icon')

</script>
<style scoped lang="scss">
.my-icon {
	display: inline-block;
}

.svg-icon {
	width: 1em;
	height: 1em;
	position: relative;
	fill: currentColor;
	vertical-align: -2px;
}
</style>
