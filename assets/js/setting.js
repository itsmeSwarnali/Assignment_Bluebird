$(document).ready(function(){	
		$('#slider').layerSlider({
			sliderVersion: '6.0.0',
			type: 'fullwidth',
			responsiveUnder: 1350,
			maxRatio: 1,
			slideBGSize: 'auto',
			hideUnder: 0,
			hideOver: 100000,
			autoStart: false,
			keybNav: false,
			touchNav: false,
			skin: 'v5',
			globalBGColor: '#ffffff',
			navPrevNext: false,
			hoverPrevNext: false,
			navStartStop: false,
			navButtons: false,
			showCircleTimer: false,
			allowRestartOnResize: true,
			skinsPath: 'assets/skins/',
			height: 940
		});
	});