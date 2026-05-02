import { type ReactNode, useEffect, useLayoutEffect, useRef, useState } from "react";
import { assetPath } from "../../../shared/lib/assetPath";

interface Win98WindowProps {
    id: number;
    icon?: string;
    title: string;
    minimized?: boolean;
    onMinimize?: (id: number) => void;
    children: ReactNode;
    onFocus?: (id: number) => void;
    zIndex?: number;
    className?: string;
    showMaximize?: boolean;
    showRestore?: boolean;
    showHelp?: boolean;
    isActive?: boolean;
}

export default function Win98Window({
    id,
    icon,
    title,
    minimized = false,
    onMinimize,
    children,
    onFocus,
    zIndex = 1,
    className = "",
    showMaximize = true,
    showRestore = false,
    showHelp = false,
    isActive,
}: Win98WindowProps) {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState("auto");
    const iconSrc = icon
        ? (icon.startsWith("/") ? assetPath(icon) : assetPath(`images/icon/png/${icon}.png`))
        : undefined;

    // 최초 세팅
    useLayoutEffect(() => {
        if (!wrapperRef.current) return;
        setHeight(minimized ? "0px" : "auto");
    }, []);

    // minimized prop 변경될 때 애니메이션
    useEffect(() => {
        const wrapper = wrapperRef.current;
        if (!wrapper) return;

        const current = wrapper.getBoundingClientRect().height;
        const next = minimized ? 0 : wrapper.scrollHeight;

        // 시작점 고정
        wrapper.style.height = `${current}px`;
        // 리플로우
        void wrapper.offsetHeight;

        setHeight(`${next}px`);
    }, [minimized]);

    const onTransitionEnd = () => {
        if (!minimized) setHeight("auto");
    };

    return (
        <div
            className={`window inline-flex flex-col ${className} ${isActive ? "is-active" : ""}`}
            onMouseDown={() => onFocus?.(id)}
            style={{ zIndex }}
        >
            <div className={`title-bar ${!isActive && "inactive"}`}>
                <div className="title-bar-text">
                    {iconSrc && <img src={iconSrc} alt="" className="mr-1" aria-hidden="true" />}
                    {title}
                </div>
                <div className="title-bar-controls">
                    <button aria-label="Minimize" onClick={() => onMinimize?.(id)} />
                    {showMaximize && (<button aria-label="Maximize" disabled />)}
                    {showRestore && (<button aria-label="Restore"></button>)}
                    {showHelp && (<button aria-label="Help"></button>)}
                    <button aria-label="Close" disabled />
                </div>
            </div>

            <div
                ref={wrapperRef}
                className="window-body-wrapper"
                style={{ height, transition: "height 200ms ease, opacity 200ms ease", overflow: "hidden", opacity: minimized ? 0 : 1 }}
                onTransitionEnd={onTransitionEnd}
                aria-hidden={minimized}
            >
                {children}
            </div>

            {/* 포커스 시 테두리 강조 (선택) */}
            <style>{`
        .window:focus-within .title-bar { outline: 2px dotted #000; }
      `}</style>
        </div>
    );
}
