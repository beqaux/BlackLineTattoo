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
          });

        //   galeri için kategori scripti ends here