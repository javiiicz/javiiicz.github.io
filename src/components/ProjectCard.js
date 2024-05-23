function Tool({ name }){
  return (
    <div className="bg-gray-900 p-2 rounded-xl">
      <p className="text-xs font-bold text-white">{name}</p>
    </div>
  );
}

function ProjectCard({ name, desc, tools, img, link}) {
  return (
    <div className="flex-initial w-[400px] bg-gray-200/40 p-3 flex flex-col rounded-[20px] gap-4 backdrop-blur-3xl">
      <div className="relative">
        <img src={ img } alt="" className="w-[100%] mx-auto rounded-[8px] shadow-md"></img>
        <a 
          href={link}
          className="absolute bottom-0 right-0 w-10 h-10 bg-gray-100 bg-GitHub bg-cover m-3 rounded-3xl shadow-md">
        </a>
      </div>
      <h4 className="text-2xl font-bold">{name}</h4>
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