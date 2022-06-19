import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>ClipBoard</title>
      </Head>

      <div className="bg-[url('/images/bg-header-desktop.png')] bg-no-repeat bg-contain">
        
        {/* Hero */}
        <section>
          <div className='section-container mb-40 px-10 pt-16'>
            <img src="images/logo.svg" className="mx-auto my-16" />
            
            <h3>
              A history of everything you copy
            </h3>

            <p className='max-w-3xl mx-auto mb-10 text-2xl text-grayishBlue'>
              Clipboard allows you to track and organize everything you copy.Instantly, you can search for everything you copy, and see the history of everything you copy.
            </p>

            {/* Buttons */}
            <div className='button-container'>
              <button className="p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80">
                Download for IOS
              </button>

              <button className="p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80">
                Download for Mac
              </button>
            </div>
          </div>
        </section>
      
        {/* Snippets */}
        <section>
          <div className='section-container my-15 px-10'>

            <h3>
              Keep track of your snippets
            </h3>

            <p className="max-w-3xl mx-auto mb-24 text-xl leading-9 text-center text-grayishBlue">
              Clipboard instantly stores any item you copy in the cloud, meaning you
              can access your snippets immediately on all your devices. Our Mac and
              iOS apps will help you organize everything.
            </p>
          </div>
        </section>

      </div>
    </div>
  )
}
