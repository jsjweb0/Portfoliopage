# Sujin Portfolio

> 웹 퍼블리셔 8년 경력을 바탕으로 React/TypeScript로 전환 중인  
> 프론트엔드 포트폴리오입니다.

**Demo:** https://jsjweb0.github.io/Portfoliopage/

## 이 포트폴리오가 보여주려는 것

1. **퍼블리셔에서 프론트엔드로 확장하는 과정**  
   실무 퍼블리싱 프로젝트(고흥관광, 농넷, FIS Chat)와 개인 React 프로젝트(NEWTRONOME)를 함께 보여줍니다.

2. **데이터 기반 컴포넌트 설계**  
   프로젝트 정보를 TypeScript 타입으로 정의하고, 프로젝트 카드와 상세 페이지를 같은 데이터에서 동적으로 렌더링합니다.

3. **실제 배포와 외부 서비스 연동 경험**  
   GitHub Pages, Cloudflare Workers, Firebase Auth/Firestore를 사용해 정적 배포와 서버리스 프록시, 인증/데이터 저장 흐름을 연결했습니다.

## 주요 프로젝트

| 프로젝트   | 기술               | 기여도 | 링크                                           |
| ---------- | ------------------ | ------ | ---------------------------------------------- |
| 고흥관광   | HTML/CSS/SVG       | 90%    | [보기](https://tour.goheung.go.kr)             |
| FIS Chat   | React 커스터마이징 | 100%   | [보기](https://www.atfis.or.kr/fis-everything) |
| 농넷       | HTML/CSS/amChart   | 100%   | [보기](https://www.nongnet.or.kr)              |
| NEWTRONOME | React/Firebase     | 100%   | [보기](https://newtronome.jsjweb0.workers.dev) |

## 기술 스택

**Frontend:** React 18, TypeScript, Vite, Tailwind CSS  
**라이브러리:** React Router v7, Motion, Lucide React  
**도구:** Firebase Auth/Firestore, Cloudflare Workers, GitHub Pages

## 기술 선택 이유

- **React Router v7**: 최신 라우팅 구조를 경험하고, 프로젝트 목록과 상세 페이지를 명확하게 분리하기 위해 사용했습니다.
- **motion/react**: React 19 대응 패키지인 Motion의 사용 흐름을 익히고, 페이지 전환과 헤더 상태 변화에 필요한 작은 인터랙션만 적용했습니다.
- **Tailwind CSS v4**: CSS-first 설정 방식을 적용해 Vite 프로젝트 안에서 빠르게 반응형 레이아웃과 일관된 유틸리티 스타일을 구성했습니다.
- **Cloudflare Workers**: NEWTRONOME에서 SoundCloud API 키를 브라우저에 노출하지 않고, Netlify Functions 사용량 관리 한계를 보완하기 위해 서버리스 프록시로 사용했습니다.

## 포트폴리오 구조 설명

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
│   ├── hooks/
│   └── lib/
└── widgets/
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

## 배운 것 / 앞으로 할 것

- 퍼블리싱 실무 경험을 React 컴포넌트 구조로 옮기며, 반복 UI를 데이터 기반으로 렌더링하는 방식을 정리했습니다.
- 외부 API를 직접 호출하지 않고 Cloudflare Workers를 거쳐 API 키 보호와 요청 흐름 분리를 경험했습니다.
- NEWTRONOME에서 localStorage 24시간 캐싱을 적용해 반복 API 호출을 줄이는 방법을 실험했습니다.
- 다음 단계에서는 실제 화면 캡처를 README에 추가하고, 프로젝트별 GitHub 링크와 개선 전/후 포인트를 더 구체화할 예정입니다.
