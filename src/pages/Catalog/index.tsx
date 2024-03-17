import CarCard from 'components/CarCard/index';
import Search from 'components/Search';

const Catalog = () => {
  return (
    <>
      <div>
        <div className="container my-4">
          <div className="row">
            <div className="search-card">
              <div className="button-search">
                <Search />
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <CarCard />
            </div>
            <div className="col-sm-6 col-lg-4">
              <CarCard />
            </div>
            <div className="col-sm-6 col-lg-4">
              <CarCard />
            </div>
            <div className="col-sm-6 col-lg-4">
              <CarCard />
            </div>
            <div className="col-sm-6 col-lg-4">
              <CarCard />
            </div>
            <div className="col-sm-6 col-lg-4">
              <CarCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalog;
