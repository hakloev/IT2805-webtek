var Forms = (function() {
    
    var validateTickets = function() {
        errors = [];
        var name = document.forms['ticketForm']['name'].value;
        var email = document.forms['ticketForm']['email'].value;
        if (name == null || name == "") { errors.push("navn"); }
        if (email == null || email == "") { errors.push("epost"); }
        return checkErrors(errors);
    }

    var validateComment = function() {
        errors = [];
        var name = document.forms['commentForm']['name'].value;
        var surname = document.forms['commentForm']['surname'].value;
        var email = document.forms['commentForm']['email'].value;
        var comment = document.forms['commentForm']['comment'].value;
        if (name == null || name == "") { errors.push('navn'); }
        if (surname == null || surname == "") { errors.push('etternavn'); }
        if (email == null || email == "") { errors.push('epost'); }
        if (comment == null || comment == "") { errors.push('kommentar'); }
        return checkErrors(errors);
    }

    var checkErrors = function(errors) {
         if (errors.length > 0) {
            str = "Du må fylle ut: ";
            for (var i = 0; i < errors.length; i++) {
                str += errors[i] + " ";
            }
            alert(str);
            return false;
        }
        return true;
    }

    return {
        validateTickets:validateTickets,
        validateComment:validateComment
    }

})();
