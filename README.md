# DANOSHOP 클론코딩 

![ezgif com-gif-maker (7)](https://user-images.githubusercontent.com/68773118/115060060-5ba24e00-9f22-11eb-970f-071c75ddba67.gif)

### 목차
[1. 프로젝트 설명 ](#프로젝트-설명)<br/>
[2. 사용기술 ](#tools)
[3. 기능정보 ](#-기능정보-클릭-시-기능별-포스팅-링크로-이동합니다)
  3-1.Carousel(슬라이드 배너), 동적 이미지와 선택지가 담긴 alert
  3-2.회원가입, 로그인 유지 구현 (axios로 API 통신)
  3-3.옵션 선택 시 인터랙티브 반응 구현, 로컬스토리지 장바구니 저장
  3-4.전체 상품 목록 및 상세페이지(API, Dynamic route URL)
[4. 진행과정 ](#진행과정)
  협업환경 구축, API설계, View 분석
[5. 배운 점 ](#-i-learned)

## 프로젝트 설명 
### 기간/인원
(2021.04.02 ~ 2021.04.08) 
Front-end 1인/Back-end 1인

![image](https://user-images.githubusercontent.com/68773118/115060388-c489c600-9f22-11eb-8b1d-d88cc5d25ad1.png)
### 시현영상 [Youtube](https://youtu.be/8M8cc51CJL8)

리액트를 이용한 첫 팀 프로젝트를 진행했습니다.

평소 관심있던 건강한 식단 전문 쇼핑몰인 다노샵을 클론코딩했습니다. 

## 🛠 Tools
React, Node.js

## 🕹 기능정보 (클릭 시 기능별 포스팅 링크로 이동합니다.)
### 1. [Carousel(슬라이드 배너), 동적 이미지와 선택지가 담긴 alert](https://velog.io/@mygomi/React-%EC%87%BC%ED%95%91%EB%AA%B0-%ED%81%B4%EB%A1%A0%EC%BD%94%EB%94%A9-2.-%EA%B5%AC%ED%98%84-%EA%B8%B0%EB%8A%A5%EB%94%94%EC%9E%90%EC%9D%B8)
![ezgif com-gif-maker (7)](https://user-images.githubusercontent.com/68773118/115060060-5ba24e00-9f22-11eb-970f-071c75ddba67.gif)

### 2. [회원가입, 로그인 유지 구현 (axios로 API 통신)](https://velog.io/@mygomi/React-%EC%87%BC%ED%95%91%EB%AA%B0-%ED%81%B4%EB%A1%A0%EC%BD%94%EB%94%A9-4.-axios%EB%A1%9C-API-%ED%86%B5%EC%8B%A0%ED%95%98%EA%B8%B0-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EB%A9%94%EC%9D%B8-%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80)

![image](https://user-images.githubusercontent.com/68773118/115060153-7ffe2a80-9f22-11eb-9d58-fef5deefcf97.png)

### 3. [옵션 선택 시 인터랙티브 반응 구현, 로컬스토리지 장바구니 저장](https://velog.io/@mygomi/React-%EC%87%BC%ED%95%91%EB%AA%B0-%ED%81%B4%EB%A1%A0%EC%BD%94%EB%94%A9-3.-%EA%B5%AC%ED%98%84-%EA%B8%B0%EB%8A%A5%EA%B8%B0%EB%8A%A5%EB%A1%9C%EC%A7%81-%EB%8D%B0%EC%9D%B4%ED%84%B0)
![ezgif com-gif-maker (8)](https://user-images.githubusercontent.com/68773118/115060264-a0c68000-9f22-11eb-8c3d-c009883847c3.gif)

### 4. [전체 상품 목록 및 상세페이지(API, Dynamic route URL)](https://velog.io/@mygomi/React-%EC%87%BC%ED%95%91%EB%AA%B0-%ED%81%B4%EB%A1%A0%EC%BD%94%EB%94%A9-5.-%EC%A0%84%EC%B2%B4-%EC%83%81%ED%92%88%EA%B3%BC-%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80API-%EB%8F%99%EC%A0%81-%EB%9D%BC%EC%9A%B0%ED%8C%85)

---

## 진행과정
### 협업환경 구축
- notion을 이용하여 진행현황과 요청사항을 공유할 수 있도록 했습니다.
- gather, slack을 적절히 혼용하여 실시간 회의를 진행했습니다.

![](https://images.velog.io/images/mygomi/post/7f26afec-e3ab-4e7e-b2e4-c736d7253276/2.png)
<br>
#### API 설계 
이번 프로젝트를 통해 <span style="color:#FF7948">API설계의 중요성</span>을 실감할 수 있었습니다.
API 설계 필요성에 대한 인식 부족과 미흡한 설계로 프로젝트 진행 도중, 후반부에 오류가 몇 차례 발생하였고 프론트-백이 실시간으로 코드 에러를 해결해나가며 API설계를 수정하는 일이 있었기 때문입니다. 
request, response data형태를 사전에 잘 설계하여야 하고 협의된 내용을 반드시 지켜야 함을 (또는 수정하더라도 반드시 사전협의와 소통이 필요하다는 것을) 알게 되었습니다.
![](https://images.velog.io/images/mygomi/post/ece67f36-fd84-4edd-83f6-dfa807194e08/image.png)

<br>

#### View 분석
다른 팀원이 github에 공유 레포지토리를 생성하는 동안 View를 분석하여 <span style="color:#FF7948">Figma를 이용해 팀원간 공유할 수 있는 자료</span>를 만들었습니다. 
Figma는 디자인 툴이긴 하나 현업에서 디자이너와 협업 시에 접하게 될 수도 있겠다는 생각에 간단하게나마 직접 사용해보고자 했습니다. **협업하는 이가 어떤 일을 어떻게 하는 지 관심을 가지는 것도 중요하다고 생각하기 때문입니다.**

View를 분석할 때는 눈에 보이는 디자인을 기준으로 <span style="color:#FF7948">컴포넌트를 어떻게 세분화 시킬 지</span> 고민하며 분석했습니다. 프로젝트를 진행하며 **데이터를 효율적으로 관리할 수 있도록 데이터의 흐름도 고려하여 컴포넌트를 설계해야 함을 깨달았습니다. **
![](https://images.velog.io/images/mygomi/post/90c4df29-2462-4a7a-b43e-a38ea46b26ea/image.png)

## 🔎 I learned 
아래 4가지 주제에 대해 생각해볼 수 있는 기회였습니다.
1. 실제 사이트에서 어떤 식으로 뷰를 구현하는 지 (개발자 도구에서 확인가능한 html, css에 한함)
2. 간단해보이는 기능들도 얼마나 많은 경우의 수를 고려하고 고민하여 로직을 짜야하는 지
3. 프론트와 백이 각각 어떤 역할을 수행해야 하는 지 
4. 다른 팀원이 각자 역할에 집중할 수 있는 환경을 조성하기 위해 내가 할 수 있는 것들, 해야 하는 것들
