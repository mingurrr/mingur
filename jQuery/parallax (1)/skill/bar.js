$(function () {
    const progressWrap = $('.progress-bar');
    const animaionOST = $('.animation').offset().top - 600;
    let isAni = false;
    $(window).on('scroll', function () {
        //윈도우의 스크롤 탑값이 애니메이션 
        if ($(window).scrollTop() >= animaionOST && !isAni) {
            progressAnimation();
        }
    });
    function progressAnimation() {
        progressWrap.each(function (i, o) {
            const $this = $(this);
            const progressBar = $this.find('.bar');
            const progressText = $this.find('.rate');
            const progressRate = progressText.attr('data-rate')
            console.log(progressRate);
            progressBar.atop().animate({ width: progressRate + '%' },
                2500)
                textFn();
            const textFn = function () {
                $({ rate: 0 }).stop().animate(
                    { rate: progressRate },
                    {duration:2000,
                    progress:function(){
                        let now = this.rate;
                        console.log(now);
                    }
                    
                    
                    }
                );
            };
        });
    };
});;
