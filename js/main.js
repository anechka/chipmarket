/**
 * Created by anna on 23.10.13.
 */



complitedLoad = function(){
    // Connect SuperFish plugin
    $('.sidebar ul.parent').superfish();

    if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i))) {
        $(".sidebar ul.parent").bind('click',function() {
            $('.sidebar ul.parent').hideSuperfishUl();
        });
    }
};



jQuery(complitedLoad());


// Connect Carousel plugin


//$('img[src$="iPad.png"]').hide();