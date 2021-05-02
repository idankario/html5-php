
$(()=> {

		sliderFunction()

	
});
/**
* Create slied
*/
const sliderFunction=()=> {
	let curSlide     = 0,
	autoSlideTimeout = 9000
	/**
	* CreateBullets
	*/
	const createBullets=()=>{
		pagination = $( ".slider-pagi" );
		let b = $( "<li class='slider-pagi__elem'></li>" );
		b.addClass( "slider-pagi__elem-0 active").data( "page", 0 ), pagination.append( b )
		for (let a =1 ; a < $( ".slide" ).length - 1 + 1; a++) {
			b = $( "<li class='slider-pagi__elem'></li>" );
			b.addClass( "slider-pagi__elem-" + a ).data( "page", a ), pagination.append( b )
		}
	}
	/**
	* change Slides
	*/
	const changeSlides=(a)=>{
		animating  = ! 1;
		( animating = ! 0,  $( ".slider" ).addClass( "animating" ), $( ".slider" ).css( "top" ), $( ".slide" )
		.removeClass( "active" ), 
		$( ".slide-" + curSlide ).addClass( "active" ),
			setTimeout(()=> {
				$( ".slider" ).removeClass( "animating" ), animating = ! 1
				},
				500
			)
		),
		window.clearTimeout( autoSlideTimeout ),
		$( ".slider-pagi__elem" ).removeClass( "active" ), 
		$( ".slider-pagi__elem-" + curSlide ).addClass( "active" ), 
		//animation to change element
		$( ".slider" ).css( "transform", "translate3d( " + 100 * -curSlide + "%,0,0)" ), 
		$( ".slide__bg" ).css( "transform", "translate3d( " + 50 * curSlide + "%,0,0)" ), 
		autoSlide()
	}
	/**
	*On click bullets change slide
	*/
	$( document ).on("click",".slider-pagi__elem",function() {
		curSlide = $( this ).data( "page" ), changeSlides()
	}
	);
	//Navigate Left
	const navigateLeft=()=>  {
		if(curSlide-- ==0)
			curSlide=$( ".slide" ).length - 1;
		changeSlides()
	}
	//Navigate right
	const navigateRight=()=>  {
		if(curSlide++ == $( ".slide" ).length - 1)
			curSlide=0;
		changeSlides()
	}
	//Auto Slide 
	const autoSlide=()=>  {
		autoSlideTimeout =   setTimeout(()=> {
				navigateRight()
			},
			9000
		)
	}
    //Create Bullets
	createBullets(), changeSlides(),
	$( document ).on(
		"click",".slider-control",
		()=> {
			$( this ).hasClass( "left" ) ? navigateLeft() : navigateRight()
		}
	);
}