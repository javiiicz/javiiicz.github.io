function Contact() {
    return (
        <div className="flex flex-col justify-center items-center my-32">
            <p className="text-center text-xl font-semibold py-2" data-aos="fade-right"> Do you have more questions? </p>
            <a href="mailto:jcarrillo@miami.edu" className="text-gray-50 font-bold text-2xl bg-red-500 px-8 py-5 rounded-2xl hover:shadow-[0_0_15px_0px_#f87171] transition-all" data-aos="fade-right"> Let's Talk </a>
        </div>
    )
}

export default Contact;