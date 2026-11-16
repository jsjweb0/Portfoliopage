# Sujin Portfolio

> 웹 퍼블리셔 8년 경력을 바탕으로 React/TypeScript로 전환 중인  
> 프론트엔드 포트폴리오입니다.

[Demo](https://jsjweb0.github.io/Portfoliopage/) · [GitHub](https://github.com/jsjweb0)

## 이 포트폴리오가 보여주려는 것

1. **퍼블리셔에서 프론트엔드로 확장하는 과정**  
   웹 퍼블리셔로 일하며 반복되는 페이지 구조, 다국어 레이아웃, 로그인 상태별 UI, 운영 중 수정 비용을 직접 경험했습니다. 이후 React 프로젝트에서는 이 경험을 컴포넌트 분리, 데이터 기반 렌더링, 상태 관리, 입력 검증 구조로 확장했습니다.

2. **데이터 기반 컴포넌트 설계**  
   프로젝트 정보를 TypeScript 타입으로 정의하고, 메인 목록과 상세 페이지를 같은 데이터에서 동적으로 렌더링합니다.

3. **실제 배포와 외부 서비스 연동 경험**  
   SoundCloud Widget과 iTunes Search API를 음악 서비스에 연결하고, Firebase Authentication/Firestore로 인증과 사용자별 데이터를 관리했습니다. GitHub Pages와 Cloudflare Workers Static Assets를 통해 프로젝트별 배포 흐름도 구성했습니다.

## 주요 프로젝트

### React 프로젝트

| 프로젝트   | 핵심 구현                                                                               | 기술                                                                                                                                                                                                             | 링크                                                                                       |
| ---------- | --------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| DocKit     | 이력서·자기소개서·경력기술서·프로젝트 보고서 작성, 실시간 A4 미리보기, 저장·검증·PDF 출력 | React, TypeScript, Vite, Tailwind CSS, React Router, Radix UI, Vitest, localStorage, Cloudflare Workers                                                                                                          | [사이트](https://dockit.jsjweb0.workers.dev/) · [GitHub](https://github.com/jsjweb0/dockit)     |
| NEWTRONOME | SoundCloud Widget 재생 제어, iTunes 음악 검색·미리듣기, Firebase 사용자별 트랙 저장     | React, TypeScript, Vite, Tailwind CSS, Zustand, TanStack Query, Firebase Authentication / Firestore, SoundCloud Widget API, iTunes Search / Lookup API, Vitest, Playwright, Cloudflare Workers Static Assets, GitHub Actions | [사이트](https://newtronome.jsjweb0.workers.dev) · [GitHub](https://github.com/jsjweb0/newtronome) |

### 실무 퍼블리싱 프로젝트

| 프로젝트 | 핵심 구현                                             | 기술                            | 기여도 | 링크                                           |
| -------- | ----------------------------------------------------- | ------------------------------- | ------ | ---------------------------------------------- |
| FIS Chat | 외부 React 챗봇 UI 커스터마이징, 반응형 전환          | React 커스터마이징, CSS         | 100%   | [보기](https://www.atfis.or.kr/fis-everything) |
| 농넷     | 로그인/권한/관심품목 조건부 UI, 데이터 대시보드       | HTML, CSS, JavaScript, amCharts | 100%   | [보기](https://www.nongnet.or.kr)              |
| 고흥관광 | 100여 개 서브페이지, 다국어 반응형, SVG 지도 인터랙션 | HTML, CSS, JavaScript, SVG      | 90%    | [보기](https://tour.goheung.go.kr)             |

## 기술 스택

- **포트폴리오:** React 18, TypeScript, Vite, Tailwind CSS v4
- **라이브러리:** React Router v7, Lucide React
- **프로젝트 연동:** Firebase Authentication / Firestore, SoundCloud Widget API, iTunes Search API
- **배포:** GitHub Pages, Cloudflare Workers Static Assets, GitHub Actions

## 기술 선택 이유

- **React Router v7**: 프로젝트 상세 페이지를 `/project/:id` 구조로 구성했습니다. 프로젝트 데이터만 추가하면 목록과 상세 페이지가 함께 생성되도록 해, 프로젝트가 늘어날 때 라우트와 페이지 파일을 반복 작성하지 않도록 했습니다. GitHub Pages에서 새로고침 시 404가 나지 않도록 `createHashRouter`를 사용합니다.
- **CSS 기반 인터랙션**: 애니메이션 라이브러리 없이 CSS transition과 anchor positioning으로 hover 효과를 구성했습니다. 움직임은 목록 hover와 링크 밑줄 정도로 제한하고, 시스템의 '동작 줄이기' 설정에서는 전환 효과를 끕니다.
- **Tailwind CSS v4**: 빠른 반응형 조정과 일관된 spacing 관리를 위해 사용했습니다. 색상은 CSS 변수로 정의해 다크/라이트 테마를 같은 클래스로 전환하고, 프로젝트별 상세 콘텐츠는 데이터 구조로 분리해 스타일과 콘텐츠가 섞이지 않도록 했습니다.
- **Cloudflare Workers**: NEWTRONOME과 DocKit의 Vite 빌드 결과물을 Static Assets로 배포하고, GitHub Actions에서 배포가 이어지도록 구성했습니다.

## UI·접근성

- **다크/라이트 테마**: 저장된 선택 → 시스템 설정 순으로 테마를 정하고, `index.html`에서 화면이 그려지기 전에 적용해 첫 화면 깜빡임을 막았습니다. 색상은 CSS 변수로만 바뀝니다.
- **목록 hover**: CSS anchor positioning으로 하이라이트 하나가 행 사이를 이동합니다. 지원하지 않는 브라우저에서는 행 배경만 바뀌도록 `@supports`로 대체 스타일을 두었습니다.
- **상세 목차**: IntersectionObserver로 지금 읽고 있는 섹션을 목차에 표시하고(`aria-current`), 모바일에서는 가로 탭이 현재 항목을 따라 이동합니다.
- **해시 라우터 대응**: `#work` 같은 같은 페이지 내 이동 링크가 라우트 변경으로 처리되지 않도록 직접 스크롤하도록 처리했습니다.
- **키보드·스크린리더**: 본문 바로가기, 키보드 포커스 링, 아이콘 버튼의 접근 가능한 이름, 새 창 링크 안내를 적용했습니다.

## 포트폴리오 구조 설명

이 포트폴리오 자체가 React 프로젝트입니다.

- Feature-Sliced Design 구조를 참고한 폴더 구성
- 프로젝트 데이터를 TypeScript 타입으로 정의하고 컴포넌트에서 분리
- GitHub Pages 자동 배포

```text
src/
├── app/                  # 라우터, 에러 경계
├── features/
│   └── projects/
│       ├── components/   # 프로젝트 목록 행
│       └── data/         # 프로젝트 데이터·타입
├── pages/
│   ├── not-found/
│   ├── portfolio/        # 메인
│   │   ├── data/
│   │   └── ui/
│   └── project-detail/   # 상세
├── shared/
│   └── lib/              # useTheme, useActiveSection, scrollToSection 등
├── styles/               # 테마 변수, hover 스타일
└── widgets/
    └── header/
```

## 설치 및 실행

```bash
npm install
npm run dev
```

## 빌드 확인

```bash
npm run typecheck
npm run build
```

## 품질 검증 자동화

GitHub Actions를 사용해 `main` 브랜치로 push하거나 pull request를 열 때마다 타입 체크와 프로덕션 빌드를 자동으로 검증합니다.  
이를 통해 배포 전 TypeScript 오류와 빌드 실패를 먼저 확인할 수 있도록 구성했습니다.

## 배운 것 / 앞으로 할 것

- 퍼블리싱 실무 경험을 React 컴포넌트 구조로 옮기며, 반복 UI를 데이터 기반으로 렌더링하는 방식을 정리했습니다.
- 별도의 Client ID나 비공식 API 요청 없이 공식 SoundCloud Widget을 활용해 플레이리스트 재생과 트랙 정보를 구성했습니다.
- Widget 재생 이벤트를 Zustand 상태와 연결해 트랙 목록, 플레이리스트 패널, 하단 컨트롤의 상태를 동기화했습니다.
- iTunes Search API 응답을 `unknown`으로 받고 타입 가드로 검증하며, `AbortController`로 연속 검색 요청의 경쟁 상태를 처리했습니다.
- SoundCloud Widget과 별도 미리듣기 오디오의 실제 재생 이벤트를 연결해 두 소스가 동시에 재생되지 않도록 구성했습니다.
- NEWTRONOME의 React 애플리케이션 코드를 TypeScript로 전환하고, 주요 페이지 지연 로딩과 선택적 모듈 import로 메인 번들을 줄였습니다.
- 이 포트폴리오를 리뉴얼하며 애니메이션 라이브러리를 걷어내고 CSS로 인터랙션을 옮겨, JS 번들을 약 409KB에서 287KB로 줄였습니다.
- 다음 단계에서는 이 README에 프로젝트 대표 화면을 추가하고, 상세 페이지의 개선 전후 근거를 더 구체화할 예정입니다.
