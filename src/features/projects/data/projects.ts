export type ProjectSectionType = "overview" | "work" | "problem" | "tech" | "result";

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
  category: "Publishing" | "React";
  year: string;
  role: string;
  contribution: string;
  stack: string;
  duration: string;
  description: string;
  tags: string[];
  link: string;
  previewImages?: ProjectPreviewImage[];
  sections: ProjectSection[];
}

export const projects: Project[] = [
  {
    id: "01",
    title: "고흥관광",
    category: "Publishing",
    year: "2024",
    role: "Web Publisher",
    contribution: "Publishing 90%",
    stack: "HTML · CSS · JavaScript · SVG · Responsive · Multilingual",
    duration: "2024.04 - 2024.11",
    description: "고흥관광 홈페이지 전면 개편 및 인터랙티브 관광 UI 구현",
    tags: ["Responsive", "Multilingual", "SVG", "BEM"],
    link: "https://tour.goheung.go.kr",
    previewImages: [
      {
        src: "images/projects/goheung_pc_1.jpg",
        alt: "고흥관광 PC 메인 화면",
        caption: "관광 콘텐츠 탐색 흐름을 고려해 메인 비주얼과 주요 메뉴를 구성한 PC 화면",
      },
      {
        src: "images/projects/goheung_pc_2.jpg",
        alt: "고흥관광 PC 콘텐츠 화면",
        caption: "SVG 지도에서 각 행정 구역을 hover/click 독립 요소로 제어",
      },
      {
        src: "images/projects/goheung_eng.jpg",
        alt: "고흥관광 영문 화면",
        caption: "다국어 텍스트 길이와 메뉴 구조 변화를 고려해 구현한 영문 화면",
      },
      {
        src: "images/projects/goheung_mo.jpg",
        alt: "고흥관광 모바일 화면",
        caption: "모바일에서 관광 정보 탐색이 이어지도록 콘텐츠 우선순위를 재배치한 반응형 화면",
      },
    ],
    sections: [
      {
        type: "overview",
        title: "Overview",
        content:
          "고흥관광 홈페이지를 전면 개편한 대규모 퍼블리싱 프로젝트입니다. 많은 서브 페이지와 다양한 콘텐츠 유형을 안정적으로 관리하기 위해 공통 UI 패턴과 템플릿 구조를 우선 설계했습니다.",
      },
      {
        type: "work",
        title: "Key Work",
        content:
          "• 전체 페이지 반응형 UI 구현\n• 다국어 환경을 고려한 화면 퍼블리싱\n• 반복되는 UI 요소 패턴화로 대규모 페이지 관리 효율 개선\n• SVG 지도 영역의 클릭 및 호버 인터랙션 구현\n• 지역 선택 시 색상, 툴팁 등 즉각적인 시각 피드백 제공",
      },
      {
        type: "problem",
        title: "Problem & Solution",
        content:
          "수많은 서브 페이지와 콘텐츠 유형을 개별 관리하면 유지보수 비용이 커지는 문제가 있었습니다. 공통 요소와 가변 요소를 분리한 템플릿 구조를 설계해 소스 중복을 줄이고 수정 대응 속도를 높였습니다.\n\n번역 언어에 따라 텍스트 길이가 2~3배까지 달라지며 버튼과 메뉴 레이아웃이 어긋날 수 있었습니다. 고정 수치 대신 em, rem, %, Flexbox, Grid를 활용해 콘텐츠 길이에 따라 유연하게 변하는 레이아웃을 구현했습니다.\n\n단순 이미지 지도는 특정 지역 선택이 어렵고 정보 연결성이 낮았습니다. SVG 지도에서 각 행정 구역을 독립 요소로 제어하고, hover/click 상태와 tooltip을 제공해 탐색성을 개선했습니다.",
      },
      {
        type: "tech",
        title: "Technical Points",
        content:
          "• Scalability: 대규모 페이지 운영을 고려한 마크업 아키텍처와 BEM 기반 네이밍 설계\n• SVG Manipulation: 이미지가 아닌 코드 기반 그래픽 요소 제어와 인터랙션 구현\n• Global Standard: 다국어 텍스트 길이와 접근성을 고려한 글로벌 서비스 UI 기준 반영\n• Responsive Layout: 디바이스별 콘텐츠 우선순위를 고려한 Flexbox/Grid 구성\n• Template Strategy: 공통 요소와 가변 요소를 분리한 유지보수 중심 구조",
      },
      {
        type: "result",
        title: "Summary",
        content:
          "퍼블리싱 90%로 참여해 대규모 관광 사이트의 반응형, 다국어, SVG 인터랙션 UI를 구현했습니다. 화면 수가 많고 예외 케이스가 많은 프로젝트에서 구조화와 유지보수성을 고려한 퍼블리싱 역량을 보여주는 사례입니다.",
      },
    ],
  },
  {
    id: "02",
    title: "FIS Chat",
    category: "Publishing",
    year: "2025",
    role: "Web Publisher",
    contribution: "Publishing 100%",
    stack: "React · HTML · CSS · Responsive UI · Component Customizing",
    duration: "2025.11 - 2025-11",
    description: "FIS 식품산업통계정보 챗봇 솔루션 커스터마이징",
    link: "https://www.atfis.or.kr/fis-everything",
    tags: ["React Analysis", "Responsive", "Chat UI", "Customization"],
    previewImages: [
      {
        src: "images/projects/fis_pc_1.png",
        alt: "FIS Chat PC 초기 화면",
        caption: "서비스 톤에 맞춰 챗봇 진입 화면과 질문 유도 UI를 커스터마이징한 PC 화면",
      },
      {
        src: "images/projects/fis_pc_2.png",
        alt: "FIS Chat PC 답변 화면",
        caption: "출처 문서, 답변 내용, 추천 질문 영역을 함께 확인할 수 있도록 구성한 PC 답변 화면",
      },
      {
        src: "images/projects/fis_mo.jpg",
        alt: "FIS Chat 모바일 화면",
        caption: "모바일 환경에서 질문 선택과 답변 확인 흐름이 이어지도록 조정한 반응형 화면",
      },
    ],
    sections: [
      {
        type: "overview",
        title: "Overview",
        content:
          "FIS 식품산업통계정보 서비스에 맞춰 기존 챗봇 솔루션을 커스터마이징한 프로젝트입니다. 범용 솔루션의 React 컴포넌트 구조를 분석하고, 서비스 디자인 시스템과 요구사항에 맞게 UI와 기능 구성을 재정의했습니다.",
      },
      {
        type: "work",
        title: "Key Work",
        content:
          "• 기존 React 컴포넌트 분석 및 서비스 목적에 맞춘 리팩토링\n• PC 전용 구조를 모바일 퍼스트 반응형 레이아웃으로 개편\n• 검색 조건 및 필터링 로직을 위한 UI 컴포넌트 설계와 추가\n• 사용하지 않는 기능 제거 및 불필요한 코드 정리\n• 기존 사이트 디자인 가이드를 반영한 챗봇 UI 스타일링",
      },
      {
        type: "problem",
        title: "Problem & Solution",
        content:
          "기존 챗봇이 PC 중심 구조라 모바일 사용자 접근성과 편의성이 떨어졌습니다. 레이아웃을 반응형 구조로 개편해 다양한 디바이스에서 사용할 수 있도록 UI를 확장했습니다.\n\n범용 솔루션 특성상 실제 서비스 요구사항과 맞지 않는 기능이 포함되어 있었습니다. 미사용 모듈을 제거하고 서비스 특화 기능 중심으로 컴포넌트 계층을 단순화했습니다.\n\n외부 솔루션의 기본 디자인이 기존 웹 서비스와 이질적으로 보였습니다. FIS 디자인 가이드에 맞춰 마크업과 스타일을 전면 수정해 서비스 내 시각적 일관성을 확보했습니다.",
      },
      {
        type: "tech",
        title: "Technical Points",
        content:
          "• React 기반 컴포넌트 구조 분석 및 요구사항 기준 재구성\n• 기능 제거와 코드 정리를 통한 구조 경량화\n• 모바일 퍼스트 반응형 레이아웃 적용\n• 검색/필터 UI 추가를 고려한 컴포넌트 확장\n• 기존 UI 시스템과의 일관성을 고려한 솔루션 커스터마이징",
      },
      {
        type: "result",
        title: "Summary",
        content:
          "퍼블리싱 100%로 참여하면서 React 코드베이스를 읽고 구조를 파악한 뒤, 실제 서비스 요구사항에 맞게 UI를 재구성한 프로젝트입니다. 퍼블리셔 경험과 프론트엔드 컴포넌트 이해도를 함께 보여주기 좋습니다.",
      },
    ],
  },
  {
    id: "03",
    title: "농넷",
    category: "Publishing",
    year: "2025",
    role: "Web Publisher",
    contribution: "Publishing 100%",
    stack: "HTML · CSS · JavaScript · amChart",
    duration: "2025.12 - 2026.02",
    description: "농넷 메인 개편 및 데이터 대시보드 상황판 UI 구현",
    tags: ["Dashboard", "Conditional UI", "data-*", "Responsive"],
    link: "https://www.nongnet.or.kr",
    previewImages: [
      {
        src: "images/projects/nongnet_pc.png",
        alt: "농넷 메인 로그아웃 화면",
        caption: "로그아웃 상태에서도 주요 가격 정보를 바로 확인할 수 있도록 구성한 메인 화면",
      },
      {
        src: "images/projects/nongnet_pc_login.jpg",
        alt: "농넷 메인 로그인 후 화면",
        caption: "로그인 후 관심품목과 사용자 맞춤 정보를 우선 노출하도록 분기한 화면",
      },
      {
        src: "images/projects/nongnet_mo.jpg",
        alt: "농넷 메인 모바일 화면",
        caption: "모바일에서도 가격 정보와 주요 콘텐츠를 확인할 수 있도록 재배치한 반응형 화면",
      },
    ],
    sections: [
      {
        type: "overview",
        title: "Overview",
        content:
          "농넷 메인 개편과 품목별 데이터 대시보드 상황판 UI를 구현한 프로젝트입니다. 로그인 전/후 상태, 사용자 권한, 관심품목 여부에 따라 화면 구성이 달라지는 구조를 퍼블리싱 관점에서 설계하고 구현했습니다.",
      },
      {
        type: "work",
        title: "Key Work",
        content:
          "• 로그인 상태 및 권한에 따른 조건부 UI 렌더링 구조 설계\n• data-* 속성 기반의 품목별 데이터 매핑 및 동적 탭 인터랙션 구현\n• 단일 컨테이너 구조 채택으로 DOM 비대화 방지 및 유지보수성 향상\n• scrollIntoView를 활용한 반응형 대시보드 UX 최적화\n• 가격, 거래량, 지표, 차트 영역을 포함한 데이터 대시보드 UI 퍼블리싱",
      },
      {
        type: "problem",
        title: "Problem & Solution",
        content:
          "로그인 전/후 및 디바이스에 따라 UI 구조와 노출 방식이 달라 분기 관리가 복잡했습니다. body 클래스 기반으로 전역 상태를 제어해 화면 분기 구조를 단순화했습니다.\n\n관심품목 수가 증가하면서 탭이 가로 스크롤 구조가 되었고, 선택 항목의 가시성이 떨어졌습니다. scrollIntoView를 적용해 선택된 탭이 중앙에 위치하도록 개선했습니다.\n\n품목별로 모든 DOM을 생성하면 메모리 낭비와 렌더링 부하가 커질 수 있었습니다. 단일 뷰 업데이트 방식을 채택해 데이터 변경 시 필요한 이미지, 가격, 지표 UI만 갱신되도록 구조를 최적화했습니다.\n\n하드코딩된 선택자로는 품목 추가/삭제에 유연하게 대응하기 어려웠습니다. 품목 식별값을 data-* 속성으로 관리해 확장 가능한 UI 구조로 설계했습니다.",
      },
      {
        type: "tech",
        title: "Technical Points",
        content:
          "• body 클래스는 로그인/권한 같은 전역 상태 제어에 사용\n• data-* 속성은 품목 식별과 탭 active 상태 같은 컴포넌트 상태 제어에 사용\n• 데이터 기반 UI 제어 방식으로 하드코딩 분기 최소화\n• 단일 콘텐츠 컨테이너 구조로 DOM 복잡도와 렌더링 부담 완화\n• 가로 스크롤 탭에서 활성 항목 포커싱을 위한 scrollIntoView 적용",
      },
      {
        type: "result",
        title: "Summary",
        content:
          "퍼블리싱 100%로 참여해 단순 정적 화면 구현을 넘어 상태 기반 UI, 데이터 매핑, 동적 인터랙션 구조까지 설계한 프로젝트입니다. 프론트엔드 전환 관점에서 데이터 중심 사고와 DOM 최적화 경험을 보여줄 수 있는 핵심 사례입니다.",
      },
    ],
  },
  {
    id: "04",
    title: "NEWTRONOME",
    category: "React",
    year: "2025 ~ 2026",
    role: "Frontend Developer",
    contribution: "frontend 100%",
    stack: "React · Vite · Firebase Auth · Firestore · SoundCloud API · Netlify Functions",
    duration: "2025.08 - 2026.05",
    description: "SoundCloud 데이터를 활용해 음악 검색, 랜덤 재생, 플레이리스트 관리, 로그인 사용자별 좋아요 기능을 구현한 React 개인 프로젝트입니다.",
    tags: ["React", "API Integration", "Responsive", "Firebase Auth", "Tailwind CSS"],
    link: "https://newtronome.netlify.app",
    previewImages: [
      {
        src: "images/projects/newtronome.png",
        alt: "NEWTRONOME 메인 화면",
        caption: "SoundCloud API로 랜덤 음악 리스트와 재생이 가능한 PC 화면",
      },
    ],
    sections: [
      {
        type: "overview",
        title: "Overview",
        content:
          "외부 음악 데이터를 활용해 실제 서비스에 가까운 오디오 플레이어 경험을 구현한 개인 프로젝트입니다. 음악 검색, 랜덤 재생, 플레이리스트 관리, 로그인 사용자별 좋아요 저장, 게시판 기능을 연결하며 React 상태 관리와 Firebase 연동 흐름을 학습했습니다.",
      },
      {
        type: "work",
        title: "Key Work",
        content:
          "• React 컴포넌트 구조 설계 및 UI 구현\n• 전역 오디오 상태 관리 구현\n• Firebase Auth / Firestore 연동\n• SoundCloud API 연동 및 Netlify Functions 프록시 구성\n• 반응형 플레이어 UI, 다크모드, 스켈레톤 로딩 구현\n• API 호출량 절감을 위한 캐싱 및 초기 로딩 최적화",
      },
      {
        type: "problem",
        title: "Problem & Solution",
        content:
          "1. SoundCloud API 키 노출 문제\n프론트엔드에서 SoundCloud API를 직접 호출할 경우 API 키가 브라우저에 노출되는 문제가 있었습니다. Netlify Functions를 서버리스 프록시로 구성하고 API 키를 환경 변수로 관리해 클라이언트와 외부 API 요청을 분리했습니다. 프론트엔드는 /api/search, /api/resolve, /api/stream 엔드포인트만 호출하고, 실제 SoundCloud 요청은 서버리스 함수에서 처리하도록 구조를 변경했습니다.\n\n2. API 사용량 초과\n초기 화면에서 여러 플레이리스트와 트랙 정보를 동시에 요청하면서 Netlify 무료 사용량이 빠르게 증가하는 문제가 있었습니다. 초기 로딩 시 불러오는 플레이리스트 수를 줄이고, 검색 결과와 스트림 URL을 localStorage에 24시간 캐싱했습니다. 또한 Netlify Functions 응답에 캐시 헤더를 적용해 동일 요청의 반복 호출을 최소화했습니다.\n\n3. 재생 상태 동기화\n전역 플레이어와 검색 결과 프리뷰가 동시에 재생되면서 오디오 상태 충돌이 발생하는 문제가 있었습니다. 메인 플레이어는 현재 트랙, 재생 상태, 재생목록을 Context 기반으로 관리하고, 검색 결과 프리뷰는 독립적인 재생 흐름으로 분리했습니다. 검색 결과에서 미리듣기 재생 시 기존 플레이어를 정지하도록 처리해 중복 재생과 상태 충돌을 방지했습니다.\n\n4. 외부 음악 데이터 연동 안정성\n외부 API 응답 구조 변경과 요청 실패 상황에 대응할 수 있도록 API 호출 로직을 컴포넌트 내부에서 분리하고, 커스텀 훅과 Netlify Functions 기반으로 구성했습니다. 응답 지연 시에는 스켈레톤 UI를 적용해 빈 화면 노출을 줄였고, 로딩 상태와 에러 상태를 분리해 호출 실패 상황에서도 사용자 흐름이 끊기지 않도록 처리했습니다.",
      },
      {
        type: "tech",
        title: "Technical Points",
        content:
          "• 음악 검색 및 SoundCloud 트랙 재생\n• 랜덤 플레이리스트 로딩 및 플레이어 바 제어\n• 플레이리스트 Drag & Drop 순서 편집\n• Firebase 이메일 로그인, 로그인 사용자 기준 트랙 좋아요 저장\n• 현재 트랙, 재생 여부, 재생 시간, 재생목록을 Context로 전역 관리\n• 모바일 하단 플레이어 및 플레이리스트 패널 지원\n• 다크모드 지원\n• Firebase 기반 공지 게시판 및 댓글 기능 구현",
      },
      {
        type: "result",
        title: "Result & Next Steps",
        content:
          "외부 API 연동, 서버리스 프록시, Firebase 인증/데이터 저장, 전역 오디오 상태 관리를 하나의 서비스 흐름 안에서 연결하며 React 서비스 구현 경험을 정리한 프로젝트입니다.\n\n• 댓글 데이터 구조를 글 번호 기준이 아닌 문서 ID 기준으로 리팩토링\n• 모바일 Drag & Drop과 터치 스크롤이 충돌하는 부분을 편집 모드 중심으로 개선\n• 좋아요한 트랙만 모아보는 페이지 추가\n• 플레이어 키보드 접근성 개선: Space 재생/일시정지, 방향키 시크 이동",
      },
    ],
  },
  
];

export const projectData = projects.reduce<Record<string, Project>>((acc, project) => {
  acc[project.id] = project;
  return acc;
}, {});
