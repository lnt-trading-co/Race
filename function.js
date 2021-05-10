canvas = document.getElementById("can2");
ctx = canvas.getContext("2d");

bg_img = "bg101.jpg";
car_img = "car.jpg";


car_x = 10;
car_y = 10;
car_w = 120;
car_h = 90;

function add() {
    bg_tag = new Image();
    bg_tag.onload = uploadBG;
    bg_tag.src = bg_img;

    c_tag = new Image();
    c_tag.onload = uploadcar;
    c_tag.src = car_img;
}

function uploadBG() {
    ctx.drawImage(bg_tag, 0, 0, canvas.width, canvas.height);
    console.log("load the background");

}

function uploadcar() {
    ctx.drawImage(c_tag, car_x, car_y, car_w, car_h);

}
window.addEventListener("keydown", my_keydown)

function my_keydown(e) {
    keypressed = e.keyCode;
    if (keypressed == "37") {
        left()
    }
    if (keypressed == "38") {
        up()
    }
    if (keypressed == "39") {
        right()
    }
    if (keypressed == "40") {
        down()
    }
}
function left() {
    if(car_x>0) {
      car_x= car_x-10;
      uploadBG();
      uploadcar();  
    }
}
function right() {
    if(car_x<700) {
      car_x= car_x+10;
      uploadBG();
      uploadcar();  
    }
}
function up() {
    if(car_y>0) {
      car_y= car_y-10;
      uploadBG();
      uploadcar();  
    }
}
function down() {
    if(car_y<500) {
      car_y= car_y+10;
      uploadBG();
      uploadcar();  
    }
}