import Image from 'next/image'
import React from 'react'
const NewProducts = () => {
  return (
      <section>
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
                  <div className="grid place-content-center rounded  p-6 sm:p-8">
                      <div className="mx-auto max-w-md text-center lg:text-left">
                          <header>
                              <h2 className="text-xl font-bold text-violet-900 sm:text-3xl">New Products</h2>

                              <p className="mt-4 text-gray-900">
                                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas rerum quam amet
                                  provident nulla error!
                              </p>
                          </header>

                          <a
                              href="#"
                              className="mt-8 inline-block rounded border border-violet-900 bg-violet-900 px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring"
                          >
                              Shop All
                          </a>
                      </div>
                  </div>

                  <div className="lg:col-span-2 lg:py-8">
                      <ul className="grid grid-cols-2 gap-4">
                          <li>
                              <a href="#" className="group block">
                                  <Image width={350} height={350}
                                      src="https://images.unsplash.com/photo-1552664199-fd31f7431a55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNsb3RoaW5nfGVufDB8fDB8fHww"
                                      alt=""
                                      className="aspect-square w-full rounded object-cover"
                                  />

                                  <div className="mt-3">
                                      <h3
                                          className="font-medium text-violet-900 group-hover:underline group-hover:underline-offset-4"
                                      >
                                          Simple shirt
                                      </h3>

                                      <p className="mt-1 text-sm text-violet-700">$150</p>
                                  </div>
                              </a>
                          </li>

                          <li>
                              <a href="#" className="group block">
                                  <Image width={350} height={350}
                                      src="https://images.unsplash.com/photo-1585487000143-9bcec9b8e483?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fGNsb3RoaW5nfGVufDB8fDB8fHww"
                                      alt=""
                                      className="aspect-square w-full rounded object-cover object-top"
                                  />

                                  <div className="mt-3">
                                      <h3
                                          className="font-medium text-violet-900 group-hover:underline group-hover:underline-offset-4"
                                      >
                                          Simple dress
                                      </h3>

                                      <p className="mt-1 text-sm text-violet-700">$150</p>
                                  </div>
                              </a>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </section>
  )
}

export default NewProducts
