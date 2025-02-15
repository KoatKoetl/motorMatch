import { Link } from 'react-router-dom';
import Container from './container';
import { Logo } from './Navbar';

export default function Footer() {
  return (
    <footer>
      <div className="bg-gray-100 px-4 py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link to="/">
              <Logo />
            </Link>
            <div>
              <h2 className="text-xl font-semibold">Company</h2>
              <ul className="mt-2 *:text-zinc-600 hover:*:underline *:cursor-pointer *:w-fit">
                <li>
                  <Link to="/products">Products</Link>
                </li>
                <li>
                  <Link to="/about-us">About Us</Link>
                </li>
                <li>Our Services</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Support</h2>
              <ul className="mt-2 *:text-zinc-600 hover:*:underline *:cursor-pointer *:w-fit">
                <li>
                  <Link to="/contact-us">Contact Us</Link>
                </li>
                <li>FAQ</li>
                <li>Shipping</li>
                <li>Return</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Follow Us</h2>
              <ul className="mt-2 *:text-zinc-600 hover:*:underline *:cursor-pointer *:w-fit">
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>Youtube</li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-gray-200 p-4">
        <Container>
          <div className="flex justify-between">
            <p>&copy; 2024 MotorMatch. All rights reserved.</p>
            <p>
              Developed by{' '}
              <a href="https://github.com/KoatKoetl" className="underline" target="blank">
                @KoatKoetl
              </a>{' '}
              based on{' '}
              <a href="https://github.com/mhlehri/kbd-deep" target="blank" className="underline">
                this
              </a>
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
