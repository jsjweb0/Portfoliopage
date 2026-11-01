export type ProjectSectionType =
  | 'overview'
  | 'work'
  | 'problem'
  | 'tech'
  | 'result';

type ProblemSolutionItem = {
  problem: string;
  solution: string;
};

type TextSection = {
  type: Exclude<ProjectSectionType, 'problem'>;
  title: string;
  content: string | string[];
};

type ProblemSection = {
  type: 'problem';
  title: string;
  content: ProblemSolutionItem[];
};

export type ProjectSection = TextSection | ProblemSection;

export interface ProjectPreviewImage {
  src: string;
  alt: string;
  caption: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'Publishing' | 'React';
  year: string;
  role: string;
  contribution: string;
  stack: string;
  duration: string;
  summary?: string;
  description: string;
  tags: string[];
  link: string;
  github?: string;
  previewImages?: ProjectPreviewImage[];
  sections: ProjectSection[];
}

export const projects: Project[] = [
  {
    id: '01',
    title: '고흥관광',
    category: 'Publishing',
    year: '2024',
    role: 'Web Publisher',
    contribution: 'Publishing 90%',
    stack: 'HTML · CSS · JavaScript · SVG · Responsive · Multilingual',
    duration: '2024.04 - 2024.11',
    description:
      '100여 개 서브페이지와 3개 언어(한/영/중)에 대응한 관광 사이트 전면 개편 프로젝트입니다. SVG 코드 기반 지도 인터랙션과 BEM 템플릿 구조로 대규모 화면을 관리했습니다.',
    tags: ['Responsive', 'Multilingual', 'SVG', 'BEM'],
    link: 'https://tour.goheung.go.kr',
    previewImages: [
      {
        src: 'images/projects/goheung_pc_1.jpg',
        alt: '고흥관광 PC 메인 화면',
        caption:
          '관광 콘텐츠 탐색 흐름을 고려해 메인 비주얼과 주요 메뉴를 구성한 PC 화면',
      },
      {
        src: 'images/projects/goheung_pc_2.jpg',
        alt: '고흥관광 PC 콘텐츠 화면',
        caption:
          'SVG 지도에서 각 행정 구역을 독립 요소로 분리해 hover/click 상태를 제어',
      },
      {
        src: 'images/projects/goheung_eng.jpg',
        alt: '고흥관광 영문 화면',
        caption:
          '번역 언어에 따라 달라지는 텍스트 길이를 유연한 레이아웃으로 흡수한 영문 화면',
      },
      {
        src: 'images/projects/goheung_mo.jpg',
        alt: '고흥관광 모바일 화면',
        caption:
          '모바일에서 관광 정보 탐색이 이어지도록 콘텐츠 우선순위를 재배치한 반응형 화면',
      },
    ],
    sections: [
      {
        type: 'overview',
        title: 'Overview',
        content:
          '고흥관광 홈페이지를 전면 개편한 대규모 퍼블리싱 프로젝트입니다. 한국어, 영어, 중국어 3개 언어와 100여 개 서브페이지를 안정적으로 운영해야 하는 구조였습니다.\n\n화면 수가 많을수록 개별 수정 비용이 커지는 문제를 줄이기 위해 공통 요소와 가변 요소를 분리한 BEM 기반 템플릿 구조를 우선 설계한 뒤 페이지 작업을 진행했습니다.',
      },
      {
        type: 'work',
        title: 'Key Work',
        content: [
          '전체 100여 개 페이지 반응형 UI 구현',
          '한/영/중 다국어 환경을 고려한 유연한 레이아웃 구성',
          'BEM 네이밍 기반 템플릿 구조 설계로 반복 화면 작업 효율 개선',
          'SVG 파일을 코드로 전환해 각 행정구역을 독립 DOM 요소로 분리',
          '지역 선택 시 색상, 툴팁, 정보 연결 등 즉각적인 시각 피드백 제공',
        ],
      },
      {
        type: 'problem',
        title: 'Problem & Solution',
        content: [
          {
            problem:
              '서브페이지 100여 개를 개별 관리하면 수정이 발생할 때마다 여러 화면을 동시에 확인해야 했습니다.',
            solution:
              '공통 요소와 콘텐츠 영역을 분리한 BEM 템플릿 구조를 설계해 반복 마크업을 줄이고, 공통 블록 수정이 전체 페이지에 일관되게 반영되도록 했습니다.',
          },
          {
            problem:
              '번역 언어에 따라 텍스트 길이가 달라지면서 버튼과 메뉴 레이아웃이 어긋나는 케이스가 있었습니다.',
            solution:
              'px 고정값보다 em, rem, %, Flexbox, Grid를 활용해 콘텐츠 길이에 따라 자연스럽게 늘어나는 레이아웃으로 구현했습니다.',
          },
          {
            problem:
              '이미지 지도는 특정 지역을 정확히 선택하기 어렵고 선택 상태를 시각적으로 보여주기 제한적이었습니다.',
            solution:
              'PNG 이미지를 SVG 코드로 전환해 행정구역을 각각 독립 요소로 제어하고, hover 시 색상 변경과 click 시 관광 정보 연결이 가능하도록 구현했습니다.',
          },
        ],
      },
      {
        type: 'tech',
        title: 'Technical Points',
        content: [
          'BEM + 템플릿 전략: 대규모 페이지를 공통 구조로 묶어 수정 범위를 줄이는 마크업 아키텍처 설계',
          'SVG Manipulation: 이미지가 아닌 코드 기반 벡터 그래픽으로 전환해 각 지역 상태를 직접 제어',
          'Global Layout: 상대 단위와 Flexbox/Grid를 활용해 다국어 텍스트 길이 변화를 흡수',
          'Responsive Strategy: 디바이스별 콘텐츠 우선순위를 고려해 모바일 탐색 흐름 재배치',
          'Scalability: 운영 단계에서 콘텐츠 교체와 UI 수정이 분리되도록 구조와 스타일을 정리',
        ],
      },
      {
        type: 'result',
        title: 'Summary',
        content:
          '퍼블리싱 90%를 담당하며 3개 언어와 100여 개 서브페이지의 반응형 UI를 구현했습니다. 공통 블록과 가변 콘텐츠를 분리해 페이지별 반복 수정 범위를 줄였고, 다국어 텍스트 길이로 인한 레이아웃 깨짐을 상대 단위와 유동 레이아웃으로 대응했습니다.\n\n이 프로젝트 이후 마크업 설계를 시작할 때 나중에 어떤 부분이 바뀔 수 있는지 먼저 고민하게 되었고, 현재 React 프로젝트에서도 같은 관점으로 컴포넌트 경계를 나누고 있습니다.',
      },
    ],
  },
  {
    id: '02',
    title: 'FIS Chat',
    category: 'Publishing',
    year: '2025',
    role: 'Web Publisher',
    contribution: 'Publishing 100%',
    stack: 'React · HTML · CSS · Responsive UI · Component Customizing',
    duration: '2025.11',
    description:
      '범용 챗봇 솔루션의 React 컴포넌트 구조를 분석해 FIS 서비스 디자인에 맞게 재구성했습니다. PC 중심 구조를 반응형으로 전환하고 미사용 기능을 정리해 서비스에 필요한 UI만 남겼습니다.',
    link: 'https://www.atfis.or.kr/fis-everything',
    tags: ['React Analysis', 'Responsive', 'Chat UI', 'Customization'],
    previewImages: [
      {
        src: 'images/projects/fis_pc_1.png',
        alt: 'FIS Chat PC 초기 화면',
        caption:
          '서비스 톤에 맞춰 챗봇 진입 화면과 질문 유도 UI를 커스터마이징한 PC 화면',
      },
      {
        src: 'images/projects/fis_pc_2.png',
        alt: 'FIS Chat PC 답변 화면',
        caption:
          '출처 문서, 답변 내용, 추천 질문 영역을 한 화면에서 확인할 수 있도록 구성한 PC 답변 화면',
      },
      {
        src: 'images/projects/fis_mo.jpg',
        alt: 'FIS Chat 모바일 화면',
        caption:
          '모바일 환경에서 질문 선택과 답변 확인 흐름이 끊기지 않도록 조정한 반응형 화면',
      },
    ],
    sections: [
      {
        type: 'overview',
        title: 'Overview',
        content:
          '외부에서 제공된 범용 React 챗봇 솔루션은 FIS 서비스의 화면 흐름과 맞지 않았고, PC 중심 구조라 모바일 사용성이 떨어졌습니다. 컴포넌트 계층과 스타일 적용 방식을 먼저 분석한 뒤, 서비스에 필요한 기능만 남기고 질문 입력, 답변 확인, 추천 질문 흐름을 반응형 UI로 재구성했습니다. 이를 통해 기존 서비스 안에서 이질감 없이 동작하는 챗봇 화면으로 정리했습니다.',
      },
      {
        type: 'work',
        title: 'Key Work',
        content: [
          '외부 React 코드베이스의 컴포넌트 의존 관계를 파악하고 수정 범위 선정',
          '미사용 기능과 불필요한 컴포넌트를 정리해 유지보수 대상 축소',
          'PC 중심으로 구성된 레이아웃을 모바일에서도 사용 가능한 반응형 구조로 재설계',
          '검색 조건 및 필터링 UI 컴포넌트 설계와 추가',
          'FIS 기존 웹 서비스 디자인 가이드를 기준으로 챗봇 UI 스타일링',
        ],
      },
      {
        type: 'problem',
        title: 'Problem & Solution',
        content: [
          {
            problem:
              '기존 챗봇이 PC 중심 구조로 개발되어 모바일에서 사용 흐름이 불편했습니다.',
            solution:
              '뷰포트별 콘텐츠 노출 우선순위를 재정리하고 반응형 레이아웃으로 개편해 스마트폰에서도 질문 입력과 답변 확인 흐름이 이어지도록 했습니다.',
          },
          {
            problem:
              '범용 솔루션이라 FIS 서비스와 맞지 않는 기능과 컴포넌트가 포함되어 있었습니다.',
            solution:
              '컴포넌트 의존 관계를 분석한 뒤 미사용 기능을 제거하고, 서비스에 필요한 기능 중심으로 컴포넌트 계층을 단순화했습니다.',
          },
          {
            problem:
              '외부 솔루션의 기본 디자인이 기존 웹 서비스와 이질적으로 보였습니다.',
            solution:
              'FIS 디자인 가이드의 색상, 타이포그래피, 간격 기준을 반영해 챗봇 마크업과 스타일을 수정하고 서비스 내 시각적 일관성을 확보했습니다.',
          },
        ],
      },
      {
        type: 'tech',
        title: 'Technical Points',
        content: [
          'React 컴포넌트 분석: 외부 코드베이스의 컴포넌트 계층, Props 흐름, 스타일 적용 방식을 파악해 수정 범위 설정',
          '선택적 리팩토링: 전체 재작성 대신 유지할 코드와 교체할 코드를 구분해 변경 범위 관리',
          '반응형 전환: 기존 PC 기준 고정 레이아웃을 유동적인 모바일 대응 구조로 조정',
          '디자인 시스템 통합: 외부 컴포넌트에 서비스 디자인 가이드를 적용하는 CSS 오버라이드 전략 구성',
          '컴포넌트 확장: 검색/필터 UI를 기존 구조를 해치지 않는 방식으로 추가',
        ],
      },
      {
        type: 'result',
        title: 'Summary',
        content:
          '퍼블리싱 100%를 담당하며 외부 React 코드베이스를 분석해 FIS 서비스에 필요한 화면 흐름만 남기고 반응형 챗봇 UI로 재구성했습니다. PC 중심 레이아웃을 모바일 대응 구조로 바꾸고, 미사용 기능을 정리해 유지보수 대상 컴포넌트를 줄였습니다.\n\n이 프로젝트를 통해 React 컴포넌트가 어떻게 구성되는지, Props와 스타일이 어떤 흐름으로 연결되는지 실무 코드에서 익힐 수 있었습니다.',
      },
    ],
  },
  {
    id: '03',
    title: '농넷',
    category: 'Publishing',
    year: '2025',
    role: 'Web Publisher',
    contribution: 'Publishing 100%',
    stack: 'HTML · CSS · JavaScript · amChart',
    duration: '2025.12 - 2026.02',
    description:
      '로그인 전/후, 권한, 관심품목 여부에 따라 화면 구성이 달라지는 조건부 UI와 품목별 데이터 대시보드를 구현했습니다. 단일 컨테이너 구조와 data-* 속성으로 확장 가능한 UI 흐름을 설계했습니다.',
    tags: ['Dashboard', 'Conditional UI', 'data-*', 'Responsive'],
    link: 'https://www.nongnet.or.kr',
    previewImages: [
      {
        src: 'images/projects/nongnet_pc.png',
        alt: '농넷 메인 로그아웃 화면',
        caption:
          '로그아웃 상태에서도 주요 가격 정보를 바로 확인할 수 있도록 구성한 메인 화면',
      },
      {
        src: 'images/projects/nongnet_pc_login.jpg',
        alt: '농넷 메인 로그인 후 화면',
        caption:
          '로그인 후 관심품목과 사용자 맞춤 정보를 우선 노출하도록 분기한 화면',
      },
      {
        src: 'images/projects/nongnet_mo.jpg',
        alt: '농넷 메인 모바일 화면',
        caption:
          '모바일에서도 가격 정보와 주요 콘텐츠를 확인할 수 있도록 재배치한 반응형 화면',
      },
    ],
    sections: [
      {
        type: 'overview',
        title: 'Overview',
        content:
          '농넷 메인 개편과 품목별 데이터 대시보드 상황판 UI를 구현한 프로젝트입니다.\n\n로그인 여부, 권한, 관심품목 상태에 따라 화면 구성이 달라져야 했고, 품목 수가 늘어날수록 DOM과 분기 관리가 복잡해질 수 있었습니다. 전역 상태는 body class로, 품목별 상태는 data-* 속성으로 분리하고, 선택된 품목 데이터만 단일 컨테이너에 갱신하는 방식으로 구현했습니다. 그 결과 Vanilla JS 환경에서도 React의 조건부 렌더링과 유사한 상태 기반 UI 흐름을 설계할 수 있었습니다.',
      },
      {
        type: 'work',
        title: 'Key Work',
        content: [
          '로그인 상태, 권한, 관심품목 여부에 따른 조건부 UI 구조 설계',
          'body 클래스 기반으로 로그인/권한 같은 전역 상태 제어',
          'data-* 속성으로 품목 식별자를 DOM에 바인딩해 탭 전환 시 해당 품목 데이터 갱신',
          '품목마다 DOM을 생성하지 않고 선택된 품목 데이터로 단일 컨테이너를 업데이트',
          '관심품목 탭이 가로 스크롤 구조가 될 때 선택 탭이 중앙에 오도록 scrollIntoView 적용',
          '가격, 거래량, 지표, amChart 차트 영역을 포함한 데이터 대시보드 UI 퍼블리싱',
        ],
      },
      {
        type: 'problem',
        title: 'Problem & Solution',
        content: [
          {
            problem:
              '로그인 전/후 화면, 권한별 화면, 모바일/PC 화면이 다르게 동작해야 해서 분기 관리가 복잡했습니다.',
            solution:
              'body에 상태 클래스를 부여하고 CSS에서 해당 상태에 맞는 UI를 보여주는 방식으로 전역 분기 구조를 단순화했습니다.',
          },
          {
            problem:
              '관심품목 수가 늘어나면서 탭이 가로 스크롤 영역이 되었고, 선택한 탭이 화면 밖으로 밀려나는 경우가 있었습니다.',
            solution:
              '탭 클릭 시 scrollIntoView를 적용해 선택 탭이 뷰포트 중앙에 오도록 개선했습니다.',
          },
          {
            problem:
              '품목별로 가격, 거래량, 차트 DOM을 모두 생성하면 품목이 늘어날수록 초기 렌더링 부담이 커질 수 있었습니다.',
            solution:
              '단일 콘텐츠 컨테이너를 두고 탭 전환 시 해당 품목의 데이터로 이미지, 가격, 지표 영역만 교체하는 방식으로 설계했습니다.',
          },
          {
            problem:
              '품목 식별자를 JS 변수나 선택자 문자열로 하드코딩하면 품목 추가/삭제 시 코드 수정 범위가 커졌습니다.',
            solution:
              '품목 식별값을 data-* 속성으로 관리해 HTML 구조 확장만으로 탭 동작을 유지할 수 있도록 했습니다.',
          },
        ],
      },
      {
        type: 'tech',
        title: 'Technical Points',
        content: [
          '상태 계층 분리: body 클래스는 로그인/권한 같은 전역 상태, data-* 속성은 품목 식별/탭 active 같은 컴포넌트 상태에 사용',
          '단일 컨테이너 패턴: 품목마다 DOM을 생성하지 않고 하나의 컨테이너를 데이터로 업데이트',
          'data-* 기반 이벤트 처리: 하드코딩 선택자 없이 품목 식별값을 읽어 탭 전환 처리',
          'scrollIntoView UX: 가로 스크롤 탭에서 활성 항목이 중앙에 오도록 처리',
        ],
      },
      {
        type: 'result',
        title: 'Summary',
        content:
          '퍼블리싱 100%를 담당했습니다. 단순 정적 화면을 넘어 상태 기반 UI 분기, 데이터 바인딩, DOM 구조 최적화를 Vanilla JS 환경에서 설계한 프로젝트입니다.\n\n이 경험을 통해 React의 조건부 렌더링과 상태 관리가 어떤 문제를 해결하기 위해 필요한지 실제 화면 구현 과정에서 이해할 수 있었습니다.',
      },
    ],
  },
  {
    id: '04',
    title: 'NEWTRONOME',
    category: 'React',
    year: '2025 ~ 2026',
    role: 'Frontend Developer',
    contribution: '1인 기획·디자인·개발 (AI 협업)',
    stack:
      'React · TypeScript · Vite · Tailwind CSS · Zustand · TanStack Query · Firebase Authentication · Firestore · SoundCloud Widget API · iTunes Search / Lookup API · Vitest · Playwright · Cloudflare Workers Static Assets · GitHub Actions',
    duration: '2025.08 최초 제작 · 2026.07부터 리팩터링 및 기능 개선 진행 중',
    summary:
      '직접 고른 누디스코·하우스 음악을 SoundCloud 플레이리스트로 소개하고 랜덤으로 재생하는 음악 큐레이션 서비스입니다. iTunes 곡 검색·미리듣기, 사용자별 트랙 저장, 게시판도 함께 제공합니다.',
    description:
      '2025년 React 학습용으로 만든 서비스를 1년 뒤 리팩터링했습니다. 비공식 API 의존을 공식 SoundCloud Widget으로 바꾸고, 늦게 도착한 비동기 응답이 최신 화면을 덮어쓰지 않도록 상황별로 처리했습니다. 게시판의 직접 구현한 캐시는 TanStack Query로 옮겼고, 게시글 번호와 권한 검사는 Firestore 트랜잭션과 보안 규칙으로 검증합니다.',
    tags: [
      'React',
      'TypeScript',
      'SoundCloud Widget',
      'TanStack Query',
      'Zustand',
      'Firebase',
      'Responsive',
      'Accessibility',
    ],
    link: 'https://newtronome.jsjweb0.workers.dev',
    github: 'https://github.com/jsjweb0/newtronome',
    previewImages: [
      {
        src: 'images/projects/newtronome_pc.png',
        alt: 'NEWTRONOME 메인 화면',
        caption:
          '랜덤 SoundCloud 플레이리스트와 고정형 플레이어를 구성한 데스크톱 화면',
      },
      {
        src: 'images/projects/newtronome_search.jpg',
        alt: 'NEWTRONOME 음악 검색 결과와 미리듣기 화면',
        caption:
          'iTunes 음악 검색 결과와 미리듣기, 최근·추천 검색어를 구성한 데스크톱 화면',
      },
      {
        src: 'images/projects/newtronome_mobile.jpg',
        alt: 'NEWTRONOME 모바일 화면',
        caption: '플레이리스트 탐색과 하단 재생 컨트롤을 제공하는 모바일 화면',
      },
    ],
    sections: [
      {
        type: 'overview',
        title: 'Overview',
        content:
          '직접 고른 누디스코·하우스 음악을 SoundCloud 플레이리스트로 소개하고 랜덤으로 재생하는 음악 큐레이션 서비스입니다. 2025년 React와 Vite만으로 학습용으로 만든 뒤, 2026년 기존 화면과 기능을 유지하면서 TypeScript 전환과 구조 개선을 단계별 PR로 진행했습니다.\n\n외부 Widget과 API, Firestore 데이터를 다루면서 겪은 늦게 도착한 비동기 응답, 클라이언트를 신뢰할 수 없는 데이터 쓰기, 직접 관리하던 서버 상태 캐시 문제를 해결하는 데 집중했습니다. 구현은 ChatGPT·Codex와 함께 진행하고, 기능·동작 정책 결정과 코드 리뷰 반영, 테스트 검증을 맡았습니다.',
      },
      {
        type: 'work',
        title: 'Key Work',
        content: [
          '공식 SoundCloud Widget API 전환과 Widget 이벤트·Zustand 재생 상태 동기화',
          '좋아요한 곡은 한 곡만 재생하고, 미리듣기와 SoundCloud가 동시에 재생되지 않도록 재생 정책 설계',
          'Query Key, 요청 번호, mutation variables로 늦게 끝난 요청이 최신 화면을 덮어쓰지 않게 처리',
          '게시판 서버 상태를 TanStack Query로 전환하고 변경 후 영향받는 Query만 갱신',
          '게시글 번호 발급과 좋아요·권한 검사를 Firestore 트랜잭션과 보안 규칙으로 이동',
          '본문 바로가기, 포커스 가두기·복귀, 상태별 접근성 이름 등 반응형·키보드 접근성 구현',
          '단위·컴포넌트 테스트, Playwright E2E, Firestore 규칙 테스트를 PR마다 GitHub Actions에서 실행',
        ],
      },
      {
        type: 'problem',
        title: 'Problem & Solution',
        content: [
          {
            problem:
              '비공식 API로 플레이리스트와 스트림 URL을 조회해 Client ID나 요청 규격이 바뀌면 재생이 중단됐습니다. 또 소스를 바꿔 로딩하는 동안 고른 곡이 무시되거나 이전 곡 위치로 이동했습니다.',
            solution:
              '공식 Widget API로 바꿔 Client ID 관리를 없앴습니다. Widget의 load는 진행 중인 로딩을 취소할 수 없어서, 로딩 중의 선택을 실행할 함수로 ref에 저장했다가 로딩이 끝나면 마지막 선택 하나만 실행합니다. 응답이 없는 로딩은 10초 후 오류 상태로 바꾸고 다시 시도할 수 있습니다.',
          },
          {
            problem:
              '이전 요청의 응답이 나중에 도착해 사용자가 마지막으로 선택한 아티스트, 미리듣기 곡, 게시글 상태를 바꾸는 문제가 여러 곳에서 발생했습니다.',
            solution:
              '아티스트 곡 조회는 아티스트 ID별 Query Key와 AbortSignal로, 미리듣기는 재생 요청 번호로, 게시글 조회수는 요청 시점의 ID를 mutation variables로 전달하는 방식으로 상황마다 맞는 방법을 골라 처리했습니다.',
          },
          {
            problem:
              '게시판은 Provider에서 useRef로 목록을 캐싱하고 요청 version을 비교해 늦은 응답을 걸러 냈습니다. 기능이 늘면서 캐시 무효화와 요청 상태를 직접 관리해야 했고 Firestore 접근 로직까지 Provider에 섞여 있었습니다.',
            solution:
              'Firestore 접근을 service 계층으로 분리하고 게시판 서버 상태를 TanStack Query로 옮겼습니다. 목록·상세·내 글을 Query Key로 구분하고, 생성·수정·삭제 후에는 영향받는 Query만 무효화합니다.',
          },
          {
            problem:
              '게시글 번호를 클라이언트에서 가장 큰 번호 + 1로 계산해 동시에 글을 쓰면 번호가 중복될 수 있었고, 관리자는 특정 이메일 문자열로 판별했습니다.',
            solution:
              '카운터 문서를 runTransaction으로 증가시키고 보안 규칙에서도 카운터와 문서 ID를 다시 검사합니다. 관리자는 Custom Claim으로, 작성자는 UID로만 판별하고, 좋아요는 본인 UID 하나와 정확히 1만 바뀌도록 규칙에서 제한합니다.',
          },
        ],
      },
      {
        type: 'tech',
        title: 'Technical Points',
        content: [
          '취소할 수 없는 Widget 로딩: 마지막 선택만 미뤘다가 실행하는 보류 방식',
          '늦은 응답 처리: Query Key·AbortSignal, 요청 번호, mutation variables를 상황별로 선택',
          '상태 역할 분리: 원격 데이터는 TanStack Query, 재생 상태는 Zustand, 앱 전반 상태는 Context',
          '외부 데이터 런타임 검증: iTunes 응답은 unknown으로 받아 타입 가드로 검증하고, Widget 응답과 Firestore 문서도 검증·변환',
          'Firestore 보안 규칙: 트랜잭션 결과를 getAfter로 재검증하고 Emulator 테스트로 거부 조건 확인',
          '반응형·접근성: 모바일 플레이리스트 포커스 가두기와 inert, prefers-reduced-motion 대응',
        ],
      },
      {
        type: 'result',
        title: 'Result & Next Steps',
        content:
          '공식 Widget 전환으로 Client ID 관리와 스트림 URL 변환을 없앴고, 로딩 중의 선택 유실과 늦은 비동기 응답 문제를 상황별 방식으로 해결했습니다. 게시판 서버 상태를 TanStack Query로 옮긴 뒤 요청 실패 시 작성 중인 입력과 기존 조회 데이터를 유지하는 동작을 테스트로 확인했습니다.\n\n현재 게시판은 전체 글을 한 번에 조회하므로 커서 기반 페이지네이션으로 개선할 계획입니다. iPhone Safari에서는 iTunes 서버가 Music 앱 스킴으로 리디렉트해 CORS 정책상 검색이 차단되는 문제가 있어 서버 측 프록시를 검토하고 있습니다.',
      },
    ],
  },
  {
    id: '05',
    title: 'DocKit',
    category: 'React',
    year: '2026',
    role: 'Frontend Developer',
    contribution: '1인 기획·개발 (AI 협업)',
    stack:
      'React · TypeScript · Vite · Tailwind CSS · React Router · Radix UI · Vitest · localStorage · Cloudflare Workers',
    duration: '2026.04 - 2026.08',
    summary:
      '이력서, 자기소개서, 경력기술서, 프로젝트 보고서를 입력과 동시에 A4 제출 형태로 확인하고 PDF로 출력하는 React + TypeScript 문서 편집기입니다.',
    description:
      '칸 하나를 고치면 표가 깨지고, 누락·형식 오류를 제출 직전에야 발견하는 국문 제출 문서의 불편을 줄이기 위해 만들었습니다. 입력과 동시에 A4 미리보기를 보여 주고, 오류가 있는 탭과 첫 입력으로 이동하며, 마지막 변경 60초 후 자동 저장합니다. 중앙 설정이 새 문서 추가를 막던 구조는 각 BuilderPage가 Form, Preview, 검증을 직접 조립하는 방식으로 바꿨습니다.',
    tags: [
      'React',
      'TypeScript',
      'Responsive',
      'Accessibility',
      'Validation',
      'localStorage',
    ],
    link: 'https://dockit.jsjweb0.workers.dev/',
    github: 'https://github.com/jsjweb0/dockit',
    previewImages: [
      {
        src: 'images/projects/dockit_pc_1.jpg',
        alt: 'DocKit 국문 취업 문서 작성 도구 PC 화면',
        caption: '이력서, 자기소개서, 경력기술서, 프로젝트 보고서 양식 목록',
      },
      {
        src: 'images/projects/dockit_pc_2.jpg',
        alt: 'DocKit 국문 취업 문서 작성 도구 PC 화면',
        caption: '입력 폼과 A4 미리보기를 나란히 배치한 데스크톱 화면',
      },
      {
        src: 'images/projects/dockit_mobile.jpg',
        alt: 'DocKit 이력서 작성 도구 모바일 화면',
        caption: '모바일에서 입력 흐름을 유지하도록 정리한 이력서 작성 화면',
      },
    ],
    sections: [
      {
        type: 'overview',
        title: 'Overview',
        content:
          '국문 이력서·자기소개서·경력기술서·프로젝트 보고서 4종을 입력과 동시에 A4로 확인하는 문서 편집기입니다. 입력, 검증, 저장, 미리보기, PDF 출력을 한 흐름으로 묶었습니다.\n\n문서별 요구사항이 다른 만큼 중앙 설정에 기능을 몰아넣지 않고, 화면과 검증은 문서마다 두고 저장·자동 저장·이탈 경고·출력만 공통으로 쓰는 구조로 정리했습니다. 구현은 ChatGPT·Codex와 함께 진행하고, 기능·동작 정책 결정과 코드 리뷰 반영, 테스트 검증을 맡았습니다.',
      },
      {
        type: 'work',
        title: 'Key Work',
        content: [
          '4종 문서의 타입, 기본값, 샘플 데이터와 입력·A4 미리보기 화면 설계',
          '탭별 오류 개수 표시와 출력 전 첫 오류 입력으로 포커스 이동',
          'aria-invalid·aria-describedby로 오류 문구를 입력과 연결',
          '마지막 변경 60초 후 자동 저장, 초안 복원, 미저장 이탈 경고',
          '각 BuilderPage에서 문서별 Form, Preview, 검증 흐름을 직접 조립',
          '인쇄 전용 CSS로 표 테두리·페이지 나눔을 맞춘 PDF 출력',
        ],
      },
      {
        type: 'problem',
        title: 'Problem & Solution',
        content: [
          {
            problem:
              '중앙 설정(editor.config)이 모든 문서에 저장·검증·예시·PDF를 요구해, 새 문서 하나를 띄우려면 이 기능을 모두 먼저 만들어야 했습니다.',
            solution:
              '중앙 설정 235줄을 지우고 각 BuilderPage가 Form, Preview, 검증을 직접 조립하도록 바꿨습니다. 저장·자동 저장·이탈 경고·출력만 공통으로 두어 폼과 미리보기만으로 화면을 먼저 확인할 수 있게 했습니다.',
          },
          {
            problem:
              '움직임 줄이기 설정이 켜져 있으면 미리보기가 닫히지 않고 멈췄습니다. 직접 사용하며 발견한 문제입니다.',
            solution:
              '설정이 켜져 있으면 애니메이션 없이 바로 닫고, 애니메이션 종료 신호가 오지 않아도 일정 시간 후 닫히도록 했습니다.',
          },
          {
            problem:
              'Safari에서 입력 칸을 추가해도 미리보기 높이가 갱신되지 않았습니다.',
            solution:
              '문서 높이 변화를 감지해 미리보기 크기를 다시 계산하도록 했습니다. 표 테두리, 페이지 나눔, 글꼴은 출력 점검 항목으로 정리해 인쇄 CSS를 맞췄습니다.',
          },
          {
            problem:
              '예시 데이터를 불러와도 이전 문서의 검증 오류가 남아 있었습니다.',
            solution:
              '문서를 바꿀 때 검증 상태도 함께 초기화했습니다.',
          },
        ],
      },
      {
        type: 'tech',
        title: 'Technical Points',
        content: [
          '문서별 페이지 조립: BuilderPage에서 Provider, Form, Preview, Header action을 직접 연결',
          '선택적 공통화: 저장, 자동 저장, 이탈 경고, 출력만 공통 관리',
          '검증 구조 분리: 이력서는 공통 validation hook과 adapter로, 나머지 문서는 문서별 hook으로 관리',
          '접근성: aria-invalid·aria-describedby 오류 연결, 첫 오류 포커스 이동, prefers-reduced-motion 대응',
          '브라우저 대응: ResizeObserver로 미리보기 크기 재계산, print CSS 기반 PDF 출력',
        ],
      },
      {
        type: 'result',
        title: 'Result & Next Steps',
        content:
          '문서별 조립 구조로 바꿔 새 문서를 독립적으로 추가할 수 있게 했고, 저장·복원, 검증, 예시 데이터 교체, PDF 출력과 미저장 경고 흐름을 유지했습니다. Vitest 172개 테스트로 주요 기능과 BuilderPage 4종의 회귀를 확인합니다.\n\n현재는 문서별 조립 코드가 일부 반복되지만, 4종 문서 규모에서는 범용 factory보다 각 문서의 정책과 책임이 드러나는 구조를 우선했습니다. 앞으로는 브라우저별 PDF 출력과 모바일 작성 흐름에 대한 E2E 테스트를 보강할 예정입니다.',
      },
    ],
  },
];

export const projectData = projects.reduce<Record<string, Project>>(
  (acc, project) => {
    acc[project.id] = project;
    return acc;
  },
  {},
);
