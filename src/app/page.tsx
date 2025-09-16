import Image from "next/image";

export default function Home() {
  return (
    <main className="font-sans">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <Image
          src="/hero.jpg"
          alt="Purdue Engineering community"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_95%]"
          style={{ zIndex: -10 }}
        />
        <div className="absolute inset-0 bg-black/60" style={{ zIndex: -5 }} aria-hidden />
        <div className="relative z-10 w-full flex items-center justify-center">
          <div className="max-w-3xl text-center px-6">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl drop-shadow-md">
              Purdue Engineering Student Council
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/90 drop-shadow">
              Serving Students | Serving Industry | Serving Community
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#mission"
                className="rounded-md bg-[var(--brand)] px-5 py-3 text-sm font-semibold text-black shadow-sm hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand)]"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-5xl lg:max-w-6xl lg:text-center">
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Who We Are
            </p>
            <p className="mt-6 text-lg leading-8 text-slate-600">
            Founded in 1975, the Purdue Engineering Student Council (PESC) is driven by its mission: "Serving Students, Serving Industry, Serving Community." Over the years, PESC has become a cornerstone of campus life through organizing Purdue’s largest career fairs, campus events, and community outreach.
            Our members—drawn from nearly every engineering discipline—are among Purdue’s most passionate and driven leaders. PESC is more than an organization; it’s a force for positive change, committed to shaping the future of engineering at Purdue and beyond.
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-2xl lg:mt-16 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-slate-900">
                  Serving Students
                </dt>
                <dd className="mt-2 text-base leading-7 text-slate-600">
                  We host professional development, mentorship, and wellness
                  initiatives to elevate student success.
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-slate-900">
                  Serving Industry
                </dt>
                <dd className="mt-2 text-base leading-7 text-slate-600">
                  We create meaningful connections through large-scale career
                  events and year-round engagement.
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-slate-900">
                  Serving the Community
                </dt>
                <dd className="mt-2 text-base leading-7 text-slate-600">
                  We give back through K-12 outreach, volunteering, and
                  service projects across Greater Lafayette.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Quote Section (moved below Mission) */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 md:gap-8 items-center">
              <div className="flex justify-center md:justify-start">
                <Image
                  src="/emma.jpg"
                  alt="Portrait of Emma Kessinger, PESC President"
                  width={96}
                  height={96}
                  className="h-24 w-24 rounded-full object-cover shadow-md"
                />
              </div>
              <div>
                <blockquote className="text-xl sm:text-2xl leading-relaxed text-slate-900 italic">
                  “PESC is more than just an organization—it's a community of driven leaders dedicated to serving students, industry, and community.”
                </blockquote>
                <div className="mt-4 text-slate-600">
                  <div className="font-semibold text-slate-900">Emma Kessinger</div>
                  <div className="text-sm">PESC President</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
