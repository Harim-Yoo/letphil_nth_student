export const Footer = (props : {
  year : string,
  name : string
}) => {
  const {year, name} = props
  return(
    <div className = "flex flex-col justify-center items-center">
      <span>{year}</span>
      <span>{name}</span>
    </div>
  )
}