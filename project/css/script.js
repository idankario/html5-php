

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

	const navigateLeft=()=>  {
		if(curSlide-- ==0)
			curSlide=$( ".slide" ).length - 1;
		changeSlides()
	}

	const navigateRight=()=>  {
		if(curSlide++ == $( ".slide" ).length - 1)
			curSlide=0;
		changeSlides()
	}

	const autoSlide=()=>  {
		autoSlideTimeout =   setTimeout(()=> {
				navigateRight()
			},
			9000
		)
	}
	createBullets(), changeSlides(),
	$( document ).on(
		"click",".slider-control",
		()=> {
			$( this ).hasClass( "left" ) ? navigateLeft() : navigateRight()
		}
	);
}


const createProductAndFilter=()=> {
	const data = [
		{
			"name": "Lona",
			"gender": "Male",
			"age": "Two",
			"size": "Standard",
			"type": "Alaskan Malamute",
			"image": "../images/dogs_small/1.jpg"
		},
		{
			"name": "Diago",
			"gender": "Male",
			"age": "One",
			"size": "Large",
			"type": "Alaskan Kai",
			"image": "images/dogs_small/2.jpg"
		},
		{
			"name": "Lily",
			"gender": "Female",
			"age": "One",
			"size": "Small",
			"type": "Amstaff",
			"image": "images/dogs_small/3.jpg"
		},
		{
			"name": "Boss",
			"gender": "Female",
			"age": "One",
			"size": "Toy",
			"type": "Clay Kai",
			"image": "images/dogs_small/4.jpg"
		},
		{
			"name": "Max",
			"gender": "Female",
			"age": "Four",
			"size": "Large",
			"type": "American Bulldog",
			"image": "images/dogs_small/5.jpg"
		},
		{
			"name": "Cooper",
			"gender": "Female",
			"age": "Five",
			"size": "Standard",
			"type": "American Pitbull",
			"image": "images/dogs_small/6.jpg"
		},
		{
			"name": "Lucy",
			"gender": "Female",
			"age": "Two",
			"size": "Toy",
			"type": "American Eskimo",
			"image": "images/dogs_small/7.jpg"
		},
		{
			"name": "Miky",
			"gender": "Male",
			"age": "One",
			"size": "Giant",
			"type": "American Eskimo",
			"image": "images/dogs_small/8.jpg"
		},
		{ 
			"name": "Charlie",
			"gender": "Male",
			"age": "Two",
			"size": "Large",
			"type": "Alaskan Kai",
			"image": "images/dogs_small/9.jpg"
		}
	];
	
	let products = "",
		genders = "",
		ages = "",
		sizes = "",
		types = "";
	
	for (var i = 0; i < data.length; i++) {
		var gender = data[i].gender,
			name = data[i].name,	
			age = data[i].age,
			size = data[i].size,
			type = data[i].type,
			image = data[i].image;
	
		//create product cards
		products += "<a class='product' data-gender='" + gender +  "' data-name='" + name + "' data-age='" + age + "' data-size='" + size +"' data-type='" + type + "'href='updateDog.html?DogId='"+(i+1)+'">'+
		'<img class="rounded-circle" alt='+name+ ' title='+name+' src='+image+' "data-holder-rendered="true">'+
			'<h3>'+name+'</h3>'+	
		'</a>'
		//create dropdown of genders
		if (genders.indexOf("<option value='" + gender + "'>" + gender + "</option>") == -1) {
			genders += "<option value='" + gender + "'>" + gender + "</option>";
		}
		//create dropdown of genders
		if (ages.indexOf("<option value='" + age + "'>" + age + "</option>") == -1) {
			ages += "<option value='" + age + "'>" + age + "</option>";
		}
		//create dropdown of genders
		if (sizes.indexOf("<option value='" + size + "'>" + size + "</option>") == -1) {
			sizes += "<option value='" + size + "'>" + size + "</option>";
		}
	
		//create dropdown of types
		if (types.indexOf("<option value='" + type + "'>" + type + "</option>") == -1) {
			types += "<option value='" + type + "'>" + type + "</option>";
		}
	}

	$("#products").html(products);
	$(".filter-gender").append(genders);
	$(".filter-age").append(ages);
	$(".filter-size").append(sizes);
	$(".filter-type").append(types);
	//on search form submitt
	$("#search-form").submit((e)=>{

		e.preventDefault();
		let query = $("#search-form input").val().toLowerCase();
		$(".product").hide();
		$(".product").each(function() {
			let gender = $(this).data("gender").toLowerCase(),
				age = $(this).data("age").toLowerCase(),
				type = $(this).data("size").toLowerCase();
				name = $(this).data("name").toLowerCase();
			if (gender.indexOf(query) > -1 ||  name.indexOf(query) > -1||  age.indexOf(query) > -1  || size.indexOf(query) > -1) {
				$(this).show();
			}
		});
	});
}

const createFilter=()=> {
	var filtersObject = {};

	//on filter change
	$(".filter").on("change",function() {
		
		var filterName = $(this).data("filter"),
			filterVal = $(this).val();
		
		if (filterVal == "") {
			delete filtersObject[filterName];
		} else {
			filtersObject[filterName] = filterVal;
		}
		
		var filters = "";
		
		for (var key in filtersObject) {
			if (filtersObject.hasOwnProperty(key)) {
				filters += "[data-"+key+"='"+filtersObject[key]+"']";
			}
		}
		
		if (filters == "") {
			$(".product").show();
		} else {
			$(".product").hide();
			$(".product").hide().filter(filters).show();
		}
	});
}

window.onload=()=>{
	if($(".slider-container-header").length)
	{
		sliderFunction()
	}
	if($("#products").length){
		createProductAndFilter()
		createFilter()
	}
}

