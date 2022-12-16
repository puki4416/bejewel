# 과제

node v18.12.1 에서 정상작동함을 확인하였습니다.

## 실행 방법

- npm i 를 통해서 의존 모듈을 설치합니다.
- npm run server:start 를 통해 json-server를 실행합니다.
- npm run client:start 를 통해 react를 개발서버를 실행합니다.

## 페이지별 설명

### 메인 페이지

- 등록한 모든 상품을 리스트 형태로 볼수 있습니다.
- 상품을 클릭하면 상품상세 페이지로 이동합니다.

### 상품 등록 페이지

- 상품을 등록할수 있습니다.
- 모든 값과 이미지를 1개이상 등록해야 등록할수 있습니다.
- 이미지의경우 첫번째 이미지가 대표이미지가 되고, x를 눌러 삭제할수 있습니다.
- 등록하기 버튼을 누르면 정보가 입력된경우 등록하고 홈으로 이동합니다.

### 상품 상세 페이지

- 상품 상세 페이지에서는 이름, 브랜드, 사이즈, 상품설명, 이미지 등을 볼수 있습니다.
- 이미지가 여러개인 경우 아래의 작은 이미지를 클릭하면 해당 이미지를 볼수 있습니다.
- 상품 수정을 누를 경우 상품 수정 페이지로 이동합니다.
- 상품 삭제를 누를 경우 상품을 삭제하고, 홈으로 이동합니다.

### 상품 수정페이지

- 수정할 상품의 원래 정보가 입력되어있습니다.
- 나머지 부분은 상품 등록페이지와 동일합니다.
