/* eslint-disable react/prop-types */
import './styles.css'

export default function Ancor({url, name}){
    return <a href={url} target="_blank">{name}</a>
}