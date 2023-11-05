import React, { useState, useEffect, useRef } from "react";
import { getBallotData } from "@/apis/ballots";
import { Candidate } from "@/apis/types";
import { Server } from "@/apis/setting";
import Image from "next/image";
import { RiFileAddFill } from "react-icons/ri";
import { AiFillPlusCircle } from "react-icons/ai"
import { useRouter } from "next/navigation";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";


export default function CompletedCandidatesModal({ ballotId }: any) {
    const router = useRouter();

    const [candidates, setCandidates] = useState<Candidate[]>([]);
    const [totalVotes, setTotalVotes] = useState(0);
    const [selectedCandidateId, setSelectedCandidateId] = useState(0);

    useEffect(() => {
        getBallotData(ballotId, 'candidates').then((candi) => {
            setCandidates(candi);

            //const total = candi.reduce((acc:any, current:any) => acc + current.candidateVoteCount, 0);
            //setTotalVotes(total);
            //console.log(totalVotes)
        });
    }, [])

    /** 후보자 선택 */
    const handleSelect = (candidateId: number) => {
        setSelectedCandidateId(candidateId);
        console.log(`${candidateId} 선택`)
    }

    /** overall 차트에 쓰일 데이터 */
    const barChartData = candidates.map((candidate) => ({
        name: candidate.candidateName,
        votes: candidate.candidateVoteCount,
    }));

    return (
        <div className="flex flex-col items-center mx-4 my-4">
            {candidates.length > 0 ? (
                <div className={`w-full md:w-1/3 md:justify-start`}> 
                    {/** overall 득표수의 막대 그래프 */}
                    <div className="flex justify-center">
                        <ResponsiveContainer width="100%" height={100}>
                            <BarChart data={barChartData}>
                                <XAxis dataKey="name"/>
                                <Tooltip />
                                <Bar dataKey="votes" fill="#0094FF" barSize={30}/>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    {candidates.map((candidate) => (
                        <div 
                            key={candidate.candidateId} 
                            className={`flex items-center px-4 py-2 my-2 border rounded-lg justify-between`}
                            onClick={() => handleSelect(candidate.candidateId)}
                        >
                            <Image src={candidate.candidateImage} alt={candidate.candidateName} width={80} height={80} className="mr-4"/>
                            <span>{candidate.candidateName}</span>
                            <span className="text-primary">
                                {`${candidate.candidateVoteCount} 표`}
                            </span>
                        </div>
                    ))}
                </div>
            ) : (
                <span>후보자를 불러오는 중입니다...</span>
            )}
        </div>
    )
}