const Footer = () => {
  return (
    <footer className="bg-[var(--color-surface)] text-[var(--color-text)]">
      <h1 className="px-5 py-6 font-[Cormorant_Garamond] text-4xl font-semibold tracking-wide md:text-5xl">
        Foo
      </h1>

      <hr className="border-[var(--color-border)] md:hidden" />

      <div className="*:p-4 md:grid md:grid-cols-4 md:*:flex md:*:flex-col md:*:justify-center md:*:px-7 md:*:py-12">
        <div className="col-span-2 font-[Jost] md:border-y md:border-[var(--color-border)]">
          <h4 className="pb-3 text-sm font-medium tracking-widest text-[var(--color-accent)] uppercase">
            Your Creative Partner
          </h4>
          <p className="mb-1 text-xs font-light tracking-wider text-[var(--color-text-muted)] uppercase">
            Email
          </p>
          <div className="max-w-xs">
            <input
              className="my-2 w-full border-b border-[var(--color-accent)] bg-transparent pb-1 text-sm text-[var(--color-text)] outline-none placeholder:text-[var(--color-text-muted)]"
              type="text"
              placeholder="your@email.com"
            />
            <button
              className="group mt-2 flex items-center gap-2 font-[Jost] text-sm font-medium tracking-widest text-[var(--color-accent)] uppercase transition-transform duration-300 hover:translate-x-1"
              type="button"
            >
              Send <span aria-hidden>→</span>
            </button>
          </div>
        </div>

        <div className="border-y border-[var(--color-border)] font-[Jost] font-light md:border md:text-center">
          <div className="mb-4 space-y-1 text-sm text-[var(--color-text-muted)]">
            <p>123-456-7890</p>
            <p>info@mysite.com</p>
            <p>1234 Street Name</p>
            <p>San Francisco, CA 94199</p>
          </div>
          <ul className="flex gap-4 text-xs tracking-widest text-[var(--color-accent)] uppercase md:justify-center">
            <li>
              <a href="#" className="underline-sweep">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="underline-sweep">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="underline-sweep">
                Instagram
              </a>
            </li>
          </ul>
        </div>

        <div className="font-[Jost] md:border-y md:border-r md:border-[var(--color-border)] md:text-center">
          <ul className="flex flex-col gap-2 text-sm text-[var(--color-text-muted)]">
            <li>
              <a href="#" className="underline-sweep">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="underline-sweep">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="underline-sweep">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      <p className="border-t border-[var(--color-border)] px-5 py-4 font-[Jost] text-xs font-light tracking-wide text-[var(--color-text-muted)]">
        © 2023 Foo, All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
