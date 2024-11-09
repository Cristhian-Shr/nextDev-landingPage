export default function Loading() {
  return (
    <div
      id="page"
      className="bg-login-gradient w-full h-screen bg-white dark:bg-slate-950"
    >
      <div id="container" className="flex items-center justify-center">
        <div id="ring"></div>
        <div id="ring"></div>
        <div id="ring"></div>
        <div id="ring"></div>
        <div className="text-slate-600 dark:text-primary font-bold">Loading...</div>
      </div>
    </div>
  );
}
