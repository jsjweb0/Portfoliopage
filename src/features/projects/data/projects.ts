export type ProjectSectionType =
  | 'overview'
  | 'work'
  | 'problem'
  | 'tech'
  | 'result';

export interface ProjectSection {
  type: ProjectSectionType;
  title: string;
  content: string;
}

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
        content:
          '• 전체 100여 개 페이지 반응형 UI 구현\n• 한/영/중 다국어 환경을 고려한 유연한 레이아웃 구성\n• BEM 네이밍 기반 템플릿 구조 설계로 반복 화면 작업 효율 개선\n• SVG 파일을 코드로 전환해 각 행정구역을 독립 DOM 요소로 분리\n• 지역 선택 시 색상, 툴팁, 정보 연결 등 즉각적인 시각 피드백 제공',
      },
      {
        type: 'problem',
        title: 'Problem & Solution',
        content:
          '문제 1: 서브페이지 100여 개를 개별 관리하면 수정이 발생할 때마다 여러 화면을 동시에 확인해야 했습니다.\n해결: 공통 요소와 콘텐츠 영역을 분리한 BEM 템플릿 구조를 설계해 반복 마크업을 줄이고, 공통 블록 수정이 전체 페이지에 일관되게 반영되도록 했습니다.\n\n문제 2: 번역 언어에 따라 텍스트 길이가 달라지면서 버튼과 메뉴 레이아웃이 어긋나는 케이스가 있었습니다.\n해결: px 고정값보다 em, rem, %, Flexbox, Grid를 활용해 콘텐츠 길이에 따라 자연스럽게 늘어나는 레이아웃으로 구현했습니다.\n\n문제 3: 이미지 지도는 특정 지역을 정확히 선택하기 어렵고 선택 상태를 시각적으로 보여주기 제한적이었습니다.\n해결: PNG 이미지를 SVG 코드로 전환해 행정구역을 각각 독립 요소로 제어하고, hover 시 색상 변경과 click 시 관광 정보 연결이 가능하도록 구현했습니다.',
      },
      {
        type: 'tech',
        title: 'Technical Points',
        content:
          '• BEM + 템플릿 전략: 대규모 페이지를 공통 구조로 묶어 수정 범위를 줄이는 마크업 아키텍처 설계\n• SVG Manipulation: 이미지가 아닌 코드 기반 벡터 그래픽으로 전환해 각 지역 상태를 직접 제어\n• Global Layout: 상대 단위와 Flexbox/Grid를 활용해 다국어 텍스트 길이 변화를 흡수\n• Responsive Strategy: 디바이스별 콘텐츠 우선순위를 고려해 모바일 탐색 흐름 재배치\n• Scalability: 운영 단계에서 콘텐츠 교체와 UI 수정이 분리되도록 구조와 스타일을 정리',
      },
      {
        type: 'result',
        title: 'Summary',
        content:
          '퍼블리싱 90%를 담당했습니다. 다국어, 반응형, SVG 인터랙션을 동시에 다룬 경험이었고, 화면 수가 많은 프로젝트에서 유지보수 구조가 얼마나 중요한지 체감했습니다.\n\n이 프로젝트 이후 마크업 설계를 시작할 때 나중에 어떤 부분이 바뀔 수 있는지 먼저 고민하게 되었고, 현재 React 프로젝트에서도 같은 관점으로 컴포넌트 경계를 나누고 있습니다.',
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
          'FIS 식품산업통계정보 서비스에 맞춰 기존 챗봇 솔루션을 커스터마이징한 프로젝트입니다. 외부에서 제공된 React 컴포넌트 코드베이스를 파악하고, 서비스 요구사항과 디자인 가이드에 맞게 UI 구조와 스타일을 재정의하는 것이 핵심 과제였습니다.\n\n단순 스타일 덮어쓰기가 아니라 컴포넌트 계층을 이해하고 불필요한 기능을 정리한 뒤 FIS 서비스 안에서 자연스럽게 보이도록 조정했습니다.',
      },
      {
        type: 'work',
        title: 'Key Work',
        content:
          '• 외부 React 코드베이스의 컴포넌트 의존 관계를 파악하고 수정 범위 선정\n• 미사용 기능과 불필요한 컴포넌트를 정리해 유지보수 대상 축소\n• PC 중심으로 구성된 레이아웃을 모바일에서도 사용 가능한 반응형 구조로 재설계\n• 검색 조건 및 필터링 UI 컴포넌트 설계와 추가\n• FIS 기존 웹 서비스 디자인 가이드를 기준으로 챗봇 UI 스타일링',
      },
      {
        type: 'problem',
        title: 'Problem & Solution',
        content:
          '문제 1: 기존 챗봇이 PC 중심 구조로 개발되어 모바일에서 사용 흐름이 불편했습니다.\n해결: 뷰포트별 콘텐츠 노출 우선순위를 재정리하고 반응형 레이아웃으로 개편해 스마트폰에서도 질문 입력과 답변 확인 흐름이 이어지도록 했습니다.\n\n문제 2: 범용 솔루션이라 FIS 서비스와 맞지 않는 기능과 컴포넌트가 포함되어 있었습니다.\n해결: 컴포넌트 의존 관계를 분석한 뒤 미사용 기능을 제거하고, 서비스에 필요한 기능 중심으로 컴포넌트 계층을 단순화했습니다.\n\n문제 3: 외부 솔루션의 기본 디자인이 기존 웹 서비스와 이질적으로 보였습니다.\n해결: FIS 디자인 가이드의 색상, 타이포그래피, 간격 기준을 반영해 챗봇 마크업과 스타일을 수정하고 서비스 내 시각적 일관성을 확보했습니다.',
      },
      {
        type: 'tech',
        title: 'Technical Points',
        content:
          '• React 컴포넌트 분석: 외부 코드베이스의 컴포넌트 계층, Props 흐름, 스타일 적용 방식을 파악해 수정 범위 설정\n• 선택적 리팩토링: 전체 재작성 대신 유지할 코드와 교체할 코드를 구분해 변경 범위 관리\n• 반응형 전환: 기존 PC 기준 고정 레이아웃을 유동적인 모바일 대응 구조로 조정\n• 디자인 시스템 통합: 외부 컴포넌트에 서비스 디자인 가이드를 적용하는 CSS 오버라이드 전략 구성\n• 컴포넌트 확장: 검색/필터 UI를 기존 구조를 해치지 않는 방식으로 추가',
      },
      {
        type: 'result',
        title: 'Summary',
        content:
          '퍼블리싱 100%를 담당했습니다. 기존 React 코드를 읽고 이해한 뒤 실제 서비스 요구사항에 맞게 재구성한 경험입니다.\n\n이 프로젝트를 통해 React 컴포넌트가 어떻게 구성되는지, Props와 스타일이 어떤 흐름으로 연결되는지 실무 코드에서 익힐 수 있었습니다.',
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
          '농넷 메인 개편과 품목별 데이터 대시보드 상황판 UI를 구현한 프로젝트입니다.\n\n핵심 과제는 로그인 여부, 사용자 권한, 관심품목 보유 여부에 따라 화면 구성이 달라지는 복잡한 상태 분기를 퍼블리싱 관점에서 설계하는 것이었습니다. 또한 품목 수가 늘어도 DOM이 비대해지지 않도록 단일 컨테이너 구조로 데이터를 갱신하는 방식을 적용했습니다.',
      },
      {
        type: 'work',
        title: 'Key Work',
        content:
          '• 로그인 상태, 권한, 관심품목 여부에 따른 조건부 UI 구조 설계\n• body 클래스 기반으로 로그인/권한 같은 전역 상태 제어\n• data-* 속성으로 품목 식별자를 DOM에 바인딩해 탭 전환 시 해당 품목 데이터 갱신\n• 품목마다 DOM을 생성하지 않고 선택된 품목 데이터로 단일 컨테이너를 업데이트\n• 관심품목 탭이 가로 스크롤 구조가 될 때 선택 탭이 중앙에 오도록 scrollIntoView 적용\n• 가격, 거래량, 지표, amChart 차트 영역을 포함한 데이터 대시보드 UI 퍼블리싱',
      },
      {
        type: 'problem',
        title: 'Problem & Solution',
        content:
          '문제 1: 로그인 전/후 화면, 권한별 화면, 모바일/PC 화면이 다르게 동작해야 해서 분기 관리가 복잡했습니다.\n해결: body에 상태 클래스를 부여하고 CSS에서 해당 상태에 맞는 UI를 보여주는 방식으로 전역 분기 구조를 단순화했습니다.\n\n문제 2: 관심품목 수가 늘어나면서 탭이 가로 스크롤 영역이 되었고, 선택한 탭이 화면 밖으로 밀려나는 경우가 있었습니다.\n해결: 탭 클릭 시 scrollIntoView를 적용해 선택 탭이 뷰포트 중앙에 오도록 개선했습니다.\n\n문제 3: 품목별로 가격, 거래량, 차트 DOM을 모두 생성하면 품목이 늘어날수록 초기 렌더링 부담이 커질 수 있었습니다.\n해결: 단일 콘텐츠 컨테이너를 두고 탭 전환 시 해당 품목의 데이터로 이미지, 가격, 지표 영역만 교체하는 방식으로 설계했습니다.\n\n문제 4: 품목 식별자를 JS 변수나 선택자 문자열로 하드코딩하면 품목 추가/삭제 시 코드 수정 범위가 커졌습니다.\n해결: 품목 식별값을 data-* 속성으로 관리해 HTML 구조 확장만으로 탭 동작을 유지할 수 있도록 했습니다.',
      },
      {
        type: 'tech',
        title: 'Technical Points',
        content:
          '• 상태 계층 분리: body 클래스는 로그인/권한 같은 전역 상태, data-* 속성은 품목 식별/탭 active 같은 컴포넌트 상태에 사용\n• 단일 컨테이너 패턴: 품목마다 DOM을 생성하지 않고 하나의 컨테이너를 데이터로 업데이트\n• data-* 기반 이벤트 처리: 하드코딩 선택자 없이 품목 식별값을 읽어 탭 전환 처리\n• scrollIntoView UX: 가로 스크롤 탭에서 활성 항목이 중앙에 오도록 처리\n• amChart 연동: 가격/거래량 데이터를 차트 영역에 연결하고 탭 전환 시 표시 데이터 갱신',
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
    contribution: 'frontend 100%',
    stack:
      'React · Vite · Firebase Auth · Firestore · SoundCloud API · Cloudflare Workers',
    duration: '2025.08 - 2026.05',
    description:
      'React 학습 과정에서 시작해 음악 검색/재생, 사용자 인증, 커뮤니티 기능까지 확장한 개인 프로젝트입니다. SoundCloud API, Firebase, Cloudflare Workers를 연결하며 API 키 보안, 사용자 활동 흐름, 전역 오디오 상태 관리 문제를 직접 설계해 해결했습니다.',
    tags: [
      'React',
      'API Integration',
      'Responsive',
      'Firebase Auth',
      'Tailwind CSS',
    ],
    link: 'https://newtronome.jsjweb0.workers.dev',
    github: 'https://github.com/jsjweb0/newtronome',
    previewImages: [
      {
        src: 'images/projects/newtronome_pc.png',
        alt: 'NEWTRONOME 메인 화면',
        caption: 'SoundCloud API로 랜덤 음악 리스트와 재생이 가능한 PC 화면',
      },
      {
        src: 'images/projects/newtronome_mobile.jpg',
        alt: 'NEWTRONOME 모바일 화면',
        caption:
          'SoundCloud API로 랜덤 음악 리스트와 검색이 가능한 모바일 화면',
      },
    ],
    sections: [
      {
        type: 'overview',
        title: 'Overview',
        content:
          'React 학습 과정에서 시작해 음악 검색/재생, 인증, 사용자 활동, 게시판 기능까지 확장한 개인 프로젝트입니다. 단순 화면 구현보다 실제 서비스에서 마주치는 API 키 노출 방지, 외부 API 요청 관리, 전역 상태 충돌, 사용자별 데이터 흐름을 어떻게 연결할지에 집중했습니다.\n\nSoundCloud 트랙 검색, 개인 플레이리스트 기반 랜덤 추천, 재생목록 관리, 로그인 사용자별 좋아요 저장, 프로필 수정, 내가 쓴 글과 댓글 모아보기 기능을 포함합니다.',
      },
      {
        type: 'work',
        title: 'Key Work',
        content:
          '• SoundCloud API를 Cloudflare Workers 서버리스 프록시로 감싸 API 키 노출 없이 호출\n• /api/search, /api/resolve, /api/stream 엔드포인트 설계\n• localStorage 캐싱과 Worker 응답 캐시 헤더 적용으로 반복 API 호출 절감\n• 현재 트랙, 재생 여부, 재생 시간, 플레이리스트를 Context로 전역 관리\n• 검색 결과 프리뷰 재생과 메인 플레이어를 독립 흐름으로 분리해 오디오 상태 충돌 방지\n• 응답 지연 시 스켈레톤 UI 표시, 실패 시 에러 상태 분리 처리\n• Firebase Auth 이메일 로그인과 Firestore 사용자별 좋아요 저장\n• 프로필 수정, 내가 쓴 글/댓글 모아보기 등 로그인 사용자 활동 화면 구현\n• 플레이리스트 Drag & Drop 순서 편집, 모바일 하단 플레이어, 다크모드 지원',
      },
      {
        type: 'problem',
        title: 'Problem & Solution',
        content:
          '문제 1: SoundCloud API 키 노출\n프론트엔드에서 직접 API를 호출하면 브라우저 네트워크 탭에서 API 키가 노출될 수 있었습니다.\n해결: Cloudflare Workers를 서버리스 프록시로 구성하고 API 키를 Worker Secret 환경변수로 관리했습니다. 프론트엔드는 /api/* 엔드포인트만 호출하고 실제 SoundCloud 요청은 Worker에서 처리하도록 분리했습니다.\n\n문제 2: 외부 API 호출량과 응답 흐름 관리\n음악 검색, 플레이리스트 로딩, 스트림 URL 요청이 반복되면서 같은 데이터를 여러 번 요청하는 문제가 있었습니다.\n해결: Cloudflare Workers로 API 요청 경로를 통합하고 초기 로딩 플레이리스트 수를 제한했습니다. 검색 결과와 스트림 URL을 localStorage에 캐싱하고 Worker 응답에 캐시 헤더를 적용해 동일 요청 반복을 최소화했습니다.\n\n문제 3: 전역 플레이어와 검색 프리뷰 동시 재생으로 인한 오디오 상태 충돌\n두 재생 흐름이 독립적으로 동작하면서 소리가 겹치거나 상태가 꼬이는 문제가 발생했습니다.\n해결: 메인 플레이어는 Context로 전역 상태를 관리하고, 검색 프리뷰는 독립 재생 흐름으로 분리했습니다. 프리뷰 재생 시작 시 메인 플레이어를 일시정지하도록 처리해 충돌을 방지했습니다.\n\n문제 4: 로그인 사용자별 활동 데이터 관리\n좋아요, 프로필, 내가 쓴 글과 댓글처럼 사용자 기준으로 달라지는 데이터를 화면마다 일관되게 보여줘야 했습니다.\n해결: Firebase Auth 인증 상태를 기준으로 조건부 UI를 구성하고, Firestore 데이터를 사용자 기준으로 조회해 마이페이지와 프로필 화면에서 다시 확인할 수 있도록 연결했습니다.',
      },
      {
        type: 'tech',
        title: 'Technical Points',
        content:
          '• Cloudflare Workers 프록시: API 키 보안과 캐시 헤더 적용을 동시에 처리하고, 정적 프론트엔드에서도 외부 API를 안전하게 호출하기 위해 선택\n• Context 기반 오디오 상태: currentTrack, isPlaying, currentTime, playlist를 단일 Context로 묶어 여러 컴포넌트에서 일관된 플레이어 제어 가능\n• 캐싱 전략: 검색 결과와 스트림 URL을 localStorage에 저장해 반복 방문/재생 시 API 호출 감소\n• 스켈레톤 UI: 로딩 상태와 에러 상태를 분리해 API 응답 전 빈 화면 노출 최소화\n• Firebase 연동: Auth로 이메일 로그인, Firestore로 사용자별 좋아요, 프로필, 게시글/댓글 데이터를 관리하고 인증 상태에 따른 조건부 UI 처리\n• 플레이리스트 Drag & Drop 순서 편집, 모바일 하단 플레이어, 다크모드 지원',
      },
      {
        type: 'result',
        title: 'Result & Next Steps',
        content:
          '외부 API 연동, 서버리스 프록시, Firebase 인증/데이터 저장, 전역 오디오 상태 관리, 사용자 활동 화면을 하나의 서비스 흐름 안에서 직접 연결하며 React 서비스 개발의 전반적인 흐름을 경험했습니다. 기능이 동작하는 것을 넘어 API 보안, 요청 관리, 상태 충돌, 사용자별 데이터 조회 같은 실제 서비스 문제를 스스로 발견하고 해결한 프로젝트입니다.\n\n앞으로 개선할 것:\n• 학습 과정에서 확장된 구조를 feature 단위 모듈로 리팩토링\n• 댓글 데이터 구조를 글 번호 기준이 아닌 문서 ID 기준으로 리팩토링\n• 모바일 Drag & Drop과 터치 스크롤 충돌을 편집 모드 중심으로 개선\n• 좋아요한 트랙만 모아보는 페이지 추가\n• 플레이어 키보드 접근성 개선: Space 재생/일시정지, 방향키 시크 이동',
      },
    ],
  },
  {
    id: '05',
    title: 'Dockit',
    category: 'React',
    year: '2026 ~ In Progress',
    role: 'Frontend Developer',
    contribution: 'Frontend 100%',
    stack:
      'React · TypeScript · Vite · Tailwind CSS · React Router · Radix UI · localStorage · Cloudflare Workers',
    duration: '2026.04 - 기능 확장 중',
    description:
      'React + TypeScript 기반 국문 이력서 작성 도구입니다. 입력 폼과 A4 문서 미리보기를 같은 상태에 연결하고, 저장/복원, 입력값 검증, 텍스트 선택 가능한 PDF 저장, 반응형 UI와 접근성 개선을 구현했습니다.',
    tags: [
      'React',
      'TypeScript',
      'Responsive',
      'Accessibility',
      'localStorage',
    ],
    link: 'https://dockit.jsjweb0.workers.dev/',
    github: 'https://github.com/jsjweb0/dockit',
    previewImages: [
      {
        src: 'images/projects/dockit_pc_1.jpg',
        alt: 'Dockit 이력서 작성 도구 PC 화면',
        caption: '최근 작성중 목록과 문서 양식 목록 메인 데스크톱 화면',
      },
      {
        src: 'images/projects/dockit_pc_2.jpg',
        alt: 'Dockit 이력서 작성 도구 PC 화면',
        caption: '입력 폼과 A4 미리보기를 나란히 배치한 데스크톱 화면',
      },
      {
        src: 'images/projects/dockit_mobile.jpg',
        alt: 'Dockit 이력서 작성 도구 모바일 화면',
        caption: '모바일에서 입력 흐름을 유지하도록 정리한 이력서 작성 화면',
      },
    ],
    sections: [
      {
        type: 'overview',
        title: 'Overview',
        content:
          'Dockit은 국문 이력서를 입력 폼으로 작성하고, 제출용 A4 문서 형태를 실시간으로 확인할 수 있는 React 문서 작성 도구입니다. 기본 정보, 학력, 자격증, 경력, 프로젝트, 링크, 스킬을 입력하면 오른쪽 미리보기에 즉시 반영되도록 구성했습니다.\n\n단순한 폼 구현보다 실제 사용자가 이력서를 작성하다가 겪는 입력 누락, 저장 손실, 출력 불일치를 줄이는 데 집중했습니다. 최근 작성중 저장/복원, 샘플 데이터 불러오기, 입력값 검증, 오류 필드 포커스 이동, 텍스트 선택 가능한 PDF 저장, 반응형 레이아웃을 구현했으며 자기소개서 등 다른 문서 양식으로 확장할 수 있는 구조를 준비하고 있습니다.',
      },
      {
        type: 'work',
        title: 'Key Work',
        content:
          '• React + TypeScript 기반으로 이력서 데이터 타입, 기본값, 샘플 데이터 구조 설계\n• 기본 정보, 학력, 자격증, 경력, 프로젝트, 링크, 스킬을 섹션별 입력 컴포넌트로 구성\n• 입력 폼과 A4 문서 미리보기를 같은 상태에 연결해 작성 결과를 실시간으로 확인 가능하게 구현\n• 반복 섹션의 추가/삭제 흐름과 필드별 유효성 검사, 오류 탭 표시, 오류 필드 포커스 이동 구현\n• localStorage를 활용해 작성 중인 이력서를 저장하고 최근 작성중 목록에서 다시 열 수 있도록 구성\n• 브라우저 인쇄와 print CSS를 활용해 텍스트 선택/검색이 가능한 PDF 저장 흐름 구현\n• 모바일/태블릿/데스크톱 화면에서 입력과 미리보기 흐름이 무너지지 않도록 반응형 레이아웃 정리\n• label 연결, 버튼 상태, 다이얼로그 포커스 복귀, table caption/scope 적용으로 접근성 품질 개선\n• 입력값 검증과 저장 시간 표시 로직을 순수 함수로 분리하고 Vitest 단위 테스트 추가\n• Vite 빌드 결과물을 Cloudflare Workers Assets로 배포하고 SPA 새로고침 대응 설정 적용',
      },
      {
        type: 'problem',
        title: 'Problem & Solution',
        content:
          '문제 1: 입력 폼과 미리보기 데이터 불일치 가능성\n이력서 작성 도구는 사용자가 입력한 값이 문서 미리보기에 즉시 반영되어야 합니다. 폼과 미리보기가 각각 다른 데이터를 관리하면 수정 사항이 누락되거나 화면마다 결과가 달라질 수 있었습니다.\n해결: Resume 타입을 기준으로 하나의 상태 구조를 만들고, 폼 입력 컴포넌트와 미리보기 컴포넌트가 같은 데이터를 사용하도록 연결했습니다. 기본값과 샘플 데이터도 별도 모델 파일로 분리해 유지보수하기 쉽게 정리했습니다.\n\n문제 2: 반복 섹션 검증과 오류 탐색의 어려움\n경력, 프로젝트, 링크처럼 항목을 추가/삭제하는 섹션은 필드 구조가 반복되어 오류 처리도 흩어질 수 있었습니다. 사용자가 어떤 탭과 입력 필드를 고쳐야 하는지 바로 찾기 어려운 문제가 있었습니다.\n해결: 섹션별 컴포넌트로 역할을 나누고, 각 항목에 id를 부여해 추가/삭제와 필드 업데이트를 명확하게 처리했습니다. 유효성 검사 결과를 섹션 단위로 관리해 오류가 있는 탭을 표시하고 첫 번째 오류 필드로 포커스가 이동하도록 했습니다.\n\n문제 3: 작성 중 데이터 손실과 출력 품질 문제\n사용자가 페이지를 나가거나 다시 접속했을 때 작성하던 이력서를 잃으면 실제 도구로 사용하기 어렵습니다. 또한 이미지 캡처 방식은 빠르게 결과를 확인하기에는 좋지만, 제출용 PDF에서 텍스트 선택과 검색이 어렵다는 한계가 있었습니다.\n해결: localStorage 저장/복원 흐름을 추가해 작성 중인 이력서를 최근 작성중 목록에서 다시 열 수 있도록 구성했습니다. 작성 중인 내용이 있을 때 이탈 방지 안내를 제공하고, 브라우저 인쇄 기능과 @media print 스타일을 활용해 텍스트 선택이 가능한 PDF 저장 흐름으로 정리했습니다.',
      },
      {
        type: 'tech',
        title: 'Technical Points',
        content:
          '• TypeScript 데이터 모델: Resume, Education, Experience, Project 등 문서 데이터를 타입으로 정의해 폼과 미리보기의 데이터 기준을 통일\n• 섹션 기반 React 구조: 기본 정보, 학력, 자격증, 경력, 프로젝트, 링크, 스킬 입력을 기능 단위 컴포넌트로 분리\n• localStorage 저장 구조: 작성 중 문서를 브라우저에 저장하고 최근 작성중 목록에서 복원할 수 있도록 구성\n• 유효성 검사와 포커스 이동: 오류가 있는 탭과 필드를 사용자가 바로 찾을 수 있도록 상태와 포커스 흐름 정리\n• 테스트 가능한 검증 로직: 기본 정보, 선택 섹션, 저장 시간 표시 로직을 순수 함수로 분리하고 Vitest로 주요 케이스 검증\n• 문서 출력 전략: PNG 저장은 보조 기능으로 유지하고, 제출용 출력은 print CSS 기반 PDF 저장 흐름에 집중\n• 반응형 레이아웃: 데스크톱에서는 입력 폼과 미리보기를 함께 보여주고, 좁은 화면에서는 작성 흐름이 유지되도록 배치 조정\n• 접근성 개선: label/input 연결, button 상태, dialog focus return, table caption/scope 등 기본 접근성 요소 점검\n• 브라우저 이슈 대응: Safari에서 table rowSpan 높이가 즉시 재계산되지 않는 문제를 확인하고 미리보기 table 재마운트로 레이아웃 깨짐 방지\n• 배포 설정: Cloudflare Workers Assets와 SPA fallback 설정으로 Vite 정적 앱 배포 흐름 구성',
      },
      {
        type: 'result',
        title: 'Result & Next Steps',
        content:
          '입력값을 실시간 문서 미리보기로 확인하고 저장, 복원, 검증, 출력까지 이어지는 국문 이력서 작성 MVP를 완성했습니다. React 상태 설계, TypeScript 모델링, 폼 검증, 접근성, print CSS, 배포까지 작은 문서 서비스의 핵심 흐름을 직접 설계한 프로젝트입니다.\n\n다음 단계에서는 초기 번들 최적화, 브라우저별 PDF 저장 안내 개선, 자기소개서/경력기술서 작성 흐름 완성, 긴 텍스트와 인쇄 환경에 대한 출력 안정성 개선을 진행할 예정입니다.',
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
