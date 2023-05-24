const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="email-footer">
          <p>Suscribete a nuestro sitio web:</p>
          <input
            className="input-footer"
            type="text"
            placeholder="Ingrese su correo"
          />
        </div>
        <div className="links-footer">
          <ul>
            <li>
              <a className="linsk-footer-item" href="">
                Productos
              </a>
            </li>
            <li>
              <a className="linsk-footer-item" href="">
                Nosotros
              </a>
            </li>
            <li>
              <a className="linsk-footer-item" href="">
                Facebook
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a className="linsk-footer-item" href="">
                Instragram
              </a>
            </li>
            <li>
              <a className="linsk-footer-item" href="">
                Twitter
              </a>
            </li>
            <li>
              <a className="linsk-footer-item" href="">
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-end">
        <p>ARF STORE 2023 © todos los derechos reservados</p>
      </div>
    </div>
  );
};
export default Footer;
