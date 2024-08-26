import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTiktok, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

interface Props { }

const Footer: FC<Props> = (props): JSX.Element => {
    return (
        <section>
            <footer className="footer footer-center bg-primary text-black dark:bg-black dark:text-white p-4">
                <aside>
                    <p>
                        Copyright © {new Date().getFullYear()} - Ryan Wilson
                    </p>
                    <div className="flex justify-center space-x-6 mt-4">
                        <a href="https://www.facebook.com/yourpage" className="text-black dark:text-white text-3xl">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="https://www.tiktok.com/@yourpage" className="text-black dark:text-white text-3xl">
                            <FontAwesomeIcon icon={faTiktok} />
                        </a>
                        <a href="https://www.instagram.com/yourpage" className="text-black dark:text-white text-3xl">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="https://www.linkedin.com/company/yourpage" className="text-black dark:text-white text-3xl">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </div>
                </aside>
            </footer>
        </section>
    );
};

export default Footer;
