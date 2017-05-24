var MSfullWidth = function () {

    return {
        
        //Master Slider - Full Width
        initMSfullWidth: function () {
		    var slider = new MasterSlider();
		    slider.setup('masterslider' , {
		        width:1024,
		        height:450,
		        fullwidth:true,
		        centerControls:false,
		        speed:20,
		//      view:'flow',
				view:'fadeBasic',
				autoplay:false,
				loop:true,
		    });
		    slider.control('arrows' , {autohide:true});
		    slider.control('bullets' ,{autohide:true});
        },

    };
}();        