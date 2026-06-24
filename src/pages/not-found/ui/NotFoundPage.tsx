import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Header } from '../../../widgets/header/Header';

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header variant="detail" meta="404" />

      <main
        id="main-content"
        tabIndex={-1}
        className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-3xl items-center px-6 py-16 md:px-8"
      >
        <section>
          <p className="mb-4 font-mono text-sm uppercase tracking-wider text-[#8df5c5]">
            Page not found
          </p>
          <h1 className="mb-5 text-4xl font-bold leading-tight md:text-6xl">
            요청한 페이지를 찾을 수 없습니다.
          </h1>
          <p className="mb-8 text-base leading-8 text-white/70 md:text-lg">
            주소가 잘못 입력되었거나 페이지가 이동되었을 수 있습니다.
            포트폴리오 목록으로 돌아가 프로젝트를 다시 확인해주세요.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-sm transition-colors hover:bg-white hover:text-black focus-visible:bg-white focus-visible:text-black"
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            포트폴리오로 돌아가기
          </Link>
        </section>
      </main>
    </div>
  );
}
