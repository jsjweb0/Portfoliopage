# src folder guide

이 프로젝트는 포트폴리오 규모에 맞춰 역할 중심으로 폴더를 나눕니다.
큰 서비스처럼 복잡하게 쪼개기보다, 채용자가 봤을 때 라우트, 기능, 공용 UI의 경계가 보이도록 구성합니다.

## app

앱 실행에 필요한 최상위 설정을 둡니다.

- `App.tsx`: 라우터 같은 전역 provider를 연결합니다.
- `routes.tsx`: URL 경로와 페이지 컴포넌트를 매핑합니다.

## pages

라우트 단위 화면을 둡니다.
페이지는 여러 feature, widget, shared 요소를 조합해서 하나의 화면을 만듭니다.

- `portfolio/ui/PortfolioPage.tsx`: 메인 포트폴리오 목록 화면입니다.
- `project-detail/ui/ProjectDetailPage.tsx`: 프로젝트 상세 화면입니다.

## features

비즈니스 의미가 있는 기능 단위를 둡니다.
이 프로젝트에서는 `projects`가 핵심 도메인입니다.

- `projects/data/projects.ts`: 프로젝트 목록, 상세 데이터, 타입 정의를 관리합니다.
- `projects/components/ProjectCard.tsx`: 프로젝트 도메인에 속한 카드 컴포넌트입니다.

## widgets

페이지 여러 곳에서 조합 단위로 쓰이는 UI 블록을 둡니다.
단순 버튼보다 크고, 페이지 전체보다는 작은 영역입니다.

- `header/Header.tsx`: 상단 헤더 영역입니다.

## shared

도메인에 의존하지 않는 공용 코드를 둡니다.
어떤 페이지나 feature에서도 재사용할 수 있어야 합니다.

- `ui`: 버튼, 탭, 모달 같은 범용 UI 컴포넌트입니다.
- `figma`: Figma export 또는 디자인 소스에서 온 보조 컴포넌트입니다.

## styles

전역 스타일, 폰트, Tailwind, 테마 설정을 둡니다.
