import { useTranslation } from 'next-i18next';
import Link from 'next/link';

import { Container } from '@src/components/shared/container';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer footer-center bg-base-300 p-10 text-base-content">
      <nav className="grid grid-flow-col gap-4">
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/feedback">Feedback</Link>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4 text-3xl">
          {/* GitHub */}
          <a
            href="https://github.com/RW2023/"
            target="https://github.com/RW2023/"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
            <span className="sr-only">GitHub</span>
          </a>
        </div>
      </nav>
      <aside>
        <p className="text-base-content">
          Copyright © 2023 - All rights reserved by
          <span> Ryan Wilson</span>
        </p>
      </aside>
    </footer>
  );
};
