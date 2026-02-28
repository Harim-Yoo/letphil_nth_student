import {useState} from 'react';

// ==========================================
// 2. Voting System
// ==========================================
/**
 * Components: VotingBoard (Parent), Candidate (Child)
 * Requirements:
 * - Parent stores: Array of candidates { id, name, votes }
 * - Child receives: candidate object, onVote function
 * - Child action: Clicking "Vote" increases the specific candidate's vote count by 1
 */
type CandidateType = {
    id:number;
    name:string;
    votes:number;
}

const Candidate = (props: {
    candidate: CandidateType;
    onVote: (id:number) => void;
}) => { 
    const {candidate, onVote} = props;
    return <>
    <button onClick={()=>onVote(candidate.id)}>Vote for {candidate.name}</button>
    </> };

export const VotingBoard = () => {

    const [candidates, setCandidates] = useState<CandidateType[]>([
        {id:1, name:"Harim", votes: 100},
        {id:2, name:"David", votes: 45},
        {id:3, name:"John", votes: 30},
    ])
    const handleVote = (id:number) => {
        setCandidates((prev)=>(
            prev.map((candidate)=>(candidate.id === id ? {...candidate, votes:candidate.votes+1}: candidate))
        ))
    }
    return <div>
        {candidates.map((candidate)=>(
            <div key={candidate.id}>
                <span>{candidate.id} : {candidate.name} with {candidate.votes}</span>
                <Candidate 
                    candidate = {candidate}
                    onVote = {(id:number)=>handleVote(id)}
                />
            </div>
        ))}
    </div>; };