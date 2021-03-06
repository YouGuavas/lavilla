export default function Highlight(props) {
  return(
    <span className="flex gap-2 justify-center place-items-center content-center py-2">
      {props.dots.map((item, index) => {
        let itemClasses;
        (index + 1 === props.number) ? itemClasses = "rounded-full hover:cursor-pointer border border-red-900 bg-red-900 h-3 w-3" : itemClasses = "rounded-full hover:cursor-pointer border-1 border-green-700 bg-gray-400 h-2 w-2";
        return <span onClick={() => {props.onClick(index+1)}} key={index} className={itemClasses} ></span>
      })}
    </span>
  )
}