function Contact() {
    return (
        <div className="flex flex-col justify-center items-center my-16">
            <p className="text-center text-lg font-semibold py-2"> Do you have more questions? </p>
            <a href="mailto:jcarrillo@miami.edu" className="text-gray-50 font-bold text-xl bg-red-500 px-8 py-5 rounded-2xl hover:shadow-[0_0_15px_0px_#f87171] transition-all"> Let's Talk </a>
        </div>
    )
}

export default Contact;