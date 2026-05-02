import { useEffect, useMemo, useRef, useState } from "react";

interface TerminalLine {
    text: string;
    prompt: boolean;
    className?: string;
}

interface AboutMeTerminalProps {
    speed?: number;
    linePause?: number;
    promptText?: string;
    lines?: TerminalLine[];
}

/**
 * Win98 스타일 AboutMeTerminal
 * - 타이핑 애니메이션 + 무한 깜빡이는 커서
 * - 줄마다 프롬프트(on/off), 색상/속도 조절
 *
 * 사용 예시:
 * <AboutMeTerminal />
 * <AboutMeTerminal speed={30} linePause={500} promptText="C:\\Users\\Me>" />
 * <AboutMeTerminal lines={[
 *   { text: "ABOUT.ME 실행 중...", prompt: false },
 *   { text: "설치된 모듈: React, JS, CSS, Firebase", prompt: true, className: "path" },
 *   { text: "세상에서 가장 FUN한 UI 만들기", prompt: true },
 * ]} />
 */
export default function AboutMeTerminal({
    speed = 35,
    linePause = 600,
    promptText = "C:\\\\Users\\\\ME>",
    lines: propLines,
}: AboutMeTerminalProps) {
    const defaultLines = useRef<TerminalLine[]>([
        {text: "> booting ABOUT.ME...", prompt: false },
        {text: "> profile loaded successfully", prompt: false,},
        {text: " ", prompt: true, className: "prompt"},
        {text: "> Hi, I'm Sujin.", prompt: false, className: "path pl-2"},
        {text: "> Front-end developer with a focus on UI and interaction.", prompt: false, className: "path pl-2"},
        {text: "> Continue? [Y]", prompt: false, className: "pl-2"},
    ]).current;

    const lines = useMemo(
        () => (propLines?.length ? propLines : defaultLines),
        [defaultLines, propLines],
    );

    const [lineIndex, setLineIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [finishedLines, setFinishedLines] = useState<TerminalLine[]>([]);

    // 타자 효과 루프
    useEffect(() => {
        if (lineIndex >= lines.length) return; // 모두 완료

        const current = lines[lineIndex];
        const done = charIndex >= current.text.length;

        if (done) {
            const t = setTimeout(() => {
                setFinishedLines((prev) => [...prev, { ...current }]);
                setLineIndex((i) => i + 1);
                setCharIndex(0);
            }, linePause);
            return () => clearTimeout(t);
        }

        const id = setInterval(() => setCharIndex((c) => c + 1), speed);
        return () => clearInterval(id);
    }, [charIndex, lineIndex, speed, linePause, lines]);

    // 현재 라인 계산
    const isTyping = lineIndex < lines.length;
    const currentLine = isTyping ? lines[lineIndex] : finishedLines[finishedLines.length - 1];

    return (
        <div className={`terminal-body`.trim()}>
            {/* 내장 스타일: 한 파일로 붙여넣어도 바로 동작 */}
            <style>{`
                :root {
                  --win98-blue: #0a64ad;
                  --win98-dark: #808080;
                  --frame-bg: #dfdfdf;
                  --bevel-light: #ffffff;
                  --bevel-dark: #6b6b6b;
                  --crt-bg: #020503;
                  --crt-fg: #f2f2f2;    /* 흰색 톤 */
                  --crt-dim: #bcbcbc;   /* 보조 텍스트 */
                }
                .terminal-body {
                    flex:1;
                  background: var(--frame-bg);
                  border-top: 1px solid var(--bevel-light);
                  border-left: 1px solid var(--bevel-light);
                  border-right: 1px solid var(--bevel-dark);
                  border-bottom: 1px solid var(--bevel-dark);
                }
                .terminal-body .terminal {
                  position: relative;
                  min-height: 271px;
                  background: var(--crt-bg); color: var(--crt-fg);
                  padding: 16px 2px; min-height: 160px;
                  font: 500 14px/1.6 "JetBrains Mono", "Fira Code", Consolas, monospace;
                  border: 2px solid #000;
                  box-shadow: inset 0 0 0 1px #0b0b0b, inset 0 0 35px rgba(255,255,255,0.06);
                  text-shadow: 0 0 4px rgba(255,255,255,0.4);
                  overflow: hidden;
                  height:100%;
                }
                .terminal-body .terminal::before {
                  content: ""; position: absolute; inset: 0;
                  background: repeating-linear-gradient(to bottom, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 2px, transparent 3px);
                  pointer-events: none; mix-blend-mode: soft-light;
                }
                .terminal-body .terminal::after {
                  content: ""; position: absolute; inset: -2px; pointer-events: none;
                  background: radial-gradient(ellipse at center, rgba(255,255,255,0.08) 0%, transparent 60%),
                              linear-gradient(to bottom, rgba(255,255,255,0.06), transparent 30%, transparent 70%, rgba(0,0,0,0.2));
                }
                .terminal-body .prompt { color: var(--crt-fg); }
                .terminal-body .path   { color: var(--crt-dim); }
                .cursor {
                  display: inline-block; width: 8px; height: 1.2em; vertical-align: middle; margin-left: 2px;
                  background: var(--crt-fg);
                  animation: blink 1s steps(1, end) infinite;
                  box-shadow: 0 0 6px rgba(255,255,255,0.7);
                }
                @keyframes blink { 50% { opacity: 0; } }
                .type-on { overflow: hidden; white-space: nowrap; }
                @media (max-width: 520px) { 
                    .terminal-body { width: 100%; }
                    .terminal-body .terminal { font-size: 13px; padding: 14px; } 
                 }
              `}</style>
            <div className="terminal" role="log" aria-live="polite">
                {/* 이미 타이핑 완료된 줄들 */}
                {finishedLines.map((ln, i) => (
                    <div key={i}>
                        {ln.prompt && <span className="prompt"> {promptText} </span>}
                        <span className={ln.className || undefined}>{ln.text}</span>
                    </div>
                ))}

                {/* 현재 타이핑 중인 줄 */}
                {isTyping && (
                    <div>
                        {currentLine?.prompt && <span className="prompt"> {promptText} </span>}
                        <span className={currentLine?.className || undefined}>
                        {currentLine?.text.slice(0, charIndex)}
                      </span>
                        <span className="cursor" aria-hidden="true" />
                    </div>
                )}

                {/* 모두 끝난 뒤에도 커서 깜빡임 유지 */}
                {!isTyping && (
                    <div>
                        {currentLine?.prompt && <span className="prompt"> {promptText} </span>}
                        <span className={currentLine?.className || undefined}>{currentLine?.text}</span>
                        <span className="cursor" aria-hidden="true" />
                    </div>
                )}
            </div>
        </div>

    );
}
