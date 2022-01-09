export default function Highlight(props) {
  return(
    <span className="flex gap-2 justify-center place-items-center content-center py-2">
      {props.dots.map((item, index) => {
        let itemClasses;
        (index + 1 === props.number) ? itemClasses = "rounded-full border border-red-900 bg-red-900 h-2 w-2" : itemClasses = "rounded-full border-2 border-green-700 bg-white h-2 w-2";
        return <span key={index} className={itemClasses} ></span>
      })}
    </span>
  )
}