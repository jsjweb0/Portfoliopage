export type ProjectSectionType = "overview" | "work" | "problem" | "tech" | "result";

export interface ProjectSection {
  type: ProjectSectionType;
  title: string;
  content: string;
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
  sections: ProjectSection[];
}

export const projects: Project[] = [
  {
    id: "01",
    title: "농넷",
    category: "Publishing",
    year: "2025",
    role: "Web Publisher",
    contribution: "Publishing 100%",
    stack: "HTML · CSS · JavaScript · amChart",
    duration: "2025.12 - 2026.02",
    description: "농넷 메인 개편 및 데이터 대시보드 상황판 UI 구현",
    tags: ["Dashboard", "Conditional UI", "data-*", "Interaction"],
    link: "https://www.nongnet.or.kr",
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
    id: "02",
    title: "FIS Chat",
    category: "Publishing",
    year: "2025",
    role: "Web Publisher",
    contribution: "Publishing 100%",
    stack: "React · HTML · CSS · Responsive UI · Component Customizing",
    duration: "2025.11 - 2025-11",
    description: "FIS 식품산업통계정보 챗봇 솔루션 커스터마이징",
    link: "https://www.atfis.or.kr/fis-everything/",
    tags: ["React Analysis", "Responsive", "Chat UI", "Customization"],
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
    title: "고흥관광",
    category: "Publishing",
    year: "2024",
    role: "Web Publisher",
    contribution: "Publishing 90%",
    stack: "HTML · CSS · JavaScript · SVG · Responsive · Multilingual",
    duration: "2024.04 - 2024.11",
    description: "고흥관광 홈페이지 전면 개편 및 인터랙티브 관광 UI 구현",
    tags: ["Responsive", "Multilingual", "SVG", "BEM"],
    link: "https://tour.goheung.go.kr/",
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
];

export const projectData = projects.reduce<Record<string, Project>>((acc, project) => {
  acc[project.id] = project;
  return acc;
}, {});
