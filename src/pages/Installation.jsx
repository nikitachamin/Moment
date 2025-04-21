import "../styles/installation.scss"

function Installation() {
  return (<>
    <h1 className="installation__title">Процесс установки памятника</h1>
    
    <div className="process-container">
        <div className="process-step">
  
            <div className="step-title">1. Подготовка и согласование</div>
            <div className="step-details">
                <p>Подписание договора, выбор места установки</p>
                <p>Получение необходимых разрешений и согласование с администрацией кладбища (если требуется)</p>
                <p>Подготовка технической документации</p>
            </div>
        </div>
        
        <div className="process-step">
        
            <div className="step-title">2. Доставка памятника</div>
            <div className="step-details">
                <p>Аккуратная транспортировка изделия с нашего производства на место установки</p>
                <p>Использование специализированного транспорта и упаковки для предотвращения повреждений</p>
            </div>
        </div>
        
        <div className="process-step">
           
            <div className="step-title">3. Подготовка фундамента</div>
            <div className="step-details">
                <p>Выемка грунта, установка армированного основания</p>
                <p>Монтаж бетонной плиты (при необходимости) с учётом типа почвы и рельефа</p>
                <p>Гарантия надёжности и устойчивости конструкции на долгие годы</p>
            </div>
        </div>
        
        <div className="process-step">
        
            <div className="step-title">4. Монтаж памятника и элементов комплекса</div>
            <div className="step-details">
                <p>Установка памятника, цветника, плитки, тумб, столов и других элементов</p>
                <p>Применение профессионального оборудования и крепёжных систем</p>
                <p>Точная стыковка и выравнивание всех деталей</p>
            </div>
        </div>
        
        <div className="process-step">

            <div className="step-title">5. Завершающие работы и уборка</div>
            <div className="step-details">
                <p>Герметизация швов, чистовая обработка</p>
                <p>Уборка территории после монтажа</p>
                <p>Фотоотчёт для клиента (при необходимости)</p>
            </div>
        </div>
    </div>
    </>
  );
}

export default Installation;
