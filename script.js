var fullpage_api = new fullpage('#fullpage', {
    //options here
    
    autoScrolling:true,
    scrollHorizontally: true,
    sectionsColor : ['#141416', '#141416', '#141416', '#141416','#141416'],
    navigation: true,
    slidesNavigation:true,
    ccs3: true,
    anchors: ['firstPage','secondPage','thirdPage','fourthPage','finalPage'],
    continuousHorizontal:true,
    easing: 'easeInOutCubic',
    normalScrollElements: '#slide-button',
    
    // afterLoad: function(origin, destination, direction) {
    //     if (direction === 'down') {
    //       // Animate the text on the current section
    //       TweenMax.fromTo(destination.item, 0.5, {y: '0'}, {y: '-10%', ease: Power2.easeOut, onComplete: function() {
    //         TweenMax.to(destination.item, 0.5, {y: '0', ease: Power2.easeOut});
    //       }});
    //     }
    //     else if (direction === 'up') {
    //           // Animate the text on the current section
    //       TweenMax.fromTo(destination.item, 0.5, {y: '0'}, {y: '+10%', ease: Power2.easeOut, onComplete: function() {
    //         TweenMax.to(destination.item, 0.5, {y: '0', ease: Power2.easeOut});
    //       }});
    //     }
    //   }
});
// gsap.registerPlugin(ScrollTrigger);
// gsap.to(".section2-text",{
//     y:-80,
//     duration:3,
//     ScrollTrigger:{
//         trigger:".section2-text",
//        Start:400 
//     },
//     ease: Power0.easeOut
// }

// )
// $(document).ready(function() {
//     $('#fullpage').fullpage({
//       afterLoad: function(anchorLink, index) {
//         if (index === 2) {
//           $('.hero a svg ').css('top', '0');
//         } else {
//           $('.hero a svg ').css('top', '50%');
//         }
//       }
//     });
//   });

//   document.querySelector('.about-me').addEventListener('click', function() {
//     fullpage_api.moveSlideDown();
//     document.querySelector("#root > div > div.overlay_sides.overlay_sides_right > nav")
 
//     var el = document.querySelector('.btn_down');
//     el.addEventListener('click', function() {
// el.textContent= 'Back to top'    });
//   });

//   var button = document.querySelector('.btn_down');
// button.addEventListener('click', function() {
//   if (button.classList.contains('active')) {
//     button.classList.remove('active');
//     button.innerHTML = 'Scroll Down';
//   } else {
//     button.classList.add('active');
//     button.innerHTML = 'Back to top';
//   }
// });
// new fullpage('#fullpage', {
//     anchors: ['section1', 'section2', 'section3'],
//     navigation: true,
//     afterLoad: function(anchorLink, index) {
//       if (index === 2) {
//         // Add class to fix the navigation bar when the second section is loaded
//         $('#navbar').addClass('fixed');
//       } else {
//         // Remove class to unfix the navigation bar when any other section is loaded
//         $('#navbar').removeClass('fixed');
//       }
  
//       if (index === 2) {
//         // Change the scroll down button to a back to top button
//         var btnDown = document.querySelector('.btn_down');
//         btnDown.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" fill="aliceblue"></path></svg><span>Back To Top</span>';
//         btnDown.classList.add('btn_up');
//         btnDown.classList.remove('btn_down');
//       } else {
//         // Change the back to top button to a scroll down button
//         var btnUp = document.querySelector('.btn_up');
//         btnUp.innerHTML = '<span>Scroll Down</span><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" fill="aliceblue"></path></svg>';
//         btnUp.classList.add('btn_down');
//         btnUp.classList.remove('btn_up');
//       }
//     }
//   });
  
scrollDownButton.addEventListener('click', function() {
  window.scrollBy({
    top: 500, // scroll down by 500px
    behavior: 'smooth' // smooth scrolling
  });
});
