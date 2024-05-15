function Footer() {
    return (
        <footer className="footer">
            <div className="footerbg" />
                <div className="footercontainer">
                    <div className="socialscontainer">
                        <h2>Socials</h2>
                        <div className="sociallinks" >
                            <a
                            href="https://www.github.com/javiiicz"
                            target="_blank"
                            className="sociallink github w-inline-block"
                            />
                            <a
                            href="https://www.linkedin.com/in/jcarrilloz/"
                            target="_blank"
                            className="sociallink linkedin w-inline-block"
                            />
                    </div>
                </div>
                <div className="footertextcontainer">
                    <p className="footerstyle">© 2024 Javier Carrillo</p>
                </div>
            </div>
        </footer>

    )
}

export default Footer;