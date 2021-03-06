// Packages
import React, { useContext } from 'react'
import Head from 'next/head';

import { css } from '@emotion/react'

// Local
import Header from './header'
import Banner from './banner'

import { ThemeContext } from '../config/theme'
// Style

export const siteTitle = "Swordword's blog";

/**
 * Layout 全局层
 * @param param0
 * @returns
 */
export default function Layout({
  children,
}: {
  children: React.ReactNode,
}) {
  const { theme } = useContext(ThemeContext)

  const LayoutStyle = css`
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  background: ${theme.background};         
  color: ${theme.foreground};
  padding-bottom: 50px
`

  return (
    <div css={LayoutStyle}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
      </Head>

      <Header />

      <Banner />

      <main css={css`
        position:relative;
        width: 1100px;
        background: #fff;
        padding: 50px 100px;
        margin: -150px auto 50px;
        border-radius: 8px;`}
      >
        {children}
      </main>

    </div>

  );
}
