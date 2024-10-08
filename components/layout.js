import Head from 'next/head'

export default function Layout(props) {

  return (
    <div className="h-screen">
      <Head>
        <title>Sample title</title>
        <meta name="description" content="sample" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-full">
        <div className="h-full">
        {props.children}
        </div>
      </main>
    </div>
  )
}
