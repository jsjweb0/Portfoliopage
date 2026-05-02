import { useEffect, useMemo, useState } from "react";
import "../../../styles/about.css";
import {
  FallbackContent,
  windowComponents,
} from "../../../features/about/components/WindowContents";
import TaskStatusBar from "../../../features/about/components/TaskStatusBar";
import Win98Window from "../../../features/about/components/Win98Window";
import type {
  AboutWindowItem,
  AboutWindowType,
} from "../../../features/about/types";
import { assetPath } from "../../../shared/lib/assetPath";

const initialWindows: AboutWindowItem[] = [
  {
    id: 1,
    title: "ABOUT.ME",
    icon: "console_prompt-1",
    type: "about",
    minimized: false,
    zIndex: 1,
    showMaximize: false,
    showHelp: true,
    className: "!gap-0 w-full max-w-xl",
  },
  {
    id: 2,
    title: "Profile.doc",
    icon: "network_internet_pcs_installer-1",
    type: "profile",
    minimized: false,
    zIndex: 2,
    showMaximize: false,
    className: "w-full max-w-xl",
  },
  {
    id: 3,
    title: "README.exe",
    icon: "installer-1",
    type: "readme",
    minimized: false,
    zIndex: 3,
    className: "w-full max-w-xl !gap-0",
  },
  {
    id: 4,
    title: "Skills.exe",
    icon: "backup_devices_2-1",
    type: "skills",
    minimized: false,
    zIndex: 4,
    className: "w-full max-w-md",
  },
  {
    id: 5,
    title: "My Project.sys",
    icon: "package-0",
    type: "projects",
    minimized: false,
    zIndex: 5,
    className: "w-full max-w-md",
  },
  {
    id: 6,
    title: "Contact.vbs",
    icon: "user_world-0",
    type: "contact",
    minimized: false,
    zIndex: 6,
    className: "min-w-[190px]",
  },
  {
    id: 7,
    title: "FunFact.txt",
    icon: "notepad-0",
    type: "funfact",
    minimized: false,
    zIndex: 7,
    className: "w-full max-w-xl !gap-1",
  },
];

function isAboutWindowType(value: string): value is AboutWindowType {
  return value in windowComponents;
}

export function AboutPage() {
    useEffect(() => {
        let link = document.getElementById("win98-style") as HTMLLinkElement | null;
        if (!link) {
            link = document.createElement("link");
            link.id = "win98-style";
            link.rel = "stylesheet";
            link.href = "https://unpkg.com/98.css";
            document.head.appendChild(link);
        }

        return () => {
            const el = document.getElementById("win98-style");
            if (el) el.remove();
        };
    }, []);

    const [windows, setWindows] = useState<AboutWindowItem[]>(initialWindows);
    const [activeId, setActiveId] = useState<number | null>(null);
    const [showDialog, setShowDialog] = useState(false);
    const [checking, setChecking] = useState(false);

    // 최상위 zIndex 계산
    const topZ = useMemo(() => Math.max(0, ...windows.map(w => w.zIndex)), [windows]);

    // 헬퍼: 특정 창을 맨 앞으로
    const bringToFront = (id: number) => {
        setWindows(prev => {
            const top = Math.max(0, ...prev.map(w => w.zIndex));
            return prev.map(w => (w.id === id ? { ...w, zIndex: top + 1 } : w));
        });
    };

// 헬퍼: 제외 대상(excludeId)을 빼고 현재 열려있는 창 중 zIndex 최상단 찾기
    const getTopOpenWindowId = (excludeId: number) => {
        const open = windows.filter(w => !w.minimized && w.id !== excludeId);
        if (open.length === 0) return null;
        return open.reduce((top, w) =>
            w.zIndex > top.zIndex ? w : top
        ).id;
    };

    // 최소화 버튼 클릭
    const toggleMinimize = (id: number) => {
        // 1) 창 최소화 토글
        setWindows(prev =>
            prev.map(w => (w.id === id ? { ...w, minimized: !w.minimized } : w))
        );

        // 2) 만약 지금 최소화하는 창이 active라면, 다음 창에 포커스
        if (activeId === id) {
            const nextId = getTopOpenWindowId(id); // 현재 상태에서 계산
            setActiveId(nextId);                   // 없으면 null
            if (nextId) bringToFront(nextId);      // 있다면 맨 앞으로
        }
    };

    // 창 클릭 시 포커스
    const focusWindow = (id: number) => {
        setActiveId(id);
        setWindows(prev =>
            prev.map(w => w.id === id ? { ...w, zIndex: topZ + 1 } : w)
        );
    };

    // 상태바 버튼 클릭
    const handleTaskbarClick = (id: number) => {
        setActiveId(id);
        setWindows(prev =>
            prev.map(w => {
                if (w.id !== id) return w;
                // 최소화 상태면 복원
                const restored = w.minimized ? { ...w, minimized: false } : w;
                return { ...restored, zIndex: topZ + 1 };
            })
        );
    };

    const version = useMemo(() => "v1.0.3", []);
    const handleUpdateCheck = () => {
        setShowDialog(true);
        setChecking(true);
        setTimeout(() => setChecking(false), 1000);
    };

    // App.jsx 안에 추가
    const restoreAndFocusByType = (type: AboutWindowType) => {
        setWindows((prev) => {
            const topZ = Math.max(0, ...prev.map((w) => w.zIndex));
            return prev.map((w) => {
                if (w.type === type) {
                    return {
                        ...w,
                        minimized: false,      // 복원
                        zIndex: topZ + 1        // 맨 앞으로
                    };
                }
                return w;
            });
        });
        // activeId도 변경
        const win = windows.find((w) => w.type === type);
        if (win) setActiveId(win.id);
    };

    useEffect(() =>{
        focusWindow?.(1);

        const hash = window.location.hash.replace("#", "");
        if (hash && isAboutWindowType(hash)) {
            restoreAndFocusByType(hash);
        }
        // 최초 로딩 시 한 번만 해시를 확인합니다.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="desktopContainer">
            <div className="windowPanel flex flex-wrap gap-1">
                {windows.map((w) => {
                    if (w.minimized) return null;
                    const Content = windowComponents[w.type] ?? FallbackContent;

                    return (
                        !w.minimized && (
                            <Win98Window
                                key={w.id}
                                {...w}
                                onMinimize={toggleMinimize}
                                onFocus={focusWindow}
                                isActive={activeId === w.id}
                            >
                                <Content key={`content-${w.id}`} onUpdateCheck={handleUpdateCheck} />
                            </Win98Window>
                        )
                    )}
                )}

                <div>
                    <pre className="max-w-full h-[185px] whitespace-pre-line min-h-[209px]">
<img src={assetPath("images/icon/png/note-3.png")} alt=""/> CSS 전역 적용
<br />import "../assets/css/***.css"; //
<br />CSS import는 **JS 모듈 시스템 상 "전역으로 한 번만 로드되면 끝"**,
<br />안 쓰더라도,
<br />이미 이 CSS는 번들에 포함되어 전체 앱에 전역 적용되어버림.
                    </pre>
                </div>

                {/* 업데이트 다이얼로그 */}
                {showDialog && (
                    <div className="window-dialog" role="dialog" aria-modal="true" aria-label="업데이트 확인">
                        <div className="window">
                            <div className="title-bar">
                                <div className="title-bar-text">
                                    <img src={assetPath("images/icon/png/magnifying_glass_4-0.png")} className="mr-px" alt=""/>
                                    업데이트 확인
                                </div>
                                <div className="title-bar-controls">
                                    <button aria-label="Close" onClick={() => setShowDialog(false)}></button>
                                </div>
                            </div>
                            <div className="window-body text-center">
                                <p className="mb-2">{checking ? "업데이트를 확인하는 중..." : `최신 버전입니다. (${version})`}</p>
                                <div>
                                    {!checking && (
                                        <button className="default" onClick={() => setShowDialog(false)}>확인</button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {/* 업데이트 다이얼로그 */}
            </div>
            <TaskStatusBar
                message="본 페이지의 디자인 및 아이콘은 Microsoft Corporation의 자산입니다."
                usage="UI 스타일 재현: 98.css · Win98icons"
                showClock={true}
                windows={windows}
                activeId={activeId}
                onButtonClick={handleTaskbarClick}
            />
        </div>
    )
}

export default AboutPage;
