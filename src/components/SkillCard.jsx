function SkillCard(props) {
    return (
        <div className="rounded-[18px] p-[2px] bg-gradient-to-b from-red-500/40 to-amber-500/40 ">
            <div className="w-32 h-40 backdrop-blur rounded-2xl bg-gray-100/100 to-transparent grid content-evenly p-2">
                <img src={props.img} loading="lazy" alt={props.name + " logo"} className="w-[80%] mx-auto" />
                <div className="text-center text-sm text-gray-800 font-semibold drop-shadow-md"> {props.name} </div>
            </div>
        </div>
    );
}

export default SkillCard;
