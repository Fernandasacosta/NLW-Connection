
import { ComponentProps, ReactNode } from "react"

interface IconButtonProps extends ComponentProps<'button'>{}

export function IconButton(props: IconButtonProps){
  return(
    <button className=" p-1.5 bg-gray-500 text-blue rounded-md cursos-pointer transition-colors duration-200 hover:bg-blue hover:text-gray-900">
      {props.children}
    </button>
  )
}