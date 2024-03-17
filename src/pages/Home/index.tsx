import './styles.css';
import carroAmarelo from 'assets/images/carroAmarelo.png';
import ButtonHome from 'components/ButtonHome';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="base-card home-card">
          <div className="home-image-container">
            <img src={carroAmarelo} alt="Carro-Audi sedan amarelo" />
            <div className="home-text-container">
              <h1>O carro perfeito para você</h1>
              <p>
              Conheça nossos carros e dê mais um passo na realização do seu sonho
              </p>
            </div>
          </div>
        </div>
        <div className="home-card-search">
          <div className="home-container-botton">
            <div>
              <Link to="/catalog">
                <ButtonHome />
              </Link>
            </div>
            <p>Comece agora a navegar</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
