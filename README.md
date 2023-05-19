# 웨어 앤 웨어 🍊

`where` & `wear`는 우유부단한 연인들을 위한  
`오늘의 데이트 장소` & `오늘의 의상` 추천 웹 애플리케이션 입니다

## 📙 **Where** & **Wear** 가 무엇 인가요?

**Where?**

1. 사용자의 현재 위치를 기준으로 해당 자치구의 데이트 장소를 추천해줍니다  
2. 데이트 장소는 식당, 카페, 놀거리로 구분되어 제공됩니다  
3. 다른 지역을 원한다면 화면 상단에서 검색바를 이용하여 원하는 지역을 검색합니다

**Wear?**

1. 서울의 현재 기온을 기준으로 오늘의 의상을 추천해줍니다  
2. 사용자는 성별을 선택할 수 있습니다   
3. 의상 추천 탭 하단에는 오늘의 날씨 정보가 나타납니다

<img src="https://user-images.githubusercontent.com/101464713/239460112-44554816-905c-4556-882e-ad5be5f8035e.mov" alt="웨어 앤 웨어"/>

**추가 정보**

- 데이트 장소는 서울의 25개 자치구로 한정됩니다
- 오늘의 날씨는 서울 용산구 기준입니다
- `오늘의 의상 추천`의 디폴트 값은 남성입니다
- `오늘의 의상 추천`시 현재 기온을 총 5단계로 구분합니다

### 📙 Where & Wear's 개발 노트

- 프로젝트 컬러: `ornage`🍊
- 사용 언어: `JavaScript`
- CSS: `SCSS`
- font: `Noto Sans Korean`
- server: `json-server`
- 장소 데이터: `json-server`

  ```javascript
    {
      "name": "OO식당",
      "address": "실제 주소",
      "img": "이미지 url 주소",
      "detail": "카테고리 & 주력메뉴",
      "info": "간단 설명"
    }
  ```

- 의상 데이터: `json-server`

  ```javascript
    {
      "detail": "의상 설명",
      "img": "이미지 파일 경로",
    }
  ```

- 날씨 데이터: `기상청 Open API`

  ```javascript
    {
      "최고 기온": "OO°C",
      "최저 기온": "OO°C",
      "현재 기온": "OO°C",
      "하늘 상태": "1~4",
      "강수 형태": "1~4"
    }
  ```

### 📙 Where & Wear 설치 및 실행 방법

```json
  "dependencies": {
    "json-server": "^0.17.3"
  },
  "devDependencies": {
    "sass": "^1.62.1"
  }
```

1. 의존성 설치

  ```
    npm install
  ```

2. json-server 실행

  ```
    npm start
  ```

### 📙 Where & Wear 팀원 및 참고 자료

litae: https://github.com/qkdflrgs  
toko: https://github.com/aaaz425  

디자인 링크: https://www.figma.com/file/SBB3oMGQjRAEgotVH7k5Gi/Untitled?type=design&node-id=0-1&t=KETeGfjTSUzI2K2n-0  
이미지 누끼 사이트: https://www.remove.bg/ko  
기상청 OPEN APi: https://www.data.go.kr/data/15084084/openapi.do
