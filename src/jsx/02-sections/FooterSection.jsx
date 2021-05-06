import FooterLogo from '../../img/logo.png';

let FooterSection = () => {
    return (
        <footer className="footer">
            <div className="footer-lc">
                <img src={FooterLogo} alt="placeholder" className="footer__img" />
                <p className="footer__year">
                    © UpCrunch 2020 <br />
                    <span>Established LA. 2016</span>
                </p>
            </div>
            <div className="footer-rc">
                <a href="#placeholder" className="footer__item">Home</a>
                <a href="#placeholder" className="footer__item">Why UpCrunch</a>
                <a href="#placeholder" className="footer__item">A+ Rating</a>
                <a href="#placeholder" className="footer__item">Product Suite</a>
                <a href="#placeholder" className="footer__item">UpCrunch Insights</a>
                <a href="#placeholder" className="footer__button">Apply Now</a>
                <a href="#placeholder" className="footer__phone">
                    Give us a Call <span>888-850-2656</span>
                </a>
            </div>
            <div className="footer__terms">
                <a href="#placeholder" className="footer__terms-item">Privacy</a>
                <a href="#placeholder" className="footer__terms-item">Terms of use</a>
                <a href="#placeholder" className="footer__terms-item">Contact Us</a>
                <a href="#placeholder" className="footer__terms-item">Do Not Sell My Info</a>
                <a href="#placeholder" className="footer__terms-item">UpCrunch Inc. is a licensed finance lender/broker, California Financing Law License No. 60DBO-68187</a>
            </div>
        </footer>
    );
}

export { FooterSection }