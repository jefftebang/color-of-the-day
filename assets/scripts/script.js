const btnStart = document.getElementById('btn-init');
const landingPage = document.getElementsByClassName('landing-page');
const questionPage = document.getElementsByClassName('question-page');
const endPage = document.getElementsByClassName('end-page');
const resultPage = document.getElementsByClassName('result-page');

let colorPts = 0;
let colors = ["blue","red","green","yellow", "orange", "purple"]
let colorBg = ["#313de6", "#b0090f","#2be421","#ecff01","#cf8a1a","#bd22c4"]

// EVENT LISTENER FOR LANDING PAGE BUTTON
btnStart.addEventListener('click', function(){
	landingPage[0].style.display = 'none';
	questionPage[0].classList.remove('d-none');
});

// EVENT LISTENER FOR QUESTION 1 PAGE
const btnSet1 = document.getElementsByClassName('btn-set1');
for(let i = 0;i < 6;i++){
	btnSet1[i].addEventListener('click', function(){
		questionPage[0].classList.add('d-none');
		questionPage[1].classList.remove('d-none');
		colorPts += i;
	});
}

// EVENT LISTENER FOR QUESTION 2 PAGE
const btnSet2 = document.getElementsByClassName('btn-set2');
for(let i = 0;i < 6;i++){
	btnSet2[i].addEventListener('click', function(){
		questionPage[1].classList.add('d-none');
		questionPage[2].classList.remove('d-none');
		colorPts += i;
	});
}

// EVENT LISTENER FOR QUESTION 3 PAGE
const btnSet3 = document.getElementsByClassName('btn-set3');
for(let i = 0;i < 6;i++){
	btnSet3[i].addEventListener('click', function(){
		questionPage[2].classList.add('d-none');
		questionPage[3].classList.remove('d-none');
		colorPts += i;
	});
}

// EVENT LISTENER FOR QUESTION 4 PAGE
const btnSet4 = document.getElementsByClassName('btn-set4');
for(let i = 0;i < 6;i++){
	btnSet4[i].addEventListener('click', function(){
		questionPage[3].classList.add('d-none');
		questionPage[4].classList.remove('d-none');
		colorPts += i;
	});
}

//EVENT LISTENER FOR QUESTION 5 PAGE
const btnSet5 = document.getElementsByClassName('btn-set5');
for(let i = 0;i < 6;i++){
	btnSet5[i].addEventListener('click', function(){
		questionPage[4].classList.add('d-none');
		endPage[0].classList.remove('d-none');
		colorPts += i;
		colorPts = (colorPts%6);
		resultPage[colorPts].classList.remove('d-none');
		endPage[0].style.backgroundColor = colorBg[colorPts];
	});
}