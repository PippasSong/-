//인디케이터 초기화
var indicator = document.querySelectorAll('.indicator button');
var lightbox = document.querySelector('#lightbox');
var block = document.querySelector('#block'); //라이트 박스 배경

//라이트 박스 표시
function lightbox_open(num){
  lightbox.setAttribute('class', 'active'); //이미지 목록을 클릭했을 때 CSS에서 라이트 박스를 표시하기 위해 lightbox 영역에 클래스 'active'를 추가합니다. 함수 내의 매개 변수 num은 이미지 목록에서 전달되는 해당 이미지의 번호 값입니다.
  block.setAttribute('class', 'active');//라이트 박스가 열릴 경우 class='active'를 추가해 css에서 라이트 박스용 배경을 표시하도록 합니다.
  change_img(num); //이미지 전환함수 추가
  indicator[num-1].focus(); //해당하는 배열의 인디케이터 버튼에 포커스를 활성화한다. 매개 변수로 전달받는 이미지 번호 값이 1부터 시작하므로 배열 번호 값(0부터 시작)으로 대응하기 위해 num-1을 적용한다.
}

//라이트 박스 닫기
function lightbox_close(){
  lightbox.removeAttribute('class');
  block.removeAttribute('class'); //라이트 박스가 닫힐 경우 클래스를 제거해 라이트 박스용 배경이 표시되지 않도록 합니다.
}

//이미지 전환 표시 함
function change_img(val){
  var imgs = document.querySelectorAll('figure > img');
  //반복문으로 기존의 클래스를 모두 초기화(제거)해 표시되지 않게 한다.
  for(var i=0; i<imgs.length; i++){
    imgs[i].removeAttribute('class');
  }
  imgs[val-1].setAttribute('class', 'active'); //지정된 이미지 배열에 새로운 클래스를 적용해 해당 이미지가 표시되도록 한다.
}
