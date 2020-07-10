jQuery(document).ready(function(){
    /* $("div.designer").randomise("div.shuffle");
    $("main.random").randomise("div.box"); */
});


/* Randomise function adapted from here: https://stackoverflow.com/questions/18256139/random-li-list-with-jquery-before-page-get-loaded */
(function($) {
    $.fn.randomise = function(childElem) {
        return this.each(function() {
            var $this = $(this);
            var elems = $this.children(childElem);
            elems.sort(function() { return (Math.round(Math.random())-0.5); });  
            $this.detach(childElem);  
            for(var i=0; i < elems.length; i++)
                $this.append(elems[i]);      
        });    
    }
})(jQuery);


/* Preliminary JS for variable font slider */

document.getElementById("slider-wght").addEventListener("input", function () {
    let axisValue = document.getElementById("slider-wght").value;

    document.getElementById("testarea").style.fontWeight = axisValue;

    document.getElementById("value-wght").innerText = axisValue;
});


/* Adapted solution from w3schools: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_js_dropdown */
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function menu() {
    document.getElementById("menuOverlay").classList.toggle("showMenu");
    if (document.getElementById("menuText").innerHTML=="Menu"){
        document.getElementById("menuText").innerHTML="&uarr;";
    }
    else {
        document.getElementById("menuText").innerHTML="Menu";
    }
}

// Close the dropdown if the user clicks outside of it
function closeMenu() {
    if (!event.target.matches('.menuBtn') && !event.target.matches('.menuContent')) {
        var dropdowns = document.getElementsByClassName("menuContent");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('showMenu')) {
                openDropdown.classList.remove('showMenu');
            }
        }
        document.getElementById("menuText").innerHTML="Menu";
    }
}