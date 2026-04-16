'use client';
import { useState } from 'react';
import { ClickButton } from "@repo/ui/button"; // Проверь путь, возможно @repo/ui

export default function Home() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [result, setResult] = useState<any>(null);

  const handleAction = async () => {
    setStatus("loading");
    try {
      const response = await fetch('http://localhost:3001/v1/actions/click', {
        method: 'POST',
      });
      const data = await response.json();
      
      setResult(data);
      setStatus("success");

      // Возвращаем в исходное состояние через 3 секунды
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      console.error("Ошибка:", error);
      setStatus("idle");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 p-4">
      <ClickButton 
        onClick={handleAction} 
        status={status}
      >
        CLICK ME
      </ClickButton>

      {result && (
        <div className="mt-8 p-4 bg-slate-900 border border-slate-800 rounded-lg animate-in fade-in slide-in-from-bottom-4">
          <p className="text-green-400 font-mono text-sm">
            Server says: {result.message} (Count: {result.payload.clickCount})
          </p>
        </div>
      )}
    </main>
  );
}