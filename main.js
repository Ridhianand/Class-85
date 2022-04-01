canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
rover_width=100;
IMG_Array=["NASA img1.jpg","NASA img2.jpg","NASA img3.jpg","NASA img4.jpg"];
random_number=Math.floor(Math.random()*4)
rover_heigth=100;
rover_x=10;
rover_y=10;
background_img=IMG_Array[random_number];
console.log("background_img= "+background_img);
rover_img="rover.png";
function add()
{
    background_imgtag=new Image();
    background_imgtag.onload=uploadbackground;
    background_imgtag.src=background_img;
    rover_imgtag=new Image();
    rover_imgtag.onload=uploadrover;
    rover_imgtag.src=rover_img;
}
function uploadbackground()
{
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
}
function uploadrover()
{
    ctx.drawImage(rover_imgtag,rover_x,rover_y,rover_width,rover_heigth);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
    key_press=e.keyCode;
    console.log(key_press);
    if(key_press=="38")
    {
        up();
        console.log("up")
            }
    if(key_press=="40")
    {
        down();
        console.log("down");
    }
    if(key_press=="37")
    {
        left();
        console.log("left");
    }
    if(key_press=="39")
    {
        right();
        console.log("right");
    }
}
function up()
{
    if (rover_y>= 0 )
    {
      rover_y=rover_y-10;
      console.log("when up arrow is pressed, x= "+rover_x+" ,y=  "+rover_y);
     uploadbackground();
     uploadrover();
    }
}
function down()
{
    if (rover_y<= 500)
    {
        rover_y=rover_y+10;
        console.log("when down arrow is pressed, x= "+rover_x+" ,y= "+rover_y);
        uploadbackground();
        uploadrover();
    }
}
function left()
{
    if (rover_x>= 0)
{
    rover_x=rover_x-10;
    console.log("when left arrow is pressed, x= "+rover_x+" ,y= "+rover_y);
    uploadbackground();
    uploadrover();
}
}
function right()
{
    if (rover_x<= 600)
    {
        rover_x=rover_x+10;
        console.log("when right arrow is pressed, x= "+rover_x+" ,y= "+rover_y);
        uploadbackground();
        uploadrover();
    }
}