var OriginTitle = document.title;
var titleTime; 
document.addEventListener('visibilitychange', function () { 
	if (document.hidden) { 
		$('[rel="icon"]').attr('href', "/funny.ico"); 
		document.title = 'Σ(っ °Д °;)っ'; 
		clearTimeout(titleTime); 
		} 
	else { 
		$('[rel="icon"]').attr('href', "/favicon.ico"); 
		document.title = '( ๑ ´ ㅂ ` ๑ )' + OriginTitle; 
		titleTime = setTimeout(function () { document.title = OriginTitle; }, 2000);
		} 
	}
);
