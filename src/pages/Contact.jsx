import { useEffect, useRef } from "react";
import "../styles/contact.scss"

function Contact() {
    const sectionRef = useRef(null);

    useEffect(() => {
        if (sectionRef.current) {
          // Плавная прокрутка к секции
          sectionRef.current.scrollIntoView({ behavior: "smooth" });
          // Установка фокуса после плавной прокрутки
          setTimeout(() => {
            sectionRef.current.focus();
          }, 500); // Подберите задержку по скорости скролла (например, 500 мс)
        }
      }, []);
    return ( 
        <section className="contact-service-section blue-grey lighten-3"
        ref={sectionRef}
        tabIndex="-1" >
<h2>📞 Контакты</h2>
<ul className="contact-list">
<li><span className="contact-strong">Москва:</span> Ул. Усиевича 29, корп. 1, 125319</li>

<li><span className="contact-strong">Телефон:</span> +7 495 226 51 71 </li>
<a
              href="tel:+74952265171"
              className="btn btn-success blue-grey darken-4"
            >
              +7 495 226 51 71
            </a>
</ul>
<div className="contact-list-block">
<span className="contact-strong">Название организации:</span><br />
ИНДИВИДУАЛЬНЫЙ ПРЕДПРИНИМАТЕЛЬ ЛОПАТИН СЕРГЕЙ ВИКТОРОВИЧ
<br /><br />
<span className="contact-strong">Юридический адрес:</span><br />
129346, РОССИЯ, г. Москва, ул. Малыгина, д. 3, корп. 2
<br /><br />
<span className="contact-strong">ИНН:</span> 771673499501<br />
<span className="contact-strong">ОГРНИП:</span> 324774600299403
<br /><br />
<span className="contact-strong">Банковские реквизиты:</span>
<ul className="contact-list">
<li><span className="contact-strong">Расчётный счет:</span> 40802810600006212680</li>
<li><span className="contact-strong">Банк:</span> АО "ТИНЬКОФФ БАНК"</li>
<li><span className="contact-strong">ИНН банка:</span> 7710140679</li>
<li><span className="contact-strong">БИК:</span> 044525974</li>
<li><span className="contact-strong">Корр. счет:</span> 30101810145250000974</li>
<li><span className="contact-strong">Юр. адрес банка:</span> Москва, 127287, ул. Хуторская 2-я, д. 38А, стр. 26</li>
</ul>
</div>
</section>
     );
}

export default Contact;