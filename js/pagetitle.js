var OriginTitle = document.title;
var titleTime; 
document.addEventListener('visibilitychange', function () { 
	if (document.hidden) { 
		$('[rel="icon"]').attr('href', "/funny.ico"); 
		document.title = '（；´д｀）ゞ 唔，去哪儿 ~'; 
		clearTimeout(titleTime); 
		} 
	else { 
		$('[rel="icon"]').attr('href', "/favicon.ico"); 
		document.title = '(´▽`ʃ♡ƪ) 嘻，来啦 ~' + OriginTitle; 
		titleTime = setTimeout(function () { document.title = OriginTitle; }, 2000);
		} 
	}
);
