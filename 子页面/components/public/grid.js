var grid=Vue.extend({
	template:"#grid",
	props:["data"],
	data:function(){
		return{
			id:"id",
			headers:["编号","歌曲","歌手","时长","风格"],
			fields:["id","name","singer","time","type"]
		};
	},
	methods:{
		del:function(e,key){
			if(!confirm('你要删除这首歌曲吗？')) return;
			for(var i=0;i<this.data.musics.length;i++){
				 if(this.data.musics[i][this.id]==key){
				 	this.data.musics.splice(i,1);
				 	break;
				 }
		 	}
		}
	}
});
Vue.component("grid",grid);