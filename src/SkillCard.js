function SkillCard(props) {
    return (
        <div class="cardstyle">
            <img src= {props.img} loading="lazy" alt= {props.name + " logo"} class="cardicon"/>
            <div class="text-block"> {props.name} </div>
          </div>
    );
}

export default SkillCard;
