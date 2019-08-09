<template>
	<view>
		<view class="btn">
			<button @click="pop()">成功</button>
			<button @click="popp()">失败</button>
			<button @click="poppp()">警告</button>
			<button @click="popppp()">信息</button>
		</view>
		<mpopup :show="ispop" :types="types" :span="span"></mpopup>	
		<mpopup :show="ispop" :types="types" :span="span"></mpopup>	
	</view>
</template>

<script>
import mpopup from '../../components/popup/popup.vue';
import Popup from '@/static/js/popup.js';
export default {
	data() {
		return {
			ispop:"",//是否显示弹窗
			types:"err",//弹窗类型
			span:"这是一个土司",//弹窗内容
			poptime:2000
		};
	},
	components:{
		mpopup
	},
	onLoad() {},
	methods: {
		pop:function(){
			Popup.setPopup(this,"success","hello,哈喽",this.poptime);
		},
		popp:function(){
			Popup.setPopup(this,"err","hello,哈喽",this.poptime);
		},
		poppp:function(){
			Popup.setPopup(this,"warn","hello,哈喽",this.poptime);
		},
		popppp:function(){
			Popup.setPopup(this,"info","hello,哈喽",this.poptime);
		}
	}
};
</script>

<style>
	.btn{
		transform: translateY(100%);
		margin: 50px;
	}
</style>
