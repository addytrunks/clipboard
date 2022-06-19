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

        {/* Refrences */}
        <section>
          <div
            class="flex flex-col items-center justify-between max-w-6xl px-10 mx-auto space-y-16 my-44 md:flex-row md:space-y-0"
          >
            <img src="images/logo-google.png" alt="" />
            <img src="images/logo-ibm.png" alt="" />
            <img src="images/logo-microsoft.png" alt="" />
            <img src="images/logo-hp.png" alt="" />
            <img src="images/logo-vector-graphics.png" alt="" />
          </div>
        </section>
        
        {/* Bottom */}
        <section>
          <div class="section-container my-20">
            <h3>Clipboard for iOS and MacOS</h3>
            <p class="section-content mb-10 text-xl">
              Available for free on the App Store. Download for Mac or iOS, sync
              with iCloud and you're ready to start adding to your clipboard.
            </p>

            <div class="button-container">
              <a
                href="#"
                class="p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80"
              >
                Download for iOS
              </a>
              <a
                href="#"
                class="p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80"
              >
                Download for Mac
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-50">
          <div className="section-container">
            <div className="flex flex-col items-center justify-between md:flex-row">

              <img src="images/logo.svg" alt="" className="scale-50" />

              <div
                className="flex flex-col items-center justify-between flex-1 mb-10 space-y-6 md:flex-row md:mb-0 md:space-y-0 text-grayishBlue"
              >

                <div
                  className="flex flex-col space-y-4 md:flex-row md:ml-24 md:space-x-24 md:space-y-0"
                >
                  <div className="flex flex-col space-y-4 text-center md:text-left">
                    <div><a href="#" className="hover:text-strongCyan">FAQs</a></div>
                    <div>
                      <a href="#" className="hover:text-strongCyan">Contact Us</a>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-4 text-center md:text-left">
                    <div>
                      <a href="#" className="hover:text-strongCyan">Privacy Policy</a>
                    </div>
                    <div>
                      <a href="#" className="hover:text-strongCyan">Press Kit</a>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-4 text-center md:text-left">
                    <div>
                      <a href="#" className="hover:text-strongCyan">Install Guide</a>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between w-32 py-1">
                  <a href="#"
                    ><img
                      src="images/icon-facebook.svg"
                      alt=""
                      className="duration-200 ficon"
                  /></a>
                  <a href="#"
                    ><img
                      src="images/icon-twitter.svg"
                      alt=""
                      className="duration-200 ficon"
                  /></a>
                  <a href="#"
                    ><img
                      src="images/icon-instagram.svg"
                      alt=""
                      className="duration-200 ficon"
                  /></a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
