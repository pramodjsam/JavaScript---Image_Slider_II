const slideImages= document.querySelectorAll(".slide");
const arrowLeft= document.getElementById("arrow-left");
const arrowRight= document.getElementById("arrow-right");
let counter=0;

function reset(){
	slideImages.forEach(function(slide){
	slide.style.display="none"
	})
}

function slideLeft(){
	reset();
	slideImages[counter - 1].style.display="block";
	counter--;
}

function slideRight(){
	reset();
	slideImages[counter + 1].style.display="block";
	counter++;
}

arrowLeft.addEventListener("click",function(){
	 if(counter==0){
	 	counter=slideImages.length;
	 }
	 slideLeft();
})

arrowRight.addEventListener("click",function(){
	if(counter == slideImages.length-1){
		counter= -1;
	}
	slideRight();
})

function startSlide(){
	reset();
	slideImages[0].style.display="block"
}

startSlide();