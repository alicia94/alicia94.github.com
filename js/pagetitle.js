var OriginTitle = document.title;
var titleTime; 
document.addEventListener('visibilitychange', function () { 
	if (document.hidden) { 
		$('[rel="icon"]').attr('href', "/img/favicon.ico"); 
		document.title = 'Σ(っ °Д °;)っ'; 
		clearTimeout(titleTime); 
		} 
	else { 
		$('[rel="icon"]').attr('href', "/img/favicon.ico"); 
		document.title = '( ๑ ´ㅂ` ๑ )'; 
		titleTime = setTimeout(function () { document.title = OriginTitle; }, 3000);
		} 
	}
);
