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
    contribution: 'frontend 100%',
    stack:
      'React · TypeScript · Vite · Zustand · Tailwind CSS · Firebase Auth · Firestore · SoundCloud Widget API · Cloudflare Workers',
    duration: '2025.08 - 진행중',
    summary:
      '개인 SoundCloud 플레이리스트를 랜덤으로 탐색하고 재생할 수 있도록 만든 React 음악 서비스입니다. 공식 SoundCloud Widget 기반 플레이어에서 시작해 로그인, 트랙 저장, 게시판, 사용자 활동 기능까지 확장했습니다.',
    description:
      '좋아하는 disco, house 플레이리스트를 랜덤으로 탐색하고 하나의 화면에서 이어서 재생하기 위해 기획한 React 서비스입니다. 초기 Client ID·프록시 기반 연동을 공식 SoundCloud Widget 방식으로 전환했으며, Widget 이벤트와 Zustand 상태를 연결해 트랙 목록, 재생 컨트롤, 진행 시간을 동기화했습니다. Firebase Auth와 Firestore를 활용해 사용자별 트랙 저장과 활동 관리 기능도 구현했습니다.',
    tags: [
      'React',
      'TypeScript',
      'SoundCloud Widget',
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
          '개인 SoundCloud 플레이리스트를 랜덤으로 탐색하고 재생할 수 있는 React 음악 서비스입니다. 초기에는 Client ID와 별도 프록시를 사용해 트랙 정보와 스트리밍 URL을 가져왔지만, 외부 응답 구조와 키 관리에 대한 의존성이 컸습니다.\n\n이를 공식 SoundCloud Widget 기반 구조로 전환하고 READY, PLAY, PAUSE, PLAY_PROGRESS 이벤트를 React 플레이어 상태와 연결했습니다. 현재 트랙, 재생 여부, 진행 시간, 플레이리스트는 Zustand에서 관리해 메인 화면, 플레이리스트 패널, 하단 컨트롤이 동일한 상태를 공유하도록 구성했습니다.\n\nFirebase Auth와 Firestore를 연결해 로그인 사용자별 트랙 저장, 프로필, 게시글과 댓글 활동을 관리하고 있으며, 프론트엔드는 Cloudflare Workers Static Assets로 배포했습니다.',
      },
      {
        type: 'work',
        title: 'Key Work',
        content: [
          '공식 SoundCloud Widget 기반 플레이리스트 로딩과 재생 제어 구현',
          'READY, PLAY, PAUSE, PLAY_PROGRESS 이벤트를 React 상태와 연결',
          '현재 트랙, 재생 여부, 진행 시간, 플레이리스트를 Zustand로 전역 관리',
          'Widget 트랙 데이터를 검증하고 애플리케이션용 PlayerTrack 타입으로 변환',
          '플레이리스트 내부 곡 제목 필터링과 그리드·목록 보기 구현',
          'Firebase Auth 이메일 인증과 Firestore 사용자별 트랙 저장 구현',
          '트랙 저장 목록의 로딩·빈 상태·오류 상태와 실시간 갱신 처리',
          '프로필 수정, 내가 쓴 글/댓글 모아보기 등 로그인 사용자 활동 화면 구현',
          '반응형 플레이리스트 패널, 모바일 하단 플레이어, 다크모드 구현',
          'GitHub Actions와 Cloudflare Workers Static Assets 기반 자동 배포',
        ],
      },
      {
        type: 'problem',
        title: 'Problem & Solution',
        content: [
          {
            problem:
              'Client ID·프록시 기반 SoundCloud 연동\n별도 API 요청과 스트리밍 URL 변환에 의존해 외부 응답 구조와 키 관리 부담이 커졌습니다.',
            solution:
              'Client ID와 전용 API 프록시를 제거하고 공식 SoundCloud Widget 기반으로 재구성했습니다. Widget이 제공하는 재생 기능과 트랙 정보 범위 안에서 서비스를 구성해 별도 스트리밍 URL 변환을 없앴습니다.',
          },
          {
            problem:
              'Widget 내부 재생 상태와 React UI 상태 불일치\n재생은 iframe 내부에서 실행되기 때문에 React 컴포넌트가 현재 곡, 재생 여부, 진행 시간을 직접 알 수 없었습니다.',
            solution:
              'READY, PLAY, PAUSE, PLAY_PROGRESS 이벤트를 구독하고 필요한 값을 Zustand 상태에 반영했습니다. 메인 트랙 목록, 플레이리스트 패널, 하단 컨트롤이 하나의 재생 상태를 공유하도록 구성했습니다.',
          },
          {
            problem:
              '숨겨진 Widget의 플레이리스트 지연 로딩\nWidget iframe을 조건부 렌더링하거나 display:none으로 숨기면 READY 이벤트와 전체 트랙 로딩이 정상적으로 진행되지 않았습니다.',
            solution:
              'Widget을 화면 밖에 항상 마운트하고 렌더 영역을 확보했습니다. getSounds 결과가 완전하지 않을 때 제한된 횟수만 재시도하고 로딩 상태를 별도로 표시했습니다. 다만 이 방식은 Widget 내부 렌더링 동작에 의존하므로 곡 수나 Widget 구현이 바뀌면 재검증이 필요합니다.',
          },
          {
            problem:
              '사용자별 트랙 저장 상태 관리\n로그인 사용자마다 저장한 트랙이 달라 버튼 상태와 Likes 목록을 일관되게 갱신해야 했습니다.',
            solution:
              'Firestore의 users/{uid}/savedTracks 하위 컬렉션에 트랙을 저장하고 onSnapshot으로 변경 사항을 구독했습니다. 외부 데이터는 타입 가드로 검증하고 로딩, 빈 상태, 오류 상태를 분리했습니다.',
          },
        ],
      },
      {
        type: 'tech',
        title: 'Technical Points',
        content: [
          'SoundCloud Widget 연동: 별도 Client ID와 비공식 스트리밍 요청 없이 공식 Widget 범위에서 재생 기능 구성',
          '이벤트 기반 동기화: Widget 재생 이벤트를 구독해 React UI와 오디오 상태를 연결',
          'Zustand 상태 관리: 플레이어 상태를 단일 store로 관리해 컴포넌트 간 상태 중복 방지',
          '외부 데이터 검증: Widget과 Firestore 데이터를 화면에서 사용하기 전에 필요한 필드와 타입 검증',
          'Firestore 실시간 구독: 사용자별 저장 트랙을 실시간으로 갱신하고 로딩·빈 상태·오류 상태 처리',
          '반응형 플레이어 UI: 데스크톱 사이드 패널과 모바일 하단 플레이어를 화면 크기에 맞게 구성',
          'Cloudflare 배포: Workers Static Assets와 GitHub Actions를 이용한 프론트엔드 자동 배포',
        ],
      },
      {
        type: 'result',
        title: 'Result & Next Steps',
        content:
          '공식 SoundCloud Widget의 재생 이벤트를 React 상태와 연결하고, Zustand를 통해 여러 플레이어 UI가 동일한 상태를 공유하도록 구성했습니다. 또한 Firebase 인증, 사용자별 트랙 저장, 게시판과 활동 조회를 하나의 서비스 흐름으로 연결하며 외부 서비스 연동과 전역 상태 관리 경험을 쌓았습니다.\n\n기존 Client ID·프록시 방식을 제거해 구조를 단순화했으며, 플레이어 주요 코드를 TypeScript와 feature 단위 구조로 점진적으로 전환했습니다.\n\n앞으로 개선할 것:\n• Widget 지연 로딩 실패를 위한 명시적인 오류 및 재시도 UI 추가\n• Widget 렌더링 높이에 의존하는 전체 트랙 로딩 방식 개선\n• 남아 있는 JavaScript 파일의 점진적 TypeScript 전환\n• 사용하지 않는 Drag & Drop 의존성 및 레거시 코드 정리',
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
    duration: '2026.04 - 2026.07',
    summary:
      '웹에서 이력서, 자기소개서, 경력기술서를 작성하고 제출용 문서 형태로 실시간 확인할 수 있는 React + TypeScript 기반 문서 작성 도구입니다.',
    description:
      '별도 문서 프로그램 없이 웹에서 국문 취업 문서를 작성하고 제출용 문서 형태로 실시간 확인할 수 있는 React + TypeScript 기반 문서 작성 도구입니다. 이력서 기능에서 시작해 자기소개서와 경력기술서로 확장하면서, 문서 상태는 Context에 집중시키고 문서별 설정과 검증 흐름은 분리해 새 양식을 추가하기 쉬운 구조로 정리했습니다.',
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
        caption: '이력서, 자기소개서, 경력기술서 문서 양식 목록 메인 화면',
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
          '국문 취업 문서는 이력서, 자기소개서, 경력기술서처럼 문서마다 형식과 필수 입력 항목이 달라 작성 흐름이 쉽게 복잡해집니다. 입력 누락, 작성 중 데이터 손실, 미리보기와 출력 결과 불일치가 생기면 실제 제출 도구로 신뢰하기 어렵다고 판단했습니다.\n\n처음에는 이력서 작성 기능을 중심으로 구현했지만, 자기소개서와 경력기술서가 추가되면서 Context가 문서 상태뿐 아니라 템플릿 설정, 검증 흐름, 화면 동작까지 함께 담당하는 문제가 생겼습니다. 이를 해결하기 위해 Context에는 문서 상태와 상태 변경 책임을 남기고, 문서별 Provider, 샘플 데이터, 제목 생성 함수는 editor.config.ts로 분리했습니다.\n\n검증은 문서 복잡도에 따라 구조를 다르게 적용했습니다. 반복 섹션이 많은 이력서는 공통 useDocumentValidation 훅과 adapter를 사용하고, 자기소개서와 경력기술서는 문서별 validation hook으로 단순하게 관리했습니다.',
      },
      {
        type: 'work',
        title: 'Key Work',
        content: [
          '이력서, 자기소개서, 경력기술서 문서 타입과 기본값, 샘플 데이터 구조 설계',
          'Context에는 문서 상태와 상태 변경 책임을 남기고, 문서별 설정은 editor.config.ts로 분리',
          '공통 EditorLayout이 문서 내부 구조를 몰라도 Provider, useEditor, 샘플 데이터, 제목 생성 함수를 설정으로 연결하도록 구성',
          '문서별 복잡도에 따라 이력서는 공통 validation hook과 adapter를 사용하고, 단순한 문서는 문서별 validation hook으로 관리',
          'localStorage를 활용해 작성 중인 문서를 저장하고 최근 작성 문서 목록에서 다시 열 수 있도록 구성',
          '브라우저 인쇄와 print CSS를 활용해 텍스트 선택/검색이 가능한 PDF 저장 흐름 구현',
          '모바일/태블릿/데스크톱 화면에서 입력과 미리보기 흐름이 무너지지 않도록 반응형 레이아웃 정리',
          '입력값 검증과 저장 시간 표시 로직을 순수 함수로 분리하고 Vitest 단위 테스트 추가',
          'Vite 빌드 결과물을 Cloudflare Workers Assets로 배포하고 SPA 새로고침 대응 설정 적용',
        ],
      },
      {
        type: 'problem',
        title: 'Problem & Solution',
        content: [
          {
            problem:
              '문서 양식 증가에 따른 Context 책임 증가\n초기에는 이력서 작성 기능만 있었기 때문에 Context와 에디터 구조가 이력서 중심으로 구성되어도 큰 문제가 없었습니다. 하지만 자기소개서와 경력기술서가 추가되면서 문서 상태, 템플릿 설정, 검증 흐름, 화면 동작이 한곳에 모여 새 양식을 추가할 때 확인해야 하는 범위가 커졌습니다.',
            solution:
              'Context에는 현재 문서 데이터와 상태 변경처럼 에디터 상태에 직접 관련된 책임만 남겼습니다. 문서별 템플릿 정보는 documentTemplates.ts, Provider와 useEditor, 샘플 데이터, 제목 생성 함수는 editor.config.ts에서 관리하도록 분리해 공통 EditorLayout이 문서 내부 구조를 몰라도 동작하도록 정리했습니다.',
          },
          {
            problem:
              '문서별 복잡도에 따른 검증 구조 분리\n이력서는 기본 정보, 학력, 경력, 프로젝트처럼 반복 섹션과 검증 필드가 많아 touched field 관리, 전체 검증, 첫 오류 메시지 계산, 에러 개수 계산이 복잡했습니다. 반면 자기소개서와 경력기술서는 검증 범위가 상대적으로 단순해 같은 adapter 구조를 모두 적용하면 코드가 불필요하게 무거워질 수 있었습니다.',
            solution:
              '이력서는 공통 useDocumentValidation 훅과 resumeValidationAdapter로 검증 상태 관리 흐름을 분리했습니다. 자기소개서와 경력기술서는 문서별 validation hook에서 직접 관리하도록 두어, 문서 복잡도에 맞게 공통화와 단순성의 균형을 맞췄습니다.',
          },
          {
            problem:
              '작성 중 데이터 손실과 출력 품질 문제\n사용자가 페이지를 나가거나 다시 접속했을 때 작성하던 문서를 잃으면 실제 도구로 사용하기 어렵습니다. 또한 이미지 캡처 방식은 빠르게 결과를 확인하기에는 좋지만, 제출용 PDF에서 텍스트 선택과 검색이 어렵다는 한계가 있었습니다.',
            solution:
              'localStorage 저장/복원 흐름을 추가해 작성 중인 문서를 최근 작성 목록에서 다시 열 수 있도록 구성했습니다. 작성 중인 내용이 있을 때 이탈 방지 안내를 제공하고, 브라우저 인쇄 기능과 @media print 스타일을 활용해 텍스트 선택이 가능한 PDF 저장 흐름으로 정리했습니다.',
          },
        ],
      },
      {
        type: 'tech',
        title: 'Technical Points',
        content: [
          'Editor config 구조: 문서별 Provider, useEditor, 샘플 데이터, 제목 생성 함수를 설정으로 연결해 공통 EditorLayout 재사용',
          'localStorage 저장 구조: 작성 중 문서를 브라우저에 저장하고 최근 작성중 목록에서 복원할 수 있도록 구성',
          '공통 검증 훅: useDocumentValidation에서 touched field 관리, 단일 필드 재검증, 전체 검증, 에러 개수 계산 흐름을 공통화',
          'Validation 구조: 복잡한 이력서는 adapter로 필드 key 생성과 검증 규칙을 분리하고, 단순한 문서는 문서별 validation hook으로 관리',
          '검증 결과 타입 통일: 문서별 errors 내부 구조는 유지하되 공통 훅이 사용하는 결과는 isValid, errors, firstMessage 형태로 통일',
          '문서 출력 전략: 제출용 출력은 print CSS 기반 PDF 저장 흐름에 집중',
          '반응형 레이아웃: 데스크톱에서는 입력 폼과 미리보기를 함께 보여주고, 좁은 화면에서는 작성 흐름이 유지되도록 배치 조정',
          '접근성 개선: label/input 연결, button 상태, dialog focus return, table caption/scope 등 기본 접근성 요소 점검',
          '브라우저 이슈 대응: Safari에서 table rowSpan 높이가 즉시 재계산되지 않는 문제를 확인하고 미리보기 table 재마운트로 레이아웃 깨짐 방지',
          '배포 설정: Cloudflare Workers Assets와 SPA fallback 설정으로 Vite 정적 앱 배포 흐름 구성',
        ],
      },
      {
        type: 'result',
        title: 'Result & Next Steps',
        content:
          '이력서에서 자기소개서, 경력기술서로 문서 양식이 늘어나는 과정에서 Context 책임을 줄이고, 공통 EditorLayout과 문서별 config를 연결하는 구조로 정리했습니다. 이를 통해 문서 상태 관리는 유지하면서도 새 양식 추가 시 수정해야 하는 범위를 줄였습니다.\n\n다음 단계에서는 문서별 validation hook 테스트 보강, 초기 번들 최적화, 브라우저별 PDF 저장 안내 개선, 긴 텍스트와 인쇄 환경에 대한 출력 안정성 개선을 진행할 예정입니다.',
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
