import './styles.css';

import carroVermelho from 'assets/images/carroVermelho.png';
import ButtonCatalog from 'components/ButtonCatalog';

const CarCard = () => {
  return (
    <div className="base-card product-card">
      <div className="card-top-container">
        <img src={carroVermelho} alt="Audi Supra TT vermelho" />
      </div>
      <div className="card-bottom-container">
        <h6>Audi Supra TT</h6>
        <p>
          <i>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi
          </i>
        </p>
        <ButtonCatalog />
      </div>
    </div>
  );
};

export default CarCard;
