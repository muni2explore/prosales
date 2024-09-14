var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function($){
	$.fn.UItoTop = function(options) {

 		var defaults = {
			text: '',
			min: 100,			
			scrollSpeed: 800,
  			containerID: 'toTop',
			containerHoverID: 'toTopHover',
			easingType: 'linear',
			min_width:parseInt($('body').css("min-width"),10),
			main_width:parseInt($('body').css("min-width"),10)/2
					
 		};

 		var settings = $.extend(defaults, options);
		var containerIDhash = '#' + settings.containerID;
		var containerHoverIDHash = '#'+settings.containerHoverID;
			
		$('body').append('<a href="#" id="'+settings.containerID+'">'+settings.text+'</a>');
		
		var button_width = parseInt($(containerIDhash).css("width"))+90
		var button_width_1 = parseInt($(containerIDhash).css("width"))+20
		var max_width = defaults.min_width+button_width;
		var margin_right_1 = -(defaults.main_width+button_width_1)
		var margin_right_2 = -(defaults.main_width-20)
		
		function top(){
			if(($(window).width()<=max_width)&&($(window).width()>=defaults.min_width))$(containerIDhash).stop().animate({marginRight:margin_right_2,right:'50%'})
			else if($(window).width()<=defaults.min_width)$(containerIDhash).stop().css({marginRight:0,right:10})
			else $(containerIDhash).stop().animate({marginRight:margin_right_1,right:'50%'})
		}
		top()
		$(containerIDhash).hide().click(function(){			
			$('html, body').stop().animate({scrollTop:0}, settings.scrollSpeed, settings.easingType);
			$('#'+settings.containerHoverID, this).stop().animate({'opacity': 0 }, settings.inDelay, settings.easingType);
			return false;
		})
		
		.prepend('<span id="'+settings.containerHoverID+'"></span>')
		.hover(function() {
				$(containerHoverIDHash, this).stop().animate({
					'opacity': 1
				}, 600, 'linear');
			}, function() { 
				$(containerHoverIDHash, this).stop().animate({
					'opacity': 0
				}, 700, 'linear');
			});
								
		$(window).scroll(function() {
			var sd = $(window).scrollTop();
			if(typeof document.body.style.maxHeight === "undefined") {
				$(containerIDhash).css({
					'position': 'absolute',
					'top': $(window).scrollTop() + $(window).height() - 50
				});
			}
			if ( sd > settings.min ) 
				$(containerIDhash).css({display: 'block'});
			else 
				$(containerIDhash).css({display: 'none'});
		});
		$(window).resize(function(){top()})
};
})(jQuery);



}
/*
     FILE ARCHIVED ON 15:28:15 Feb 20, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 12:43:35 Sep 13, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 12.876
  exclusion.robots: 0.021
  exclusion.robots.policy: 0.01
  esindex: 0.009
  cdx.remote: 26.157
  LoadShardBlock: 155.998 (3)
  PetaboxLoader3.datanode: 1149.706 (5)
  load_resource: 1259.256 (2)
  PetaboxLoader3.resolve: 146.961 (2)
*/