var alert=Vue.extend({
	template:"#alert",
	props:["msg"],
	components:{popwindow,popwindow},
	methods:{
		closeWindow:function(){
			this.$emit("close-window");
		}
	}
});
Vue.component("alert",alert);