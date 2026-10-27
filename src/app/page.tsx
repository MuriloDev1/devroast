export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-zinc-950 text-zinc-100 font-sans">
      <div className="w-full max-w-lg p-8 rounded-2xl bg-zinc-900/80 border border-zinc-800 shadow-2xl backdrop-blur-sm text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Servidor Online • Next.js 16 + React 19
        </div>

        <h1 className="text-3xl font-extrabold tracking-tight mb-3 bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent">
          🔥 DevRoast
        </h1>

        <p className="text-zinc-400 text-sm leading-relaxed mb-6">
          O projeto está rodando perfeitamente! A tela estava branca porque o arquivo{" "}
          <code className="text-amber-400 bg-zinc-800/80 px-1.5 py-0.5 rounded text-xs font-mono">
            src/app/page.tsx
          </code>{" "}
          estava retornando apenas uma <code className="text-amber-400 bg-zinc-800/80 px-1.5 py-0.5 rounded text-xs font-mono">&lt;div /&gt;</code> vazia.
        </p>

        <div className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800/80 text-left text-xs font-mono text-zinc-300 space-y-2">
          <div className="flex items-center justify-between text-zinc-500 pb-2 border-b border-zinc-800">
            <span>COMANDO</span>
            <span>STATUS</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-emerald-400">npm run dev</span>
            <span className="text-zinc-400">Ativo (porta 3000)</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-emerald-400">Turbopack HMR</span>
            <span className="text-zinc-400">Conectado</span>
          </div>
        </div>
      </div>
    </main>
  );
}
