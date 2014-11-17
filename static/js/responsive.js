var responsive = (function () {
    
    var childClasses = function(element, className) {
        return new RegExp(' ' + className + ' ').test(' ' + element.className + ' ');
    }

    var setClass = function(element, className) {
        var newClass = ' ' + element.className.replace(/[\t\r\n]/g, '') + ' ';
        if (childClasses(element, className)) {
            while (newClass.indexOf(' ' + className + ' ') >= 0) {
                newClass = newClass.replace(' ' + className + ' ', ' ');
            }
            element.className = newClass.replace(/^\s+|\s+$/g, '');
        } else {
            element.className += ' ' + className;
        }
    }

   
    var init = function() { 
        var mobile = document.createElement('div');
        mobile.className = 'nav-mobile';
        document.querySelector('.nav').appendChild(mobile);   

        var mobileNav = document.querySelector('.nav-mobile');
        var toggle = document.querySelector('.nav-list');
        mobileNav.addEventListener('click', function() {
            setClass(this, 'nav-mobile-open');
            setClass(toggle, 'nav-active');
        });
    }

    return { 
        init:init
    }

})();

window.addEventListener('load', function() {
    responsive.init();
});
