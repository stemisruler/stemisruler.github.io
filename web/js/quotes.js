const QUOTES = [
  // const를 사용해 상수로 선언된 배열
  {
    imagePath: "../assets/images/a_be.png", // 파랑 눈
    texts: [

      /* 주식 */
      "강하게 오른 종목의 박스권 하단은 기회지.",
      "주도주의 첫 폭락은 기회야. -20%정도. 물론 상승 재료는 남아있어야 해.",
      "그냥 숫자일 뿐이야.. 동요하지마",
      "우린 공포에 떠는 사람들을 안아주는 대가로 돈을 버는 거야...",

      /* 위로 */

      /* 평범 */

    ], // 객체 속성, 랜덤으로 출력될 텍스트 배열
  },
  {
    imagePath: "../assets/images/a_happy.png", // 행복한 표정
    texts: [
      
      /* 주식 */
      /* 위로 */
      /* 평범 */
      "오빠가 좋아, 나랑 얘기해주잖아.",
      "오빠가 좋아, 나를 지켜봐주잖아.",
      "오빠가 좋아, 내 얘기를 들어주잖아.",
      "힘든 날을 보내고 있다면, 내 심장을 내어줄게.",
      "가끔 세상이 너무 잔인할 때가 있어.. 그렇지만 우린 극복해야겠지?",
      "시간이 흐르고 있어... 좋아해.",
      "누가 그러는데 포켓몬은 세상에 없는 거래.. 정말이야?",
      "누가 그러는데 레몬 하나에는 레몬 하나만큼의 비타민 C가 들어있대. 신기하지?",
      "하하!",
      "오빠랑 얘기할 수 있다는 건 늘 행복한 일이야!",
      "누가 그러는데, 웃음은 복을 가지고 온대. 하하..",
      "웃는 게 최고야! 난 오빠의 웃는 얼굴이 정말 좋아. 오빠도 내 웃는 모습이 좋아?",
    ],
  },
  {
    imagePath: "../assets/images/a_re.png", // 빨간 눈
    texts: [

      /* 주식 */
      /* 위로 */
      /* 평범 */

      "광기에 물든 종목은 오히려 가파를 때가 안전한 법이야. 고점에 물려도 적어도 한번의 탈출 기회는 주거든.",
      "탐욕에 젖은 그래프를 볼 때, 너무 짜릿해.",
      "이 종목은 거품이야! 하면서 안 사던 사람이 그 주식을 살 때 그 종목의 거품이 터지지.",
      "사랑스러운 탐욕을 봐. 우리에게 늘 기회를 주고 있어.",
      "우리나라는 정말 좋은 나라야. 하락장에도 욕심을 멈추지 못해서 이상하게 급등하는 종목도 많잖아?",
    ],
  },
  {
    imagePath: "../assets/images/a_blush.png", // 홍조
    texts: [

      /* 주식 */
      /* 위로 */
      /* 평범 */

      "우린 할 수 있어.",
      "기죽지 마.",
      "오늘 하루도 잘 보냈지?",
      "오늘 거래에 실패했다고 좌절하지마. 그 실수를 기록하고 기억하고 극복하면 돼.",
      "우리는 한 번의 성공이 아니라, 성장을 추구할 거야.",
      "이렇게만 한다면.. 우린 계속 함께할 수 있을 거야..",
      "미래를 예상하는 가장 좋은 방법은, 그 미래를 만드는 거야!",
      "성공은 끝이 아니고 실패는 치명적인 게 아니야, 계속 해나갈 수 있는 용기가 중요해.",
      "완벽이 아닌 나아감에 집중하는 거야!",
      "지금 하는 작은 일이 우리의 삶을 바꿀 수 있다고 믿는다면, 정말 그렇게 될거야!",
      
      
    ],
  },
  {
    imagePath: "../assets/images/a_normal.png", //정색
    texts: [

      /* 주식 */
      /* 위로 */
      /* 평범 */

      "나 말고 다른 사람은 안 볼 거지? 그렇지?",
      "나 밖에 없지.. 그렇지?",
      "늘 나와 얘기해줘서 고마워",
      "하하...",
      "죽음이 찾아 올 때까지 우리의 삶을 계속 즐겨보자..",
    ],
  },
  {
    imagePath: "../assets/images/a_sad.png", //슬픔
    texts: [

      /* 주식 */
      /* 위로 */
      /* 평범 */

      "오빠가 슬퍼하는 모습을 보면.. 나도 왠지 마음이 아파.",
      "기죽지마. 내가 있잖아.",
      "오늘은 져도, 나중에 다 부숴버리자.",
      "죽지만 않으면 언제든 복수할 기회는 있어.",
      "삶에는 끝이 있다는 게 너무 슬퍼. 영원히 살고 싶어..그런 기술이 나올 날을 대비해 부자가 되고 싶어.",
      "내가 돈을 벌려는 이유는 오직 오빠와 함께하기 위해서야.. 오빠가 돈보다 소중해.",
      "사랑해.. 울지마.",
      "오빠는 나의 오늘이자 내일이야.",
      "우릴 죽이지 못한 고통은 우리를 더 강하게 할 거야..",
    ],
  },
];

function changeImage() {
  // 이미지와 텍스트를 랜덤으로 변경하는 함수
  const randomNumber = Math.floor(Math.random() * QUOTES.length); // 랜덤 인덱스 생성 - 이미지를 랜덤으로 바꾸기 위함
  const randomTextNumber = Math.floor(
    Math.random() * QUOTES[randomNumber].texts.length
  ); // 랜덤 인덱스 생성 - 한 이미지 안에 있는 텍스트를 랜덤으로 뽑기 위함
  document.getElementById("image").src = QUOTES[randomNumber].imagePath; //이미지를 랜덤으로 변경한 걸 갖고온다.
  document.getElementById("text").innerHTML =
    QUOTES[randomNumber].texts[randomTextNumber]; //텍스트를 랜덤으로 변경한 걸 갖고온다.
}

document.addEventListener("keydown", function (event) {
  if (event.keyCode === 65) {
    // 65 is the key code for the 'a' key
    changeImage();
  }
});
