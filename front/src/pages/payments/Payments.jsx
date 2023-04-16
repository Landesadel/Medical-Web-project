import React, { useEffect, useState } from 'react';
import './Payments.scss';

function Payments() {
    return (
        <div className="container">
            <h2 className="reg_title">Порядок оплаты</h2>
            <p>Оплатить <span className='bold'> членские взносы ОО “Белорусское общество симуляционного обучения в медицине”</span>
                Вы можете через систему ”Расчет“ (ЕРИП) в любом
                удобном для Вас месте, в удобное для Вас время, в удобном для Вас пункте банковского обслуживания –
                интернет-банкинге, М-банкинге, инфокиоске, кассе банков, банкомате и т.д.
            </p>

            <p>Совершить оплату можно с использованием наличных денежных средств, электронных денег и банковских платежных карточек в пунктах банковского обслуживания  банков, которые оказывают услуги по приему платежей, а также посредством инструментов дистанционного банковского обслуживания.</p>
            <ol className="payment__list"><span className='bold'>ДЛЯ ПРОВЕДЕНИЯ ПЛАТЕЖА НЕОБХОДИМО:</span>
                <li> 1. Выбрать
                    <span className='bold'>
                        <ul className="payment__list">
                            <li className="payment__list_item">·  Пункт “Система “Расчет” (ЕРИП)</li>
                            <li className="payment__list_item">·  "Благотворительность, общественные объединения"</li>
                            <li className="payment__list_item">·  "Научные, технические, профессиональные"</li>
                            <li className="payment__list_item">·  "БОСОМ"</li>
                            <li className="payment__list_item">·  "Членские взносы | код услуги 5161341 "</li>
                        </ul>
                    </span>
                </li>
                <li><img className='payment__img' src='payment.jpg'/></li>
                <li>  2. Для оплаты ввести  <span className='bold'>ФИО</span></li>
                <li>  3. Проверить корректность информации</li>
                <li>  4. Совершить платеж. </li>

            </ol>

            <p>Если Вы осуществляете платеж в кассе банка, пожалуйста, сообщите кассиру о необходимости проведения платежа через систему ”Расчет“ (ЕРИП).</p>

            <p>Каждой услуге в ЕРИП присваивается номер. Можно воспользоваться поиском, указав номер услуги или название <span className='bold'>БОСОМ</span> (не на всех устройствах поиск работает корректно).</p>
            <p>Номер услуги: <span className='bold'>5161341.</span></p>

            <a className="payment__download" href='payment.docx' download>Скачать памятку об оплате</a>
        </div>
    )
}

export default Payments;