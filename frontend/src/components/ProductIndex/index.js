import CategoryStanley from '../../assets/CategoryCard_Stanley.jpg';
import CategoryElectronic from '../../assets/CategoryCard_electronic.jpg';
import CategoryTools from '../../assets/CategoryCard_tools.jpg';
import "./ProductIndex.css";
const ProductIndex = () => {
  return(
    <>
      <section className="section-1">
        <div className="section-1-container">
          <div className="section-1-column">
              <h3>Ready for anything</h3>
              <img src={CategoryStanley} alt=""/>
              <p>Shop Stanley drinkware</p>
          </div>
          <div className="section-1-column">
              <h3>Gadget galore</h3>
              <img src={CategoryElectronic} alt=""/>
              <p>Shop electronic products</p>
          </div>
          <div className="section-1-column">
              <h3>Home repair products</h3>
              <img src={CategoryTools} alt=""/>
              <p>Shop tools, lighting & more</p>
          </div>
          <div className="section-1-column">
              <h3>Sign in for your best experience</h3>
              <button>Sign in securely</button>
          </div>
        </div>
      </section>
    </>
  )
}
export default ProductIndex