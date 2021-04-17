const colors=["#363b3f", "#E14D43", "#26292c","#a3ca61","#ff6f6f","#fbcf61","#d97761","#0d4261","#00cc99","#006598",
"#82b440","#428bca","#E77755","#523e7c","#f77e05","#24a828","#f2b91f","#94b998","#3CBD99","#019ad2","#e0e0e0","#ec3939"]
let numE=0;

function createBox(wrapper){
	let s= $(document.createElement("section")).css("background-color", colors[numE]);
	$(wrapper).append(s);
	if(!(++numE%3)){
		let image= $(document.createElement("image")).css("background-color",  colors[numE]);
		$(s).append('<img src="../images/star.png" alt="star" title="star">');
	}
	
}
function crateRecList(wrapper,r){
	createBox(wrapper);
	while(numE<r){
		createBox(wrapper)
	}
}
function addAtrBox(){
	let s=$(".wrapper section").first();

		s.html('<span class="fas fa-plus-circle"></span>');
}
function getRandomNum (s){return (Math.floor(Math.random()*s)+1); }
function addRandomRec(n){
    let r=getRandomNum((n.length)*2);
	crateRecList($(".wrapper"),r);
	addAtrBox();
}
$(function() {
	addRandomRec("kario")
});

$(document).on("click", ".wrapper section:not(:first-child)", function(){
	let q=this.style.backgroundColor == 'rgb(255, 255, 255)';
	this.style.backgroundColor =  q ? colors[$(this).index()] : 'rgb(255, 255, 255)';
	if(!q)
		$(this).addClass('img1').fadeTo(1000, 1)
	else
		$(this).removeClass('img1').fadeTo(1000, 1)

});
$(document).on("click", ".wrapper span", function(){
	createBox(".wrapper");	
	alert("Secess to add new box");

});



