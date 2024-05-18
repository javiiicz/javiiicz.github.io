function Tool({ name }){
  return (
    <div className="bg-gray-900 p-2 rounded-xl">
      <p className="text-xs font-bold text-white">{name}</p>
    </div>
  );
}

function ProjectCard({ name, desc, tools}) {
  return (
    <div className="max-w-[40%] bg-gray-200/40 p-5 flex flex-col rounded-lg gap-4 backdrop-blur-3xl">
        <h4 className="text-2xl font-bold">{name}</h4>
        <img src="images/placeholder.jpeg" alt="" className="w-[100%] mx-auto rounded"></img>
        <p className="text-[13px] text-justify">{desc}</p>
        <div className="flex flex-row justify-center gap-2">
          {tools.map((tool, index) => (
            <Tool key={index} name={tool}></Tool>
          ))}
        </div>
    </div>
  );
}

export default ProjectCard;