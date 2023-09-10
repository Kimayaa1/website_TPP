// var slideIndex = 0;
// showSlides();

// function showSlides() {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) { slideIndex = 1 }
//     slides[slideIndex - 1].style.display = "block";
//     setTimeout(showSlides, 2000); // Change image every 2 seconds
// }


const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", function() {
    searchButton.style.backgroundColor = "#ff3300"; // Change to the desired background color
});
// document.addEventListener('DOMContentLoaded', function () {
//     animateText();
// });

// document.addEventListener('DOMContentLoaded', function () {
//     animateText();
// });

// function animateText() {
//     const textAnimation = document.getElementById('text-animation');
//     const line = 'Discover the rich culture,Explore historic landmarks,Experience local cuisine';
//     const words = line.split(',');

//     words.forEach((word, wordIndex) => {
//         setTimeout(() => {
//             const span = document.createElement('span');
//             span.textContent = word + ' ';
//             textAnimation.appendChild(span);
//         }, wordIndex * 500); // Adjust the delay between words
//     });
// }

// document.addEventListener('DOMContentLoaded', function () {
//     // Animate the floating image when the section is in the viewport
//     animateFloatingImage();
    
//     // Other animations or functions can go here
// });

// function animateFloatingImage() {
//     const floatingImage = document.getElementById('floating-image');
//     const homeSection = document.getElementById('home');

//     // Function to check if an element is in the viewport
//     function isElementInViewport(element) {
//         const rect = element.getBoundingClientRect();
//         return (
//             rect.top >= 0 &&
//             rect.left >= 0 &&
//             rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//             rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//         );
//     }

//     // Add a scroll event listener
//     window.addEventListener('scroll', function () {
//         if (isElementInViewport(homeSection)) {
//             // If the home section is in the viewport, animate the image
//             console.log('Home section is in viewport');
//             floatingImage.style.opacity = '1';
//             floatingImage.style.transform = 'translateX(0)';
//         }
//     });
// }

// // Get references to the audio element and the image
// const audio = document.getElementById("audio");
// const image = document.getElementById("floating-image");
// console.log("audio");
// // Add a mouseover event listener to the image
// image.addEventListener('mouseover', () => {
//     // Play the audio
//     audio.play();
// });

// // Add a mouseout event listener to stop the audio when the mouse leaves the image
// image.addEventListener('mouseout', () => {
//     // Pause the audio
//     audio.pause();
// });

// // Function to animate text letter by letter
// function animateText() {
//     const textElement = document.getElementById('welcome-text');
//     const text = textElement.innerText;
//     textElement.innerHTML = ''; // Clear the text

//     // Loop through each letter and create a span element for it
//     for (let i = 0; i < text.length; i++) {
//         const letterSpan = document.createElement('span');
//         letterSpan.innerText = text[i];
//         letterSpan.style.animation = `fadeInLetter 1s ease ${i * 0.1}s forwards`;
//         textElement.appendChild(letterSpan);
//     }
// }

// // Call the animateText function when the page loads
// window.addEventListener('load', animateText);


// var indexOfSlide = 0;
// showTheSlides();

// function showTheSlides() {
//     var i;
//     var slides = document.getElementsByClassName("slides");
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     indexOfSlide++;
//     if (indexOfSlide > slides.length) { indexOfSlide = 1; }
//     slides[indexOfSlide - 1].style.display = "block";
//     setTimeout(showTheSlides, 2000); // Change image every 2 seconds
// }
