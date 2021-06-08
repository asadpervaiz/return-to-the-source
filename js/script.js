

// unidentified
$("#mydiv-1").each(function () {
    var randomtop = Math.floor(Math.random()*200);
    var randomleft = Math.floor(Math.random()*80);
    $(this).css({
        "top": randomtop + "%",
        "left": randomleft + "%"
    });
});

// unidentified
$("#mydiv-2").each(function () {
    var randomtop = Math.floor(Math.random()*200);
    var randomleft = Math.floor(Math.random()*80);
    $(this).css({
        "top": randomtop + "%",
        "left": randomleft + "%"
    });
});

// unidentified
$("#mydiv-3").each(function () {
    var randomtop = Math.floor(Math.random()*200);
    var randomleft = Math.floor(Math.random()*80);
    $(this).css({
        "top": randomtop + "%",
        "left": randomleft + "%"
    });
});

// unidentified
$("#mydiv-4").each(function () {
    var randomtop = Math.floor(Math.random()*200);
    var randomleft = Math.floor(Math.random()*80);
    $(this).css({
        "top": randomtop + "%",
        "left": randomleft + "%"
    });
});

// unidentified
$("#mydiv-5").each(function () {
    var randomtop = Math.floor(Math.random()*200);
    var randomleft = Math.floor(Math.random()*80);
    $(this).css({
        "top": randomtop + "%",
        "left": randomleft + "%"
    });
});

// unidentified
$("#mydiv-6").each(function () {
    var randomtop = Math.floor(Math.random()*200);
    var randomleft = Math.floor(Math.random()*80);
    $(this).css({
        "top": randomtop + "%",
        "left": randomleft + "%"
    });
});

// unidentified
$("#mydiv-7").each(function () {
    var randomtop = Math.floor(Math.random()*200);
    var randomleft = Math.floor(Math.random()*80);
    $(this).css({
        "top": randomtop + "%",
        "left": randomleft + "%"
    });
});

// unidentified
$("#mydiv-8").each(function () {
    var randomtop = Math.floor(Math.random()*200);
    var randomleft = Math.floor(Math.random()*80);
    $(this).css({
        "top": randomtop + "%",
        "left": randomleft + "%"
    });
});

// unidentified
$("#mydiv-9").each(function () {
    var randomtop = Math.floor(Math.random()*200);
    var randomleft = Math.floor(Math.random()*80);
    $(this).css({
        "top": randomtop + "%",
        "left": randomleft + "%"
    });
});

// unidentified
$("#mydiv-10").each(function () {
    var randomtop = Math.floor(Math.random()*200);
    var randomleft = Math.floor(Math.random()*80);
    $(this).css({
        "top": randomtop + "%",
        "left": randomleft + "%"
    });
});

// unidentified
$("#mydiv-11").each(function () {
    var randomtop = Math.floor(Math.random()*200);
    var randomleft = Math.floor(Math.random()*80);
    $(this).css({
        "top": randomtop + "%",
        "left": randomleft + "%"
    });
});

// unidentified
$("#mydiv-12").each(function () {
    var randomtop = Math.floor(Math.random()*200);
    var randomleft = Math.floor(Math.random()*80);
    $(this).css({
        "top": randomtop + "%",
        "left": randomleft + "%"
    });
});






// Make the DIV element draggable:
dragElement(document.getElementById("mydiv-1"));
dragElement(document.getElementById("mydiv-2"));
dragElement(document.getElementById("mydiv-3"));
dragElement(document.getElementById("mydiv-4"));
dragElement(document.getElementById("mydiv-5"));
dragElement(document.getElementById("mydiv-6"));
dragElement(document.getElementById("mydiv-7"));
dragElement(document.getElementById("mydiv-8"));
dragElement(document.getElementById("mydiv-9"));
dragElement(document.getElementById("mydiv-10"));
dragElement(document.getElementById("mydiv-11"));
dragElement(document.getElementById("mydiv-12"));


function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
