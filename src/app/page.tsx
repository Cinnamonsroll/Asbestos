import Link from "next/link"
function AtomIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="1" />
      <path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z" />
      <path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z" />
    </svg>
  )
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-black">
      <div className="bg-dots">
        
          <header className="px-4 lg:px-6 h-14 flex items-center text-white">
            <Link className="flex items-center justify-center" href="#">
              <AtomIcon className="h-6 w-6" />
              <span className="sr-only">Asbestos Exploration</span>
            </Link>
            <nav className="ml-auto flex gap-4 sm:gap-6">
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md bg-white px-4 text-sm font-medium text-black shadow transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white disabled:pointer-events-none disabled:opacity-50"
                href="https://forms.gle/QWt5Qstpi5ZNPJBE9"
              >
                Take the Quiz
              </Link>
            </nav>
          </header>
          <main className="flex-1 text-white">
            <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
              <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                  <div className="flex flex-col justify-center space-y-4">
                    <div className="space-y-2">
                      <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                        Asbestos: The Invisible Threat
                      </h1>
                      <p className="max-w-[600px]  md:text-xl">
                        Uncover the hidden dangers of asbestos and its impact on our health and environment.
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 min-[400px]:flex-row">
                      <Link
                        className="inline-flex h-9 items-center justify-center rounded-md bg-white px-4 text-sm font-medium text-black shadow transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white disabled:pointer-events-none disabled:opacity-50"
                        href="https://forms.gle/QWt5Qstpi5ZNPJBE9"
                      >
                        Take the Quiz
                      </Link>
                    </div>
                  </div>
                  <div className="relative group">
                    <img
                      alt="Asbestos"
                      className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                      height="204"
                      src="https://discord.mx/csfDpKIQcC.png"
                      width="303"
                    />
                    <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100 bg-black/50 rounded-xl">
                      <div className="text-white text-2xl font-bold animate-pulse">
                        Mg
                        <sub>3</sub>
                        (Si<sub>2</sub>O<sub>5</sub>)(OH)<sub>4</sub>{"\n"}
                      </div>
                    </div>
                    <div className="text-white text-2xl font-bold animate-pulse text-center hidden sm:block md:block lg:hidden">
                        Mg
                        <sub>3</sub>
                        (Si<sub>2</sub>O<sub>5</sub>)(OH)<sub>4</sub>{"\n"}
                      </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32">
              <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-3 lg:gap-10">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What is Asbestos?</h2>
                  <p className="max-w-[600px] text-gray-50 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Asbestos is a naturally occurring mineral that was widely used in construction and manufacturing due to
                    its heat-resistant and durable properties. However, exposure to asbestos fibers can cause serious health
                    issues, including lung cancer and mesothelioma. It affects almost every country, as well as the biosphere.
                  </p>
                </div>
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Where is Asbestos Found?</h2>
                  <p className="max-w-[600px] text-gray-50 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    You can't smell asbestos but it usually has a popcorn-type look in places it's used. But other than that it is invisible to the eyes in the air.
                    It causes lung problems: asbestosis, mesothelial, and lung cancer. Also a higher risk for digestive system cancers. No amount is safe but any less than .1 fiber/cc is allowed. Less than one percent in materials is allowed.
                  </p>
                </div>
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">How can we get rid of Asbestos?</h2>
                  <p className="max-w-[600px] text-gray-50 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Government regulations and bans on the production of the material.
                    It's working but the material is still in old buildings and can be exposed to people.
                    The removal of the material would be a government program.
                  </p>
                </div>
              </div>
            </section>
          </main>
        </div>
    </div>
  );
}
