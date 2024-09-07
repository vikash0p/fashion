'use client'
import Link from 'next/link'
import React from 'react'


const Collection = () => {
  return (
    <div>


          <section
              className="overflow-hidden bg-[url(https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80)] h-72 md:h-auto bg-cover bg-top bg-no-repeat"
          >
              <div className="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24 h-full">
                  <div className="text-start ltr:sm:text-left rtl:sm:text-right flex flex-col gap-2 md:gap-4 items-center justify-center h-full lg:justify-start lg:items-start">
                      <h2 className="text-2xl font-bold text-primary sm:text-3xl md:text-5xl">Latest Shirts</h2>

                      <p className="hidden max-w-lg text-secondary md:mt-6 md:block md:text-lg md:leading-relaxed">
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore officia corporis quasi
                          doloribus iure architecto quae voluptatum beatae excepturi dolores.
                      </p>

                      <div className="mt-4 sm:mt-8">
                          <Link
                              href="/"
                              className="inline-block rounded-full bg-primary px-12 py-3 text-sm font-medium text-white transition hover:bg-secondary focus:outline-none focus:ring focus:ring-yellow-400"
                          >
                              Get Yours Today
                          </Link>
                      </div>
                  </div>
              </div>
          </section>
    </div>
  )
}

export default Collection
