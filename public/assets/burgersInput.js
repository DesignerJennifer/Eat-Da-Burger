$(function () {
    $(".devourBtn").on("click", function (event) {
        var id = $(this).data("burgerid");
        var newDevour = $(this).attr("data-newDevour");

        var newDevourState = {
            devoured: newDevour
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function () {
                console.log("changed to devoured", newDevourState);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        var newBurger = {
            burger_name: $("#burgerList").val().trim(),
            devoured: false
        };
console.log(newBurger)
        // Send the POST request.
        $.ajax("api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});
