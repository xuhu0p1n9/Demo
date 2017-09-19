var back_TopBtn=Vue.extend({
	template:'#back_TopBtn',
	data:function(){
		return{
			isShow:false,
		}
	},
	created:function(){
		var that=this;
		window.onscroll=function(){
			var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
			that.isShow=scrollTop==0?false:true;//三步运算符操作条件赋值可直接提前
			// if(scrollTop==0)
			// 	that.isShow=false;
			// else
			// 	that.isShow=true;
		}
	}
});
Vue.component('backtop',back_TopBtn);