
$(document).ready(function () {
	 if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
    const video = document.getElementById('vd');
    const source = document.getElementById('vds');
    let sourceChanged = false;

    video.oncanplaythrough = () => {
        if (!sourceChanged) { 
            setTimeout(() => {
                source.src = "https://vod.plaync.com/lineageM/update/240529/bg_02.mp4#t=0.1"; 
                video.load(); 
                video.play(); 
                sourceChanged = true; 
				video.style.filter = "brightness(130%)";
            }, 5700); 
        }
    };
	}
   });