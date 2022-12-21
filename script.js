
//    galeri için active hover scripti starts here
$(document).ready(function() {
  var selectedItem = null;

  $(".list-item").click(function() {
    if (selectedItem != null) {
      $(selectedItem).css({
        "background-color": "rgb(245, 245, 245)",
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
        "background-color": "rgb(245, 245, 245)",
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

// logo slide script starts here

let called = false
document.addEventListener('scroll', e => {
  if (document.documentElement.scrollTop >= 700) {
    if (called) return
    called = true
    calledEvent()
  }
})
function calledEvent(){       
  window.addEventListener('scroll', function() {
    var fixedImage = document.querySelector('.fixed-image');
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    fixedImage.style.top = 700 -scrollTop + 'px';
  });
}              

// logo slide script ends here

//  svg code
//  let path = document.querySelector('path')
//         let pathLength = path.getTotalLength()

//         path.style.strokeDasharray = pathLength + ' ' + pathLength;
        
//          path.style.strokeDashoffset = pathLength;

//         window.addEventListener('scroll', () => {
//             var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

//             var drawLength = pathLength * 3 * scrollPercentage;
            
//              path.style.strokeDashoffset = pathLength - drawLength;
//       })
//         // svg code ends


// carousel js starts here

$(document).ready(function() {
  $('#carouselExampleFade').carousel({
    interval: 2000
  });
});

// carousel js ends here

