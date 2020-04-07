$(document).ready(() => {
 
    var menus = document.getElementsByClassName('menu');
    var pages = $(".page");
 
    for (var i = 0; i < menus.length; i++) {
 
        menus[i].addEventListener("click", function () {
            var current = $("#active");
            current.removeAttr('id');
            
            $(this).attr('id', 'active');
            
            let activePage = $(".activePage");
            activePage.attr("class", "page");
            
            pages.eq($(this).index()-1).attr("class", "activePage");
        });
    }
});
