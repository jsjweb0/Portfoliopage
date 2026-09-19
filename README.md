# Sujin Portfolio

> 웹 퍼블리셔 8년 경력을 바탕으로 React/TypeScript로 전환 중인  
> 프론트엔드 포트폴리오입니다.

[Demo](https://jsjweb0.github.io/Portfoliopage/) · [GitHub](https://github.com/jsjweb0)

## 🎯 이 포트폴리오가 보여주려는 것

1. **퍼블리셔에서 프론트엔드로 확장하는 과정**  
   웹 퍼블리셔로 일하며 반복되는 페이지 구조, 다국어 레이아웃, 로그인 상태별 UI, 운영 중 수정 비용을 직접 경험했습니다. 이후 React 프로젝트에서는 이 경험을 컴포넌트 분리, 데이터 기반 렌더링, 상태 관리, 입력 검증 구조로 확장했습니다.

2. **데이터 기반 컴포넌트 설계**  
   프로젝트 정보를 TypeScript 타입으로 정의하고, 프로젝트 카드와 상세 페이지를 같은 데이터에서 동적으로 렌더링합니다.

3. **실제 배포와 외부 서비스 연동 경험**  
   SoundCloud Widget과 iTunes Search API를 음악 서비스에 연결하고, Firebase Authentication/Firestore로 인증과 사용자별 데이터를 관리했습니다. GitHub Pages와 Cloudflare Workers Static Assets를 통해 프로젝트별 배포 흐름도 구성했습니다.

## 🚀 주요 프로젝트

### ⚛️ React 프로젝트

| 프로젝트   | 핵심 구현                                                                                                 | 기술                                                                                                                                                            | 링크                                           |
| ---------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| Dockit     | 이력서·자기소개서·경력기술서·프로젝트 보고서 작성, 실시간 미리보기, 저장·검증·PDF 출력                   | React, TypeScript, Vite, Tailwind CSS, React Router, Vitest, localStorage, Cloudflare Workers                                                                    | [보기](https://dockit.jsjweb0.workers.dev/)    |
| NEWTRONOME | SoundCloud Widget 재생 제어, iTunes 음악 검색·미리듣기, Firebase 사용자별 트랙 저장                       | React, TypeScript, Vite, Zustand, Tailwind CSS, Firebase Authentication / Firestore, SoundCloud Widget API, iTunes Search API, Cloudflare Workers Static Assets | [보기](https://newtronome.jsjweb0.workers.dev) |

### 🧩 실무 퍼블리싱 프로젝트

| 프로젝트 | 핵심 구현                                             | 기술                            | 기여도 | 링크                                           |
| -------- | ----------------------------------------------------- | ------------------------------- | ------ | ---------------------------------------------- |
| FIS Chat | 외부 React 챗봇 UI 커스터마이징, 반응형 전환          | React 커스터마이징, CSS         | 100%   | [보기](https://www.atfis.or.kr/fis-everything) |
| 농넷     | 로그인/권한/관심품목 조건부 UI, 데이터 대시보드       | HTML, CSS, JavaScript, amCharts | 100%   | [보기](https://www.nongnet.or.kr)              |
| 고흥관광 | 100여 개 서브페이지, 다국어 반응형, SVG 지도 인터랙션 | HTML, CSS, JavaScript, SVG      | 90%    | [보기](https://tour.goheung.go.kr)             |

## 🛠 기술 스택

- **포트폴리오:** React 18, TypeScript, Vite, Tailwind CSS v4
- **라이브러리:** React Router v7, Motion, Lucide React
- **프로젝트 연동:** Firebase Authentication / Firestore, SoundCloud Widget API, iTunes Search API
- **배포:** GitHub Pages, Cloudflare Workers Static Assets, GitHub Actions

## 💡 기술 선택 이유

- **React Router v7**: 프로젝트 상세 페이지를 `/project/:id` 구조로 구성했습니다. 프로젝트 데이터만 추가하면 카드와 상세 페이지가 함께 생성되도록 해, 프로젝트가 늘어날 때 라우트와 페이지 파일을 반복 작성하지 않도록 했습니다.
- **motion/react**: 포트폴리오의 정보 탐색을 방해하지 않는 범위에서 페이지 진입과 헤더 상태 변화에만 제한적으로 사용했습니다. 시각 효과보다 콘텐츠 가독성을 우선했습니다.
- **Tailwind CSS v4**: 빠른 반응형 조정과 일관된 spacing 관리를 위해 사용했습니다. 다만 프로젝트별 상세 콘텐츠는 데이터 구조로 분리해 스타일과 콘텐츠가 섞이지 않도록 했습니다.
- **Cloudflare Workers**: NEWTRONOME과 Dockit의 Vite 빌드 결과물을 Static Assets로 배포하고, GitHub Actions에서 배포가 이어지도록 구성했습니다.

## 📁 포트폴리오 구조 설명

이 포트폴리오 자체가 React 프로젝트입니다.

- Feature-Sliced Design 폴더 구조 적용
- 프로젝트 데이터를 TypeScript 타입으로 정의하고 컴포넌트에서 분리
- GitHub Pages 자동 배포

```text
src/
├── app/
├── features/
│   └── projects/
│       ├── components/
│       └── data/
├── pages/
│   ├── about/
│   ├── portfolio/
│   │   ├── data/
│   │   └── ui/
│   └── project-detail/
├── shared/
│   └── lib/
├── styles/
└── widgets/
    └── header/
```

## ▶️ 설치 및 실행

```bash
npm install
npm run dev
```

## ✅ 빌드 확인

```bash
npm run typecheck
npm run build
```

## 🔍 품질 검증 자동화

GitHub Actions를 사용해 `main` 브랜치로 push하거나 pull request를 열 때마다 타입 체크와 프로덕션 빌드를 자동으로 검증합니다.  
이를 통해 배포 전 TypeScript 오류와 빌드 실패를 먼저 확인할 수 있도록 구성했습니다.

## 🌱 배운 것 / 앞으로 할 것

- 퍼블리싱 실무 경험을 React 컴포넌트 구조로 옮기며, 반복 UI를 데이터 기반으로 렌더링하는 방식을 정리했습니다.
- 별도의 Client ID나 비공식 API 요청 없이 공식 SoundCloud Widget을 활용해 플레이리스트 재생과 트랙 정보를 구성했습니다.
- Widget 재생 이벤트를 Zustand 상태와 연결해 트랙 목록, 플레이리스트 패널, 하단 컨트롤의 상태를 동기화했습니다.
- iTunes Search API 응답을 `unknown`으로 받고 타입 가드로 검증하며, `AbortController`로 연속 검색 요청의 경쟁 상태를 처리했습니다.
- SoundCloud Widget과 별도 미리듣기 오디오의 실제 재생 이벤트를 연결해 두 소스가 동시에 재생되지 않도록 구성했습니다.
- NEWTRONOME의 React 애플리케이션 코드를 TypeScript로 전환하고, 주요 페이지 지연 로딩과 선택적 모듈 import로 메인 번들을 줄였습니다.
- 다음 단계에서는 이 README에도 프로젝트 대표 화면과 GitHub 링크를 추가하고, 상세 페이지의 개선 전후 근거를 더 구체화할 예정입니다.
