(function($) {
  "use strict"; // Start of use strict

  // Toggle the side navigation
  $("#sidebarToggle, #sidebarToggleTop").on('click', function(e) {
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
    if ($(".sidebar").hasClass("toggled")) {
      $('.sidebar .collapse').collapse('hide');
    };
  });

  // Close any open menu accordions when window is resized below 768px
  $(window).resize(function() {
    if ($(window).width() < 768) {
      $('.sidebar .collapse').collapse('hide');
    };
    
    // Toggle the side navigation when window is resized below 480px
    if ($(window).width() < 480 && !$(".sidebar").hasClass("toggled")) {
      $("body").addClass("sidebar-toggled");
      $(".sidebar").addClass("toggled");
      $('.sidebar .collapse').collapse('hide');
    };
  });

  // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
  $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function(e) {
    if ($(window).width() > 768) {
      var e0 = e.originalEvent,
        delta = e0.wheelDelta || -e0.detail;
      this.scrollTop += (delta < 0 ? 1 : -1) * 30;
      e.preventDefault();
    }
  });

  // Scroll to top button appear
  $(document).on('scroll', function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Smooth scrolling using jQuery easing
  $(document).on('click', 'a.scroll-to-top', function(e) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top)
    }, 1000, 'easeInOutExpo');
    e.preventDefault();
  });

})(jQuery); // End of use strict

function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByClassName("import");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = "/pages/" + getParameterByName('q');
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      fetch(file)
      .then(response => response.text())
      .then(data => elmnt.innerHTML = data);

      /* Exit the function: */
      return;
    }
  }
} 

// make a function that checks if the user is logged in
function checkLogin() {
  //check if parameter equals ?q=login.html
  if (getParameterByName('q') === "forgot-password.html" || getParameterByName('q') === "404.html" || getParameterByName('q') === "NotFound.html") return;
  if (getParameterByName('q') === "login.html" || getParameterByName('q') === "register.html") {
    if (document.cookie.startsWith('uid=')) {
      // if not, redirect to the login page
      window.location.href = "/index.html?q=dashboard.html";
    }
  } else {
    if (!document.cookie.startsWith('uid=')) {
      // if not, redirect to the login page
      window.location.href = "/index.html?q=login.html";
    }
  }
}
checkLogin();


// make a function that checks if https is used
function checkHttps() {
  if (window.location.protocol !== "http:") {
    window.location.href = "http:" + window.location.href.substring(window.location.protocol.length);
  }
}
checkHttps();