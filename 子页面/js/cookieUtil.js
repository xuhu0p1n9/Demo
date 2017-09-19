var cookieUtil={
	set:function(name,value){
		document.cookie=name+'='+value;
	},
	get:function(name){
		var arrCookies=document.cookie.split('; ');
		for(var i in arrCookies){
			var getCookie=arrCookies[i].split('=');
			if (getCookie[0]==name) {
				return getCookie[1];
			}
		}
	},
	del:function(name){
		this.set(name,'');
	}
}