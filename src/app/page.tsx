import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#16213E]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1A1A2E] via-[#0F3460] to-[#16213E] px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <div className="mb-8 flex justify-center">
              <Image
                src="/images/logo.png"
                alt="Northstar Ops Logo"
                width={200}
                height={200}
                priority
                className="drop-shadow-2xl"
              />
            </div>
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl mb-6">
              Navigate Your Business
              <span className="block text-[#E94560]">To Success</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
              Northstar Ops provides strategic operations consulting to guide your business through growth, optimization, and digital transformation. Let us be your guiding light.
            </p>
            <div className="mt-10 flex items-center justify-center gap-6">
              <a
                href="#contact"
                className="rounded-full bg-[#E94560] px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-[#d63850] transition-all transform hover:scale-105"
              >
                Get Started
              </a>
              <a
                href="#pricing"
                className="rounded-full border-2 border-white px-8 py-4 text-lg font-semibold text-white hover:bg-white hover:text-[#1A1A2E] transition-all"
              >
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 lg:px-8 bg-[#1A1A2E]">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What We Offer</h2>
            <p className="text-gray-400 text-lg">Comprehensive solutions for modern businesses</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#0F3460] p-8 rounded-2xl border border-[#E94560]/20 hover:border-[#E94560] transition-all">
              <div className="w-12 h-12 bg-[#E94560] rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Strategic Planning</h3>
              <p className="text-gray-300">Build robust roadmaps that align your operations with long-term business goals.</p>
            </div>

            <div className="bg-[#0F3460] p-8 rounded-2xl border border-[#E94560]/20 hover:border-[#E94560] transition-all">
              <div className="w-12 h-12 bg-[#E94560] rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Process Optimization</h3>
              <p className="text-gray-300">Streamline workflows and eliminate bottlenecks for maximum efficiency.</p>
            </div>

            <div className="bg-[#0F3460] p-8 rounded-2xl border border-[#E94560]/20 hover:border-[#E94560] transition-all">
              <div className="w-12 h-12 bg-[#E94560] rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Digital Transformation</h3>
              <p className="text-gray-300">Modernize your operations with cutting-edge tools and technologies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6 lg:px-8 bg-[#16213E]">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
            <p className="text-gray-400 text-lg">Choose the plan that fits your business needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter */}
            <div className="bg-[#1A1A2E] p-8 rounded-2xl border border-gray-700 hover:border-[#E94560] transition-all">
              <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
              <p className="text-gray-400 mb-6">For small businesses</p>
              <div className="mb-6">
                <span className="text-5xl font-bold text-white">$2,500</span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#E94560] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Monthly strategy sessions</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#E94560] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Process documentation</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#E94560] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Email support</span>
                </li>
              </ul>
              <a href="#contact" className="block w-full text-center rounded-full border-2 border-[#E94560] px-6 py-3 font-semibold text-[#E94560] hover:bg-[#E94560] hover:text-white transition-all">
                Get Started
              </a>
            </div>

            {/* Professional */}
            <div className="bg-gradient-to-br from-[#E94560] to-[#d63850] p-8 rounded-2xl border-2 border-[#E94560] transform scale-105 shadow-2xl">
              <div className="bg-white text-[#E94560] text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Professional</h3>
              <p className="text-white/90 mb-6">For growing companies</p>
              <div className="mb-6">
                <span className="text-5xl font-bold text-white">$5,000</span>
                <span className="text-white/90">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white">Everything in Starter</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white">Weekly consulting calls</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white">Custom workflow automation</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white">Priority support</span>
                </li>
              </ul>
              <a href="#contact" className="block w-full text-center rounded-full bg-white px-6 py-3 font-semibold text-[#E94560] hover:bg-gray-100 transition-all">
                Get Started
              </a>
            </div>

            {/* Enterprise */}
            <div className="bg-[#1A1A2E] p-8 rounded-2xl border border-gray-700 hover:border-[#E94560] transition-all">
              <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
              <p className="text-gray-400 mb-6">For large organizations</p>
              <div className="mb-6">
                <span className="text-5xl font-bold text-white">Custom</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#E94560] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Everything in Professional</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#E94560] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Dedicated account manager</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#E94560] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">On-site consulting available</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#E94560] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">24/7 support</span>
                </li>
              </ul>
              <a href="#contact" className="block w-full text-center rounded-full border-2 border-[#E94560] px-6 py-3 font-semibold text-[#E94560] hover:bg-[#E94560] hover:text-white transition-all">
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 lg:px-8 bg-[#1A1A2E]">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-gray-400 text-lg">Ready to navigate your business to success? Let&apos;s talk.</p>
          </div>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="first-name" className="block text-sm font-semibold text-white mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="first-name"
                  className="w-full rounded-lg bg-[#0F3460] border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:border-[#E94560] focus:outline-none focus:ring-2 focus:ring-[#E94560]/20"
                  placeholder="John"
                />
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-semibold text-white mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="last-name"
                  className="w-full rounded-lg bg-[#0F3460] border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:border-[#E94560] focus:outline-none focus:ring-2 focus:ring-[#E94560]/20"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full rounded-lg bg-[#0F3460] border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:border-[#E94560] focus:outline-none focus:ring-2 focus:ring-[#E94560]/20"
                placeholder="john@company.com"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-semibold text-white mb-2">
                Company
              </label>
              <input
                type="text"
                id="company"
                className="w-full rounded-lg bg-[#0F3460] border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:border-[#E94560] focus:outline-none focus:ring-2 focus:ring-[#E94560]/20"
                placeholder="Acme Inc."
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full rounded-lg bg-[#0F3460] border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:border-[#E94560] focus:outline-none focus:ring-2 focus:ring-[#E94560]/20"
                placeholder="Tell us about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-[#E94560] px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-[#d63850] transition-all transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F3460] px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-6 md:mb-0">
              <Image
                src="/images/logo.png"
                alt="Northstar Ops Logo"
                width={80}
                height={80}
                className="opacity-90"
              />
            </div>
            <p className="text-gray-400 text-sm">
              © 2026 Northstar Ops. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
