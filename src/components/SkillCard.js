function SkillCard(props) {
    return (
        <div className="cardstyle">
            <img src= {props.img} loading="lazy" alt= {props.name + " logo"} className="cardicon"/>
            <div className="text-block"> {props.name} </div>
          </div>
    );
}

export default SkillCard;
