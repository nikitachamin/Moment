import { useEffect, useRef } from "react";
import "../styles/payment.scss"
function Payment() {
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
        <section className="payment-service-section blue-grey lighten-3"
        ref={sectionRef}
    tabIndex="-1" >
  <h2>💳 Оплата</h2>
  <div className="payment-list-block">
    <p>
      Мы придерживаемся принципов прозрачности и честности в расчётах. <span className="payment-strong">Стоимость памятника и всех работ фиксируется заранее</span> и не изменяется в процессе выполнения — никаких скрытых платежей и неожиданных доплат. Всё чётко прописывается в договоре, который вы получаете до начала работ.
    </p>
    <ul className="payment-list">
      <li>📝 <span className="payment-strong">60% предоплата</span> — после согласования проекта и заключения договора</li>
      <li>✅ <span className="payment-strong">40% остаток</span> — оплачивается после приёмки готового памятника, перед установкой</li>
    </ul>
    <div className="payment-options">
      <span className="payment-strong">Удобные формы оплаты:</span>
      <ul className="payment-list">
        <li>💵 Наличный и безналичный расчёт</li>
        <li>🧾 Оплата по счёту для физ. и юр. лиц</li>
        <li>🏦 Беспроцентная рассрочка через Тинькофф Банк&nbsp;— быстрое оформление, без скрытых условий и переплат</li>
      </ul>
    </div>
    <p>
      Мы ценим ваше доверие, поэтому обеспечиваем <span className="payment-strong">комфортные условия оплаты</span> и полную открытость на всех этапах работы.
    </p>
  </div>
</section>
     );
}

export default Payment;