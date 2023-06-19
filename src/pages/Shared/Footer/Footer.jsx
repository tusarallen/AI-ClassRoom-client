const Footer = () => {
  return (
    <>
      <div>
        <footer className="footer p-10 bg-gray-900 text-white font-bold">
          <div>
            <img
              className="w-[130px] h-[120px]"
              src="https://i.ibb.co/1mBrSLs/ai.png"
              alt=""
            />
            <p>
              AI-ClassRoom-Training-Institutes
              <br />
              Providing reliable tech since 1992
            </p>
            <p>White Field</p>
            <p>Bangalore - 560048</p>
            <p>Ph No: +91-8867583329</p>
          </div>
          <div>
            <span className="footer-title">Services</span>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </div>
          <div>
            <span className="footer-title">Legal</span>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div>
        </footer>
      </div>
      <div>
        <div className="footer p-10 bg-gray-900 text-white font-bold">
          <p className="flex mx-auto">
            Copyright © 2023 - All right reserved by AI-ClassRoom Ltd
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
