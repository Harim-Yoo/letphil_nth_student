export const Footer = (props : {
  year : string,
  name : string
}) => {
  const {year, name} = props
  return(
    <div className = "flex flex-col justify-center items-center h-20 bg-slate-100 text-black p-5">
      <span>{year}</span>
      <span>{name}</span>
    </div>
  )
}