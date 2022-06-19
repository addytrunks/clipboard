import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='ml-10'>
      <Head>
        <title>ClipBoard</title>
      </Head>

      <div className="bg-[url('/images/bg-header-desktop.png')] bg-no-repeat bg-contain">
        
        {/* Hero */}
        <section>
          <div className='section-container mb-40  pt-16'>
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
          <div className='section-container my-15 '>

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

        {/* Feautures */}
        <section>
          <div className='section-container my-20 '>
            <div className="relative flex flex-col md:flex-row md:space-x-32">

              <div className='md:w-1/2'>
                <img src="/images/image-computer.png" className='md:absolute top-0 right-[50%]'/>
              </div>

              <div className='flex flex-col mt-16 mb-24 space-y-12 text-xl md:mb-60 md:text-left md:pl-16 md:w-1/2'>
                <div>
                  <h5 className='mb-2 text-darkGrayishBlue text-2xl font-bold'>Quick Search</h5>
                  <p class="max-w-md mx-auto text-grayishBlue">
                    Easily search your snippets by content, category, web address,
                    application, and more.
                  </p>
                </div>

                <div>
                  <h5 className='mb-2 text-darkGrayishBlue text-2xl font-bold'>iCloud Sync</h5>
                  <p class="max-w-md mx-auto text-grayishBlue">
                    Instantly saves and syncs snippets across all your devices.
                  </p>
                </div>
                
                <div>
                  <h5 className='mb-2 text-darkGrayishBlue text-2xl font-bold'>Completely History</h5>
                  <p class="max-w-md mx-auto text-grayishBlue">
                    Retrieve any snippets from the first moment you started using
                    the app.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Access Anywhere */}
        <section>
          <div className='section-container my-20'>
            <h3>Access Clipboard anywhere</h3>
            <p className="max-w-3xl mx-auto mb-24 text-xl leading-9 text-center text-grayishBlue">
            Whether you’re on the go, or at your computer, you can access all your
            Clipboard snippets in a few simple clicks.
            </p>
            <img src="/images/image-devices.png" className='mx-auto' />
          </div>
        </section>

        {/* Supercharge */}
        <section>
          <div className='section-container my-20'>
            <h3>Supercharge your workout</h3>
            <p className="max-w-3xl mx-auto mb-16 text-xl leading-9 text-center text-grayishBlue">
              We've got the tools to boost your productivity 
            </p> 

            <div className="flex flex-col items-center justify-between space-y-16 md:flex-row md:space-y-0 md:space-x-12">
              <div class="flex flex-col items-center space-y-5">
                <img src="images/icon-blacklist.svg" alt="" class="mb-6" />
                <h5 className='mb-2 text-darkGrayishBlue text-2xl font-bold'>Create Blacklists</h5>
                <p class="max-w-md text-grayishBlue">
                  Easily search your snippets by content, category, web address,
                  application, and more.
                </p>
              </div>

              <div class="flex flex-col items-center space-y-5">
                <img src="images/icon-text.svg" alt="" class="mb-6" />
                <h5 className='mb-2 text-darkGrayishBlue text-2xl font-bold'>Plain Text Snippets</h5>
                <p class="max-w-md text-grayishBlue">
                  Remove unwanted formatting from copied text for a consistent look.
                </p>
              </div>

              <div class="flex flex-col items-center space-y-5">
                <img src="images/icon-preview.svg" alt="" class="mb-6" />
                <h5 className='mb-2 text-darkGrayishBlue text-2xl font-bold'>Sneak Preview</h5>
                <p class="max-w-md text-grayishBlue">
                  Quick preview of all snippets on your Clipboard for easy access.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
