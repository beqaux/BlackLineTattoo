//    galeri için active hover scripti starts here
$(document).ready(function() {
  var selectedItem = null;
  $(".list-item").hover(function() {
    $(this).css({
      "background-color": "rgb(32, 32, 32)",
      "color": "white"
    });
  }, function() {
    if (this != selectedItem) {
      $(this).css({
        "background-color": "black",
        "color": "white"
      });
    }
  });
  $(".list-item").click(function() {
    if (selectedItem != null) {
      $(selectedItem).css({
        "background-color": "black",
        "color": "white"
      });
    }
    selectedItem = this;
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