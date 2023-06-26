import { Link } from "react-router-dom";

export default function Button(props) {

    const className = `${props.disabled ? 'opacity-20' : ''} ${props.className} ${!props.className?.includes('bg-') ? 'bg-green-500 hover:bg-green-600' : ''} cursor-pointer justify-center inline-flex items-center rounded border border-transparent px-4 py-2 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 `;

    if (props.link) {
        return <Link className={className} to={props.link}>{props.text}</Link>
    }
    return (
        <div className={className} onClick={() => props.disabled ? {} :  props.onClick()}>
            {props.text}
        </div>
    )
}