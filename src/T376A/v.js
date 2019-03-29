document.getElementsByTagName('html')[0].classList.add("t4u-T376A");
var getCookie = function (name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2)
        return parts.pop().split(";").shift();
};
var url = window.location.pathname.split('/')[1];
var enLang = url.match(/en_/g);
var frLang = url.match(/fr_/g);
var deLang = url.match(/de_/g);
var text = function () {
    var text;
    if (enLang) {
        text = 'NEW';
    }
    else if (frLang) {
        text = 'NEW';
    }
    else if (deLang) {
        text = 'NEU';
    }
    return text;
};
var newHTML = "<span style=\"color: white;display: inline-block;background-color: rgb(255, 0, 0);padding: 1px 10px;border-radius: 5px;margin-left: 5px;\">" + text() + "</span>";
var witchNav = getCookie('_GSMARS_PLP2');
var navA = function () {
    var jeansMan = document.getElementById('sidenav-navigationNode_00000668').getElementsByClassName('sideNav-link')[0].getElementsByTagName('span')[0];
    var jeansWoman = document.getElementById('sidenav-navigationNode_0000066B').getElementsByClassName('sideNav-link')[0].getElementsByTagName('span')[0];
    var dotHTML = '<span style="background-color:#f00;border-radius:3px;display:inline-block;position:absolute;left:5px;width:6px;height:6px;text-indent: 54px;line-height: 7px;top:12px;"></span>';
    //MAN
    //add new after Jeans & Unterteile
    jeansMan.closest('.sideNav-subItem').childNodes[1].innerHTML = jeansMan.closest('.sideNav-subItem').childNodes[1].innerHTML + newHTML;
    //add dot before Jeans
    jeansMan.innerHTML = jeansMan.innerHTML + dotHTML;
    //WOMAN
    jeansWoman.innerHTML = jeansWoman.innerHTML + dotHTML;
    //add new after sale
    jeansWoman.closest('.sideNav-subItem').childNodes[1].innerHTML = jeansWoman.closest('.sideNav-subItem').childNodes[1].innerHTML + newHTML;
};
var navC = function () {
    console.log('C');
    var jeansMan = document.getElementsByClassName('flyout__column')[0].getElementsByClassName('flyout__columnItem');
    var jeansWoman = document.getElementsByClassName('flyout__column')[6].getElementsByClassName('flyout__columnItem');
    var dotHTML = '<span style="background-color:#f00;border-radius:3px;display:inline-block;position:absolute;left:-8px;width:6px;height:6px;text-indent: 54px;line-height: 7px;top:12px;"></span>';
    //MAN
    //add new after Jeans & Bottoms
    jeansMan[0].getElementsByClassName('flyout__columnTitle')[0].innerHTML = jeansMan[0].getElementsByClassName('flyout__columnTitle')[0].innerHTML + newHTML;
    //add dot
    jeansMan[1].getElementsByTagName('span')[0].innerHTML = jeansMan[1].getElementsByTagName('span')[0].innerHTML + dotHTML;
    //WOMAN
    jeansWoman[0].getElementsByClassName('flyout__columnTitle')[0].innerHTML = jeansWoman[0].getElementsByClassName('flyout__columnTitle')[0].innerHTML + newHTML;
    //add dot
    jeansWoman[1].getElementsByTagName('span')[0].innerHTML = jeansWoman[1].getElementsByTagName('span')[0].innerHTML + dotHTML;
};
function myFunction(x) {
    if (x.matches) { // If media query matches
        if (witchNav == 'A' || witchNav == 'B') {
            navA();
        }
        else {
            navC();
        }
    }
    else {
        navA();
    }
}
var x = window.matchMedia("(min-width: 1025px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes
