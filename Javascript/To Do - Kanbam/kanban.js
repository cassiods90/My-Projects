// Start function to add the new post it
var countBack = 0;
var countBack2 = 0;
var countBack3 = 0;
var countBack4 = 0;
function newPostit() {
    if (countBack == 0) {
        document.getElementById("background-color").className = "postit";
        countBack++;
    } else if (countBack2 == 0) {
        document.getElementById("background-color2").className = "postit";
        countBack2++;
    } else if (countBack3 == 0) {
        document.getElementById("background-color3").className = "postit";
        countBack3++;
    } else if (countBack4 == 0) {
        document.getElementById("background-color4").className = "postit";
        countBack4++;
    } else {
        alert('This is a simple kanban example, you can only use 4 post it');
    }
}
// End function to add the new post it


// Start function to remove the div
function removeContent() {
    var node = document.getElementById("background-color");
        document.getElementById("collum-todo").appendChild(node);

    document.getElementById('background-color').style.background = "pink"
    document.getElementById('title-color').style.color = "black"
    document.getElementById('content-color').style.color = "black"
    document.getElementById("title-postit").innerHTML = "";
    document.getElementById("content-postit").innerHTML = "";
    
    document.getElementById("background-color").className = "hide";
    count--;
    countBack--;
}

function removeContent2() {
    var node = document.getElementById("background-color2");
        document.getElementById("collum-todo").appendChild(node);

    document.getElementById('background-color2').style.background = "pink"
    document.getElementById('title-color2').style.color = "black"
    document.getElementById('content-color2').style.color = "black"
    document.getElementById("title-postit2").innerHTML = "";
    document.getElementById("content-postit2").innerHTML = "";
    
    document.getElementById("background-color2").className = "hide";
    count2--;
    countBack2--;
}

function removeContent3() {
    var node = document.getElementById("background-color3");
        document.getElementById("collum-todo").appendChild(node);

    document.getElementById('background-color3').style.background = "pink"
    document.getElementById('title-color3').style.color = "black"
    document.getElementById('content-color3').style.color = "black"
    document.getElementById("title-postit3").innerHTML = "";
    document.getElementById("content-postit3").innerHTML = "";
    
    document.getElementById("background-color3").className = "hide";
    count3--;
    countBack3--;
}

function removeContent4() {
    var node = document.getElementById("background-color4");
        document.getElementById("collum-todo").appendChild(node);

    document.getElementById('background-color4').style.background = "pink"
    document.getElementById('title-color4').style.color = "black"
    document.getElementById('content-color4').style.color = "black"
    document.getElementById("title-postit4").innerHTML = "";
    document.getElementById("content-postit4").innerHTML = "";
    
    document.getElementById("background-color4").className = "hide";
    count4--;
    countBack4--;
}
// End function to remove the div


// Start Show hide each edit screen
var visibility = true;
function showHide() {
    if (visibility) {
        document.getElementById("show-hide").className = "postits-edit";
        visibility = false;

    } else {
        document.getElementById("show-hide").className = "hide";
        visibility = true;
    }
}

var visibility = true;
function showHide2() {
    if (visibility) {
        document.getElementById("show-hide2").className = "postits-edit";
        visibility = false;

    } else {
        document.getElementById("show-hide2").className = "hide";
        visibility = true;
    }
}

var visibility = true;
function showHide3() {
    if (visibility) {
        document.getElementById("show-hide3").className = "postits-edit";
        visibility = false;

    } else {
        document.getElementById("show-hide3").className = "hide";
        visibility = true;
    }
}

var visibility = true;
function showHide4() {
    if (visibility) {
        document.getElementById("show-hide4").className = "postits-edit";
        visibility = false;

    } else {
        document.getElementById("show-hide4").className = "hide";
        visibility = true;
    }
}
// End Show hide each edit screen


// Start change background color
function modifyBackground(backgroundColor){
    document.getElementById('background-color').style.background = backgroundColor
}

function modifyBackground2(backgroundColor2){
    document.getElementById('background-color2').style.background = backgroundColor2
}

function modifyBackground3(backgroundColor3){
    document.getElementById('background-color3').style.background = backgroundColor3
}

function modifyBackground4(backgroundColor4){
    document.getElementById('background-color4').style.background = backgroundColor4
}
// End change background color


// Start change title color
function modifyTitleColor(titleColor){
    document.getElementById('title-color').style.color = titleColor
}

function modifyTitleColor2(titleColor2){
    document.getElementById('title-color2').style.color = titleColor2
}

function modifyTitleColor3(titleColor3){
    document.getElementById('title-color3').style.color = titleColor3
}

function modifyTitleColor4(titleColor4){
    document.getElementById('title-color4').style.color = titleColor4
}
// End change title color


// Start change content color
function modifyContentColor(contentColor){
    document.getElementById('content-color').style.color = contentColor
}

function modifyContentColor2(contentColor2){
    document.getElementById('content-color2').style.color = contentColor2
}

function modifyContentColor3(contentColor3){
    document.getElementById('content-color3').style.color = contentColor3
}

function modifyContentColor4(contentColor4){
    document.getElementById('content-color4').style.color = contentColor4
}
// End change content color

// Start change content
function insertContent() {
    var a = document.getElementById("title-text-input").value;
    document.getElementById("title-postit").innerHTML = a;

    var b = document.getElementById("content-text-input").value;
    document.getElementById("content-postit").innerHTML = b;
}

function insertContent2() {
    var c = document.getElementById("title-text-input2").value;
    document.getElementById("title-postit2").innerHTML = c;

    var d = document.getElementById("content-text-input2").value;
    document.getElementById("content-postit2").innerHTML = d;
}

function insertContent3() {
    var e = document.getElementById("title-text-input3").value;
    document.getElementById("title-postit3").innerHTML = e;

    var f = document.getElementById("content-text-input3").value;
    document.getElementById("content-postit3").innerHTML = f;
}

function insertContent4() {
    var g = document.getElementById("title-text-input4").value;
    document.getElementById("title-postit4").innerHTML = g;

    var h = document.getElementById("content-text-input4").value;
    document.getElementById("content-postit4").innerHTML = h;
}
// Start change content


// start function to move the postit
var count = 0;
var count2 = 0;
var count3 = 0;
var count4 = 0;
function movePostit() {
    if (count == 0) {
        var node = document.getElementById("background-color");
        document.getElementById("collum-doing").appendChild(node);
        count++;
    } else {
        var node = document.getElementById("background-color");
        document.getElementById("collum-done").appendChild(node);
    }    
}

function movePostit2() {
    if (count2 == 0) {
        var node = document.getElementById("background-color2");
        document.getElementById("collum-doing").appendChild(node);
        count2++;
    } else {
        var node = document.getElementById("background-color2");
        document.getElementById("collum-done").appendChild(node);
    }    
}

function movePostit3() {
    if (count3 == 0) {
        var node = document.getElementById("background-color3");
        document.getElementById("collum-doing").appendChild(node);
        count3++;
    } else {
        var node = document.getElementById("background-color3");
        document.getElementById("collum-done").appendChild(node);
    }    
}

function movePostit4() {
    if (count4 == 0) {
        var node = document.getElementById("background-color4");
        document.getElementById("collum-doing").appendChild(node);
        count4++;
    } else {
        var node = document.getElementById("background-color4");
        document.getElementById("collum-done").appendChild(node);
    }    
}