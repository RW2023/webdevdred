import { useTranslation } from 'next-i18next';
import Link from 'next/link';

import BlogLogo from '@icons/blog-logo.svg';
import { LanguageSelector } from '@src/components/features/language-selector';
import { Container } from '@src/components/shared/container';
import SubHeading from '@src/components/custom/UI/SubHeading';
import DarkToggle from '@src/components/custom/UI/DarkToggle';

export const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="py-5">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />
      <nav>
        <Container className="flex items-center justify-between">
          <Link href="/" title={t('common.homepage')}>
            <BlogLogo />
          </Link>
          <Link href="/signup" className="hover:text-gray-300 mr-6 text-xl font-semibold">
            <SubHeading title="subscribe" />
          </Link>
          <DarkToggle />
          <LanguageSelector />
        </Container>
      </nav>
    </header>
  );
};
