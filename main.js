canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

car_width=100;
car_height=90;

backround_image="racing.jpg";
rover_image="car1.png";

car_x=10;
car_y=10;

function add(){
    backround_Img=new Image();
    backround_Img.onload=uploadbackround;
    backround_Img.src=backround_image;

    rover_Img=new Image();
    rover_Img.onload=uploadrover;
    rover_Img.src=rover_image;


}
function uploadbackround(){
    ctx.drawImage(backround_Img,0,0,canvas.width,canvas.height);

}
function uploadrover(){
    ctx.drawImage(rover_Img,car_x,car_y,car_width,car_height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e) { keyPressed = e.keyCode;
 console.log(keyPressed);

 if(keyPressed == '38') { up();
     console.log("up");
     } if(keyPressed == '40') { down();
         console.log("down");
         } if(keyPressed == '37') { left();
             console.log("left");
             } if(keyPressed == '39') { right();
                 console.log("right");
                 } }

                 function up(){

                    if(car_2>=0)
                    {

                        car_y=car_y-10;
                        console.log("When up arrow is pressed, x = " + car_x + " | y = " +car_y);
                        uploadbackround();
                        uploadrover();
                    }
                 }

                 function down(){

                    if(car_y<=500)
                    {

                       car_y=car_y+10;
                        console.log("When down arrow is pressed, x = " + car_x + " | y = " +car_y);
                        uploadbackround();
                        uploadrover();
                    }
                 }

                 function left(){

                    if(car_x>=0)
                    {

                        car_x=car_x-10;
                        console.log("When left arrow is pressed, x = " + car_x + " | y = " +car_y);
                        uploadbackround();
                        uploadrover();
                    }
                 }

                 function right(){

                    if(car_x<=700)
                    {

                        car_x=car_x+10;
                        console.log("When right arrow is pressed, x = " +car_x + " | y = " +car_y);
                        uploadbackround();
                        uploadrover();
                    }
                 }
