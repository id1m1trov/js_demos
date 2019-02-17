

$(document).ready(function(){
    'use strict';

    paper.install(window); 
    paper.setup(document.getElementById('mainCanvas'));


    var c ; 
    

    // for(var x=25; x < 400; x+=50){
    //     for(var y = 25; y < 400; y+=50){
    //     var c = Shape.Circle(x, y, 30x); 
    //     c.fillColor = 'green';
    //     }
    // }


    var tool = new Tool();
    

    tool.onMouseMove = function(event){
        var c = Shape.Circle(event.point.x, event.point.y, 20);
        var r = Math.floor(Math.random() * 255); 
        var g = Math.floor(Math.random() * 255); 
        var b = Math.floor(Math.random() * 255); 
        var a = Math.random();
        c.fillColor = "rgb("+ r  +", "+ g +", "+ b + ", " + a + ")";
    };

    tool.onMouseDrag = function(event){
        var rub = Shape.Circle(event.point, 40);
        rub.fillColor = "white";
    }


    paper.view.draw(); 

    console.log('main.js is total ready for use');
});