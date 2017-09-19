var htm_head=Vue.extend({
	template:'#htm_head',
	props:['curhtml'],
	data:function(){
		return {
			logoUrl:'images/logo.png',//logo图片路径
			mainMenu:['发现音乐','音乐库','我的音乐','我的电台','关于我们'],//主菜单标题
			subMenu:['推荐','排行榜','主播电台','歌单'],//子菜单标题
			attitudeMsg:{
				isFlag:{msg:'欢迎，'},//登录状态下
				noFlag:{msg:'登录'},//未登录状态下
			},//登录状态显示信息
			attitudeFlag:false, // 记录登录状态
			loginInShow:false, //登录按钮处的下拉
			curMainMenu:0, //当前主菜单激活索引
			curSubMenu:0, // 当前子菜单激活索引
			cookieData:{username:'',password:'',},//用来保存当前的cookie用户数据
			url:"http://localhost:8080/userTest/",
		}
	},
	watch:{
		attitudeFlag:function(){
			this.$emit('login-change',this.attitudeFlag);
		},
	},
	created:function(){
		if (!!this.curhtml) {
			this.curMainMenu=this.curhtml;
		}else{
			console.log(this.curHTML);
		}
		//加载之前 获取cookie并存起来
		for(var p in this.cookieData){
			this.cookieData[p]=cookieUtil.get(p);
		}
		//验证用户名
		this.userTest();
		//发送给父组件当前登录状态,因为在页面上退出登录会刷新页面，但是不会触发watch，所以在加载的时候也发送一次
		this.$emit('login-change',this.attitudeFlag);
	},
	methods:{
		//验证用户
		userTest:function(){
			//此处要发送ajax请求，获取testItem，来验证用户名
			this.$http({
				url:this.url,
				method:"post",
				data:this.cookieData,
				emulateJSON:true,
			}).then(function(res){
				if (res.data=='1') { //返回1 验证成功
					this.attitudeMsg.isFlag.msg+=this.cookieData.username;
					this.attitudeFlag=true;
				}else if(res.data=='0'){ //返回0 验证失败
					this.attitudeFlag=false;
					return;
				}
			},function(){});
		},

		//退出登录清空cookie
		loginOut:function(){
			cookieUtil.del('username');
			cookieUtil.del('password');
		},
	},
})
Vue.component('htmlhead',htm_head);