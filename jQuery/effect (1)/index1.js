let winH=$(window).height();
const sections = $('section');

$(window).on('scroll',function(){
    let winSct=$(this).scrollTop() + winH * 0.9;
    sectionAni(winSct);
});
function sectionAni(n){
    sections.each(function(i){
        /* console.log(sections.eq(i).offset().tops); */
        let sct=$(this).offset().top;
        const delsy=$(this).data('delay');
        console.log(delay);
    })
}