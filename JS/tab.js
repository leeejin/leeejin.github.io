// 버튼0 누르면
// ~ 모든 버튼에 붙은 orange 클래스명 제거
// ~ 버튼 0에 orange 클래스명 추가
// ~ 모든 div에 붙은 show 클래스명 제거
// ~ div 0에 show 클래스명 추가

var tabbtn = $('.tab-button');
var tabcont = $('.tab-content');

for (let i = 0; i < tabbtn.length; i++) {
    tabbtn.eq(i).on('click', function () {
        tabbtn.removeClass('orange');
        tabbtn.eq(i).addClass('orange');
        tabcont.removeClass('show');
        tabcont.eq(i).addClass('show');
    })
}