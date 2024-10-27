import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <main className="grid h-full place-items-center bg-slate-950 px-6 py-24 sm:py-32 lg:px-8 ">
        <div className="text-center md:mt-44">
          <p className="text-2xl md:text-4xl lg:text-6xl font-semibold text-indigo-600">404</p>
          <h1 className="mt-4 text-balance text-3xl md:text-5xl lg:text-7xl font-semibold tracking-tight text-slate-800 sm:text-7xl">
            Page not found
          </h1>
          <p className="mt-6 text-pretty text-2xl md:text-lg lg:text-3xl font-medium text-gray-500 sm:text-xl/8">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white 
              shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
               focus-visible:outline-indigo-600"
              href="/"
            >
              Página Inicial
            </Link>
            <Link href="/" className="text-sm rounded-md font-semibold text-gray-900 bg-white px-3.5 py-2.5 shadow-sm hover:bg-indigo-500">
              Suporte <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
