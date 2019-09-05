<template>
	<view class="content">
		<view class="btn">
			<button @click="pop()">成功</button>
			<button @click="popp()">失败</button>
			<button @click="poppp()">警告</button>
			<button @click="popppp()">信息</button>
			<button @click="poppppp()">可控制的弹窗</button>
			<button type="primary" @click="update">修改</button>
			<button type="primary" @click="close">关闭</button>
		</view>
		<mpopup @uuidCallback="uuidCallback" @closeCallback="closeCallback" ref="mpopup" :isdistance="true"></mpopup>	
	</view>
</template>

<script>
	import mpopup from '../../components/xuan-popup/xuan-popup.vue'
	export default {
		components:{
			mpopup
		},
		data() {
			return {
				popup_uuid:[]//存放uuid
			}
		},
		methods: {
			// <!--
			//  *属性 isdistance 每个弹窗之间是否有间距 （Boolean）
			//
			//  *对象形式传值
			//  *type,类型 success warn info err（string）
			//  *content,内容（string）
			//  *timeout,消失时间（Number）
			//  *isClick,是否点击消失/可控制消失（Boolean）
			//  *如果是可控制的消失（isClick=true）要加上两个回掉函数。uuidCallback(uuid)：返回uuid 。  closeCallback(uuid)：控制关闭。
			//  -->
			pop:function(){
				this.$refs.mpopup.open({
					type:'success',
					content:'我可以',
					timeout:2000,
				});
			},
			popp:function(){
				this.$refs.mpopup.open({
					type:'err',
					content:'不好！错误发生',
					timeout:2000,
					isClick:false
				});
			},
			poppp:function(){
				this.$refs.mpopup.open({
					type:'warn',
					content:'不要这样，下不为例',
					timeout:1000,
					isClick:false
				});	
			},
			popppp:function(){
				this.$refs.mpopup.open({
					type:'info',
					content:'咦，评价一下呗？',
					isClick:false
				});	
			},
			poppppp:function(){
				this.$refs.mpopup.open({
					type:'info',
					content:'是不是还在加班？你找到女朋友了么？',
					timeout:0,
					isClick:true,
				});	
			},
			//控制关闭
			close:function(){
				if(this.popup_uuid[0]){
					this.$refs.mpopup.close(this.popup_uuid[0].uuid)	
					this.popup_uuid.splice(0,1);
				}	
			},
			//修改
			update:function(){
				this.$refs.mpopup.update({
					uuid:this.popup_uuid[0].uuid,
					type:'success',
					content:'修改成功'
				})	
			},
			//uuid回传
			uuidCallback(uuid){
				//存起来
				this.popup_uuid.push({uuid})
				//console.log(this.popup_uuid)
			},
			//关闭回传
			closeCallback(uuid){				
				for (var i = 0; i < this.popup_uuid.length; i++) {
					if(this.popup_uuid[i].uuid==uuid){
						//移除uuid
						this.popup_uuid.splice(i,1);
						break;
					}
				}
			}
			
		}
	}
</script>

<style>
	.btn{
		transform: translateY(50%);
	}
</style>
