interface Props {
    text: string
}

export default function ProblemView({ text }: Props) {
    return (
        <div className="p-5 text-left">
           <p>{ text }</p>
        </div>
    )
}