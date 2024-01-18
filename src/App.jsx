import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div>
      <header className='flex justify-between items-center py-4 px-24'>
        <a href="/">
          <img src="../src/assets/logo.png" alt="jaza & sakeenah" width={150}/>
        </a>

        <div className='flex gap-4'>
          <a href="#" className='py-4 px-8 bg-[#105C04] text-[#ffffff] text-sm'>Register</a>
          <a href="#" className='py-4 px-8 bg-[#FFA800] text-[#105C04] text-sm'>Login</a>
        </div>
      </header>

      <section className='py-24 px-24 bg-[#105C04] flex items-center'>
        <div className='grow text-[#ffffff]'>
          <span className='font-semibold'>Welcome to</span>
          <h1 className='font-semibold text-4xl'>Jazã & Sakeenah: <br />
            OWN-EARNER</h1>

            <h3 className='text-2xl mt-8'>
              <span className='text-[#FFA800]'>Easy & reliable tech-access </span><br />
              to owning landed property assets across Africa.
            </h3>
        </div>
        <div className='grow'>
          <img src="../src/assets/banner_image.png" alt="banner image" width={400} height={300} className='object-contain'/>
        </div>
      </section>

      <section className='bg-[#EDF8F6] py-24 px-24'>
        <div className='text-center max-w-[600px] mx-auto mb-24'>
          <h4 className='text-[#105C04] font-semibold text-lg mb-4'>Whether you have money to buy standard plots of land or not… it doesn't matter</h4>

          <h1 className='text-[#64A001] font-semibold text-4xl mb-4'>
            <span className='text-[#105C04]'>How it Works:</span> Your Income Level & Location isn't a barrier
          </h1>

          <span>Join hundreds of members already on the Own-Earner app to purchase any of these categories below:</span>
        </div>

        <div className='flex align-center gap-x-8 py-12'>
          <img src="../src/assets/image 7.png" alt="banner image" width={400} />
          <div>
            <h2 className='text-[#105C04] text-4xl font-bold mb-8'>Co-owner Lot</h2>
            <ul className='flex flex-col gap-y-8'>
              <li className='flex items-center gap-x-8'>
                <div className='w-16 h-16 rounded-full flex justify-center items-center border-8 border-[#B0B8B6] bg-[#105C04]'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 30 30"
                  >
                    <g clipPath="url(#clip0_1_2267)">
                      <mask
                        id="mask0_1_2267"
                        style={{ maskType: "luminance" }}
                        width="30"
                        height="30"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                      >
                        <path fill="#fff" d="M0 0h30v30H0V0z"></path>
                      </mask>
                      <g mask="url(#mask0_1_2267)">
                        <path
                          fill="#EDF8F6"
                          fillRule="evenodd"
                          d="M11.195 0h7.61c1.704 0 3.058 0 4.152.09 1.12.09 2.074.282 2.948.727a7.5 7.5 0 013.277 3.278c.446.874.637 1.829.729 2.948C30 8.136 30 9.491 30 11.195v7.61c0 1.704 0 3.058-.09 4.152-.09 1.12-.282 2.074-.727 2.948a7.5 7.5 0 01-3.278 3.277c-.874.446-1.829.637-2.948.729-1.094.089-2.448.089-4.152.089h-7.61c-1.704 0-3.059 0-4.152-.09-1.12-.09-2.074-.282-2.948-.727a7.5 7.5 0 01-3.278-3.278C.372 25.03.181 24.076.09 22.957 0 21.863 0 20.509 0 18.805v-7.61c0-1.704 0-3.059.09-4.152.09-1.12.282-2.074.727-2.948A7.5 7.5 0 014.095.817C4.97.372 5.924.181 7.043.09 8.136 0 9.492 0 11.195 0zM7.247 2.581c-.965.079-1.554.228-2.017.464A5 5 0 003.045 5.23c-.236.463-.385 1.052-.464 2.017-.08.98-.081 2.232-.081 4.003v7.5c0 1.77.001 3.024.081 4.003.079.965.228 1.554.464 2.017a5 5 0 002.185 2.185c.463.236 1.052.385 2.017.464.98.08 2.232.081 4.003.081h7.5c1.77 0 3.024-.001 4.003-.081.965-.079 1.554-.228 2.017-.464a5 5 0 002.185-2.185c.236-.463.385-1.052.464-2.017.08-.98.081-2.232.081-4.003v-7.5c0-1.77-.001-3.024-.081-4.003-.079-.965-.228-1.554-.464-2.017a5 5 0 00-2.185-2.185c-.463-.236-1.052-.385-2.017-.464-.98-.08-2.232-.081-4.003-.081h-7.5c-1.77 0-3.024.001-4.003.081zM17.5 8.75a1.25 1.25 0 110-2.5h5c.69 0 1.25.56 1.25 1.25v5a1.25 1.25 0 11-2.5 0v-1.982l-2.866 2.866a1.25 1.25 0 01-1.768-1.768l2.866-2.866H17.5zM6.25 17.5a1.25 1.25 0 112.5 0v1.982l2.866-2.866a1.25 1.25 0 011.768 1.768l-2.866 2.866H12.5a1.25 1.25 0 110 2.5h-5a1.25 1.25 0 01-1.25-1.25v-5z"
                          clipRule="evenodd"
                        ></path>
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_1_2267">
                        <path fill="#fff" d="M0 0H30V30H0z"></path>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className='text-[#105C04]'><strong>Size:</strong> Starting from 1 sqm of land to any size below the quarter plot</p>
              </li>
              <li className='flex items-center gap-x-8'>
                <div className='w-16 h-16 rounded-full flex justify-center items-center border-8 border-[#B0B8B6] bg-[#105C04]'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 30 30"
                  >
                    <g clipPath="url(#clip0_1_2267)">
                      <mask
                        id="mask0_1_2267"
                        style={{ maskType: "luminance" }}
                        width="30"
                        height="30"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                      >
                        <path fill="#fff" d="M0 0h30v30H0V0z"></path>
                      </mask>
                      <g mask="url(#mask0_1_2267)">
                        <path
                          fill="#EDF8F6"
                          fillRule="evenodd"
                          d="M11.195 0h7.61c1.704 0 3.058 0 4.152.09 1.12.09 2.074.282 2.948.727a7.5 7.5 0 013.277 3.278c.446.874.637 1.829.729 2.948C30 8.136 30 9.491 30 11.195v7.61c0 1.704 0 3.058-.09 4.152-.09 1.12-.282 2.074-.727 2.948a7.5 7.5 0 01-3.278 3.277c-.874.446-1.829.637-2.948.729-1.094.089-2.448.089-4.152.089h-7.61c-1.704 0-3.059 0-4.152-.09-1.12-.09-2.074-.282-2.948-.727a7.5 7.5 0 01-3.278-3.278C.372 25.03.181 24.076.09 22.957 0 21.863 0 20.509 0 18.805v-7.61c0-1.704 0-3.059.09-4.152.09-1.12.282-2.074.727-2.948A7.5 7.5 0 014.095.817C4.97.372 5.924.181 7.043.09 8.136 0 9.492 0 11.195 0zM7.247 2.581c-.965.079-1.554.228-2.017.464A5 5 0 003.045 5.23c-.236.463-.385 1.052-.464 2.017-.08.98-.081 2.232-.081 4.003v7.5c0 1.77.001 3.024.081 4.003.079.965.228 1.554.464 2.017a5 5 0 002.185 2.185c.463.236 1.052.385 2.017.464.98.08 2.232.081 4.003.081h7.5c1.77 0 3.024-.001 4.003-.081.965-.079 1.554-.228 2.017-.464a5 5 0 002.185-2.185c.236-.463.385-1.052.464-2.017.08-.98.081-2.232.081-4.003v-7.5c0-1.77-.001-3.024-.081-4.003-.079-.965-.228-1.554-.464-2.017a5 5 0 00-2.185-2.185c-.463-.236-1.052-.385-2.017-.464-.98-.08-2.232-.081-4.003-.081h-7.5c-1.77 0-3.024.001-4.003.081zM17.5 8.75a1.25 1.25 0 110-2.5h5c.69 0 1.25.56 1.25 1.25v5a1.25 1.25 0 11-2.5 0v-1.982l-2.866 2.866a1.25 1.25 0 01-1.768-1.768l2.866-2.866H17.5zM6.25 17.5a1.25 1.25 0 112.5 0v1.982l2.866-2.866a1.25 1.25 0 011.768 1.768l-2.866 2.866H12.5a1.25 1.25 0 110 2.5h-5a1.25 1.25 0 01-1.25-1.25v-5z"
                          clipRule="evenodd"
                        ></path>
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_1_2267">
                        <path fill="#fff" d="M0 0H30V30H0z"></path>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className='text-[#105C04]'><strong>Uses:</strong> High Yield Mini-LandBanking</p>
              </li>
              <li className='flex items-center gap-x-8'>
                <div className='w-16 h-16 rounded-full flex justify-center items-center border-8 border-[#B0B8B6] bg-[#105C04]'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 30 30"
                  >
                    <g clipPath="url(#clip0_1_2267)">
                      <mask
                        id="mask0_1_2267"
                        style={{ maskType: "luminance" }}
                        width="30"
                        height="30"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                      >
                        <path fill="#fff" d="M0 0h30v30H0V0z"></path>
                      </mask>
                      <g mask="url(#mask0_1_2267)">
                        <path
                          fill="#EDF8F6"
                          fillRule="evenodd"
                          d="M11.195 0h7.61c1.704 0 3.058 0 4.152.09 1.12.09 2.074.282 2.948.727a7.5 7.5 0 013.277 3.278c.446.874.637 1.829.729 2.948C30 8.136 30 9.491 30 11.195v7.61c0 1.704 0 3.058-.09 4.152-.09 1.12-.282 2.074-.727 2.948a7.5 7.5 0 01-3.278 3.277c-.874.446-1.829.637-2.948.729-1.094.089-2.448.089-4.152.089h-7.61c-1.704 0-3.059 0-4.152-.09-1.12-.09-2.074-.282-2.948-.727a7.5 7.5 0 01-3.278-3.278C.372 25.03.181 24.076.09 22.957 0 21.863 0 20.509 0 18.805v-7.61c0-1.704 0-3.059.09-4.152.09-1.12.282-2.074.727-2.948A7.5 7.5 0 014.095.817C4.97.372 5.924.181 7.043.09 8.136 0 9.492 0 11.195 0zM7.247 2.581c-.965.079-1.554.228-2.017.464A5 5 0 003.045 5.23c-.236.463-.385 1.052-.464 2.017-.08.98-.081 2.232-.081 4.003v7.5c0 1.77.001 3.024.081 4.003.079.965.228 1.554.464 2.017a5 5 0 002.185 2.185c.463.236 1.052.385 2.017.464.98.08 2.232.081 4.003.081h7.5c1.77 0 3.024-.001 4.003-.081.965-.079 1.554-.228 2.017-.464a5 5 0 002.185-2.185c.236-.463.385-1.052.464-2.017.08-.98.081-2.232.081-4.003v-7.5c0-1.77-.001-3.024-.081-4.003-.079-.965-.228-1.554-.464-2.017a5 5 0 00-2.185-2.185c-.463-.236-1.052-.385-2.017-.464-.98-.08-2.232-.081-4.003-.081h-7.5c-1.77 0-3.024.001-4.003.081zM17.5 8.75a1.25 1.25 0 110-2.5h5c.69 0 1.25.56 1.25 1.25v5a1.25 1.25 0 11-2.5 0v-1.982l-2.866 2.866a1.25 1.25 0 01-1.768-1.768l2.866-2.866H17.5zM6.25 17.5a1.25 1.25 0 112.5 0v1.982l2.866-2.866a1.25 1.25 0 011.768 1.768l-2.866 2.866H12.5a1.25 1.25 0 110 2.5h-5a1.25 1.25 0 01-1.25-1.25v-5z"
                          clipRule="evenodd"
                        ></path>
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_1_2267">
                        <path fill="#fff" d="M0 0H30V30H0z"></path>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className='text-[#105C04]'><strong>Targets:</strong> Students, artisans, petty traders, hawkers, hustling entrepreneurs, new homemakers, retirees etc</p>
              </li>
            </ul>
          </div>
        </div>

        <div className='flex flex-row-reverse align-center gap-x-8 py-12'>
          <img src="../src/assets/image 6.png" alt="banner image" width={400} />
          <div>
            <h2 className='text-[#105C04] text-4xl font-bold mb-8'>Full-owner Lot</h2>
            <ul className='flex flex-col gap-y-8'>
              <li className='flex items-center gap-x-8'>
                <div className='w-16 h-16 rounded-full flex justify-center items-center border-8 border-[#B0B8B6] bg-[#105C04]'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 30 30"
                  >
                    <g clipPath="url(#clip0_1_2267)">
                      <mask
                        id="mask0_1_2267"
                        style={{ maskType: "luminance" }}
                        width="30"
                        height="30"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                      >
                        <path fill="#fff" d="M0 0h30v30H0V0z"></path>
                      </mask>
                      <g mask="url(#mask0_1_2267)">
                        <path
                          fill="#EDF8F6"
                          fillRule="evenodd"
                          d="M11.195 0h7.61c1.704 0 3.058 0 4.152.09 1.12.09 2.074.282 2.948.727a7.5 7.5 0 013.277 3.278c.446.874.637 1.829.729 2.948C30 8.136 30 9.491 30 11.195v7.61c0 1.704 0 3.058-.09 4.152-.09 1.12-.282 2.074-.727 2.948a7.5 7.5 0 01-3.278 3.277c-.874.446-1.829.637-2.948.729-1.094.089-2.448.089-4.152.089h-7.61c-1.704 0-3.059 0-4.152-.09-1.12-.09-2.074-.282-2.948-.727a7.5 7.5 0 01-3.278-3.278C.372 25.03.181 24.076.09 22.957 0 21.863 0 20.509 0 18.805v-7.61c0-1.704 0-3.059.09-4.152.09-1.12.282-2.074.727-2.948A7.5 7.5 0 014.095.817C4.97.372 5.924.181 7.043.09 8.136 0 9.492 0 11.195 0zM7.247 2.581c-.965.079-1.554.228-2.017.464A5 5 0 003.045 5.23c-.236.463-.385 1.052-.464 2.017-.08.98-.081 2.232-.081 4.003v7.5c0 1.77.001 3.024.081 4.003.079.965.228 1.554.464 2.017a5 5 0 002.185 2.185c.463.236 1.052.385 2.017.464.98.08 2.232.081 4.003.081h7.5c1.77 0 3.024-.001 4.003-.081.965-.079 1.554-.228 2.017-.464a5 5 0 002.185-2.185c.236-.463.385-1.052.464-2.017.08-.98.081-2.232.081-4.003v-7.5c0-1.77-.001-3.024-.081-4.003-.079-.965-.228-1.554-.464-2.017a5 5 0 00-2.185-2.185c-.463-.236-1.052-.385-2.017-.464-.98-.08-2.232-.081-4.003-.081h-7.5c-1.77 0-3.024.001-4.003.081zM17.5 8.75a1.25 1.25 0 110-2.5h5c.69 0 1.25.56 1.25 1.25v5a1.25 1.25 0 11-2.5 0v-1.982l-2.866 2.866a1.25 1.25 0 01-1.768-1.768l2.866-2.866H17.5zM6.25 17.5a1.25 1.25 0 112.5 0v1.982l2.866-2.866a1.25 1.25 0 011.768 1.768l-2.866 2.866H12.5a1.25 1.25 0 110 2.5h-5a1.25 1.25 0 01-1.25-1.25v-5z"
                          clipRule="evenodd"
                        ></path>
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_1_2267">
                        <path fill="#fff" d="M0 0H30V30H0z"></path>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className='text-[#105C04]'><strong>Size:</strong> Quarter plot, half plot, 1 plot, and their multiples.</p>
              </li>
              <li className='flex items-center gap-x-8'>
                <div className='w-16 h-16 rounded-full flex justify-center items-center border-8 border-[#B0B8B6] bg-[#105C04]'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 30 30"
                  >
                    <g clipPath="url(#clip0_1_2267)">
                      <mask
                        id="mask0_1_2267"
                        style={{ maskType: "luminance" }}
                        width="30"
                        height="30"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                      >
                        <path fill="#fff" d="M0 0h30v30H0V0z"></path>
                      </mask>
                      <g mask="url(#mask0_1_2267)">
                        <path
                          fill="#EDF8F6"
                          fillRule="evenodd"
                          d="M11.195 0h7.61c1.704 0 3.058 0 4.152.09 1.12.09 2.074.282 2.948.727a7.5 7.5 0 013.277 3.278c.446.874.637 1.829.729 2.948C30 8.136 30 9.491 30 11.195v7.61c0 1.704 0 3.058-.09 4.152-.09 1.12-.282 2.074-.727 2.948a7.5 7.5 0 01-3.278 3.277c-.874.446-1.829.637-2.948.729-1.094.089-2.448.089-4.152.089h-7.61c-1.704 0-3.059 0-4.152-.09-1.12-.09-2.074-.282-2.948-.727a7.5 7.5 0 01-3.278-3.278C.372 25.03.181 24.076.09 22.957 0 21.863 0 20.509 0 18.805v-7.61c0-1.704 0-3.059.09-4.152.09-1.12.282-2.074.727-2.948A7.5 7.5 0 014.095.817C4.97.372 5.924.181 7.043.09 8.136 0 9.492 0 11.195 0zM7.247 2.581c-.965.079-1.554.228-2.017.464A5 5 0 003.045 5.23c-.236.463-.385 1.052-.464 2.017-.08.98-.081 2.232-.081 4.003v7.5c0 1.77.001 3.024.081 4.003.079.965.228 1.554.464 2.017a5 5 0 002.185 2.185c.463.236 1.052.385 2.017.464.98.08 2.232.081 4.003.081h7.5c1.77 0 3.024-.001 4.003-.081.965-.079 1.554-.228 2.017-.464a5 5 0 002.185-2.185c.236-.463.385-1.052.464-2.017.08-.98.081-2.232.081-4.003v-7.5c0-1.77-.001-3.024-.081-4.003-.079-.965-.228-1.554-.464-2.017a5 5 0 00-2.185-2.185c-.463-.236-1.052-.385-2.017-.464-.98-.08-2.232-.081-4.003-.081h-7.5c-1.77 0-3.024.001-4.003.081zM17.5 8.75a1.25 1.25 0 110-2.5h5c.69 0 1.25.56 1.25 1.25v5a1.25 1.25 0 11-2.5 0v-1.982l-2.866 2.866a1.25 1.25 0 01-1.768-1.768l2.866-2.866H17.5zM6.25 17.5a1.25 1.25 0 112.5 0v1.982l2.866-2.866a1.25 1.25 0 011.768 1.768l-2.866 2.866H12.5a1.25 1.25 0 110 2.5h-5a1.25 1.25 0 01-1.25-1.25v-5z"
                          clipRule="evenodd"
                        ></path>
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_1_2267">
                        <path fill="#fff" d="M0 0H30V30H0z"></path>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className='text-[#105C04]'><strong>Uses:</strong> Build to live-in, to resell, rent, for Agric of low negative environmental impact, for High Yield Midi-Landbanking</p>
              </li>
              <li className='flex items-center gap-x-8'>
                <div className='w-16 h-16 rounded-full flex justify-center items-center border-8 border-[#B0B8B6] bg-[#105C04]'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 30 30"
                  >
                    <g clipPath="url(#clip0_1_2267)">
                      <mask
                        id="mask0_1_2267"
                        style={{ maskType: "luminance" }}
                        width="30"
                        height="30"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                      >
                        <path fill="#fff" d="M0 0h30v30H0V0z"></path>
                      </mask>
                      <g mask="url(#mask0_1_2267)">
                        <path
                          fill="#EDF8F6"
                          fillRule="evenodd"
                          d="M11.195 0h7.61c1.704 0 3.058 0 4.152.09 1.12.09 2.074.282 2.948.727a7.5 7.5 0 013.277 3.278c.446.874.637 1.829.729 2.948C30 8.136 30 9.491 30 11.195v7.61c0 1.704 0 3.058-.09 4.152-.09 1.12-.282 2.074-.727 2.948a7.5 7.5 0 01-3.278 3.277c-.874.446-1.829.637-2.948.729-1.094.089-2.448.089-4.152.089h-7.61c-1.704 0-3.059 0-4.152-.09-1.12-.09-2.074-.282-2.948-.727a7.5 7.5 0 01-3.278-3.278C.372 25.03.181 24.076.09 22.957 0 21.863 0 20.509 0 18.805v-7.61c0-1.704 0-3.059.09-4.152.09-1.12.282-2.074.727-2.948A7.5 7.5 0 014.095.817C4.97.372 5.924.181 7.043.09 8.136 0 9.492 0 11.195 0zM7.247 2.581c-.965.079-1.554.228-2.017.464A5 5 0 003.045 5.23c-.236.463-.385 1.052-.464 2.017-.08.98-.081 2.232-.081 4.003v7.5c0 1.77.001 3.024.081 4.003.079.965.228 1.554.464 2.017a5 5 0 002.185 2.185c.463.236 1.052.385 2.017.464.98.08 2.232.081 4.003.081h7.5c1.77 0 3.024-.001 4.003-.081.965-.079 1.554-.228 2.017-.464a5 5 0 002.185-2.185c.236-.463.385-1.052.464-2.017.08-.98.081-2.232.081-4.003v-7.5c0-1.77-.001-3.024-.081-4.003-.079-.965-.228-1.554-.464-2.017a5 5 0 00-2.185-2.185c-.463-.236-1.052-.385-2.017-.464-.98-.08-2.232-.081-4.003-.081h-7.5c-1.77 0-3.024.001-4.003.081zM17.5 8.75a1.25 1.25 0 110-2.5h5c.69 0 1.25.56 1.25 1.25v5a1.25 1.25 0 11-2.5 0v-1.982l-2.866 2.866a1.25 1.25 0 01-1.768-1.768l2.866-2.866H17.5zM6.25 17.5a1.25 1.25 0 112.5 0v1.982l2.866-2.866a1.25 1.25 0 011.768 1.768l-2.866 2.866H12.5a1.25 1.25 0 110 2.5h-5a1.25 1.25 0 01-1.25-1.25v-5z"
                          clipRule="evenodd"
                        ></path>
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_1_2267">
                        <path fill="#fff" d="M0 0H30V30H0z"></path>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className='text-[#105C04]'><strong>Targets:</strong> Full-time homemakers, established entrepreneurs, salary earners, businessman/woman, market men/women, etc</p>
              </li>
            </ul>
          </div>
        </div>

        <div className='flex  align-center gap-x-8 py-12'>
          <img src="../src/assets/image 8.png" alt="banner image" width={400} />
          <div>
            <h2 className='text-[#105C04] text-4xl font-bold mb-8'>Developer Lot</h2>
            <ul className='flex flex-col gap-y-8'>
              <li className='flex items-center gap-x-8'>
                <div className='w-16 h-16 rounded-full flex justify-center items-center border-8 border-[#B0B8B6] bg-[#105C04]'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 30 30"
                  >
                    <g clipPath="url(#clip0_1_2267)">
                      <mask
                        id="mask0_1_2267"
                        style={{ maskType: "luminance" }}
                        width="30"
                        height="30"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                      >
                        <path fill="#fff" d="M0 0h30v30H0V0z"></path>
                      </mask>
                      <g mask="url(#mask0_1_2267)">
                        <path
                          fill="#EDF8F6"
                          fillRule="evenodd"
                          d="M11.195 0h7.61c1.704 0 3.058 0 4.152.09 1.12.09 2.074.282 2.948.727a7.5 7.5 0 013.277 3.278c.446.874.637 1.829.729 2.948C30 8.136 30 9.491 30 11.195v7.61c0 1.704 0 3.058-.09 4.152-.09 1.12-.282 2.074-.727 2.948a7.5 7.5 0 01-3.278 3.277c-.874.446-1.829.637-2.948.729-1.094.089-2.448.089-4.152.089h-7.61c-1.704 0-3.059 0-4.152-.09-1.12-.09-2.074-.282-2.948-.727a7.5 7.5 0 01-3.278-3.278C.372 25.03.181 24.076.09 22.957 0 21.863 0 20.509 0 18.805v-7.61c0-1.704 0-3.059.09-4.152.09-1.12.282-2.074.727-2.948A7.5 7.5 0 014.095.817C4.97.372 5.924.181 7.043.09 8.136 0 9.492 0 11.195 0zM7.247 2.581c-.965.079-1.554.228-2.017.464A5 5 0 003.045 5.23c-.236.463-.385 1.052-.464 2.017-.08.98-.081 2.232-.081 4.003v7.5c0 1.77.001 3.024.081 4.003.079.965.228 1.554.464 2.017a5 5 0 002.185 2.185c.463.236 1.052.385 2.017.464.98.08 2.232.081 4.003.081h7.5c1.77 0 3.024-.001 4.003-.081.965-.079 1.554-.228 2.017-.464a5 5 0 002.185-2.185c.236-.463.385-1.052.464-2.017.08-.98.081-2.232.081-4.003v-7.5c0-1.77-.001-3.024-.081-4.003-.079-.965-.228-1.554-.464-2.017a5 5 0 00-2.185-2.185c-.463-.236-1.052-.385-2.017-.464-.98-.08-2.232-.081-4.003-.081h-7.5c-1.77 0-3.024.001-4.003.081zM17.5 8.75a1.25 1.25 0 110-2.5h5c.69 0 1.25.56 1.25 1.25v5a1.25 1.25 0 11-2.5 0v-1.982l-2.866 2.866a1.25 1.25 0 01-1.768-1.768l2.866-2.866H17.5zM6.25 17.5a1.25 1.25 0 112.5 0v1.982l2.866-2.866a1.25 1.25 0 011.768 1.768l-2.866 2.866H12.5a1.25 1.25 0 110 2.5h-5a1.25 1.25 0 01-1.25-1.25v-5z"
                          clipRule="evenodd"
                        ></path>
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_1_2267">
                        <path fill="#fff" d="M0 0H30V30H0z"></path>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className='text-[#105C04]'><strong>Size:</strong> Starting from 12 Plots of land.</p>
              </li>
              <li className='flex items-center gap-x-8'>
                <div className='w-16 h-16 rounded-full flex justify-center items-center border-8 border-[#B0B8B6] bg-[#105C04]'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 30 30"
                  >
                    <g clipPath="url(#clip0_1_2267)">
                      <mask
                        id="mask0_1_2267"
                        style={{ maskType: "luminance" }}
                        width="30"
                        height="30"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                      >
                        <path fill="#fff" d="M0 0h30v30H0V0z"></path>
                      </mask>
                      <g mask="url(#mask0_1_2267)">
                        <path
                          fill="#EDF8F6"
                          fillRule="evenodd"
                          d="M11.195 0h7.61c1.704 0 3.058 0 4.152.09 1.12.09 2.074.282 2.948.727a7.5 7.5 0 013.277 3.278c.446.874.637 1.829.729 2.948C30 8.136 30 9.491 30 11.195v7.61c0 1.704 0 3.058-.09 4.152-.09 1.12-.282 2.074-.727 2.948a7.5 7.5 0 01-3.278 3.277c-.874.446-1.829.637-2.948.729-1.094.089-2.448.089-4.152.089h-7.61c-1.704 0-3.059 0-4.152-.09-1.12-.09-2.074-.282-2.948-.727a7.5 7.5 0 01-3.278-3.278C.372 25.03.181 24.076.09 22.957 0 21.863 0 20.509 0 18.805v-7.61c0-1.704 0-3.059.09-4.152.09-1.12.282-2.074.727-2.948A7.5 7.5 0 014.095.817C4.97.372 5.924.181 7.043.09 8.136 0 9.492 0 11.195 0zM7.247 2.581c-.965.079-1.554.228-2.017.464A5 5 0 003.045 5.23c-.236.463-.385 1.052-.464 2.017-.08.98-.081 2.232-.081 4.003v7.5c0 1.77.001 3.024.081 4.003.079.965.228 1.554.464 2.017a5 5 0 002.185 2.185c.463.236 1.052.385 2.017.464.98.08 2.232.081 4.003.081h7.5c1.77 0 3.024-.001 4.003-.081.965-.079 1.554-.228 2.017-.464a5 5 0 002.185-2.185c.236-.463.385-1.052.464-2.017.08-.98.081-2.232.081-4.003v-7.5c0-1.77-.001-3.024-.081-4.003-.079-.965-.228-1.554-.464-2.017a5 5 0 00-2.185-2.185c-.463-.236-1.052-.385-2.017-.464-.98-.08-2.232-.081-4.003-.081h-7.5c-1.77 0-3.024.001-4.003.081zM17.5 8.75a1.25 1.25 0 110-2.5h5c.69 0 1.25.56 1.25 1.25v5a1.25 1.25 0 11-2.5 0v-1.982l-2.866 2.866a1.25 1.25 0 01-1.768-1.768l2.866-2.866H17.5zM6.25 17.5a1.25 1.25 0 112.5 0v1.982l2.866-2.866a1.25 1.25 0 011.768 1.768l-2.866 2.866H12.5a1.25 1.25 0 110 2.5h-5a1.25 1.25 0 01-1.25-1.25v-5z"
                          clipRule="evenodd"
                        ></path>
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_1_2267">
                        <path fill="#fff" d="M0 0H30V30H0z"></path>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className='text-[#105C04]'><strong>Uses:</strong> To resell, for High Yield Maxi-Landbanking, for Mini-Estate, Residential Buildings, Agric of low negative environmental impact,</p>
              </li>
              <li className='flex items-center gap-x-8'>
                <div className='w-16 h-16 rounded-full flex justify-center items-center border-8 border-[#B0B8B6] bg-[#105C04]'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 30 30"
                  >
                    <g clipPath="url(#clip0_1_2267)">
                      <mask
                        id="mask0_1_2267"
                        style={{ maskType: "luminance" }}
                        width="30"
                        height="30"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                      >
                        <path fill="#fff" d="M0 0h30v30H0V0z"></path>
                      </mask>
                      <g mask="url(#mask0_1_2267)">
                        <path
                          fill="#EDF8F6"
                          fillRule="evenodd"
                          d="M11.195 0h7.61c1.704 0 3.058 0 4.152.09 1.12.09 2.074.282 2.948.727a7.5 7.5 0 013.277 3.278c.446.874.637 1.829.729 2.948C30 8.136 30 9.491 30 11.195v7.61c0 1.704 0 3.058-.09 4.152-.09 1.12-.282 2.074-.727 2.948a7.5 7.5 0 01-3.278 3.277c-.874.446-1.829.637-2.948.729-1.094.089-2.448.089-4.152.089h-7.61c-1.704 0-3.059 0-4.152-.09-1.12-.09-2.074-.282-2.948-.727a7.5 7.5 0 01-3.278-3.278C.372 25.03.181 24.076.09 22.957 0 21.863 0 20.509 0 18.805v-7.61c0-1.704 0-3.059.09-4.152.09-1.12.282-2.074.727-2.948A7.5 7.5 0 014.095.817C4.97.372 5.924.181 7.043.09 8.136 0 9.492 0 11.195 0zM7.247 2.581c-.965.079-1.554.228-2.017.464A5 5 0 003.045 5.23c-.236.463-.385 1.052-.464 2.017-.08.98-.081 2.232-.081 4.003v7.5c0 1.77.001 3.024.081 4.003.079.965.228 1.554.464 2.017a5 5 0 002.185 2.185c.463.236 1.052.385 2.017.464.98.08 2.232.081 4.003.081h7.5c1.77 0 3.024-.001 4.003-.081.965-.079 1.554-.228 2.017-.464a5 5 0 002.185-2.185c.236-.463.385-1.052.464-2.017.08-.98.081-2.232.081-4.003v-7.5c0-1.77-.001-3.024-.081-4.003-.079-.965-.228-1.554-.464-2.017a5 5 0 00-2.185-2.185c-.463-.236-1.052-.385-2.017-.464-.98-.08-2.232-.081-4.003-.081h-7.5c-1.77 0-3.024.001-4.003.081zM17.5 8.75a1.25 1.25 0 110-2.5h5c.69 0 1.25.56 1.25 1.25v5a1.25 1.25 0 11-2.5 0v-1.982l-2.866 2.866a1.25 1.25 0 01-1.768-1.768l2.866-2.866H17.5zM6.25 17.5a1.25 1.25 0 112.5 0v1.982l2.866-2.866a1.25 1.25 0 011.768 1.768l-2.866 2.866H12.5a1.25 1.25 0 110 2.5h-5a1.25 1.25 0 01-1.25-1.25v-5z"
                          clipRule="evenodd"
                        ></path>
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_1_2267">
                        <path fill="#fff" d="M0 0H30V30H0z"></path>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className='text-[#105C04]'><strong>Targets:</strong> High network individuals, groups, bulk ownership, cooperatives, organisations, businesses, etc</p>
              </li>
            </ul>
          </div>
        </div>
        
        
      </section>

      <section className='flex'>
        <div className=' grow bg-[#105C04] px-24 py-24 w-[100%]'>
          <h2 className='text-4xl text-[#ffffff] mb-8'>Steps To Become a <br />Jazã <span className='text-[#FFA800]'>LandOwner</span></h2>

          <ul className='flex flex-col gap-y-8'>
            <li className='py-4 px-4 w-80 bg-[#ffffff] rounded-md flex items-center gap-x-2'>
              <div className='w-8 h-8 bg-[#64A001] rounded-full flex justify-center items-center text-[#ffffff]'>1</div>

              <p className='text=[#105C04]'>Register / Login</p>
            </li>
            <li className='py-4 px-4 w-80 bg-[#ffffff] rounded-md flex items-center gap-x-2'>
              <div className='w-8 h-8 bg-[#64A001] rounded-full flex justify-center items-center text-[#ffffff]'>2</div>

              <p className='text=[#105C04]'>Choose Category</p>
            </li>
            <li className='py-4 px-4 w-80 bg-[#ffffff] rounded-md flex items-center gap-x-2'>
              <div className='w-8 h-8 bg-[#64A001] rounded-full flex justify-center items-center text-[#ffffff]'>3</div>

              <p className='text=[#105C04]'>Execute Your Agreement</p>
            </li>
            <li className='py-4 px-4 w-80 bg-[#ffffff] rounded-md flex items-center gap-x-2'>
              <div className='w-8 h-8 bg-[#64A001] rounded-full flex justify-center items-center text-[#ffffff]'>4</div>

              <p className='text=[#105C04]'>Proceed to Payment</p>
            </li>
            <li className='py-4 px-4 w-80 bg-[#ffffff] rounded-md flex items-center gap-x-2'>
              <div className='w-8 h-8 bg-[#64A001] rounded-full flex justify-center items-center text-[#ffffff]'>5</div>

              <p className='text=[#105C04]'>Update Your Information</p>
            </li>
          </ul>
        </div>

        <div className='grow bg-[#64A001] relative w-[100%]'>
          <img src="../src/assets/steps.png" alt="steps" className='absolute left-0 bottom-0 w-[100%]'/>
        </div>
      </section>

      <section>
        <div className='flex items-center bg-[#105C04] px-24 py-8'>
          <h2 className='text-4xl text-[#ffffff] font-semibold'>Why will I choose to buy land on Jazã and Sakeenah Web-app when buying offline is sometimes a scam without any land allocation?</h2>
          <img src="../src/assets/questions.png" alt="questions avater" width={300}/>
        </div>

        <div className='bg-[#FCF0DC] px-24 py-24'>
          <ul>
            <li className='flex gap-x-4 items-center'>
              <span className='min-w-16 min-h-16 flex justify-center items-center rounded-full bg-[#ffffff] border-2 border-[#FFA800]'>1</span>

              <div className='rounded-2xl px-4 py-4 bg-[#ffffff] '>
                Actually, there's no sustainable online business without its physical establishment... And so is Jazã & Sakeenah.
                There's land that you can walk-in to inspect by yourself at any time, there's office, there's instant allocation for all purchasers, and to cap it all… one of the goals of the web-app is to curb overselling by introducing a monitoring progress bar on each property. So once it reaches 100%, it inactivates its BUY NOW button.

                <span></span>
              </div>
            </li>
            <li>
              <span>2</span>

              <div>
                It is an easy, reliable, and secured tech-access to owning landed property assets across Africa.

                That is, irrespective of your location or income level, you can always purchase 247 online.
                <span></span>
              </div>
            </li>
            <li>
              <span>3</span>

              <div>
                You get your receipt and property agreement instantly after the purchase.
                <span></span>
              </div>
            </li>
            <li>
              <span>4</span>

              <div>
                Site is already pre-allocated to all categories of owners, just pay and get your allocation.
                <span></span>
              </div>
            </li>
            <li>
              <span>5</span>

              <div>
                You get your receipt and property agreement instantly after the purchase.
                <span></span>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className='px-24 py-24 bg-[#64A001] font-semibold text-[#ffffff]'>
        <h2 className='text-4xl text-center'>What Our Customers Are Saying</h2>

        <div className='flex items-center gap-x-2'>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              fill="none"
              viewBox="0 0 80 80"
            >
              <path
                fill="#fff"
                d="M40.967 29.033l-8.634 8.633a3.321 3.321 0 000 4.7L40.967 51c2.1 2.1 5.7.6 5.7-2.367V31.366c0-2.966-3.6-4.433-5.7-2.333z"
              ></path>
            </svg>
          </button>

          <div className='flex items-center gap-2'>
            <div className='rounded-2xl bg-[#ffffff] px-8 py-8 w-[400px]'>
              <figure className='flex gap-2 items-center'>
                <img src="../src/assets/banner_image.png" alt="banner image" width={100} height={100} className='object-cover object-center rounded-full min-w-[80px] min-h-[80px] max-w-[80px] max-h-[80px]'/>

                <figcaption>
                  <h3 className='text-[#151D48] font-semibold'>Name</h3>
                  <span className='text-[#64A001] font-normal'>City</span>
                </figcaption>
              </figure>

              <p className='text-[#70798B] font-normal'>
              There are many variations of passages of Lorem Ipsum form, by injected humour randomised words.
              </p>
            </div>
          </div>

          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              fill="none"
              viewBox="0 0 80 80"
            >
              <path
                fill="#fff"
                d="M39.033 29.033l8.634 8.633a3.321 3.321 0 010 4.7L39.033 51c-2.1 2.1-5.7.6-5.7-2.367V31.366c0-2.966 3.6-4.433 5.7-2.333z"
              ></path>
            </svg>
          </button>
        </div>
      </section>

      <section className='px-24 py-24 bg-[#FCF0DC]'>
        <div className='text-center max-w-[600px] mx-auto'>
          <h2 className='text-4xl font-semibold text-[#105C04]'>Properties</h2>
          <p className='text-[#105C04]'>Our listed properties are verified genuine with a plethora of smart property owners already investing with us. Our own-earner property portfolio covers locations that fulfil the purpose of each listed property investment.</p>
        </div>

        <div className='flex items-center gap-x-4'>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="none"
              viewBox="0 0 50 50"
            >
              <path
                fill="#105C04"
                d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15z"
              ></path>
              <path
                fill="#105C04"
                d="M25.3 34.7L15.6 25l9.7-9.7 1.4 1.4-8.3 8.3 8.3 8.3-1.4 1.4z"
              ></path>
              <path fill="#105C04" d="M17 24h17v2H17v-2z"></path>
            </svg>
          </button>

          <div className='flex items-center gap-4'>
            <div className='bg-[#105C04] rounded-2xl px-4 py-4 w-[350px] text-[#ffffff]'>
              <figure className='max-h-[250px] overflow-hidden rounded-2xl relative'>
                <img src="../src/assets/banner_image.png" alt="banner image" width={400}/>
                <figcaption className='absolute bottom-0 left-0 w-[100%] h-[100%] bg-[#105C04aa] flex-col items-end'>
                  <h3 className='text-lg font-semibold'>Jaza & Sakeenah <br /> Residential Estate 1</h3>
                  <span>Ilara, Epe, Lagos State, Nigeria</span>
                </figcaption>
              </figure>

              <ul className='py-4'>
                <li className='flex items-center gap-x-4 py-2'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="#fff"
                      d="M2.716 3.281a.625.625 0 00-.216.469v13.125a.625.625 0 001.25 0v-3.456c2.093-1.653 3.896-.761 5.973.267 1.28.633 2.66 1.316 4.14 1.316 1.089 0 2.23-.371 3.424-1.406a.625.625 0 00.215-.469V3.75a.624.624 0 00-1.036-.469c-2.188 1.893-4.041.976-6.189-.087C8.052 2.09 5.53.843 2.716 3.28zm13.534 9.55c-2.093 1.654-3.896.762-5.973-.266-1.953-.964-4.125-2.041-6.527-.656V4.046c2.093-1.653 3.896-.762 5.973.265 1.953.965 4.126 2.042 6.527.657v7.864z"
                    ></path>
                  </svg>

                  <span><strong>1 Plot:</strong> 6000 Units</span>
                </li>
                <li className='flex items-center gap-x-4 py-2'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="#fff"
                      d="M10.745 14.56a.625.625 0 010 .883l-.776.781a4.378 4.378 0 11-6.19-6.193l1.885-1.884a4.375 4.375 0 016-.178.627.627 0 01-.83.937 3.125 3.125 0 00-4.286.128l-1.884 1.882a3.126 3.126 0 004.42 4.42l.777-.777a.624.624 0 01.884 0zM16.22 3.777a4.381 4.381 0 00-6.189 0l-.776.778a.625.625 0 10.884.883l.777-.776a3.126 3.126 0 014.42 4.42l-1.884 1.886a3.125 3.125 0 01-4.286.125.627.627 0 00-.83.937 4.375 4.375 0 006-.176L16.22 9.97a4.381 4.381 0 000-6.19v-.002z"
                    ></path>
                  </svg>

                  <span>Current Price: N7.500/Unit</span>
                </li>
                <li className='flex items-center gap-x-4 py-2'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="#fff"
                      d="M18.04 13.437a.625.625 0 01-.227.853l-7.5 4.375a.625.625 0 01-.63 0l-7.5-4.375a.625.625 0 01.63-1.08L10 17.401l7.188-4.19a.625.625 0 01.852.226zm-.852-3.977L10 13.651l-7.188-4.19a.625.625 0 00-.624 1.079l7.5 4.375a.625.625 0 00.63 0l7.5-4.375a.627.627 0 00.068-1.043.626.626 0 00-.698-.037zM1.874 6.25a.625.625 0 01.313-.54l7.5-4.375a.625.625 0 01.63 0l7.5 4.375a.625.625 0 010 1.08l-7.5 4.375a.625.625 0 01-.63 0l-7.5-4.375a.625.625 0 01-.313-.54zm1.866 0L10 9.902l6.26-3.652L10 2.598 3.74 6.25z"
                    ></path>
                  </svg>

                  <span>Title: Private C of O</span>
                </li>
                <li className='flex items-center gap-x-4 py-2'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7.5 9.167l2.5 2.5L16.667 5"
                    ></path>
                    <path
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16.667 10v5A1.667 1.667 0 0115 16.667H5A1.667 1.667 0 013.333 15V5A1.667 1.667 0 015 3.333h7.5"
                    ></path>
                  </svg>

                  <span>Location: Ilara, Epe, Lagos State, Nigeria</span>
                </li>
                <li className='flex items-center gap-x-4 py-2'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="#fff"
                      strokeLinecap="round"
                      d="M4.167 10V3.333m11.666 13.334v-2.5m-11.666 2.5v-3.334m11.666-2.5v-7.5M10 5.833v-2.5m0 13.334v-7.5M4.167 13.333a1.667 1.667 0 100-3.333 1.667 1.667 0 000 3.333zM10 9.167a1.667 1.667 0 100-3.333 1.667 1.667 0 000 3.333zM15.833 14.167a1.667 1.667 0 100-3.333 1.667 1.667 0 000 3.333z"
                    ></path>
                  </svg>

                  <span>Sold Out: 19.22%</span>
                </li>
              </ul>

              <div>
                <span></span>
                <span></span>
              </div>

              <div className='flex justify-between'>
                <button className='w-[125px] h-[50px] flex justify-center items-center rounded-lg bg-[#FF0000]'>Buy Now</button>

                <button className='w-[125px] h-[50px] flex justify-center items-center rounded-lg border-2 border-[#ffffff]'>View</button>
              </div>
            </div>
          </div>

          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="none"
              viewBox="0 0 50 50"
            >
              <path
                fill="#105C04"
                d="M25 42c9.4 0 17-7.6 17-17S34.4 8 25 8 8 15.6 8 25s7.6 17 17 17zm0-32c8.3 0 15 6.7 15 15s-6.7 15-15 15-15-6.7-15-15 6.7-15 15-15z"
              ></path>
              <path
                fill="#105C04"
                d="M24.7 34.7l9.7-9.7-9.7-9.7-1.4 1.4 8.3 8.3-8.3 8.3 1.4 1.4z"
              ></path>
              <path fill="#105C04" d="M33 24H16v2h17v-2z"></path>
            </svg>
          </button>
        </div>
      </section>

      <section className='px-12 py-12 bg-[#105C04]'>
        <div className='px-12 py-12 bg-[#ffffff] rounded-2xl'>
          <h2 className='text-4xl text-center text-[#105C04]'>Customer of the Month</h2>

          <figure>
            {/* Video here */}

            <figcaption className='bg-[#105C04] px-12 py-6 text-[#ffffff]'>
              <h3 className='font-bold mb-2'>Mr. Yakub</h3>
              <p className='text-sm font-normal'>The entire purchasing process was seamless, thanks to the professionalism and expertise of the [Real Estate Agency] team. They guided me through each step, providing valuable insights and advice. What impressed me the most was their commitment to transparency—there were no hidden surprises, and every detail was thoroughly explained.</p>
              
              <button className='px-4 py-2 bg-[#FFA800] mt-4'>Read More</button>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className='bg-[#FCF0DC] px-24 py-24'>
        <h2 className='text-4xl text-center text-[#105C04]'>Fãcts to Guide <br />
        Your Decision</h2>
        <ul>
          <li className='flex gap-x-4 items-center'>
            <div className='min-w-16 min-h-16 flex justify-center items-center rounded-full bg-[#105C04] border-2 border-[#FFA800]'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 42 42"
              >
                <path
                  fill="#EDF8F6"
                  d="M4.396 19.126a4.34 4.34 0 00-3.355 7.078l11.023 13.503a3.938 3.938 0 003.293 1.462c1.338-.072 2.546-.788 3.316-1.965L41.571 2.328a.723.723 0 01.012-.019c.215-.33.145-.983-.299-1.394a1.216 1.216 0 00-1.793.153L16.4 27.158a1 1 0 01-1.423.078L7.312 20.26a4.32 4.32 0 00-2.916-1.135z"
                ></path>
              </svg>
            </div>

            <div className='rounded-2xl px-8 py-8 bg-[#ffffff] '>
            1 unit of Own-Earner purchase is equivalent to 1 sqm of land purchase.
            </div>
          </li>
          <li>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="42"
                fill="none"
                viewBox="0 0 42 42"
              >
                <path
                  fill="#EDF8F6"
                  d="M4.396 19.126a4.34 4.34 0 00-3.355 7.078l11.023 13.503a3.938 3.938 0 003.293 1.462c1.338-.072 2.546-.788 3.316-1.965L41.571 2.328a.723.723 0 01.012-.019c.215-.33.145-.983-.299-1.394a1.216 1.216 0 00-1.793.153L16.4 27.158a1 1 0 01-1.423.078L7.312 20.26a4.32 4.32 0 00-2.916-1.135z"
                ></path>
              </svg>
            </div>

            <div>
            Co-owners can sell or transfer their ownership stakes anytime from a 24 months holding period through the web-app marketplace. All unsold co-owner lots get liquidated by the 5th year of purchase in order for Co-owners to get both capital and capital gains according to their respective individual purchase stakes. 
            </div>
          </li>
          <li>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="42"
                fill="none"
                viewBox="0 0 42 42"
              >
                <path
                  fill="#EDF8F6"
                  d="M4.396 19.126a4.34 4.34 0 00-3.355 7.078l11.023 13.503a3.938 3.938 0 003.293 1.462c1.338-.072 2.546-.788 3.316-1.965L41.571 2.328a.723.723 0 01.012-.019c.215-.33.145-.983-.299-1.394a1.216 1.216 0 00-1.793.153L16.4 27.158a1 1 0 01-1.423.078L7.312 20.26a4.32 4.32 0 00-2.916-1.135z"
                ></path>
              </svg>
            </div>

            <div>
            Full-owners and Developers can choose to transfer their ownership stakes anytime after complete purchase or own their stake for lifetime and use it for whatever they want.
            </div>
          </li>
          <li>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="42"
                fill="none"
                viewBox="0 0 42 42"
              >
                <path
                  fill="#EDF8F6"
                  d="M4.396 19.126a4.34 4.34 0 00-3.355 7.078l11.023 13.503a3.938 3.938 0 003.293 1.462c1.338-.072 2.546-.788 3.316-1.965L41.571 2.328a.723.723 0 01.012-.019c.215-.33.145-.983-.299-1.394a1.216 1.216 0 00-1.793.153L16.4 27.158a1 1 0 01-1.423.078L7.312 20.26a4.32 4.32 0 00-2.916-1.135z"
                ></path>
              </svg>
            </div>

            <div>
            While Full-owner and Developer Lots can be used to build residential or commercial structures, for landbanking,  for Agric of low negative environmental impact etc, Co-owner lots can only be used for landbanking
            </div>
          </li>
          <li>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="42"
                fill="none"
                viewBox="0 0 42 42"
              >
                <path
                  fill="#EDF8F6"
                  d="M4.396 19.126a4.34 4.34 0 00-3.355 7.078l11.023 13.503a3.938 3.938 0 003.293 1.462c1.338-.072 2.546-.788 3.316-1.965L41.571 2.328a.723.723 0 01.012-.019c.215-.33.145-.983-.299-1.394a1.216 1.216 0 00-1.793.153L16.4 27.158a1 1 0 01-1.423.078L7.312 20.26a4.32 4.32 0 00-2.916-1.135z"
                ></path>
              </svg>
            </div>

            <div>
            We trade only secured landed property investments whose profit appreciation matches with live market trends.
            </div>
          </li>
          <li>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="42"
                fill="none"
                viewBox="0 0 42 42"
              >
                <path
                  fill="#EDF8F6"
                  d="M4.396 19.126a4.34 4.34 0 00-3.355 7.078l11.023 13.503a3.938 3.938 0 003.293 1.462c1.338-.072 2.546-.788 3.316-1.965L41.571 2.328a.723.723 0 01.012-.019c.215-.33.145-.983-.299-1.394a1.216 1.216 0 00-1.793.153L16.4 27.158a1 1 0 01-1.423.078L7.312 20.26a4.32 4.32 0 00-2.916-1.135z"
                ></path>
              </svg>
            </div>

            <div>
            Only low-risk, high-value appreciation properties with the right Title Documentation are listed for our users' purchase. 
            </div>
          </li>
          <li>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="42"
                fill="none"
                viewBox="0 0 42 42"
              >
                <path
                  fill="#EDF8F6"
                  d="M4.396 19.126a4.34 4.34 0 00-3.355 7.078l11.023 13.503a3.938 3.938 0 003.293 1.462c1.338-.072 2.546-.788 3.316-1.965L41.571 2.328a.723.723 0 01.012-.019c.215-.33.145-.983-.299-1.394a1.216 1.216 0 00-1.793.153L16.4 27.158a1 1 0 01-1.423.078L7.312 20.26a4.32 4.32 0 00-2.916-1.135z"
                ></path>
              </svg>
            </div>

            <div>
            You own all your profit to yourself upon resell.
            </div>
          </li>
          <li>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="42"
                fill="none"
                viewBox="0 0 42 42"
              >
                <path
                  fill="#EDF8F6"
                  d="M4.396 19.126a4.34 4.34 0 00-3.355 7.078l11.023 13.503a3.938 3.938 0 003.293 1.462c1.338-.072 2.546-.788 3.316-1.965L41.571 2.328a.723.723 0 01.012-.019c.215-.33.145-.983-.299-1.394a1.216 1.216 0 00-1.793.153L16.4 27.158a1 1 0 01-1.423.078L7.312 20.26a4.32 4.32 0 00-2.916-1.135z"
                ></path>
              </svg>
            </div>

            <div>
            For Full-Owner and Developer Lots, you can buy either through:
One-time purchase = Outright payment.
Installment purchase = Buy little by little at regular intervals according to your set goal. 
            </div>
          </li>
        </ul>

        <button className='bg-[#105C04] px-8 py-4 text-[#ffffff] mt-8'>
        Register/Login to your dashboard now to start your journey
        </button>
      </section>

      <section className='bg-[#105C04] px-24 py-24'>
        <h2 className='text-4xl text-center text-[#FFA800]'>Our Teãm</h2>

        <div className='flex items-center gap-2'>
          <figure className='rounded-2xl w-[350px]'>
            <img src="../src/assets/banner_image.png" alt="team image" width={400}/>

            <figcaption className='px-4 py-4 bg-[#64A001] text-[#ffffff]'>
              <h3 className='mb-2'><strong>Name </strong>After</h3>
              <p>Position</p>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className='bg-[#EDF8F6] px-24 py-24'>
        <h2 className='text-4xl text-center text-[#105C04]'>News & Update</h2>

        <div className='flex items-center gap-x-4'>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="none"
            viewBox="0 0 50 50"
          >
            <path
              fill="#105C04"
              d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15z"
            ></path>
            <path
              fill="#105C04"
              d="M25.3 34.7L15.6 25l9.7-9.7 1.4 1.4-8.3 8.3 8.3 8.3-1.4 1.4z"
            ></path>
            <path fill="#105C04" d="M17 24h17v2H17v-2z"></path>
          </svg>
        </button>

        <div className='flex items-center gap-x-4'>
          <figure className='rounded-2xl bg-[#105C04] w-[350px]'>

            <figcaption className='px-4 py-4 text-[#ffffff]'>
              <div className='flex justify-between items-center mb-4'>
                <h3 className='font-bold text-lg uppercase'>2024 Real Estate Trends: Where to Invest?</h3>
                
                <div className='flex-col justify-center place-center text-center min-w-[60px] min-h-[60px] max-w-[60px] max-h-[60px] bg-[#FFA800] rounded-lg text-[#105C04] font-bold'>
                  <div className='text-4xl'>12</div>
                  <div>Jan</div>
                </div>
              </div>

              <p>
              Co-owners can sell or transfer their ownership stakes anytime from a 24 months holding period through the web-app marketplace. All unsold co-owner lots get liquidated by the 5th year of purchase in order for Co-owners to get both capital and capital gains according to their respective individual purchase stakes. 
              </p>

              <button className='px-4 py-4 text-[#105C04] bg-[#FFA800] mt-4'>
                Read more
              </button>

            </figcaption>
          </figure>
        </div>

        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="none"
            viewBox="0 0 50 50"
          >
            <path
              fill="#105C04"
              d="M25 42c9.4 0 17-7.6 17-17S34.4 8 25 8 8 15.6 8 25s7.6 17 17 17zm0-32c8.3 0 15 6.7 15 15s-6.7 15-15 15-15-6.7-15-15 6.7-15 15-15z"
            ></path>
            <path
              fill="#105C04"
              d="M24.7 34.7l9.7-9.7-9.7-9.7-1.4 1.4 8.3 8.3-8.3 8.3 1.4 1.4z"
            ></path>
            <path fill="#105C04" d="M33 24H16v2h17v-2z"></path>
          </svg>
        </button>

        </div>
      </section>

      <section className='bg-[#64A001] px-24 py-24'>
        <h2 className='text-4xl text-center text-[#ffffff] mb-8'>About Jazã & 
        Sakeenah</h2>

        <p className='text-[#ffffff]'>
          Jazã and Sakeenah is a secured digital real estate asset trading and management platform that allows everyone irrespective of their location to buy and watch over their landed property online except for the site allocation that requires physical presence at specific times where landowner/representative will be required to show up or at any future time the landowner is available. 

          Simply put, this web-app is where you can buy landed property online and also get your property documents shipped to you, get the land designed, built, managed and even secured it for landbanking as long as you want. 

          These properties are managed and secured on behalf of the owners by professional trustees that are registered with their respective national bodies such as Estate Surveyors, Land Surveyors, Lawyers, Engineers etc

          After purchase, the new landowner gets land documents; Survey Plan, Deed of Assignment and Governor's Consent delivered to him/her. 

          And to cap it all, there's a great opportunity for those who want to also passively build their own real estate business to become a "Sell To Earn Team" where you get Free training on Property Title, Documentation and Practical Property Selling that can make you earn tangible weekly selling income using whatever land size purchased as a stepping stone.

          So basically, the web-app platform allows you to buy your landed property, sell properties and also monitor the progress of your asset at any time from wherever you are located irrespective of your income level be it to buy Full-Owner lots, developer lots or mini-landbanking co-own lots.
        </p>
      </section>

      <section className='bg-[#EDF8F6] px-24 py-24'>
        <h2 className='text-4xl text-[#105C04] mb-8 font-semibold'>Frequently Asked <br />
        <span className='text-[#64A001]'>Questions</span></h2>

        <ul>
          <li className='px-8 py-8 rounded-lg bg-[#105C04] text-[#ffffff]'>
            <div className='flex items-center justify-between'>
              <h3 className='text-lg font-semibold'>Q1. What's Jazã & Sakeenah Phase(s)</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="none"
                viewBox="0 0 35 35"
              >
                <g clipPath="url(#clip0_1_2045)">
                  <path
                    fill="#F2BC5E"
                    d="M17.5 35a17.5 17.5 0 110-35 17.5 17.5 0 010 35zm8.75-19.25H8.75v3.5h17.5v-3.5z"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_1_2045">
                    <path fill="#fff" d="M0 0H35V35H0z"></path>
                  </clipPath>
                </defs>
              </svg>
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="none"
                viewBox="0 0 40 40"
              >
                <path
                  fill="#FFA800"
                  d="M20 37.5c9.665 0 17.5-7.835 17.5-17.5S29.665 2.5 20 2.5 2.5 10.335 2.5 20 10.335 37.5 20 37.5z"
                ></path>
                <path fill="#105C04" d="M17.5 11.666h5v16.667h-5V11.667z"></path>
                <path fill="#105C04" d="M11.667 17.5h16.666v5H11.667v-5z"></path>
              </svg> */}
            </div>
            <p className='px-8 py-8'>
            Jazã & Sakeenah is a mixed-used estate designed in phases with similar functionalities to reward every of your sacrifices with safety, tranquility and prosperity.

            They are land with perfectable title documents and with facilities such as road networks that are accessible to each plot, recreational area, fencing, gatehouse etc. They're located within fast developing neighbourhoods with excellent value appreciation and come with Instant Physical Allocation upon complete purchase.
            </p>
          </li>
        </ul>
      </section>

      <footer className='bg-[#105C04] px-24 py-24 text-[#ffffff] font-thin'>
        <div className='flex justify-between gap-x-4'>
          <div className='grow'>
            <ul className='flex flex-col gap-y-4'>
              <li className='font-semibold'>ADDRESS</li>
              <li className='flex gap-x-4'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    fill="#BDBDBD"
                    d="M7 1.167c-2.45 0-4.667 1.878-4.667 4.783 0 1.855 1.43 4.036 4.282 6.55a.593.593 0 00.776 0c2.847-2.514 4.276-4.695 4.276-6.55 0-2.905-2.217-4.784-4.667-4.784zM7 7a1.17 1.17 0 01-1.167-1.167A1.17 1.17 0 017 4.666a1.17 1.17 0 011.167 1.167A1.17 1.17 0 017 7z"
                  ></path>
                </svg>
                <span>MB12 Hse 5, Ganiyu Dawudu Street, Lekki, Lagos.</span>
              </li>
              <li className='flex gap-x-4'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    fill="#BDBDBD"
                    d="M3.862 6.294a8.836 8.836 0 003.844 3.844l1.283-1.283a.58.58 0 01.595-.14c.654.216 1.36.332 2.083.332.32 0 .583.263.583.584v2.036c0 .32-.262.583-.583.583A9.916 9.916 0 011.75 2.333c0-.32.263-.583.583-.583h2.042c.32 0 .583.263.583.583 0 .73.117 1.43.333 2.083a.585.585 0 01-.146.595L3.862 6.294z"
                  ></path>
                </svg>
                <span>+234 701-708-5158</span>
              </li>
              <li className='flex gap-x-4'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="10"
                  fill="none"
                  viewBox="0 0 12 10"
                >
                  <path
                    fill="#BDBDBD"
                    d="M10.667.333H1.333C.692.333.173.858.173 1.5l-.006 7a1.17 1.17 0 001.166 1.167h9.334A1.17 1.17 0 0011.833 8.5v-7A1.17 1.17 0 0010.667.333zm0 2.334L6 5.584 1.333 2.667V1.5L6 4.417 10.667 1.5v1.167z"
                  ></path>
                </svg>
                <span>myjaza.app@gmail.com</span>
              </li>
            </ul>
          </div>

          <div className='grow flex justify-between gap-x-4'>
            <ul className='flex flex-col gap-y-4'>
              <li className='font-semibold'>QUICK LINKS</li>
              <li><a href="/">Home</a></li>
              <li><a href="/">About Us</a></li>
              <li><a href="/">Properties</a></li>
              <li><a href="/">How it works</a></li>
            </ul>

            <ul className='flex flex-col gap-y-4'>
              <li className='font-semibold'>LEGAL LINKS</li>
              <li><a href="/">Terms</a></li>
              <li><a href="/">Conditions</a></li>
              <li><a href="/">Policy</a></li>
            </ul>

            <ul className='flex flex-col gap-y-4'>
              <li className='font-semibold'>FOLLOW US ON</li>
              <li><a href="/">Facebook</a></li>
              <li><a href="/">Twitter</a></li>
              <li><a href="/">Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className='text-center py-4 mt-8'>Copyright @ 2024 Jazã & Sakeenah.</div>
      </footer>
    </div>
  )
}

export default App
