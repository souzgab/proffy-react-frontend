import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'



function TeacherItem(){
    return(
        <article className="teacher-item">
            <header>
                <img src="https://www.debatenews.com.br/wp-content/uploads/2018/11/web-coluna-idoso-1961-678x381.jpg" alt=""/>
                <div>
                    <strong>Velho Professor</strong>
                    <span>Quimica</span>
                </div>
            </header>

            <p>
                AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
            </p>

            <footer>
                <p>
                    Preço por hora
                    <strong>
                        R$80,00
                    </strong>
                </p>

                <button type="button">
                    <img src={whatsappIcon} alt="Whats"/>
                    Entrar em Contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;