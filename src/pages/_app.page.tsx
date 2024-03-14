import { ContentfulLivePreviewProvider } from '@contentful/live-preview/react';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import { Urbanist } from 'next/font/google';
import './utils/globals.css';
import '@contentful/live-preview/style.css';
import { useRouter } from 'next/router';

import { Layout } from '@src/components/templates/layout';

const urbanist = Urbanist({ subsets: ['latin'], variable: '--font-urbanist' });

const App = ({ Component, pageProps }: AppProps) => {
  const { locale } = useRouter();

  // This line checks if the 'noDefaultLayout' prop is true. If so, the default layout will not be used.
  const shouldUseDefaultLayout = !pageProps.noDefaultLayout;

  return (
    <ContentfulLivePreviewProvider
      enableInspectorMode={pageProps.previewActive}
      enableLiveUpdates={pageProps.previewActive}
      locale={locale || 'en-US'}
    >
      <main className={`${urbanist.variable} font-sans`}>
        {
          // Conditional rendering based on 'shouldUseDefaultLayout'
          shouldUseDefaultLayout ? (
            // If true, wrap the Component with the Layout
            <Layout>
              <Component {...pageProps} />
            </Layout>
          ) : (
            // Otherwise, render the Component without the Layout
            <Component {...pageProps} />
          )
        }
      </main>
      <div id="portal" className={`${urbanist.variable} font-sans`} />
    </ContentfulLivePreviewProvider>
  );
};

export default appWithTranslation(App);
