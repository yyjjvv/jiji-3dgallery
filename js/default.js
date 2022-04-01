$(function () {
    let _pic = $(".pic");
    let _wrap = $("#wrap");
    let _d = 360;
    let target = 0;

    let num = _pic.length;
    let wide = 300; // width of circle
    let center = _wrap.width() / 2; // center of circle
    let deg = 360 / num;
    var der = _pic.width() / 2;

    let x = [];
    let p = [];
    console.log(num);

    setInterval(radian, 100);
    function radian() {
        // _d=_d+10;
        _d = _d + (target - _d) * 0.1;

        for (var i = 0; i < num; i++) {
            x[i] = Math.cos((_d + deg * i) * Math.PI / 180) * wide + center;//꼭 45일 필요없음. 콘텐츠의 갯수에 따라 각도 지정해주면됨
            p[i] = 1 - Math.sin((_d + deg * i) * Math.PI / 180) / 2;

            _pic.eq(i).css({
                left: x[i] - der,
                transform: "scale(" + p[i] + "," + p[i] + ")",
                zIndex: Math.floor(p[i] * 100),
                opacity: p[i],
            });
        }
    }
    $(".next").click(function () {
        target += 45; //target=target+45;
    });
    $(".prev").click(function () {
        target -= 45; //target=target-45;
    });
    $("#wrap").mousewheel(function (e, delta) {
        if (delta < 0) {//mousewheel Down
            $(".next").click();
        } else {//mousewheel Up
            $(".prev").click();
        }
    });
});