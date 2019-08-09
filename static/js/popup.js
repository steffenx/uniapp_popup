export default{
	/*
	*设置弹出框 
	* type:类型  span ：内容 second：几秒消失
	*/
	setPopup:function(_this,types,span,second){
		if(_this.ispop!="true"){
			_this.types=types;
			_this.span=span;
			_this.ispop="true";
			setTimeout(()=>{
				_this.ispop="false";
			},second)
		}
	},
	/*
	*设置自定义弹出框 
	* type:类型  span ：内容 
	*/
	setAutoPopup:function(_this,types,span){
		if(_this.ispop!="true"){
			_this.types=types;
			_this.span=span;
			_this.ispop="true";
		}
	}
}