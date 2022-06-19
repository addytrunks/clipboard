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
          <div className='max-w-6xl mx-auto text-center mb-40 px-10 pt-16'>
            <img src="images/logo.svg" className="mx-auto my-16" />
            
            <h3 className='mb-8 text-4xl font-bold text-darkGrayishBlue md:text-5xl'>
              A history of everything you copy
            </h3>

            <p className='max-w-3xl mx-auto mb-10 text-2xl text-grayishBlue'>
              Clipboard allows you to track and organize everything you copy.Instantly, you can search for everything you copy, and see the history of everything you copy.
            </p>

            {/* Buttons */}
            <div className='flex flex-col justify-center w-full space-y-6 text-xl text-white md:flex-row md:space-y-0 md:space-x-4'>
              <button className="p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80">
                Download for IOS
              </button>

              <button className="p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80">
                Download for Mac
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
