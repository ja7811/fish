import React from 'react'
import { BackToMain } from '../interface/back.tsx'

export const SignupPage:React.FC=()=>{
    return (
        //<div className="bg-white flex flex-row justify-center w-full">
            <div className="bg-white h-full flex flex-col items-center justify-center">
                {/* title */}
                <div className="mb-[10px] flex items-center [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#27416d] text-[50px] text-center tracking-[0] leading-[normal]">
                    정보를 입력해 주세요
                </div>

                {/* signup form */}
                <form className="flex flex-col items-center justify-center">
                    <div className="flex flex-row">
                        {/* first name */}
                        <div className="flex flex-col items-center">
                            <div className="mt-[35px] mr-2 font-medium text-[20px] [font-family:'Inter',Helvetica] text-[#27416d] tracking-[0] leading-[normal]">First Name</div>
                            <input
                                required
                                type="text"
                                className="mr-2 [font-family:'Inter-Regular',Helvetica] font-normal text-[#818da2] text-[20px] tracking-[0] leading-[normal] bg-[#E8FAFD] rounded-[50px] px-5 py-4"
                            />
                        </div>

                        {/* last name */}
                        <div className="flex flex-col items-center">
                            <div className="mt-[35px] ml-2 font-left text-[20px] [font-family:'Inter',Helvetica] text-[#27416d] tracking-[0] leading-[normal]">Last Name</div>
                            <input
                                required
                                type="text"
                                className="ml-2 [font-family:'Inter-Regular',Helvetica] font-normal text-[#818da2] text-[20px] tracking-[0] leading-[normal] bg-[#E8FAFD] rounded-[50px] px-5 py-4"
                            />
                        </div>
                    </div>

                    {/* ID - 중복 확인 필요*/}
                    <div className="w-full mt-[25px] ml-[40px] font-left text-[20px] [font-family:'Inter',Helvetica] text-[#27416d] tracking-[0] leading-[normal]">ID</div>
                    <input
                        required
                        type="text"
                        className="w-full [font-family:'Inter-Regular',Helvetica] font-normal text-[#818da2] text-[20px] tracking-[0] leading-[normal] bg-[#E8FAFD] rounded-[50px] px-5 py-4"
                    />

                    {/* PW */}
                    <div className="w-full mt-[25px] ml-[40px] font-left text-[20px] [font-family:'Inter',Helvetica] text-[#27416d] tracking-[0] leading-[normal]">Password</div>
                    <input
                        required
                        type="password"
                        className="w-full [font-family:'Inter-Regular',Helvetica] font-normal text-[#818da2] text-[20px] tracking-[0] leading-[normal] bg-[#E8FAFD] rounded-[50px] px-5 py-4"
                    />

                    <button
                        type="submit" 
                        className="mt-[40px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#27416d] text-[30px] text-center tracking-[0] leading-[normal] bg-[#E8FAFD] rounded-[50px] px-20 py-4"
                    >
                        Sign Up
                    </button>
                </form>

                
                {/* 좌측 상단 - 돌아가기 */}
                <BackToMain />
            </div>
        //</div>
    )
}