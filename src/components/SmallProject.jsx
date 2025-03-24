export default function SmallProject(props) {
    var name = "NAME";
    var description = "small description";
    if (props.name) {
        name = props.name;
    }
    if (props.desc) {
        description = props.desc;
    }

    return(
        <p><a className="font-semibold underline" href={props.link}>{name}</a>: {description}</p>
    )
}