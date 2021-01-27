$(()=>{
     $(".create-form").on("submit", event => {
        event.preventDefault();
        var newBurger = {
            name: $("#burg").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
          };
          $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
          }).then(
            function() {
              console.log("created a new burger");
              location.reload();
            }
          );
    });
    $(".delete-burger").on("click", function(event) {
        var id = $(this).data("id");
    
        //DELETE request
        $.ajax("/api/burgers/" + id, {
          type: "DELETE"
        }).then(
          function() {
            console.log("deleted burger", id);
            
            location.reload();
          }
        );
    });
});