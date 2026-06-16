export default function ResumePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 relative overflow-hidden">
      {/* Animated gradient blobs */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse" />
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />

      <div className="max-w-4xl mx-auto px-8 py-24 relative z-10">
        <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-300">
          <iframe
            src="/AvaVellozziResume.pdf"
            className="w-full h-screen"
          />
        </div>
      </div>
    </main>
  );
}