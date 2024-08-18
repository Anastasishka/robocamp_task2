let check = false; // створення змінної - прапорця

function switchTheme(){
if(check == false){  //якщо тема не змінювалась
    document.getElementById("sw").style.transform = "translateX(25px)";     // зміна всіх властивостей css
    document.getElementById("sw").style.background = "#bdbdbd";
    document.getElementById("swB").style.background = "#585858";
    document.getElementById("c4").style.backgroundImage = "url(images/cateDark.jpg)";
    document.getElementById("c6").style.backgroundImage = "url(images/contactDark.jpg)";
    document.getElementById("c8").style.background = "#252525";
    document.getElementById("t1").style.color = "#171717";
    document.getElementById("t2").style.color = "white";
    document.getElementById("t3").style.color = "white";
    document.getElementById("t4").style.color = "white";
    document.getElementById("c9").style.background = "#7D7D7D";
    document.getElementById("c9t").style.backgroundColor = "#7D7D7D";
    document.getElementById("c5").style.backgroundColor = "#6D6D6D";
    for(let i = 0; i < document.getElementsByClassName("btn-header2").length; i++){
        document.getElementsByClassName("btn-header2")[i].style.color= "white";
    }
    check = true; // зміна статуса прапорця
    return;
}
    if(check == true){ //якщо тему змінили
        document.getElementById("sw").style.transform = "translateX(0px)"; // зміна стилів 
        document.getElementById("sw").style.background = "#fcff19";
    document.getElementById("swB").style.background = "#f8f8f8";
    document.getElementById("c4").style.backgroundImage = "url(images/cate.jpg)";
    document.getElementById("c6").style.backgroundImage = "url(images/contact.jpg)";
    document.getElementById("c8").style.background = "#fcff19";
    document.getElementById("t1").style.color = "black";
    document.getElementById("t2").style.color = "black";
    document.getElementById("t3").style.color = "black";
    document.getElementById("t4").style.color = "black";
    document.getElementById("c9t").style.backgroundColor = "rgba(226, 255, 146, 0.35)";
    document.getElementById("c9").style.background = "linear-gradient(328deg, rgba(187,255,8,1) 15%, rgba(248,253,29,1) 38%, rgba(254,128,2,1) 82%)";
    document.getElementById("c5").style.backgroundColor = "white";
    for(let i = 0; i < document.getElementsByClassName("btn-header2").length; i++){
        document.getElementsByClassName("btn-header2")[i].style.color= "black";
    }
    check = false; // змінення статуса прапорця
    return;
    }
}