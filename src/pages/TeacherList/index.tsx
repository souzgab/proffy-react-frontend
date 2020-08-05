import React from 'react'

import PageHeader from '../../components/PageHeader'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'

function TeacherList(){
    return(
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os profys disponiveis">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="week-day">Dia da Semana</label>
                        <input type="text" id="subject"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="subject"/>
                    </div>
                </form>
            </PageHeader>

            <main>
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
            </main>
        </div>
    )
}

export default TeacherList