import { ChevronDown, ChevronRight } from 'lucide-react'
import React from 'react'

const MyProfileBreadcrumb = () => {
  return (
    <>
       <div className="bg-[#f6f6f6] w-full h-[261px] ">
          <div className="container mx-auto py-[25px] flex gap-[13px] ">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li className="inline-flex items-center">
                  <a
                    href="#"
                    className="text-[16px] text-[#4a4a4a] border-[1px] border-[#707070] px-[10px] py-[10px] flex justify-center rounded-md gap-[10px] "
                  >
                    My Account
                    <ChevronDown
                      color="#4a4a4a"
                      strokeWidth={1.75}
                      absoluteStrokeWidth
                    />
                  </a>
                </li>
                <li>
                  <div className="flex items-center">
                    <ChevronRight
                      color="#4a4a4a"
                      strokeWidth={1.75}
                      absoluteStrokeWidth
                    />
                    <a href="#" className="text-[16px] text-[#4a4a4a]  ">
                      My Profile
                    </a>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>
    </>
  )
}

export default MyProfileBreadcrumb
