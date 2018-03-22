$('.box').dblclick(function(){
    $('.hidden').slideToggle('slow');
});
$('.box1').click(function(){
    $('.hidden1').slideToggle('slow');
});
$('.box2').click(function(){
    $('.hidden2').slideToggle('slow');
});
$('.menu').click(function(){
    $('.row').slideToggle('slow');
});



$(document).ready(function(){
    $("#modalBtn").click(function(){
        $(".modal").css("display","block");
    })
   
})


$(".closeBtn").click(function(){
    $(".modal").css("display","none");
   
   })

  