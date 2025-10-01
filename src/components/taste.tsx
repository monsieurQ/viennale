import clsx from "clsx"

export const Taste = ({str, small=false}:{str:string, small?: boolean}) => <span className={clsx("bg-gray-300 text-gray-800 rounded-sm rounded-bl-xl taste", small ? "ml-1 px-1 py-1" : "mx-1 px-2 py-1")}>{str}</span>