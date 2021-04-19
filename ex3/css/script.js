
// Global virable :

const colors=["#363b3f", "#E14D43", "#26292c","#a3ca61","#ff6f6f","#fbcf61","#d97761","#0d4261","#00cc99","#006598",
"#82b440","#428bca","#E77755","#523e7c","#f77e05","#24a828","#f2b91f","#94b998","#3CBD99","#019ad2","#e0e0e0","#ec3939"]
let numE=0
const S=colors.length-1
// get Random Num
function getRandomNum (){return Math.floor(Math.random() * (S))  }
function createBox(wrapper){
	let s= $(document.createElement("section")).css("background-color", colors[numE]);
	$(wrapper).append(s);
	if(!(++numE%3)){
		let image= $(document.createElement("image")).css("background-color",  colors[getRandomNum()]);
		$(s).append('<img src="./images/star.png" alt="star" title="star">');
	}
}
//Crate box list with random color
function crateRecList(wrapper,r){
	createBox(wrapper);
	while(numE<r){
		createBox(wrapper)
	}
}
//Add random color and pic for %3
function addAtrBox(){
	let s=$(".wrapper section").first();
	s.html('<span class="fas fa-plus-circle"></span>');
}

function addRec(n){
	crateRecList($(".wrapper"),n.length*2);
	addAtrBox();
}
//Create layout of section on page 
$(function() {
	addRec("kario")
});
//On click tongle background-color/pic
$(document).on("click", ".wrapper section:not(:first-child)", function(){
	let q=this.style.backgroundColor == 'rgb(255, 255, 255)';
	this.style.backgroundColor =  q ? colors[getRandomNum()] : 'rgb(255, 255, 255)';
	if(!q)
		$(this).addClass('img1').fadeTo(1000, 1);
	else
		$(this).removeClass('img1').fadeTo(1000, 1);
});
//On click plus create new box
$(document).on("click", ".wrapper span", function(){
	createBox(".wrapper");	
	alert("Success to add new box");

});



