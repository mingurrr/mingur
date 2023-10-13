$('#btn1').on('click',function (e){
    //e=>이벤트객체
    console.log(e);
    e.preventDefault();
    $('.box1').hide("slow",function(){
        console.log("complete");
    });
    return false;
});
$('#btn2').on('click',function(){
    $('.box1').show("1000")
});

$('#btn3').on('click', function () {
    $('.box2').stop().toggle(500);
});

$('#btn4').on('click', function (){
    $(this).parent().next().slideUp(1000);
});
$('#btn5').on('click', function (){
    $(this).parent('p').next().slideDown('fast');
});
$('#btn6').on('click', function (){
    $(this).parent('p').next().slideToggle('fast');
});
$('#btn7').on('click', function () {
	$(this).parent('p').next().fadeOut(1000);
});
$('#btn8').on('click', function () {
	$(this).parent('p').next().fadeIn('slow');
});

$('#btn9').on('click', function () {
	$(this).parent('p').next().fadeToggle('normal');
});

$('#btn10').on('click', function () {
	$(this).parent('P').next().fadeTo('slow', 0.3);
});

$('#btn11').on('click', function () {
	$(this).parent('p').next('#box3').fadeTo('slow', 1);
});