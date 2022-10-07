import Head from 'next/head'

export default function HeadSection({ title, additional }: any) {
  return (
    <>
      <Head>
        <title>
          {title} | {additional || 'Movie List'}
        </title>
        <link
          rel="icon"
          href="https://assets.nflxext.com/ffe/siteui/common/icons/nficon2016.ico"
        />
        <link rel="canonical" href="https://andikay.me/" />
        <meta
          name="description"
          content="Netflix Clone portfolio website made by Andika Yudhistira"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Netflix Clone" />
        <meta
          property="og:description"
          content="Netflix Clone portfolio website made by Andika Yudhistira"
        />
        <meta property="og:url" content="https://andikay.me/" />
        <meta property="og:site_name" content="andikay" />
        <meta
          property="og:image"
          content="https://assets.nflxext.com/ffe/siteui/common/icons/nficon2016.ico"
        />
        <meta property="og:image:width" content="500" />
        <meta property="og:image:height" content="500" />
        <meta property="og:image:type" content="image/ico" />
      </Head>
    </>
  )
}
