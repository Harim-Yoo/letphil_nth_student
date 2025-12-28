interface Props {
    id: number
}
export default function TimerView({ id }: Props) {
    return (
        <div>
           <h1> Problem { id }</h1>
        </div>
    )
}