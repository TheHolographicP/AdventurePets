
//quick script to hide the navbar if the window grows too wide - CSS wasn't doing this by itself so I smashed it together
const headerCheckBox = document.getElementById("menucheckbox");
var navToHide = document.getElementsByClassName("collapse_content");

function checkHideNav() {
    if (window.innerWidth > 800){
        headerCheckBox.checked = false;
        for (let e of navToHide){
            e.display="None"
        };
    };
};

window.onresize = checkHideNav;