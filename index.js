var canvas = document.getElementById(`canvas`)
var ctx = canvas.getContext(`2d`);
var input = document.getElementById(`input`)
var submit = document.getElementById(`enter`)
var bg = document.getElementById(`bg`)
var butt = document.getElementById(`butt`)
var menu = document.getElementById(`menu`)
var misery = document.getElementById(`misery`)
var timeimeimeimeiemeimiemiemiemikemekemieike = 0;
var current_city = 'Void'
var oneclicked = false;
var twoclicked = false;
var threeclicked = false;
var fourclicked = false;
var enterclicked = false;
var display = true;
var toime = 0;
var voidRan = 0;
var veniceRan = 0;
var othRan = 0;
var continu = true;
ctx.font = '20px Arial';
function AABB(x1, y1, w1, h1, x2, y2, w2, h2) {
    if ((x1 >= x2 && x1 <= x2 + w2 && y1 >= y2 && y1 <= y2 + h2) ||
        (x1 + w1 >= x2 && x1 + w1 <= x2 + w2 && y1 >= y2 && y1 <= y2 + h2) ||
        (x1 >= x2 && x1 <= x2 + w2 && y1 + h1 >= y2 && y1 + h1 <= y2 + h2) ||
        (x1 + w1 >= x2 && x1 + w1 <= x2 + w2 && y1 + h1 >= y2 && y1 + h1 <= y2 + h2)) {
        return true;
    } else {
        return false;
    }
}
var mouseX, mouseY;


window.addEventListener("mousemove", function(event) {
    mouseX = event.clientX - canvas.getBoundingClientRect().left;
    mouseY = event.clientY - canvas.getBoundingClientRect().top;
});
var mouseDown;

window.addEventListener("mousedown", function(event) {
    mouseDown = true;
});

window.addEventListener("mouseup", function(event) {
    mouseDown = false;
});
function ranDraw() {
    voidRan = Math.floor(Math.random() * (3 - 1) + 1);
    veniceRan = Math.floor(Math.random() * (5 - 1) + 1);
    othRan = Math.floor(Math.random() * (4 - 1) + 1);
}
function draw() {
        timeimeimeimeiemeimiemiemiemikemekemieike ++;
        toime ++;
        if (oneclicked == true && continu == true|| twoclicked == true && continu == true|| threeclicked == true && continu == true|| fourclicked == true && continu == true|| enterclicked == true && continu == true) {
            var randy = Math.floor(Math.random() * (12 - 1) + 1);
            if (randy == 1 && toime >= 40) {
                current_city = `start`;
                toime = 0;
                continu = false;
            } else if (randy == 2 && toime >= 40) {
                current_city = `Florence`;
                toime = 0;
                continu = false;
            } else if (randy == 3 && toime >= 40) {
                current_city = `Void`;
                toime = 0;
                continu = false;
            } else if (randy == 4 && toime >= 40) {
                current_city = `Rome`;
                toime = 0;
                continu = false;
            } else if (randy == 5 && toime >= 40) {
                current_city = `Venice`;
                toime = 0;
                continu = false;
            } else if (randy == 6 && toime >= 40) {
                current_city = `Brescia`;
                toime = 0;
                continu = false;
            } else if (randy == 7 && toime >= 40) {
                current_city = `Modica`;
                toime = 0;
                continu = false;
            } else if (randy == 8 && toime >= 40) {
                current_city = `Milan`;
                toime = 0;
                continu = false;
            }else if (randy == 9 && toime >= 40) {
                current_city = `Naples`;
                toime = 0;
                continu = false;
            }else if (randy == 10 && toime >= 40) {
                current_city = `Turin`;
                toime = 0;
                continu = false;
            }else if (randy == 11 && toime >= 40) {
                current_city = `Palermo`;
                toime = 0;
                continu = false;
            }
        } else if (timeimeimeimeiemeimiemiemiemikemekemieike >= 500) {
            if (timeimeimeimeiemeimiemiemiemikemekemieike < 600 && timeimeimeimeiemeimiemiemiemikemekemieike > 500) {
                current_city = `start`;
            } else if (timeimeimeimeiemeimiemiemiemikemekemieike < 700 && timeimeimeimeiemeimiemiemiemikemekemieike > 600) {
                current_city = `Florence`;
            } else if (timeimeimeimeiemeimiemiemiemikemekemieike < 800 && timeimeimeimeiemeimiemiemiemikemekemieike > 700) {
                current_city = `Void`;
            } else if (timeimeimeimeiemeimiemiemiemikemekemieike < 900 && timeimeimeimeiemeimiemiemiemikemekemieike > 800) {
                current_city = `Rome`;
            } else if (timeimeimeimeiemeimiemiemiemikemekemieike < 1000 && timeimeimeimeiemeimiemiemiemikemekemieike > 900) {
                current_city = `Venice`;
            } else if (timeimeimeimeiemeimiemiemiemikemekemieike < 1100 && timeimeimeimeiemeimiemiemiemikemekemieike > 1000) {
                current_city = `Brescia`;
            } else if (timeimeimeimeiemeimiemiemiemikemekemieike < 1200 && timeimeimeimeiemeimiemiemiemikemekemieike > 1100) {
                current_city = `Modica`;
            } else if (timeimeimeimeiemeimiemiemiemikemekemieike < 1300 && timeimeimeimeiemeimiemiemiemikemekemieike > 1200) {
                current_city = `Milan`;
            }else if (timeimeimeimeiemeimiemiemiemikemekemieike < 1400 && timeimeimeimeiemeimiemiemiemikemekemieike > 1300) {
                current_city = `Naples`;
            }else if (timeimeimeimeiemeimiemiemiemikemekemieike < 1500 && timeimeimeimeiemeimiemiemiemikemekemieike > 1400) {
                current_city = `Turin`;
            }else if (timeimeimeimeiemeimiemiemiemikemekemieike < 1600 && timeimeimeimeiemeimiemiemiemikemekemieike > 1500) {
                current_city = `Palermo`;
            }else if (timeimeimeimeiemeimiemiemiemikemekemieike > 1600) {
                timeimeimeimeiemeimiemiemiemikemekemieike = 500;
            }
        }
        if (timeimeimeimeiemeimiemiemiemikemekemieike % 100 == 0 && timeimeimeimeiemeimiemiemiemikemekemieike > 500) {
            ranDraw();
        }
        ctx.drawImage(menu, 0, 0, 740, 480, 0, 190, 512, 322)
        if (current_city == `start`) {
            ctx.drawImage(bg, 0, 0, 740, 260, 0, 0, 512, 190)
            if (voidRan == 1){
                ctx.drawImage(misery, 0, 2700, 150, 260, 207, 0, 104, 190)
                ctx.fillText("Mob Boss", 20, 240)}
            else if (voidRan == 2){
                ctx.drawImage(misery, 160, 2700, 150, 260, 207, 0, 104, 190)
                ctx.fillText("Bread Salesman", 20, 240)}
        } else if (current_city == `Florence`) {
            ctx.drawImage(bg, 0, 270, 740, 260, 0, 0, 512, 190)
            if (othRan == 1){
                ctx.drawImage(misery, 160, 0, 150, 260, 207, 0, 104, 190)
                ctx.fillText("Cheese Maker", 20, 240)}
            else if (othRan == 2){
                ctx.drawImage(misery, 0, 0, 150, 260, 207, 0, 104, 190)
                ctx.fillText("Artisian", 20, 240)}
            else if (othRan == 3){
                ctx.drawImage(misery, 320, 0, 150, 260, 207, 0, 104, 190)
                ctx.fillText("Pizzaiolo", 20, 240)}
        } else if (current_city == `Void`) {
            ctx.drawImage(bg, 0, 540, 740, 260, 0, 0, 512, 190)
            if (voidRan == 1){
                ctx.drawImage(misery, 0, 270, 150, 260, 207, 0, 104, 190)
                ctx.fillText("{void.name}", 20, 240)}
            else if (voidRan == 2){
                ctx.drawImage(misery, 160, 270, 150, 260, 207, 0, 104, 190)
                ctx.fillText("VOIDOLOTL", 20, 240)}
            
        } else if (current_city == `Rome`) {
            ctx.drawImage(bg, 0, 810, 740, 260, 0, 0, 512, 190)
            if (othRan == 1){
                ctx.drawImage(misery, 160, 540, 150, 260, 207, 0, 104, 190)
                ctx.fillText("Child", 20, 240)}
            else if (othRan == 2){
                ctx.drawImage(misery, 0, 540, 150, 260, 207, 0, 104, 190)
                ctx.fillText("Gladiator", 20, 240)}
            else if (othRan == 3){
                ctx.drawImage(misery, 320, 540, 150, 260, 207, 0, 104, 190)
                ctx.fillText("Gelato Vendor (Pistacchio)", 20, 240)}
        } else if (current_city == `Venice`) {
            ctx.drawImage(bg, 0, 1080, 740, 260, 0, 0, 512, 190)
            if (veniceRan == 1){
                ctx.drawImage(misery, 0, 810, 150, 260, 207, 0, 104, 190)
                ctx.fillText("Gondolier", 20, 240)}
            else if (veniceRan == 2){
                ctx.drawImage(misery, 160, 810, 150, 260, 207, 0, 104, 190)
                ctx.fillText("Gondola Thief", 20, 240)}
            else if (veniceRan == 3){
                ctx.drawImage(misery, 320, 810, 150, 260, 207, 0, 104, 190)
                ctx.fillText("Mask Maker", 20, 240)}
            else if (veniceRan == 4){
                ctx.drawImage(misery, 480, 810, 150, 260, 207, 0, 104, 190)
                ctx.fillText("Glass Blower", 20, 240)}
        } else if (current_city == `Brescia`) {
            ctx.drawImage(bg, 0, 1350, 740, 260, 0, 0, 512, 190)
            if (othRan == 1){
                ctx.drawImage(misery, 0, 1080, 150, 260, 207, 0, 104, 190)
                ctx.fillText("Butcher", 20, 240)}
            else if (othRan == 2){
                ctx.drawImage(misery, 160, 1080, 150, 260, 207, 0, 104, 190)
                ctx.fillText("Baker", 20, 240)}
            else if (othRan == 3){
                ctx.drawImage(misery, 320, 1080, 150, 260, 207, 0, 104, 190)
                ctx.fillText("Wine Connoiseur", 20, 240)}
        } else if (current_city == `Modica`) {
            ctx.drawImage(bg, 0, 1620, 740, 260, 0, 0, 512, 190)
            if (othRan == 1){
                ctx.drawImage(misery, 0, 1350, 150, 260, 207, 0, 104, 190)
                ctx.fillText("Cannoli Master", 20, 240)}
            else if (othRan == 2){
                ctx.drawImage(misery, 160, 1350, 150, 260, 207, 0, 104, 190)
                ctx.fillText("Chocolate Thief", 20, 240)}
            else if (othRan == 3){
                ctx.drawImage(misery, 320, 1350, 150, 260, 207, 0, 104, 190)
                ctx.fillText("Arancini Chef", 20, 240)}
        } else if (current_city == `Milan`) {
            ctx.drawImage(bg, 0, 1890, 740, 260, 0, 0, 512, 190)
            if (othRan == 1){
                ctx.drawImage(misery, 0, 1620, 150, 260, 207, 0, 104, 190)
                ctx.fillText("Fashion Designer", 20, 240)}
            else if (othRan == 2){
                ctx.drawImage(misery, 160, 1620, 150, 260, 207, 0, 104, 190)
                ctx.fillText("Graffiti Artist", 20, 240)}
            else if (othRan == 3){
                ctx.drawImage(misery, 320, 1620, 150, 260, 207, 0, 104, 190)
                ctx.fillText("Pasta Chef", 20, 240)}
        } else if (current_city == `Naples`) {
            ctx.drawImage(bg, 0, 2160, 740, 260, 0, 0, 512, 190)
            if (othRan == 1){
                ctx.drawImage(misery, 0, 1890, 150, 260, 207, 0, 104, 190)
                ctx.fillText("Camorra Member", 20, 240)}
            else if (othRan == 2){
                ctx.drawImage(misery, 160, 1890, 150, 260, 207, 0, 104, 190)
                ctx.fillText("Pizza Chef", 20, 240)}
            else if (othRan == 3){
                ctx.drawImage(misery, 320, 1890, 150, 260, 207, 0, 104, 190)
                ctx.fillText("Gelato Vendor (Limone)", 20, 240)}
        } else if (current_city == `Turin`) {
            ctx.drawImage(bg, 0, 2430, 740, 260, 0, 0, 512, 190)
            if (othRan == 1){
                ctx.drawImage(misery, 0, 2160, 150, 260, 207, 0, 104, 190)
                ctx.fillText("Fiat Mechanic", 20, 240)}
            else if (othRan == 2){
                ctx.drawImage(misery, 160, 2160, 150, 260, 207, 0, 104, 190)
                ctx.fillText("Juventus Fan", 20, 240)}
            else if (othRan == 3){
                ctx.drawImage(misery, 320, 2160, 150, 260, 207, 0, 104, 190)
                ctx.fillText("Chocolate Maker", 20, 240)}
        } else if (current_city == `Palermo`) {
            ctx.drawImage(bg, 0, 2700, 740, 260, 0, 0, 512, 190)
            if (othRan == 1){
                ctx.drawImage(misery, 0, 2430, 150, 260, 207, 0, 104, 190)
                ctx.fillText("Fishmongerer", 20, 240)}
            else if (othRan == 2){
                ctx.drawImage(misery, 160, 2430, 150, 260, 207, 0, 104, 190)
                ctx.fillText("Arancini Vendor", 20, 240)}
            else if (othRan == 3){
                ctx.drawImage(misery, 320, 2430, 150, 260, 207, 0, 104, 190)
                ctx.fillText("Mafioso", 20, 240)}
        }
        
        if (AABB(mouseX, mouseY, 5, 5, 20, 342, 134, 60) && oneclicked == false ) {
            if (mouseDown && timeimeimeimeiemeimiemiemiemikemekemieike > 40) {
                timeimeimeimeiemeimiemiemiemikemekemieike = 0;
                ctx.drawImage(butt, 0, 0, 200, 100, 25, 342, 124, 60)
                continu = true;
                oneclicked = true;
                ranDraw();
            } else {
                ctx.drawImage(butt, 0, 0, 200, 100, 15, 342, 144, 60)
            }
        } else if (oneclicked == true){ 
            ctx.drawImage(butt, 200, 0, 200, 100, 20, 342, 134, 60)
        } else {

            ctx.drawImage(butt, 0, 0, 200, 100, 20, 342, 134, 60)
        }
        if (AABB(mouseX, mouseY, 5, 5, 20, 437, 134, 60) && threeclicked == false ) {
            if (mouseDown && timeimeimeimeiemeimiemiemiemikemekemieike > 40) {
                timeimeimeimeiemeimiemiemiemikemekemieike = 0;
                ctx.drawImage(butt, 0, 100, 200, 100, 25, 437, 124, 60)
                continu = true;
                threeclicked = true;
                ranDraw();
            } else {
                ctx.drawImage(butt, 0, 100, 200, 100, 15, 437, 144, 60)
            }
        } else if (threeclicked == true){ 
            ctx.drawImage(butt, 200, 100, 200, 100, 20, 437, 134, 60)
        } else {

            ctx.drawImage(butt, 0, 100, 200, 100, 20, 437, 134, 60)
        }
        if (AABB(mouseX, mouseY, 5, 5, 187, 342, 134, 60) && twoclicked == false ) {
            if (mouseDown && timeimeimeimeiemeimiemiemiemikemekemieike > 40) {
                timeimeimeimeiemeimiemiemiemikemekemieike = 0;
                ctx.drawImage(butt, 0, 200, 200, 100, 192, 342, 124, 60)
                continu = true;
                twoclicked = true;
                ranDraw();
            } else {
                ctx.drawImage(butt, 0, 200, 200, 100, 182, 342, 144, 60)
            }
        } else if (twoclicked == true){ 
            ctx.drawImage(butt, 200, 200, 200, 100, 187, 342, 134, 60)
        } else {

            ctx.drawImage(butt, 0, 200, 200, 100, 187, 342, 134, 60)
        }
        if (AABB(mouseX, mouseY, 5, 5, 187, 437, 134, 60)&& fourclicked == false) {
            if (mouseDown && timeimeimeimeiemeimiemiemiemikemekemieike > 40) {
                timeimeimeimeiemeimiemiemiemikemekemieike = 0;
                ctx.drawImage(butt, 0, 300, 200, 100, 192, 437, 124, 60)
                continu = true;
                fourclicked = true;
                ranDraw();
            } else {
                ctx.drawImage(butt, 0, 300, 200, 100, 182, 437, 144, 60)
            }
        } else if (fourclicked == true){ 
            ctx.drawImage(butt, 200, 300, 200, 100, 187, 437, 134, 60)
        } else {

            ctx.drawImage(butt, 0, 300, 200, 100, 187, 437, 134, 60)
        }
        if (AABB(mouseX, mouseY, 5, 5, 355, 386, 134, 60) && enterclicked == false ) {
            if (mouseDown && timeimeimeimeiemeimiemiemiemikemekemieike > 40) {
                timeimeimeimeiemeimiemiemiemikemekemieike = 0;
                ctx.drawImage(butt, 0, 400, 200, 100, 360, 386, 124, 60)
                continu = true;
                enterclicked = true;
                ranDraw();
            } else {
                ctx.drawImage(butt, 0, 400, 200, 100, 350, 386, 144, 60)
            }
        } else if (enterclicked == true){ 
            ctx.drawImage(butt, 200, 400, 200, 100, 355, 386, 134, 60)
        } else {

            ctx.drawImage(butt, 0, 400, 200, 100, 355, 386, 134, 60)
        }

        if (oneclicked == true && timeimeimeimeiemeimiemiemiemikemekemieike >= 169) {
            oneclicked = false;
            continu = true;
        }
        if (twoclicked == true && timeimeimeimeiemeimiemiemiemikemekemieike >= 169) {
            twoclicked = false;
            continu = true;
        }
        if (threeclicked == true && timeimeimeimeiemeimiemiemiemikemekemieike >= 169) {
            threeclicked = false;
            continu = true;
        }
        if (fourclicked == true && timeimeimeimeiemeimiemiemiemikemekemieike >= 169) {
            fourclicked = false;
            continu = true;
        }
        if (enterclicked == true && timeimeimeimeiemeimiemiemiemikemekemieike >= 169) {
            enterclicked = false;
            continu = true;
        }
        ctx.fillText(current_city, 20, 210)
        window.requestAnimationFrame(draw);
}
ranDraw();
window.requestAnimationFrame(draw);
