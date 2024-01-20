const generateBtn = document.getElementById('generateBtn');

const gridContainer = document.getElementById('gridContainer');

generateBtn.addEventListener('click', () => {

    // 이미지 개수 확인

    if (gridContainer.children.length >= 30) {

        confirmAndClearImages(); // 이미지가 30개 이상이면 초기화 여부 확인

    } else {

        generateImage(); // 30개 미만이면 이미지 생성

    }

});

// 이미지 생성 함수

function generateImage() {

    // 랜덤한 숫자 생성 (1부터 100까지의 범위로 설정)

    const randomNum = Math.floor(Math.random() * 100) + 1;

    // 랜덤한 숫자를 포함한 이미지 URL 생성

    const imageUrl = `https://picsum.photos/200/200?random=${randomNum}`;

    // 이미지 태그 생성

    const imageElement = document.createElement('img');

    imageElement.src = imageUrl;

    // 이미지를 담을 div 요소 생성 (옵션)

    const imageDiv = document.createElement('div');

    imageDiv.appendChild(imageElement);

    // 생성한 이미지를 화면에 추가

    gridContainer.appendChild(imageDiv);

}

// 확인 메시지와 이미지 초기화 함수

function confirmAndClearImages() {

    // 확인 메시지 표시 후 초기화 여부 확인

    const isConfirmed = confirm('이미지가 30개가 되었습니다. 모든 이미지를 지우시겠습니까?');

    if (isConfirmed) {

        clearImages();

    }

}

// 이미지 초기화 함수

function clearImages() {

    // gridContainer의 모든 자식 제거

    while (gridContainer.firstChild) {

        gridContainer.removeChild(gridContainer.firstChild);

    }

}