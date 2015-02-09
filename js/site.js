$(document).ready(function() {
    var count = 0; 
    var maxDelay = 1500;
    var minSpeed = 1500;
    var maxSpeed = 1000;
    var fadeTo = 1;
    
    $('div span').each(function(){
        var delay = Math.ceil(Math.random() * maxDelay);
        var speed = maxSpeed + Math.ceil(Math.random() * (minSpeed - maxSpeed));
        count++;
        $(this).delay(delay).fadeTo(speed, fadeTo, function(){
            count--;
            if (count == 0){
                onFinish();
            }
        });
    });
    
    function onFinish() {
       //alert('fin');
    }   
});
