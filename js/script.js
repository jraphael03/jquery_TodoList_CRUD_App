// Check to see if it is connected alert("Connected")

// Difference between click an on function
// Click works on the elements that were already on the page when it was loaded (anything static)
// On function works with dynamic elements

// Strike through functionality
$("ul").on("click","li",function(){         // Look for clicks on the ul, looking for a click event on the li 
    $(this).toggleClass("done")     // this targets the selected item/s.  toggling the css class
})

// Delete
$("ul").on("click","span",function(event){      // Listening for a click, specify the element you want to put the functionality on
    $(this).parent().fadeOut(200, function(){      // this = span, parent of the span is the li in the html, fade 200ms, remove
      $(this).remove();                 // This refers to the li because we called it above by using parent
    })      
    event.stopPropagation()             // event.stopPropagation() stops every other function from running
})

// Add

$("input").keypress(function(event){
    //console.log("You are typing")  // Message will show in console everytime a key is pressed
    if(event.which === 13){     // 13 is the code for enter
        var task = $("input").val()     // input val will be stored in task
        $("ul").append(
          '<li><span class="delete" > <i class="fa fa-trash" ></i> </span>' +
            task +
            "</li>"
        );            // Append the input into the ul list
          $("input").val('');       // Empties input after adding an item
    }
})

// Toggling the input form
$("#plus").click(function(){        // Grabbing the id #plus in the index.html

    $("input").fadeToggle();        // Fades the input button when #plus is clicked
})
