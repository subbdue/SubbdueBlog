/**
 * boxlayout.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var Boxlayout = (function() {

	var $el = $( '#bl-main' ),
		$sections = $el.children( 'section' ),
		$intro = $( '.intro'),
		$related = $( '.related'),
		transEndEventNames = {
			'WebkitTransition' : 'webkitTransitionEnd',
			'MozTransition' : 'transitionend',
			'OTransition' : 'oTransitionEnd',
			'msTransition' : 'MSTransitionEnd',
			'transition' : 'transitionend'
		},
		// transition end event name
		transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
		// support css transitions
		supportTransitions = Modernizr.csstransitions;

	function init() {
		initEvents();
	}

	function initEvents() {
		
		$sections.each( function() {
			
			var $section = $( this );

			// expand the clicked section and scale down the others
			$section.on( 'click', function() {

				if( !$section.data( 'open' ) ) {
					$section.data( 'open', true ).addClass( 'bl-expand bl-expand-top' ).removeClass('item');
					$el.addClass( 'bl-expand-item' );
					$intro.addClass('bl-cust-hidden');
					$related.addClass('bl-cust-hidden');
					$el.removeClass( 'items-wrap');
					$('.item').addClass('bl-cust-hidden');
					//window.addEventListener( 'scroll', function() {
					//	window.scrollTo( 0, 0 );
					//});
				}

			} ).find( 'span.bl-icon-close' ).on( 'click', function() {
				
				// close the expanded section and scale up the others
				$section.data( 'open', false ).addClass('item').removeClass( 'bl-expand' ).on( transEndEventName, function( event ) {
					if( !$( event.target ).is( 'section' ) ) return false;
					$( this ).off( transEndEventName ).removeClass( 'bl-expand-top' );
				} );

				if( !supportTransitions ) {
					$section.removeClass( 'bl-expand-top' );
				}

				$el.removeClass( 'bl-expand-item' );
				$intro.removeClass('bl-cust-hidden');
				$related.removeClass('bl-cust-hidden');
				$('.item').removeClass('bl-cust-hidden');
				$el.addClass( 'items-wrap');
				//window.removeEventListener( 'scroll', function() {
				//		window.scrollTo( 0, 0 );
				//});
				
				return false;

			} );

		} );

	}

	return { init : init };

})();