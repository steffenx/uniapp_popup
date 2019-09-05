# 关于这个
- 船新版本的信息弹窗来了。
- 可以弹出很多个消息框，并可以单独控制消失时间、点击消失。
- 可以控制弹窗的关闭 和 修改弹窗内容/类型。
- 有个问题：每个弹窗之间的距离无法控制（头秃）
- 还有很多不足，多多学习。
#用法
- 使用this.$refs传值

值|类型|说明
--|:--:|---
type|string|什么类型的弹窗 success warn info err
content|string|显示出内容
timeout|Number|消失时间
isClick|Boolean|是否 点击消失/可控制
- 属性

值|类型|说明
--|:--:|---
isdistance|Boolean|每个弹窗之间是否有间距
- 普通的弹窗用法（isClick=false）
```
<view class="content">
		<view class="btn">
			<button @click="pop()">成功</button>
			<button @click="popp()">失败</button>
			<button @click="poppp()">警告</button>
			<button @click="popppp()">信息</button>	
		</view>
		<mpopup  ref="mpopup" :isdistance="true"></mpopup>	
	</view>

            //<!-- j's
			//  *属性 isdistance 每个弹窗之间是否有间距 （Boolean）
			//
			//  *对象形式传值
			//  *type,类型 success warn info err（string）
			//  *content,内容（string）
			//  *timeout,消失时间（Number）
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
			}
```

- 可控制的弹窗用法（isClick=true）

```
<view class="content">
		<view class="btn">
            <button @click="poppppp()">可控制的弹窗</button>
			<button type="primary" @click="update">修改</button>
			<button type="primary" @click="close">关闭</button>
		</view>
		<mpopup @uuidCallback="uuidCallback" @closeCallback="closeCallback"  ref="mpopup" :isdistance="true"></mpopup>	
</view>
//js
//引入
import mpopup from '../../components/xuan-popup/xuan-popup.vue'
	export default {
		components:{
			mpopup
		},
		data() {
			return {
				popup_uuid:[]//存放uuid(需要可控制的时候接收uuid用的)
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

			poppppp:function(){
				this.$refs.mpopup.open({
					type:'info',
					content:'这是可以控制的弹窗',
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
            //需要可控制的弹窗时(isClick:true),要写这两个回掉。正常弹窗不需要
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
```

