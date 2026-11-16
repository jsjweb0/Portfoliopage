import { Github, Linkedin, Mail, type LucideIcon } from 'lucide-react';

export interface PortfolioStrength {
  title: string;
  description: string;
}

export interface TechStacks {
  title: string;
  stacks: string[];
}

export interface ContactLink {
  label: string;
  href: string;
  text: string;
  Icon: LucideIcon;
}

export const strengths: PortfolioStrength[] = [
  {
    title: '복잡한 입력 흐름',
    description:
      'DocKit에서 입력·검증·미리보기 상태를 연결했습니다.',
  },
  {
    title: '조건부 UI',
    description:
      '로그인·권한·관심품목에 따른 화면 분기를 구현했습니다.',
  },
  {
    title: '외부 코드 분석',
    description:
      'FIS Chat의 기존 React 컴포넌트 구조를 분석하고 필요한 기능만 재구성했습니다.',
  },
];

export const stackGroups: TechStacks[] = [
  {
    title: '실무 경험',
    stacks: [
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
      'React',
      'Vite',
      'Responsive UI',
      'Accessibility',
    ]
  },
  {
    title: '개인 프로젝트',
    stacks: [
      'React',
      'TypeScript',
      'Vite',
      '상태 관리',
      '입력 검증',
      '외부 API 연동',
    ]
  }
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
