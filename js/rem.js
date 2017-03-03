!function(){
	var resize_event = 'orientationchange' in window ? 'orientationchange' : 'resize'
	var refine = function () {
		var clientWidth = document.documentElement.clientWidth
		if (!clientWidth){
			console.warn('clientWidth is not exist!')
			return	
		}
		if(clientWidth>640){
			clientWidth = 640
		}
		//对html的引用 document.body对body的
		document.documentElement.style.fontSize = 10 * (clientWidth / 320) + 'px'

	}
	if(!document.addEventListener) return
	window.addEventListener(resize_event, refine, false)
	document.addEventListener('DOMContentLoaded', refine, false)
}()