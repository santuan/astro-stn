import { useTheme } from 'next-themes';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { AiOutlineDownload } from 'react-icons/ai';
import { HiLightBulb } from 'react-icons/hi';
import { MdLightbulbOutline } from 'react-icons/md';
import { RiHome4Fill, RiHome4Line } from 'react-icons/ri';

export default function CvPage(props) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);
  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: 'Santiago Rodríguez Couto - CV',
    description: `Desarrollador y diseñador de páginas web.`,
    image: 'https://srcouto.vercel.app//static/images/banner.png',
    type: 'website',
    ...customMeta
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://srcouto.vercel.app/${router.asPath}`}
        />
        <link rel="canonical" href={`https://srcouto.vercel.app/${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Santiago Rodriguez Couto" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@santuuan" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <div className="relative px-4 pt-12 pb-8 overflow-x-hidden font-sans print:text-gray-900 md:pt-20 print:pt-3 print:md:pt-3 cvPage">
        <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full h-12 bg-white/70 dark:bg-gray-900/50 print:hidden backdrop-blur-lg hue-rotate-30 dark:hue-rotate-15">
          <div className='flex items-center justify-between w-full max-w-3xl px-8 mx-auto'>
            <Link href="/">
              <a aria-label="Back to Homepage" className="w-8 h-8 m-3 font-mono text-lg font-medium text-gray-900 rounded flex-center hover:ring-2 ring-transparent hover:ring-gray-300 dark:text-white print:hidden" data-tip="Home">
                {resolvedTheme === 'dark' ? (
                  <RiHome4Line className="text-xl" />
                ) : (
                  <RiHome4Fill className="text-xl" />
                )}
              </a>
            </Link>
            <Link href="/cv">
              <a
                data-tip="Translate to Spanish"
                aria-label="Go to spanish version"
                className="w-8 h-8 m-3 font-mono text-lg font-medium text-gray-900 rounded flex-center hover:ring-2 ring-transparent hover:ring-gray-300 dark:text-white"
              >
                EN
              </a>
            </Link>
            <a
              href="/static/cv-src-2022-en.pdf"
              target="_blank"
              aria-label="Download CV in PDF format"
              data-tip="Download PDF"
              rel="noopener noreferrer"
              className="w-8 h-8 m-3 font-mono text-lg font-medium text-gray-900 rounded flex-center hover:ring-2 ring-transparent hover:ring-gray-300 dark:text-white print:hidden"
            >
              <AiOutlineDownload />
            </a>

            <button
              aria-label="Change Light"
              type="button"
              data-tip="Change Light"
              className="w-8 h-8 m-3 font-mono text-lg font-medium text-gray-900 rounded flex-center hover:ring-2 ring-transparent hover:ring-gray-300 dark:text-white focus:outline-none focus-visible:ring-gray-300 "
              onClick={() =>
                setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
              }
            >
              {mounted && (
                <div className="text-xl text-zinc-800 dark:text-zinc-200">
                  {resolvedTheme === 'dark' ? (
                    <MdLightbulbOutline />
                  ) : (
                    <HiLightBulb />
                  )}
                </div>
              )}
            </button>
          </div>
        </div>
        {children}
      </div>
    </>
  );
}
