import CandidateBannerComponent from "./candidateBannerComponent";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { getOrderdList, sendBannerStatus } from "@/apis/thompson";

export default function CandidateBannerWrap(candidateId: any) {
    const router = useRouter();

    
    const pathname = usePathname();
    const ballotId = parseInt(pathname.split('/')[2]);

    // const [orderdList, setOrderedList] = useState([]);
    // const [successList, setSuccessList] = useState<number[]>([]);
    // const [failureList, setFailureList] = useState([]);
    
    const orderdList = [
        1, 2, 3
    ]

    // useEffect(() => {
    //     getOrderdList(ballotId).then((list) => {
    //         setOrderedList(list);
    //         setFailureList(list);
    //         //console.log(orderdList);
    //         //console.log(failureList);
    //     })
    // }, [])

    const handleBannerClick = (banner: number) => {
        //setSuccessList([...successList, banner]);
        //setFailureList(failureList.filter(id => id !== banner));
        console.log(candidateId, banner)
    }

    // useEffect(() => {
    //     console.log(successList);
    //     console.log(failureList);
    // }, [successList, failureList])

    // const handleSubmit = () => {
    //     sendBannerStatus(ballotId, successList, failureList);
    //     router.push(`/ballot/ongoing`);
    // }

    return (
        <div className="flex justify-center mt-4">
            <div className="flex-col w-4/5 text-center">
                <span>후보자와 관련한 기사를 둘러보세요.</span>
                {orderdList.map((banner) => {
                    return (
                        <div key={banner}>
                            <CandidateBannerComponent 
                                bannerId={banner}
                                handleClick={() => handleBannerClick(banner)}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}