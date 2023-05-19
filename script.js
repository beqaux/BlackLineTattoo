
//    galeri için active hover scripti starts here
$(document).ready(function() {
  var selectedItem = null;

  $(".list-item").click(function() {
    if (selectedItem != null) {
      $(selectedItem).css({
        "background-color": "rgba(36, 36, 28, 0.2)",
        "color": "rgb(36, 36, 28)",
        "top": "0px"
      });
    }
    selectedItem = this;
    $(this).css({
      "background-color": "rgb(36, 36, 28)",
      "color": "rgb(245,245,245)",
      "top": "-0.75rem"
    });
  });

  $(".list-item").hover(function() {
    $(this).css({
      "background-color": "rgba(36, 36, 28 , 0.5)",
      "color": "rgb(245, 245, 245)",
      "top": "-1rem"
    });
  }, function() {
    if (this != selectedItem) {
      $(this).css({
        "background-color": "rgba(36, 36, 28, 0.2)",
        "color": "rgb(36, 36, 28)",
        "top": "0px"
      });
    }
  });
});

    
    // galeri için active hover scripti ends here
    
    // galeri için kategori scripti starts here
    $(document).ready(function() {
        $("#categories li").click(function() {
          var category = $(this).data("category");
          $("#photos img").hide();
          $("#photos img[data-category-" + category + "='true']").show();
        });
      })
// galeri için kategori scripti ends here


// carousel js starts here

$(document).ready(function() {
  $('#carouselExampleFade').carousel({
    interval: 2000
  });
  

});

// carousel js ends here

// deletes black line
$(document).ready(function(){
  setTimeout(function() {
    $('#deleted').remove();
  }, 5500);
})

$(document).ready(function(){
    var navBar = document.getElementById("navBar");
    navBar.style.visibility = "hidden";
    setTimeout(function(){
        navBar.style.visibility = "visible";
    }, 5500);
  })


window.addEventListener('load', function() {
  // Disable scrolling
  window.scrollTo(0, 0);
  document.body.style.overflow = 'hidden';

  // Re-enable scrolling after 5 seconds
  setTimeout(function() {
    document.body.style.overflow = 'auto';
  }, 5500);
});