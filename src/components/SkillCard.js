function SkillCard(props) {
    return (
        <div className="w-32 h-40 backdrop-blur border border-slate-200 rounded-2xl grid content-evenly p-2">
            <img src= {props.img} loading="lazy" alt= {props.name + " logo"} className="w-[80%] mx-auto"/>
            <div className="text-center text-sm text-slate-900 font-semibold"> {props.name} </div>
          </div>
    );
}

export default SkillCard;
