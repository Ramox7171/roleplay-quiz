import { useEffect } from "react";


export default function QTimer({ timeout, onTimeout, mode }) {
  useEffect(() => {
    const timer = setTimeout(onTimeout, timeout);
    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeout]);

  return (
    <div id="question-time" className={`progress-container ${mode}`}>
      <div
        className="progress-bar"
        style={{ animationDuration: `${timeout}ms` }}
      ></div>
    </div>
  );
}