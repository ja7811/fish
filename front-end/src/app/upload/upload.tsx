import React, { useCallback, useState } from 'react'
import '../../tailwind.css';
import { BackToMain } from '../../interface/back.tsx';
import { Link } from 'react-router-dom';

const UploadedFile:React.FC=()=>{
    return (
        <div className="relative w-[394px] h-[61px] bg-[#cdf1f7] rounded-[50px]">
            <div className="absolute w-[303px] h-[61px] top-0 left-[18px]">
                <div className="w-[301px] h-[40px] top-3 left-[2px] font-bold text-[#000000cc] text-right absolute [font-family:'Inter',Helvetica] text-[30px] tracking-[0] leading-[normal]">
                    Lorem Ipsum.jpg
                </div>
                <div className="w-[49px] h-[48px] top-[6px] left-0 bg-[#d9d9d9] absolute rounded-[50px]" />
                <div className="absolute w-[47px] h-[21px] top-[20px] left-[2px] [font-family:'Inter',Helvetica] font-bold text-[#8a8282] text-[16px] text-center tracking-[0] leading-[normal]">
                    jpg
                </div>
            </div>
            <div className="absolute h-[36px] top-[13px] left-[354px] [font-family:'Inter',Helvetica] font-bold text-[#ff00004c] text-[30px] text-right tracking-[0] leading-[normal] whitespace-nowrap">
                X
            </div>
        </div>
    )
}

const CreateFishForm = () => {
    const durations = ['1시간', '6시간', '24시간', '1주 이상'];

    return (
        <div className="flex flex-col">
            <div className="flex flex-row justify-between mt-12">
                <div className="[font-family:'Inter',Helvetica] font-medium text-[#27416d] text-[30px] tracking-[0] leading-[normal]">
                    FISH 명
                </div>
                <div className="mt-4 font-medium text-[15px] [font-family:'Inter',Helvetica] text-[#27416d] tracking-[0] leading-[normal]">
                    선택사항
                </div>
            </div>
            <input
            required
            type="text"
            className="w-full m-2 [font-family:'Inter-Regular',Helvetica] font-normal text-[#818da2] text-[20px] tracking-[0] leading-[normal] bg-[#E8FAFD] rounded-[50px] px-6 py-5"
            />

            <div className="flex flex-row justify-between mt-8">
                <div className="[font-family:'Inter',Helvetica] font-medium text-[#27416d] text-[30px] tracking-[0] leading-[normal]">
                    암호 설정
                </div>
                <div className="mt-4 font-medium text-[15px] [font-family:'Inter',Helvetica] text-[#27416d] tracking-[0] leading-[normal]">
                    선택사항
                </div>
            </div>
            <input
            required
            type="password"
            className="w-full m-2 [font-family:'Inter-Regular',Helvetica] font-normal text-[#818da2] text-[20px] tracking-[0] leading-[normal] bg-[#E8FAFD] rounded-[50px] px-6 py-5"
            />

            <div className="flex flex-row items-start mt-20 gap-10">
                <div className="flex flex-col">
                    <div className="[font-family:'Inter',Helvetica] font-medium text-[#27416d] text-[20px] tracking-[0] leading-[normal]">
                        유효기간
                    </div>
                    <select className="w-full bg-[#E8FAFD] m-2 [font-family:'Inter-Regular',Helvetica] font-normal text-[#818da2] text-[20px] rounded-[50px] px-6 py-5">
                        {durations.map((duration, index) => {
                            return (
                                <option key={index} value={index}>{duration}</option>
                            )
                        })}
                    </select>
                </div>
                
                <Link to="/upload/pin">
                <button
                    type="submit" 
                    className="mt-[32px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#27416d] text-[30px] text-center tracking-[0] leading-[normal] bg-[#E8FAFD] rounded-[50px] px-8 py-3"
                >
                    만들기
                </button>
                </Link>
            </div>
        </div>
    )
}

export const UploadPage:React.FC=()=>{
    const [view, setView] = useState(false);
    const fileInput = React.useRef(null);
  
    const handleButtonClick = e => {
        fileInput.current.click();
    };

    const handleChange = e => {
        console.log(e.target.files[0]);
    };
    
    return (
        <div className="bg-white h-full flex flex-col items-center">
            {/* title */}
            <div className="flex justify-center mt-8 font-bold text-[50px] text-center [font-family:'Inter',Helvetica] text-[#27416d] tracking-[0] leading-[normal]">
                새로운 FISH 만들기
            </div>
            
            <div className="flex flex-row w-full h-full justify-center gap-20">
                {/* 왼쪽 박스 */}
                <div className="flex flex-col items-center h-2/3 w-1/3 max-w-[521px] max-h-[592px] mt-10 p-6 bg-[#e7fafc] rounded-[50px]">
                    <div className="w-full h-3/4 flex flex-col items-center bg-[#f7fdff] rounded-[50px] border-2 border-dashed border-[#27416d]">
                        <div className="bg-black">

                            {/* 파일들 */}

                        </div>
                        <div className="mt-[200px] w-[232px] h-[57px] font-normal text-[#27416d5e] text-[20px] text-center absolute [font-family:'Inter',Helvetica] tracking-[0] leading-[normal]">
                            공유할 파일을 <br />
                            끌어주세요
                        </div>
                        <img className="w-[158px] h-[158px] mt-[60px]" alt="Image" src="/img/image.png" />
                    </div>
                    <button 
                    className="flex w-1/4 max-w-[500px] items-center justify-center mt-[300px] bg-[#f7fdff] font-medium text-[#27416d5e] text-[30px] text-center absolute [font-family:'Inter',Helvetica] tracking-[0] leading-[normal] rounded-[50px] p-5"
                    onClick={handleButtonClick}>
                        파일 선택
                    </button> 
                    <input
                    type = "file"
                    className='hidden'
                    ref={fileInput}
                    onChange={handleChange}/>       
                </div>

                {/* 오른쪽 박스 */}
                <CreateFishForm />

                {/* 좌측 상단 - 돌아가기 */}
                <BackToMain />
            </div>
        </div>
    )
}