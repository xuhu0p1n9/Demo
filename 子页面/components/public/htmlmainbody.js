var testData=[
	{
		name:"default",
		listImg:'images/Dyh/defaultListLogo.png',
		LlistImg:'images/Dyh/LdefaultListLogo.png',
		musics:[
			{id:'01',name:'九张机',singer:'叶炫清',time:'03:55',type:'pop'},
			{id:'02',name:'咖喱咖喱',singer:'以冬',time:'03:44',type:'folk'},
			{id:'03',name:'醉清风',singer:'弦子',time:'04:55',type:'pop'},
			{id:'04',name:'理想',singer:'赵雷',time:'03:55',type:'folk'},
			{id:'05',name:'追光者',singer:'岑宁儿',time:'03:21',type:'pop'},
			{id:'06',name:'梦一场',singer:'王凯',time:'03:55',type:'mood'},
			{id:'07',name:'未至',singer:'郁可唯',time:'05:10',type:'blue'},
			{id:'08',name:'Dear John',singer:'比莉',time:'03:55',type:'rap'},
			{id:'09',name:'半壶纱',singer:'刘珂艾',time:'04:36',type:'classic'},
			{id:'10',name:'岁月神偷',singer:'金玟岐',time:'03:55',type:'hipop'}
		]
	},
	{
		name:'我的摇滚音乐',
		listImg:'images/Dyh/rockListLogo.png',
		LlistImg:'images/Dyh/LrockListLogo.png',
		musics:[
			{id:'01',name:'摇滚一号',singer:'摇滚11号歌手',time:'03:29',type:'pop'},
			{id:'02',name:'摇滚二号',singer:'摇滚36号歌手',time:'03:57',type:'flok'},
			{id:'03',name:'摇滚三号',singer:'摇滚44号歌手',time:'04:36',type:'rock'},
			{id:'04',name:'摇滚四号',singer:'摇滚45号歌手',time:'03:55',type:'mood'},
			{id:'05',name:'摇滚五号',singer:'摇滚67号歌手',time:'04:55',type:'blue'},
			{id:'06',name:'摇滚六号',singer:'摇滚37号歌手',time:'03:44',type:'rap'},
			{id:'07',name:'摇滚七号',singer:'摇滚78号歌手',time:'03:55',type:'classic'},
			{id:'08',name:'摇滚八号',singer:'摇滚68号歌手',time:'05:10',type:'pop'},
			{id:'09',name:'摇滚九号',singer:'摇滚75号歌手',time:'04:36',type:'classic'},
			{id:'10',name:'摇滚十号',singer:'摇滚36号歌手',time:'03:55',type:'folk'},
		],
	}	
];

var htm_mainbody=Vue.extend({
	template:"#htm_mainbody",
	data:function(){
		return{
			userName:"",
			leftH:"创建的歌单",
			allData:[],
			btns:["播放","收藏"],
			songList:"歌曲列表",
			data:{},
			span:"",
			totalSong:"",
			RlistImg:""
		};
	},
	created:function(){
		this.allData=testData;
		this.data=this.allData[0];
		this.span=this.allData[0].name;
		cookieUtil.get("userName");
		this.totalSong=this.allData[0].musics.length;
		this.RlistImg=this.allData[0].LlistImg;
	},
	methods:{
		filterPro:function(p){
			switch(p){
				case 'default':
					return '我喜欢的音乐';
				default:
					return p;
			}
		},
		changeList:function(name){
			for(var i=0;i<this.allData.length;i++){
				if(this.allData[i].name==name){
					this.data=this.allData[i];
					this.span=this.allData[i].name;
					this.RlistImg=this.allData[i].LlistImg;
				}
			}
		}
	}
});
Vue.component("htmlmainbody",htm_mainbody);