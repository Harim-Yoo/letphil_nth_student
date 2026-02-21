export const Greeting = ( props: {
  name: string
}) => {
  const {name} = props;
  return (
    <div>
      Hello! {name}
    </div>
  )
}