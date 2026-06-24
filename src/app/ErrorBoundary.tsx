import { Component, type ErrorInfo, type ReactNode } from 'react';

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

export class ErrorBoundary extends Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
> {
    state: ErrorBoundaryState = {
        hasError: false,
    };

    static getDerivedStateFromError(): ErrorBoundaryState {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Unexpected render error:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <main
                    id="main-content"
                    className="flex min-h-screen items-center justify-center bg-black px-6 text-white"
                >
                    <section className="max-w-md text-center">
                        <h1 className="mb-4 text-2xl font-bold">
                            화면을 불러오지 못했습니다
                        </h1>
                        <p className="mb-6 text-sm leading-6 text-white/70">
                            일시적인 오류가 발생했습니다. 홈으로 돌아가 다시 시도해주세요.
                        </p>
                        <a
                            href={import.meta.env.BASE_URL}
                            className="inline-flex rounded-full border border-white/30 px-4 py-2 text-sm hover:bg-white hover:text-black"
                        >
                            포트폴리오로 돌아가기
                        </a>
                    </section>
                </main>
            );
        }

        return this.props.children;
    }
}
