function myFunction(){
    var accordion1 = document.getElementById('timeline-accordion1');
    if (accordion1.style.display === 'none') {
        accordion1.style.display = 'block';
    } else {
        accordion1.style.display = 'none';
    }
}

function myFunction2(){
    var accordion2 = document.getElementById('timeline-accordion2');
    if (accordion2.style.display === 'none') {
        accordion2.style.display = 'block';
    } else {
        accordion2.style.display = 'none';
    }
}

function myFunction3(){
    var accordion3 = document.getElementById('timeline-accordion3');
    if (accordion3.style.display === 'none') {
        accordion3.style.display = 'block';
    } else {
        accordion3.style.display = 'none';
    }
}

function myFunction4(){
    var accordion4 = document.getElementById('yinyang-accordion1');
    if (accordion4.style.display === 'none') {
        accordion4.style.display = 'block';
    } else {
        accordion4.style.display = 'none';
    }
}

function myFunction5(){
    var accordion5 = document.getElementById('yinyang-accordion2');
    if (accordion5.style.display === 'none') {
        accordion5.style.display = 'block';
    } else {
        accordion5.style.display = 'none';
    }
}

function myFunction6(){
    var accordion6 = document.getElementById('cosmetics-accordion1');
    if (accordion6.style.display === 'none') {
        accordion6.style.display = 'block';
    } else {
        accordion6.style.display = 'none';
    }
}

function myFunction7(){
    var accordion7 = document.getElementById('cosmetics-accordion2');
    if (accordion7.style.display === 'none') {
        accordion7.style.display = 'block';
    } else {
        accordion7.style.display = 'none';
    }
}

function myFunction8(){
    var accordion8 = document.getElementById('cosmetics-accordion3');
    if (accordion8.style.display === 'none') {
        accordion8.style.display = 'block';
    } else {
        accordion8.style.display = 'none';
    }
}


//Timeline Section: Close accordions
function closeAccordion1(){
    var accordion1 = document.getElementById('timeline-accordion1');
    if (accordion1.style.display === 'block') {
        accordion1.style.display = 'none';
    } else {
        accordion1.style.display = 'block';
    }  
}

function closeAccordion2(){
    var accordion2 = document.getElementById('timeline-accordion2');
    if (accordion2.style.display === 'block') {
        accordion2.style.display = 'none';
    } else {
        accordion2.style.display = 'block';
    } 
}

function closeAccordion3(){
    var accordion3 = document.getElementById('timeline-accordion3');
    if (accordion3.style.display === 'block') {
        accordion3.style.display = 'none';
    } else {
        accordion3.style.display = 'block';
    }  
}

//Yinyang Section: Close accordions
function closeAccordion4(){
    var accordion4 = document.getElementById('yinyang-accordion1');
    if (accordion4.style.display === 'block') {
        accordion4.style.display = 'none';
    } else {
        accordion4.style.display = 'block';
    }  
}

function closeAccordion5(){
    var accordion5 = document.getElementById('yinyang-accordion2');
    if (accordion5.style.display === 'block') {
        accordion5.style.display = 'none';
    } else {
        accordion5.style.display = 'block';
    } 
}

//Game Section: Close accordions
function closeAccordion6(){
    var accordion6 = document.getElementById('cosmetics-accordion1');
    if (accordion6.style.display === 'block') {
        accordion6.style.display = 'none';
    } else {
        accordion6.style.display = 'block';
    }  
}

function closeAccordion7(){
    var accordion7 = document.getElementById('cosmetics-accordion2');
    if (accordion7.style.display === 'block') {
        accordion7.style.display = 'none';
    } else {
        accordion7.style.display = 'block';
    } 
}

function closeAccordion8(){
    var accordion8 = document.getElementById('cosmetics-accordion3');
    if (accordion8.style.display === 'block') {
        accordion8.style.display = 'none';
    } else {
        accordion8.style.display = 'block';
    } 
}



//Map Section: Show paths
function mapFunction1(){
    var path1 = document.getElementById('elizabeth-path');
    if (path1.style.display === 'none') {
        path1.style.display = 'block';
    } else {
        path1.style.display = 'none';
    }   
}

function mapFunction2(){
    var path2 = document.getElementById('helena-path');
    if (path2.style.display === 'none') {
        path2.style.display = 'block';
    } else {
        path2.style.display = 'none';
    }   
}

function mapFunction3(){
    var path3 = document.getElementById('maxfactor-path');
    if (path3.style.display === 'none') {
        path3.style.display = 'block';
    } else {
        path3.style.display = 'none';
    }   
}

//Get the modal1
var modal1 = document.getElementById('modal1');

//Get the circle that opens the modal
var btn1 = document.getElementById('inactive-circle-elizabeth');

//Get the <span> that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks the button, open the modal
btn1.onclick = function() {
    modal1.style.display = 'block';
}

//Get the modal 2
var modal2 = document.getElementById('modal2');

//Get the circle that opens the modal
var btn2 = document.getElementById('inactive-circle-helena');

// When the user clicks the button, open the modal
btn2.onclick = function() {
    modal2.style.display = 'block';
}


//Get the modal 3
var modal3 = document.getElementById('modal3');

//Get the circle that opens the modal
var btn3 = document.getElementById('inactive-circle-maxfactor');

// When the user clicks the button, open the modal
btn3.onclick = function() {
    modal3.style.display = 'block';
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal1.style.display = 'none';
    modal2.style.display = 'none';
    modal3.style.display = 'none';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal1) {
      modal1.style.display = 'none';
    } else if (event.target == modal2) {
        modal2.style.display = 'none';
    } else if (event.target == modal3) {
        modal3.style.display = 'none';
    }   
}




