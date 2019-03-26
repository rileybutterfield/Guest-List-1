// 1 and 2
var wishList = ["coat","socks", "hat"];


$('.button').click(function() {
// 3 and 4
    wishList.forEach(function(item){
        $(".wishList").append("<li>I want " + item +"</li>");
});



});


