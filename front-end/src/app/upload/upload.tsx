import React, { useCallback, useState } from 'react'
import '../../tailwind.css';
import { BackToMain } from '../../interface/back.tsx';
import { Link } from 'react-router-dom';

interface UploadFileProps {
    name: string;
}

const UploadedFile:React.FC<UploadFileProps> = ( {name} )=>{
    return (
        <div className="flex items-center justify-between w-full h-[40px] p-2 bg-[#cdf1f7] rounded-[50px]">
            <div className='flex items-center'>
                <div className='text-[25px] mr-1'>🐟</div>
                <div className='font-bold text-[#27416d]'>{name}</div>
            </div>
            <div>❌</div>
        </div>
    )
}

const CreateFishForm = () => {
    const durations = ['1시간', '6시간', '24시간', '1주 이상'];

    return (
        <div className="flex flex-col">
            <div className="flex flex-row justify-between mt-12">
                <div className="[font-family:'Inter',Helvetica] font-bold text-[#27416d] text-[28px] tracking-[0] leading-[normal]">
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
                <div className="[font-family:'Inter',Helvetica] font-bold text-[#27416d] text-[28px] tracking-[0] leading-[normal]">
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
                    <div className="[font-family:'Inter',Helvetica] font-bold text-[#27416d] text-[20px] tracking-[0] leading-[normal]">
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
                    className="mt-[32px] [font-family:'Inter-Medium',Helvetica] font-bold text-[#27416d] text-[30px] text-center tracking-[0] leading-[normal] bg-[#E8FAFD] rounded-[50px] px-9 py-3"
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
    const fileInput = React.useRef<HTMLInputElement | null>(null);
    const firstFileName = '일단이걸로해';
    const [fileCnt, setFileCnt] = React.useState(1);
  
    const handleButtonClick = e => {
        if (fileInput.current) {
            fileInput.current.click();
        }
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
                        <div className="w-full p-5 ">

                            {/* 파일들 - 일단 최소한 1개는 고정으로 있겠지? */}
                            <UploadedFile name={firstFileName}/>
                            {/* 파일 추가될 때 렌더링&fileCnt++ 해줘야함 */}

                        </div>
                        {fileCnt <= 1 && (
                            <div className="flex flex-col items-center justify-center">
                                <img className="w-[128px] h-[128px]" alt="Image" src="/img/image.png" />
                                <div className="font-normal text-[#27416d5e] text-[18px] text-center [font-family:'Inter',Helvetica] tracking-[0] leading-[normal]">
                                    공유할 파일을 <br />
                                    끌어주세요
                                </div>
                            </div>
                        )}
                    </div>
                    <button 
                    className="flex w-1/4 max-w-[500px] items-center justify-center mt-[300px] bg-[#f7fdff] font-medium text-[#27416d5e] text-[28px] text-center absolute [font-family:'Inter',Helvetica] tracking-[0] leading-[normal] rounded-[50px] p-5"
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