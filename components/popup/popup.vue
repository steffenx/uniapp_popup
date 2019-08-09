<!-- /*
*自定义信息弹出框
*属性 show(string)：true,false
*	  types(String):success,warn,info,err
*	  span(String):显示内容
*/ -->
<template>
	<view class="content">
		<view v-show="isshow" :style="{ background: color }" v-bind:class="[activeClass,animator]">
			<view class="pic"><image class="icon" mode="aspectFit" :src="icon"></image></view>
			<text class="text" :style="{ color: colortext }">{{ content }}</text>
		</view>
	</view>
</template>

<script>
	export default{
		data() {
			return {
				icon: '',
				content: '',
				color: '',
				colortext: '',
				coloricon: '',
				isshow: false,
				activeClass:'mpopup',
				animator:'fade_Down'
			};
		},
		props: {
			types: {
				type: String,
				value: 'success'
			},
			span: {
				type: String,
				value: '这是一个土司'
			},
			show: {
				type: String,
				value: ''
			}
		},
		computed: {
			newshow() {
				return this.show;
			}
		},
		watch: {
			newshow(val) {
				if (val == 'true') {
					this.open();
				} else {
					this.close();
				}
			}
		},
		onLoad() {},
		methods: {
			init: function() {
				this.content = this.span;
				if (this.types == 'success') {
					this.icon = '../../static/images/success.png';
					this.color = '#F0F9EB';
					this.colortext = '#67C23A';
					this.coloricon = '#67C23A';
				}
				if (this.types == 'warn') {
					this.icon = '../../static/images/warn.png';
					this.color = '#FDF6EC';
					this.colortext = '#E6A23C';
					this.coloricon = '#E6A23C';
				}
				if (this.types == 'info') {
					this.icon = '../../static/images/info.png';
					this.color = '#EDF2FC';
					this.colortext = '#909399';
					this.coloricon = '#909399';
				}
				if (this.types == 'err') {
					this.icon = '../../static/images/err.png';
					this.color = '#FEF0F0';
					this.colortext = '#F56C6C';
					this.coloricon = '#F56C6C';
				}
			},
			open: function() {
				this.animator='fade_Down';
				this.init();
				this.isshow = true;
			},
			close: function() {
				this.animator='fade_Top';
			
			}
		}
	}
</script>

<style>
</style>
