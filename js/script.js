    $(document).ready(function () {   
    /* For the sticky navigation */
    $('.services').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        }
        else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '150px;'
    });
    
    $("#cage").waypoint(function (direction) {
        $("#cage").addClass('animated bounceIn');
    }, {
        offset: '70%'
    });
  });

function formValidation() {
    var name = document.myForm.name1.value;
    var email = document.myForm.email.value;
    var message = document.myForm.message.value;
    if (name == null || name == "") {
        
        alert("Name cannot be blank");
        return false;
    }
    else if (!/^[a-zA-Z]{3,20}$/.test(name)) {
        alert("Dear Parrot Lover: name must contain alphabetical caracters and be between 2 and 12");
        document.myForm.name1.style.border="2px solid red";
        return false;
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        alert("Dear Parrot Lover: You have entered an invalid email address!")
        return false;
    }
    if (message.length < 3) {
        alert("Your message must contain at least 3 characters");
        return false;
    }
    return true;
} 

    
    

    
    

   
        















