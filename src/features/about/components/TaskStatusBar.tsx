import clsx from "clsx";
import type { CSSProperties } from "react";
import { useNavigate } from "react-router";
import { assetPath } from "../../../shared/lib/assetPath";
import type { AboutWindowItem } from "../types";

interface TaskStatusBarProps {
    message?: string;
    usage?: string;
    showClock?: boolean;
    windows: AboutWindowItem[];
    activeId: number | null;
    onButtonClick: (id: number) => void;
}

export default function TaskStatusBar({
    message = "Copyright © Microsoft Corporation.",
    usage = "사용: 98.css, Win98icons",
    showClock = true,
    windows,
    activeId,
    onButtonClick
}: TaskStatusBarProps) {
    const navigate = useNavigate();
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const style = {
        "--start-icon": `url("${assetPath("images/icon/png/windows-0.png")}")`,
    } as CSSProperties;

    return (
        <footer className="button-bar" role="contentinfo" aria-label="copyright status bar" style={style}>
            <div className="flex gap-x-px grow items-center">
                <button className="home-button" aria-label="Start" onClick={() => navigate(-1)}>시작</button>
                <div className="flex flex-wrap md:flex-nowrap grow">
                    {/*<div className="start-bar-window">
                        <span className="flex items-center gap-x-1 truncate">
                            <LogoMoIcon className="size-3"/> MyPortfollo - ABOUT
                        </span>
                    </div>*/}
                    {windows.map((w) => (
                        <button
                            key={w.id}
                            type="button"
                            className={clsx(
                                "taskBtn !inline-flex items-center text-left truncate",
                                activeId === w.id ? "start-bar-window" : ""
                            )}
                            onClick={() => onButtonClick(w.id)}
                            aria-pressed={activeId === w.id}
                            title={w.title}
                        >
                            {w.icon && <img src={assetPath(`images/icon/png/${w.icon}.png`)} className="mr-1" alt="" />}
                            <span className="block truncate">{w.title}</span>
                        </button>
                    ))}
                </div>
            </div>

            {showClock && (
                <div className="textGroup flex items-center ml-2">
                    <div className="bottom-text copyright" title={`${message} • ${usage}`}>
                        {message} <span>{usage}</span>
                    </div>
                    <div className="bottom-text clock shrink-0" aria-label="clock">
                        {time}
                    </div>
                </div>
            )}
        </footer>
    );
}
