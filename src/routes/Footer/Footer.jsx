import ig from '../../image/Instagram.svg'
import imgLogo from '../../image/madagaskarLogoBordeBlanco.svg'
import tiktok from '../../image/TikTok.svg'
import whatsapp from '../../image/WhatsApp.svg'
import { Link } from 'react-router-dom'
import './Footer.css'


const Footer = () => {
    return(
        <div className='Footer'>
            <div>
                <img src={imgLogo} className='ImgLogoFoot' alt=''/>
            </div>
            <div className='contFoot'>
                <h1 className='contactoListaFoot'>CONTACTO</h1>
                <ul className='ContactoFoot'>
                    <Link to='https://instagram.com/mimadagaskar?igshid=MzRlODBiNWFlZA==' className='linkFoot'>
                        <li className='listaFoot'><img className='iconoFooter' src={ig}></img><p>mimadagaskar</p></li>
                    </Link>
                    <Link to='https://www.tiktok.com/@mimadagaskar?_t=8dvsCfUvNe1&_r=1' className='linkFoot'>
                        <li className='listaFoot'><img className='iconoFooter' src={tiktok}></img><p>mimadagaskar</p></li>
                    </Link>
                    <li className='listaFoot'>
                        <Link to='https://l.instagram.com/?u=https%3A%2F%2Fwa.me%2F584144250547&e=AT2AEg8u5Fh4sjWS6aM94jJhFnynyhXaG500HHyCy5Tm2EMgQ7S_jYnI5hFmnU6kWEA7idNwCcMJB4r58_c8DpZiOVA5BJLZFspw2qs' className='linkFoot'>
                            <img className='iconoFooter' src={whatsapp}></img>
                        </Link>
                        <div className='blockListaFoot'>
                            <Link to='https://l.instagram.com/?u=https%3A%2F%2Fwa.me%2F584144250547&e=AT2AEg8u5Fh4sjWS6aM94jJhFnynyhXaG500HHyCy5Tm2EMgQ7S_jYnI5hFmnU6kWEA7idNwCcMJB4r58_c8DpZiOVA5BJLZFspw2qs' className='listaContFoot'>
                                <p>0414-4250547</p>
                            </Link>
                            <Link to='https://l.instagram.com/?u=https%3A%2F%2Fwa.me%2F584244369887&e=AT2AEg8u5Fh4sjWS6aM94jJhFnynyhXaG500HHyCy5Tm2EMgQ7S_jYnI5hFmnU6kWEA7idNwCcMJB4r58_c8DpZiOVA5BJLZFspw2qs' className='listaContFoot'>
                                <p>0424-4369887</p>
                            </Link>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='direFooter contFoot'>
                <h1 className='direTextFoot'>DIRECCION</h1>
                <Link to='https://goo.gl/maps/z3XrXRB6LGFb7Ldi7' className='linkFoot'>
                    <p className='textDireFoot'>Manzana B-10, Avenida Sector 1, Urbanizacion La Esmeralda, San Diego 2006, Carabobo</p>
                </Link>
                <iframe className='ubicacionFoot' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.44424144947!2d-67.97228242512404!3d10.225709269110602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e805d3b79ec421b%3A0x2292556f1ff46689!2sMadagaskar!5e0!3m2!1ses-419!2sve!4v1687455621371!5m2!1ses-419!2sve" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
};

export default Footer