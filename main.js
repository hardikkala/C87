var Canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

block_image_width = 50;
block_image_height = 50;

var player_object="";
var block_image_object="";

function player_update()
{
    fabric.Image.fromURL("player.png",function(Img) {
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        Canvas.add(player_object);
    });
}

function new_image(get_image)
{
    fabric.Image.fromURL(get_image,function(Img) {
        block_image_object = Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        Canvas.add(block_image_object);
    });
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed =='80')
    {
        console.log("p and shift is pressed together");
        block_image_width = block_image_width+10;
        block_image_height = block_image_height+10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if(e.shiftKey && keyPressed =='77')
    {
        console.log("m and shifrt is pressed together");
        block_image_width = block_image_width-10;
        block_image_height = block_image_height-10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }

    if(keyPressed =='38')
    {
        up();
        console.log("up"); 
    }
    if(keyPressed =='40')
    {
        down();
        console.log("down"); 
    }
    if(keyPressed =='39')
    {
        right();
        console.log("right"); 
    }
    if(keyPressed =='37')
    {
        left();
        console.log("left"); 
    }
    if(keyPressed =='38')
    {
        up();
        console.log("up"); 
    }
    if(keyPressed =='66')
    {
        new_image('bricksblock.jpg');
        console.log("b"); 
    }
    if(keyPressed =='71')
    {
        new_image('ground.png');
        console.log("g"); 
    }
    if(keyPressed =='80')
    {
        new_image('plank.jpg');
        console.log("p"); 
    }
    if(keyPressed =='76')
    {
        new_image('log.jpg');
        console.log("l"); 
    }
    if(keyPressed =='89')
    {
        new_image('yellow_wall.png');
        console.log("y"); 
    }
    if(keyPressed =='79')
    {
        new_image('glowstone.png');
        console.log("o"); 
    }
    if(keyPressed =='68')
    {
        new_image('desertlog.jpg');
        console.log("d"); 
    }
    if(keyPressed =='69')
    {
        new_image('leaf.png');
        console.log("e"); 
    }
    if(keyPressed =='67')
    {
        new_image('cloud.png');
        console.log("c"); 
    }
}