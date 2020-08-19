class NumberAnim{
    constructor(classname){
        this.class = classname;
        this.check(this);
    }
    start(){
        var number = document.querySelector(this.class),
        start = +number.innerHTML, end = +number.dataset.max, 
        step = +number.dataset.step, delay = +number.dataset.delay;
        var interval = setInterval(function() {
            start += step;
            number.innerHTML = start >= end ? end : start;
            if(start >= end) clearInterval(interval);
        }, delay);
    }
    check(t){
        window.addEventListener('scroll', function onScroll() {
            var number = document.querySelector(t.class),
                numberTop = number.getBoundingClientRect().top;
            if(window.pageYOffset > numberTop - window.innerHeight / 2) {
                this.removeEventListener('scroll', onScroll);
                t.start();
            }
        });
    }
}



