function enquiry() {
    alert("your query has been submitted , we will notify you on your email")
}



document.getElementById("mobile-menu-button").addEventListener('click', function() {
    var box3 = document.getElementById("js-mobile-menu")
    if(box3.style.display=="none")
    {
        box3.style.display = "block"
    }
    else
    {
        box3.style.display = "none"
    }
})
