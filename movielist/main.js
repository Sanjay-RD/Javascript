const seat = document.querySelectorAll('.row .seat:not(.occupied)');
const movie = document.getElementById('movie');
var count = document.getElementById('count');
const total = document.getElementById('total'); 
const container = document.querySelector('.container');


var PriceOfMovie = movie.value;

populatedUI();


function SelectdeMovieData(movieIndex,moviePrice){
	localStorage.setItem('selectedMovieIndex',movieIndex);
	localStorage.setItem('selectedMoviePrice',moviePrice);
}

// movie seat count
function countMovieSeat(){
	const countSelect = document.querySelectorAll('.row .seat.selected');
	// copy countselect index in array
	const seatIndex = [...countSelect].map((seats)=>[...seat].indexOf(seats));
	// console.log(JSON.stringify(seatIndex));
	// console.log(seatIndex);
	localStorage.setItem('SelectedSeat',JSON.stringify(seatIndex));



	const movieLength = countSelect.length;
	count.innerHTML = movieLength;
	total.innerHTML = movieLength*PriceOfMovie;
}


// populated Ui
function populatedUI(){
	const SelectedSeat = JSON.parse(localStorage.getItem('SelectedSeat'));
	if(SelectedSeat !== null && SelectedSeat.length > 0){
		seat.forEach(function(seats,index){
			if(SelectedSeat.indexOf(index) > -1){
				seats.classList.add('selected');
			}
		});
	}

	const SelectedMovie = JSON.parse(localStorage.getItem('selectedMovieIndex'));
	if(SelectedMovie !== null){
		movie.selectedIndex = SelectedMovie;
	}
}


// select 
movie.addEventListener('change',e=>{
	PriceOfMovie = e.target.value;
	SelectdeMovieData(e.target.selectedIndex,e.target.value);
	countMovieSeat();
})

container.addEventListener('click',e => {
	if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
		e.target.classList.toggle('selected');
		countMovieSeat();
	}
})


countMovieSeat();













/*
// movie seat count
function countMovieSeat(){
	const movieSeat = document.querySelectorAll('.row .seat.selected');
	movieLength = movieSeat.length;
	count.innerHTML = movieLength;
	total.innerHTML = PriceOfMovie * movieLength;

}


movie.addEventListener('change',(e) => {
	PriceOfMovie = e.target.value;
	countMovieSeat();
})


seat.forEach(function(seats){
	seats.addEventListener('click',function(e){
		e.target.classList.toggle('selected');
		countMovieSeat();
	})
})

*/
