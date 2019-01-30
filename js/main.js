function openNav() {
    document.getElementById("mySidenav").style.left = "0";
    // document.getElementById("main").style.marginLeft = "250px";
    document.body.classList.add('overlay');
}

function closeNav() {
    document.getElementById("mySidenav").style.left = "-450px";
    // document.getElementById("main").style.marginLeft = "0";
    document.body.classList.remove('overlay');
}

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
        this.classList.toggle("fa-minus");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}