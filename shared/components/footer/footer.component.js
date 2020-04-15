import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

export default () => (
  <>
    <div className="section padding-top-bottom background-black">
      <div className="container">
        <div
          className="six columns footer"
          data-scroll-reveal="enter bottom move 60px over 0.9s after 0.1s"
        >
          <p>
            Call me at <a href="#">+33 7 81 81 49 79</a>
            <br />
            or say hello at <a href="#">lacoludo@outlook.com</a>
          </p>
        </div>
        <div
          className="six columns"
          data-scroll-reveal="enter bottom move 60px over 0.9s after 0.1s"
        >
          <ul className="footer-social">
            <li>
              <a
                className="linkedin"
                href="https://www.linkedin.com/in/lacoludo"
                target="_blank"
              >
                <FiLinkedin />
              </a>
            </li>
            <li>
              <a
                className="github"
                href="https://github.com/lacoludo"
                target="_blank"
              >
                <FiGithub />
              </a>
            </li>
            <li>
              <a
                className="twitter"
                href="https://twitter.com/lacoludo"
                target="_blank"
              >
                <FiTwitter />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </>
)