!(function(){
	//得到当前url的地址的连接(注意,微信会给它加一串"#1888"之类的,所以,要去除#之后的)
	var url = window.location.href.split('#').shift()
	//发送请求到后台验证文件验证后返回验证信息可以成功调用
	$.ajax({
		type:'post',
		data:{url:url},
		url:'http://www.i-cedong.com/AccessToken.php?method=getPermission',
		dataType:'json',
		success:function(msg){
			var title = '我们“搬家”至成都北大资源微信号，2017精彩再续！'
			var link = 'http://www.i-cedong.com/h5/beida2' 
			var desc = '北大资源品牌动态、各项目最新资讯一手掌握，敬请关注'
			var headimg = 'http://www.i-cedong.com/h5/beida2/img/qimu.png'
			//根据后台传来的信息设定
			wx.config({
				debug:false, //false时不弹出信息  调试时改为true
				appId: msg.appId, 
				timestamp: msg.timestamp, 
				nonceStr: msg.nonceStr, 
				signature: msg.signature,
				//参考微信文档,调用哪些接口这里就是那个接口名字,必须!
				jsApiList: [
				"onMenuShareTimeline",
				"onMenuShareAppMessage",
				"onMenuShareQQ",
				"onMenuShareWeibo",
				"onMenuShareQZone"
				] 
			});
            
            
			wx.ready(function(){
				wx.onMenuShareTimeline({
					title: title, // 分享标题
					link: link, // 分享链接
					imgUrl: headimg, // 分享图标
					success: function () { 
						alert('分享成功!');
					},
					cancel: function () { 
						alert('分享失败!');
					}
				});
				wx.onMenuShareAppMessage({
					title: title, // 分享标题
					desc: desc, // 分享描述
					link: link, // 分享链接
					imgUrl: headimg, // 分享图标
					type: '', // 分享类型,music、video或link，不填默认为link
					dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
					success: function () { 
						alert('分享成功!');
					},
					cancel: function () { 
						alert('分享失败!');
					}
				});
				wx.onMenuShareQQ({
					title: title, // 分享标题
					desc: desc, // 分享描述
					link: link, // 分享链接
					imgUrl: headimg, // 分享图标
					success: function () { 
						alert('分享成功!');
					},
					cancel: function () { 
						alert('分享失败!');
					}
				});
				wx.onMenuShareWeibo({
					title: title, // 分享标题
					desc: desc, // 分享描述
					link: link, // 分享链接
					imgUrl: headimg, // 分享图标
					success: function () { 
						alert('分享成功!');
					},
					cancel: function () { 
						alert('分享失败!');
					}
				});
				wx.onMenuShareQZone({
					title: title, // 分享标题
					desc: desc, // 分享描述
					link: link, // 分享链接
					imgUrl: headimg, // 分享图标
					success: function () { 
						alert('分享成功!');
					},
					cancel: function () { 
						alert('分享失败!');
					}
				});
			})
		}
	})
})()