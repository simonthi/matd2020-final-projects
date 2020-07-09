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