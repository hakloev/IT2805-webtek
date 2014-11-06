var responsive = (function () {
    var mobile = document.createElement('div');
    mobile.className = 'nav-mobile';
    document.querySelector('.nav').appendChild(mobile);   

    var hasClass = function(element, className) {
        return new RegExp(' ' + className + ' ').test(' ' + element.className + ' ');
    }

    var toggleClass = function(element, className) {
        var newClass = ' ' + element.className.replace(/[\t\r\n]/g, '') + ' ';
        if (hasClass(element, className)) {
            while (newClass.indexOf(' ' + className + ' ') >= 0) {
                newClass = newClass.replace(' ' + className + ' ', ' ');
            }
            element.className = newClass.replace(/^\s+|\s+$/g, '');
        } else {
            element.className += ' ' + className;
        }
    }

    var mobileNav = document.querySelector('.nav-mobile');
    var toggle = document.querySelector('.nav-list');
    mobileNav.addEventListener('click', function() {
        toggleClass(this, 'nav-mobile-open');
        toggleClass(toggle, 'nav-active');
    });

})();
