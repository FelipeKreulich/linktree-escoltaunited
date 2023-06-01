import './App.css';
import LogoEscolta from './images/LogoEscolta.png'
import Instagram from './images/InstagramIcon.svg'
import Partner from './images/PartnerIcon.svg'
import Calendar from './images/CalendarIcon.svg'
import Team from './images/TeamIcon.svg'
import Whatsapp from './images/WhatsappIcon.svg'

import Network from './images/Network.png'
import Academia from './images/Academia.png'
import Barbearia from './images/Barbearia.png'
import Presida from './images/Presida.png'
import DogExpert from './images/DogExpert.png'
import LavaJato from './images/LavaJato.png'

import 'animate.css'

function App() {
  return (
    <div className="App">
      <div className='card animate__animated animate__backInDown'>
        <div className='card_body'>
          <div className='profile text-center'>
            <img src={LogoEscolta} alt='Escolta United' className='avatar' />
            <div className='bg_content rd_12 p_8'>
              <h1>Conheça mais sobre <span className='text-color'>nosso time</span></h1>
              <p>Escolta United</p>
            </div>
          </div>
          <div className='mt-16'>
            <a className='btn_action bg_content' href='https://www.instagram.com/escolta_untd/'>
              <img src={Instagram} alt='Instagram' className='icons' />
              <span>Instagram - Fique por dentro dos jogos!</span>
            </a>
          </div>
          <div className='mt-16'>
            <a className='btn_action bg_content' href='https://www.instagram.com/p/CrjX_QWuXPh/'>
              <img src={Partner} alt='Parceiros' />
              <span>Conheça nossos parceiros e patrocinadores!</span>
            </a>
          </div>
          <div className='mt-16'>
            <a className='btn_action bg_content' href='https://www.instagram.com/stories/highlights/17928861446445408/'>
              <img src={Calendar} alt='Calendário' className='icons' />
              <span>Fique por dentro de todos os nossos jogos!</span>
            </a>
          </div>
          <div className='mt-16'>
            <a className='btn_action bg_content' href='https://www.instagram.com/escolta_untd/'>
              <img src={Team} alt='Time' className='icons' />
              <span>Conheça mais sobre o nosso time</span>
            </a>
          </div>
          <div className='mt-16'>
            <a className='btn_action bg_content' href='https://wa.me/5567991734892'>
              <img src={Whatsapp} alt='Whatsapp' className='icons' />
              <span>Entre em contato com o time via Whatsapp!</span>
            </a>
          </div>
          <div className='partners'>
            <img src={Network} alt="Network Solution" />
            <img src={Academia} alt="Estudio Espaço Saúde" />
            <img src={Barbearia} alt="Freitas Barbearia" />
            <img src={Presida} alt="Presida" />
            <img src={DogExpert} alt="Dog Expert" />
            <img src={LavaJato} alt="Lava Jato 4 asas" />
          </div>
          <div className='footer bg_content'>
            <p>Designed by ❤️ Network Solution - 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
