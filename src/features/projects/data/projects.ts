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
    contribution: 'Frontend 100%',
    stack:
      'React · TypeScript · Vite · Zustand · Tailwind CSS · Firebase Authentication · Firestore · SoundCloud Widget API · iTunes Search API · Cloudflare Workers Static Assets',
    duration: '2025.08 - 진행중',
    summary:
      'SoundCloud 플레이리스트 재생과 iTunes 음악 검색·미리듣기를 결합한 React 음악 서비스입니다. 공식 Widget 기반 재생 제어와 Firebase 사용자 기능까지 하나의 서비스 흐름으로 구현했습니다.',
    description:
      '좋아하는 disco, house 플레이리스트를 랜덤으로 탐색하고 이어서 재생하기 위해 기획한 React 서비스입니다. 초기 Client ID·프록시 기반 연동을 공식 SoundCloud Widget 방식으로 전환하고, Widget 이벤트와 Zustand 상태를 연결해 재생 상태를 동기화했습니다. iTunes Search API 기반 곡 검색과 미리듣기를 별도 화면으로 구현했으며, Firebase Authentication과 Firestore로 사용자별 트랙 저장과 활동 관리 기능을 구성했습니다.',
    tags: [
      'React',
      'TypeScript',
      'SoundCloud Widget',
      'iTunes Search API',
      'Zustand',
      'Responsive',
      'Firebase',
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
          'SoundCloud 플레이리스트 재생과 iTunes 음악 검색·미리듣기를 결합한 React 음악 서비스입니다. 공식 SoundCloud Widget의 재생 이벤트를 React와 Zustand 상태에 연결해 현재 곡, 재생 상태, 진행 시간을 여러 화면에서 공유하도록 구현했습니다.\n\n검색 API 응답은 런타임에서 검증하고, 연속 검색 요청을 취소해 최신 결과만 반영했습니다. SoundCloud 재생과 검색 미리듣기가 동시에 실행되지 않도록 두 오디오 소스의 재생 상태도 조정했습니다.',
      },
      {
        type: 'work',
        title: 'Key Work',
        content: [
          'SoundCloud Widget 기반 플레이리스트 로딩과 재생 제어 구현',
          'Widget 이벤트와 Zustand를 연결해 플레이어 상태를 여러 화면에서 공유',
          'iTunes Search API 음악 검색·미리듣기와 검색 결과 검증 구현',
          'AbortController로 이전 검색 요청을 취소하고 최신 결과만 반영',
          'SoundCloud와 검색 미리듣기의 동시 재생 방지',
          'Firebase Auth·Firestore 기반 사용자별 트랙 저장과 활동 화면 구현',
          '데스크톱 플레이리스트 패널과 모바일 하단 플레이어를 반응형으로 구성',
        ],
      },
      {
        type: 'problem',
        title: 'Problem & Solution',
        content: [
          {
            problem:
              'iframe 내부에서 실행되는 SoundCloud 재생 상태를 React 화면과 동기화하기 어려웠습니다.',
            solution:
              'READY, PLAY, PAUSE, PLAY_PROGRESS 이벤트를 구독하고 Zustand에 반영해 트랙 목록, 플레이리스트 패널, 하단 컨트롤이 같은 상태를 공유하도록 구성했습니다.',
          },
          {
            problem:
              '빠른 검색 과정에서 이전 요청이 늦게 도착하면 최신 결과를 덮어쓸 수 있었습니다.',
            solution:
              'AbortController로 이전 요청을 취소하고 현재 요청만 로딩과 결과 상태를 갱신하도록 처리했습니다.',
          },
          {
            problem:
              'SoundCloud 재생과 검색 미리듣기가 동시에 실행될 수 있었습니다.',
            solution:
              '한쪽 오디오가 재생되면 다른 쪽을 정지하도록 연결해 두 오디오 소스의 재생 상태를 조정했습니다.',
          },
        ],
      },
      {
        type: 'tech',
        title: 'Technical Points',
        content: [
          'SoundCloud Widget 이벤트와 React 상태 동기화',
          'Zustand 기반 플레이어 상태 관리',
          '외부 API 응답 런타임 검증과 타입 변환',
          'AbortController를 활용한 검색 요청 취소',
          'Firebase Auth·Firestore 사용자 데이터 관리',
          '데스크톱·모바일 플레이어 UI 반응형 구성',
        ],
      },
      {
        type: 'result',
        title: 'Result & Next Steps',
        content:
          'SoundCloud Widget의 재생 이벤트를 React와 연결하고, Zustand를 통해 여러 플레이어 UI가 동일한 상태를 공유하도록 구현했습니다. iTunes 검색 응답 검증, 연속 요청 취소, 두 오디오 소스의 동시 재생 방지, Firebase 기반 사용자별 트랙 저장까지 하나의 서비스 흐름으로 구성했습니다.\n\n공식 Widget 방식으로 외부 음악 연동 구조를 단순화했으며, 주요 페이지 지연 로딩과 선택적 모듈 import로 번들 크기도 줄였습니다. 앞으로는 Widget 로딩 실패 UI와 플레이리스트 재생 흐름에 대한 E2E 테스트를 보강할 예정입니다.',
      },
    ],
  },
  {
    id: '05',
    title: 'DocKit',
    category: 'React',
    year: '2026',
    role: 'Frontend Developer',
    contribution: 'Frontend 100%',
    stack:
      'React · TypeScript · Vite · Tailwind CSS · React Router · Radix UI · Vitest · localStorage · Cloudflare Workers',
    duration: '2026.04 - 2026.08',
    summary:
      '웹에서 이력서, 자기소개서, 경력기술서, 프로젝트 보고서를 작성하고 A4 제출 형태를 실시간으로 확인할 수 있는 React + TypeScript 문서 작성 도구입니다.',
    description:
      '별도 문서 프로그램 없이 국문 취업 문서 4종을 작성·검증·저장하고 PDF로 출력할 수 있는 도구입니다. 중앙 편집기 설정이 새 문서 구현 순서를 제약하던 문제를 해결하기 위해 각 BuilderPage가 Provider, 검증, Form, Preview를 직접 조립하도록 변경했습니다. 이 구조로 프로젝트 보고서를 화면, 저장, 검증 순으로 단계적으로 연결했습니다.',
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
          '이력서·자기소개서·경력기술서·프로젝트 보고서를 작성하고, 입력·검증·저장·미리보기·PDF 출력까지 한 흐름으로 확인할 수 있는 React + TypeScript 문서 작성 도구입니다.\n\n문서별 요구사항이 다른 만큼 중앙 설정에 기능을 몰아넣지 않고, 각 BuilderPage가 Provider, Form, Preview, 검증 로직을 직접 조립하는 구조로 정리했습니다.',
      },
      {
        type: 'work',
        title: 'Key Work',
        content: [
          '4종 문서의 타입, 기본값, 샘플 데이터와 반응형 입력·미리보기 화면 설계',
          '각 BuilderPage에서 문서별 Provider, Form, Preview, 검증 흐름을 직접 조립',
          'dirty 상태, 초기화, 자동 저장, PDF 상태 등 반복 기능만 공통화',
          '문서별 복잡도에 따라 검증 hook과 adapter를 분리하고 첫 오류 위치·오류 개수를 관리',
          'localStorage 저장·복원, 예시 데이터 교체, PDF 출력과 모바일 레이아웃 검증',
        ],
      },
      {
        type: 'problem',
        title: 'Problem & Solution',
        content: [
          {
            problem:
              '중앙 설정과 공통 Layout이 모든 문서에 같은 기능을 요구해 새 문서를 빠르게 추가하기 어려웠습니다.',
            solution:
              '각 BuilderPage가 문서별 Provider, Form, Preview, 검증 로직을 직접 조립하도록 변경하고, 여러 문서에서 반복되는 UI와 저장 기능만 공통화했습니다.',
          },
          {
            problem:
              '문서마다 입력 구조와 검증 복잡도가 달라 동일한 검증 구조를 적용하기 어려웠습니다.',
            solution:
              '복잡한 이력서는 공통 validation hook과 adapter로 관리하고, 나머지 문서는 문서별 validation hook으로 분리했습니다.',
          },
        ],
      },
      {
        type: 'tech',
        title: 'Technical Points',
        content: [
          '문서별 페이지 조립: BuilderPage에서 Provider, Form, Preview, Header action을 직접 연결',
          '선택적 공통화: 반복되는 UI, dirty 상태, 초기화, 자동 저장, PDF 상태만 공통 관리',
          '검증 구조 분리: 이력서는 adapter 기반으로, 단순한 문서는 문서별 hook으로 관리',
          '저장·출력 흐름: localStorage 저장·복원과 print CSS 기반 PDF 출력 구현',
          '반응형·접근성 대응: 입력과 미리보기 배치, label 연결, focus return, 인쇄 레이아웃 점검',
        ],
      },
      {
        type: 'result',
        title: 'Result & Next Steps',
        content:
          '문서별 페이지 조립 구조로 변경해 새로운 문서를 독립적으로 추가할 수 있도록 개선했습니다. 저장·복원, 검증, 예시 데이터 교체, PDF 출력과 미저장 경고 흐름을 유지했으며, 136개 테스트로 주요 기능을 검증했습니다.\n\n현재는 문서별 조립 코드가 일부 반복되지만, 4종 문서 규모에서는 범용 factory보다 각 문서의 정책과 책임이 드러나는 구조를 우선했습니다. 앞으로는 브라우저별 PDF 출력과 모바일 작성 흐름에 대한 E2E 테스트를 보강할 예정입니다.',
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
