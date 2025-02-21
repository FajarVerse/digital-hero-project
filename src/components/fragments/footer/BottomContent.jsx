const BottomFooterContent = () => {
  return (
    <>
      <div className="w-full mt-10 pt-5 border-t-3 border-black/30 md:flex md:items-center lg:pt-7 xl:pt-10">
        <div className="w-full flex gap-5 md:w-[80%] lg:gap-10 xl:gap-16">
          <a
            href=""
            className="font-poppins font-light text-xs text-black text-center md:text-sm flex items-center gap-2 self-start lg:gap-4 xl:gap-7"
          >
            Indonesia <span className="rotate-90 inline-block">></span>{" "}
          </a>
          <a
            href=""
            className="font-poppins font-light text-xs text-black text-center md:text-sm inline-block"
          >
            Kebijakan Privasi
          </a>
          <a
            href=""
            className="font-poppins font-light text-xs text-black text-center md:text-sm inline-block"
          >
            Syarat dan Ketentuan
          </a>
          <a
            href=""
            className="font-poppins font-light text-xs text-black text-center md:text-sm inline-block"
          >
            Pengaturan Cookie
          </a>
        </div>

        <div className="w-full mt-5 flex justify-center gap-3 md:justify-end md:w-[20%] md:mt-0">
          <a href="">
            <svg
              className="w-7 h-7 md:w-5 md:h-5 xl:w-7 xl:h-7"
              viewBox="0 0 31 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_803)">
                <path
                  d="M29.5122 14.7912C29.5122 6.89959 23.0164 0.5 15.0061 0.5C6.99583 0.5 0.5 6.89959 0.5 14.7912C0.5 22.6828 6.99583 29.0824 15.0061 29.0824C15.0913 29.0824 15.1761 29.0807 15.2611 29.0791V17.954H12.1446V14.3758H15.2611V11.7426C15.2611 8.68883 17.1534 7.02673 19.9184 7.02673C21.2425 7.02673 22.3807 7.12399 22.7125 7.16738V10.359H20.8058C19.3015 10.359 19.0102 11.0634 19.0102 12.0968V14.3758H22.6071L22.1383 17.954H19.0102V28.5303C25.0736 26.8178 29.5122 21.3144 29.5122 14.7912Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_803">
                  <rect
                    width="30"
                    height="29"
                    fill="white"
                    transform="translate(0.5 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </a>

          <a href="">
            <svg
              className="w-7 h-7 md:w-5 md:h-5 xl:w-7 xl:h-7"
              viewBox="0 0 29 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_819)">
                <g clip-path="url(#clip1_1_819)">
                  <path
                    d="M17.1635 14.9058C17.1635 16.4288 15.929 17.6633 14.4061 17.6633C12.8832 17.6633 11.6487 16.4288 11.6487 14.9058C11.6487 13.3829 12.8832 12.1484 14.4061 12.1484C15.929 12.1484 17.1635 13.3829 17.1635 14.9058Z"
                    fill="black"
                  />
                  <path
                    d="M20.8546 10.027C20.7221 9.66781 20.5106 9.3427 20.2358 9.07584C19.969 8.80107 19.6441 8.5896 19.2847 8.45705C18.9932 8.34384 18.5553 8.20909 17.7488 8.17238C16.8763 8.1326 16.6147 8.12402 14.406 8.12402C12.197 8.12402 11.9355 8.13238 11.0632 8.17216C10.2567 8.20909 9.8186 8.34384 9.52734 8.45705C9.16793 8.5896 8.84282 8.80107 8.57618 9.07584C8.30141 9.3427 8.08994 9.66759 7.95717 10.027C7.84396 10.3185 7.70922 10.7566 7.67251 11.5631C7.63272 12.4353 7.62415 12.6969 7.62415 14.9059C7.62415 17.1146 7.63272 17.3762 7.67251 18.2487C7.70922 19.0552 7.84396 19.4931 7.95717 19.7845C8.08994 20.144 8.30119 20.4688 8.57596 20.7357C8.84282 21.0105 9.16772 21.2219 9.52712 21.3545C9.8186 21.4679 10.2567 21.6027 11.0632 21.6394C11.9355 21.6792 12.1968 21.6875 14.4058 21.6875C16.615 21.6875 16.8766 21.6792 17.7486 21.6394C18.5551 21.6027 18.9932 21.4679 19.2847 21.3545C20.0061 21.0762 20.5763 20.506 20.8546 19.7845C20.9678 19.4931 21.1026 19.0552 21.1395 18.2487C21.1793 17.3762 21.1876 17.1146 21.1876 14.9059C21.1876 12.6969 21.1793 12.4353 21.1395 11.5631C21.1028 10.7566 20.968 10.3185 20.8546 10.027ZM14.406 19.1534C12.0599 19.1534 10.158 17.2518 10.158 14.9057C10.158 12.5595 12.0599 10.6579 14.406 10.6579C16.7519 10.6579 18.6538 12.5595 18.6538 14.9057C18.6538 17.2518 16.7519 19.1534 14.406 19.1534ZM18.8217 11.4826C18.2735 11.4826 17.829 11.0382 17.829 10.4899C17.829 9.94171 18.2735 9.49723 18.8217 9.49723C19.37 9.49723 19.8144 9.94171 19.8144 10.4899C19.8142 11.0382 19.37 11.4826 18.8217 11.4826Z"
                    fill="black"
                  />
                  <path
                    d="M14.4061 0.5C6.45103 0.5 0 6.95103 0 14.9061C0 22.8611 6.45103 29.3121 14.4061 29.3121C22.3611 29.3121 28.8121 22.8611 28.8121 14.9061C28.8121 6.95103 22.3611 0.5 14.4061 0.5ZM22.6284 18.3166C22.5884 19.1972 22.4484 19.7984 22.2439 20.3246C21.8142 21.4358 20.9358 22.3142 19.8246 22.7439C19.2986 22.9484 18.6972 23.0882 17.8168 23.1284C16.9346 23.1686 16.6528 23.1783 14.4063 23.1783C12.1595 23.1783 11.8779 23.1686 10.9956 23.1284C10.1152 23.0882 9.51377 22.9484 8.98774 22.7439C8.43556 22.5362 7.93569 22.2107 7.52243 21.7897C7.1017 21.3767 6.77614 20.8766 6.56841 20.3246C6.36398 19.7986 6.22396 19.1972 6.18395 18.3168C6.14328 17.4344 6.13383 17.1526 6.13383 14.9061C6.13383 12.6595 6.14328 12.3777 6.18373 11.4956C6.22374 10.615 6.36354 10.0138 6.56797 9.48752C6.7757 8.93556 7.10148 8.43547 7.52243 8.02243C7.93547 7.60148 8.43556 7.27592 8.98752 7.06819C9.51377 6.86376 10.115 6.72396 10.9956 6.68373C11.8777 6.6435 12.1595 6.63383 14.4061 6.63383C16.6526 6.63383 16.9344 6.6435 17.8166 6.68395C18.6972 6.72396 19.2984 6.86376 19.8246 7.06797C20.3766 7.2757 20.8767 7.60148 21.2899 8.02243C21.7107 8.43569 22.0364 8.93556 22.2439 9.48752C22.4486 10.0138 22.5884 10.615 22.6286 11.4956C22.6688 12.3777 22.6783 12.6595 22.6783 14.9061C22.6783 17.1526 22.6688 17.4344 22.6284 18.3166Z"
                    fill="black"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_1_819">
                  <rect
                    width="29"
                    height="29"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
                <clipPath id="clip1_1_819">
                  <rect
                    width="29"
                    height="29"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </a>

          <a href="">
            <svg
              className="w-7 h-7 md:w-5 md:h-5 xl:w-7 xl:h-7"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_827)">
                <g clip-path="url(#clip1_1_827)">
                  <path
                    d="M13.1117 17.6049L17.7978 14.906L13.1117 12.207V17.6049Z"
                    fill="black"
                  />
                  <path
                    d="M14.9061 0.5C6.95103 0.5 0.5 6.95103 0.5 14.9061C0.5 22.8611 6.95103 29.3121 14.9061 29.3121C22.8611 29.3121 29.3121 22.8611 29.3121 14.9061C29.3121 6.95103 22.8611 0.5 14.9061 0.5ZM23.9077 14.9208C23.9077 14.9208 23.9077 17.8424 23.537 19.2512C23.3293 20.0224 22.7213 20.6304 21.9502 20.8379C20.5413 21.2087 14.9061 21.2087 14.9061 21.2087C14.9061 21.2087 9.28551 21.2087 7.86196 20.8232C7.09084 20.6156 6.48282 20.0074 6.27509 19.2363C5.90425 17.8424 5.90425 14.9061 5.90425 14.9061C5.90425 14.9061 5.90425 11.9847 6.27509 10.5758C6.4826 9.80472 7.10556 9.18176 7.86196 8.97425C9.27078 8.60341 14.9061 8.60341 14.9061 8.60341C14.9061 8.60341 20.5413 8.60341 21.9502 8.98897C22.7213 9.19648 23.3293 9.80472 23.537 10.5758C23.9226 11.9847 23.9077 14.9208 23.9077 14.9208Z"
                    fill="black"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_1_827">
                  <rect
                    width="29"
                    height="29"
                    fill="white"
                    transform="translate(0.5 0.5)"
                  />
                </clipPath>
                <clipPath id="clip1_1_827">
                  <rect
                    width="29"
                    height="29"
                    fill="white"
                    transform="translate(0.5 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </a>

          <a href="">
            <svg
              className="w-7 h-7 md:w-5 md:h-5 xl:w-7 xl:h-7"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_834)">
                <g clip-path="url(#clip1_1_834)">
                  <path
                    d="M14.5061 0C6.49583 0 0 6.49583 0 14.5061C0 22.5164 6.49583 29.0122 14.5061 29.0122C22.5164 29.0122 29.0122 22.5164 29.0122 14.5061C29.0122 6.49583 22.5164 0 14.5061 0ZM10.2908 21.9292H6.7579V11.3004H10.2908V21.9292ZM8.52446 9.84899H8.50144C7.31592 9.84899 6.54917 9.03289 6.54917 8.01293C6.54917 6.96995 7.33938 6.17643 8.54792 6.17643C9.75647 6.17643 10.5002 6.96995 10.5232 8.01293C10.5232 9.03289 9.75647 9.84899 8.52446 9.84899ZM23.0297 21.9292H19.4972V16.243C19.4972 14.814 18.9857 13.8394 17.7074 13.8394C16.7315 13.8394 16.1503 14.4968 15.8948 15.1314C15.8014 15.3585 15.7786 15.6759 15.7786 15.9935V21.9292H12.2459C12.2459 21.9292 12.2922 12.2975 12.2459 11.3004H15.7786V12.8053C16.2481 12.081 17.0881 11.0509 18.9625 11.0509C21.2868 11.0509 23.0297 12.57 23.0297 15.8346V21.9292Z"
                    fill="black"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_1_834">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
                <clipPath id="clip1_1_834">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};

export default BottomFooterContent;
