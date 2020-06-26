const movie = document.getElementById('movie');
const container = document.querySelector('.container');
const count = document.querySelector('.count');
const price = document.querySelector('.price');
const seat = document.querySelectorAll('.row .seat:not(.occupied)');

var moviePrice = movie.value;

populatedUI();

// calculate seat and price of movie
function countSeat(){
	const selectedCountSeat = document.querySelectorAll('.row .selected');
	var selectedSeat =  selectedCountSeat.length;

	const seatIndex = [...selectedCountSeat].map(function(seats){
		return [...seat].indexOf(seats);
	});

	localStorage.setItem('SelectedSeat',JSON.stringify(seatIndex));

	count.innerHTML = selectedSeat;
	price.innerHTML = selectedSeat*moviePrice;
}	


// selected movie index and it's value
function movieData(movieIndex,moviePrice){
	localStorage.setItem('selectedMovieIndex',movieIndex);
	localStorage.setItem('selectedMoviePrice',moviePrice);
}

// getting local data to ul
function populatedUI(){
	const selectedSeat = JSON.parse(localStorage.getItem('SelectedSeat'));

	if(selectedSeat !== null && selectedSeat.length >0){
		seat.forEach(function(seats,index){
			if(selectedSeat.indexOf(index) > -1){
				seats.classList.add('selected');
			}
		})
	}


	const SelectedMovie = localStorage.getItem('selectedMovieIndex');
	// console.log(SelectedMovie);
	if(SelectedMovie !== null){
		movie.selectedIndex = SelectedMovie;
	}
}

// select movie
movie.addEventListener('change',e=>{
	moviePrice = e.target.value;
	movieData(e.target.selectedIndex,e.target.value);
	countSeat();
})

// select seats
seat.forEach(function(seats){
	seats.addEventListener('click',function(e){
		e.target.classList.toggle('selected');
		countSeat();
	});
	
})


countSeat();