import Head from 'next/head'
import { Navbar } from '../ui'

type Props = {
  children: JSX.Element,
  title ?: string
}

const origin = (typeof window == 'undefined') ? '': window.location.origin

export const Layout = ({ children, title }: Props) => {

  return (
    <>
      <Head>
        <title>{ title || 'Pokemon App' }</title>
        <meta name="author" content="Andres"/>
        <meta name="description" content={`Información sobre el pokemon ${title}`} />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />

        <meta property="og:title" content={`Información sobre el pokemon`}/>
        <meta property="og:description" content={`Esta es la página sobre el pokemon`}/>
        <meta property="og:image" content={`${origin}/img/banner.png`} />

      </Head>

      {/** Navbar */}
      <Navbar />

      <main style={{
        padding: '0px 20px'
      }}>
        { children }
      </main>
    </>
  )
}
