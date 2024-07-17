import React from 'react'

const developerIcons = [
  {
    name: 'Sourav',
    url: 'https://www.linkedin.com/in/srv333/',
    icon: 'https://res.cloudinary.com/dycitvrpg/image/upload/v1681474382/linkedin_sl7ith.png'
  },
  {
    name: 'Gautam Khatri',
    url: 'https://www.linkedin.com/in/gautambuddh/',
    icon: 'https://res.cloudinary.com/dycitvrpg/image/upload/v1681474382/linkedin_sl7ith.png'
  },
  {
    name: 'Dhruv Metha',
    url: 'https://www.linkedin.com/in/itzzdhruv/',
    icon: 'https://res.cloudinary.com/dycitvrpg/image/upload/v1681474382/linkedin_sl7ith.png'
  }
];

const contributors = [
  {
    id: "1",
    name: "Abhay Bajaj",
    url: "https://www.linkedin.com/in/abhay-bajaj/",
  },
];

const Developers = () => {
  return (
    <>
      <div className="p-4 bg-n-7 rounded-3xl overflow-hidden">
        <div className="py-4 px-4 xl:px-8">
          <h4 className="h4 mb-4">Help Us Improve !</h4>
          <ul className="flex justify-between lg:flex-row flex-col gap-4">
            {developerIcons.map((item, index) => (
              <div className='flex justify-center items-center flex-col'>
                <li
                  key={index}
                  className={`rounded-2xl flex items-center justify-center
                  hover:p-0.25 hover:bg-conic-gradient
                  flex w-10 h-10 bg-n-6 md:w-15 md:h-15 flex-col text-center text-xs  cursor-pointer
                }`}
                  onClick={() => { window.open(item.url, '_blank') }}
                >
                  <div
                    className={
                      "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                    }
                  >
                    <svg fill="#ffffff" height="24px" width="24px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 310 310" xml:space="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="XMLID_801_"> <path id="XMLID_802_" d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73 C77.16,101.969,74.922,99.73,72.16,99.73z"></path> <path id="XMLID_803_" d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4 c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"></path> <path id="XMLID_804_" d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599 c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319 c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995 C310,145.43,300.549,94.761,230.454,94.761z"></path> </g> </g></svg>
                  </div>
                </li>
                <p>{item.name}</p>
              </div>
            ))}
          </ul>
        </div>
      </div>
      <div className="py-4  bg-n-7 px-4 xl:px-8 mt-8">
        <h4 className="h4 mb-4">Contributors</h4>
        <ul className="flex justify-start lg:flex-row gap-4 flex-wrap">
          {contributors.map((item, index) => (
            <div className='flex justify-center items-center flex-col'>
              <li
                key={index}
                className={`rounded-2xl flex items-center justify-center
                  hover:p-0.25 hover:bg-conic-gradient
                  flex w-10 h-10 bg-n-6 md:w-15 md:h-15 flex-col text-center text-xs  cursor-pointer
                }`}
                onClick={() => { window.open(item.url, '_blank') }}
              >
                <div
                  className={
                    "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                  }
                >
                  <svg fill="#ffffff" height="24px" width="24px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 310 310" xml:space="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="XMLID_801_"> <path id="XMLID_802_" d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73 C77.16,101.969,74.922,99.73,72.16,99.73z"></path> <path id="XMLID_803_" d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4 c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"></path> <path id="XMLID_804_" d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599 c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319 c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995 C310,145.43,300.549,94.761,230.454,94.761z"></path> </g> </g></svg>
                </div>
              </li>
              <br></br>
              <p>{item.name}</p>
            </div>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Developers