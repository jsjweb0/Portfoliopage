import { Github, Linkedin, Mail, type LucideIcon } from 'lucide-react';

export interface PortfolioStrength {
  title: string;
  description: string;
}

export interface ContactLink {
  label: string;
  href: string;
  text: string;
  Icon: LucideIcon;
}

export const strengths: PortfolioStrength[] = [
  {
    title: 'Publishing Accuracy',
    description:
      '디자인 시안을 기준으로 간격, 정렬, 반응형 흐름을 꼼꼼하게 구현하고 운영 중인 화면의 예외 케이스까지 함께 점검합니다.',
  },
  {
    title: 'React Structure',
    description:
      '반복 UI를 데이터와 컴포넌트로 분리하고, 프로젝트 상세 페이지처럼 확장 가능한 구조를 우선해 작업합니다.',
  },
  {
    title: 'Service Thinking',
    description:
      '로그인 상태, 권한, 콘텐츠 길이, 디바이스 차이에 따라 화면이 어떻게 달라져야 하는지 사용자 흐름 기준으로 정리합니다.',
  },
];

export const stackGroups = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Vite',
  'Responsive UI',
  'Accessibility',
];

export const contactLinks: ContactLink[] = [
  {
    label: 'Email',
    href: 'mailto:jsjweb0@gmail.com',
    text: 'jsjweb0@gmail.com',
    Icon: Mail,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/jsjweb0',
    text: 'github.com/jsjweb0',
    Icon: Github,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sujin-jeong-619a80391/',
    text: 'linkedin.com/in/sujin-jeong',
    Icon: Linkedin,
  },
];
