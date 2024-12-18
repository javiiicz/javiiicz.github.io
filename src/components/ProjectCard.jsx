function Tool({name}) {
    return (
        <div className="bg-gray-900 p-2 rounded-xl">
            <p className="text-xs font-bold text-white">{name}</p>
        </div>
    );
}

function ProjectCard({name, desc, tools, img, link, website = ""}) {
    return (
        <div className="w-[400px] bg-gray-200/40 p-3 flex flex-col rounded-[20px] gap-3 backdrop-blur-3xl " data-aos="fade-right">
            <div className="relative">
                <img src={img} alt="" className="w-[100%] mx-auto rounded-[8px] shadow-md"></img>
                {website && (
                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full mx-auto rounded-[8px] bg-gray-900 flex justify-center items-center opacity-0 hover:opacity-50 transition-all duration-300">
                          <a
                            href={website}
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              width="60"
                              height="60"
                              viewBox="0 0 24 24"
                              className="hover-float"
                              fill="#F5f5f5"
                            >
                              <path d="M 19.980469 2.9902344 A 1.0001 1.0001 0 0 0 19.869141 3 L 15 3 A 1.0001 1.0001 0 1 0 15 5 L 17.585938 5 L 8.2929688 14.292969 A 1.0001 1.0001 0 1 0 9.7070312 15.707031 L 19 6.4140625 L 19 9 A 1.0001 1.0001 0 1 0 21 9 L 21 4.1269531 A 1.0001 1.0001 0 0 0 19.980469 2.9902344 z M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 13 A 1.0001 1.0001 0 1 0 19 13 L 19 19 L 5 19 L 5 5 L 11 5 A 1.0001 1.0001 0 1 0 11 3 L 5 3 z"></path>
                            </svg>
                          </a>
                    </div>
                )}
                <a
                    href={link}
                    className="absolute bottom-0 right-0 w-10 h-10 bg-gray-100 bg-GitHub bg-cover m-3 rounded-3xl shadow-md">
                </a>
            </div>
            <h4 className="text-2xl font-bold py-0 my-0 drop-shadow-md">{name}</h4>
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