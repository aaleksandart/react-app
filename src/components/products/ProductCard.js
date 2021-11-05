// SKAPAR 4 PRODUKTER OCH VISAR DEM PÅ OLIKA SÄTT BEROENDE PÅ SKÄRMSTORLEK

import React from 'react'
import './ProductCard.css';

const ProductCard = () => {

    return (
        <div className="cards">
            <div className="header"><h2>Products</h2></div>
            <div id="showcase" className="showcase">
                <div className="card shadow">
                    <img src="https://images.pexels.com/photos/1616566/pexels-photo-1616566.jpeg?cs=srgb&dl=pexels-zsolt-palatinus-1616566.jpg&fm=jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">El MTB Specialized Turbo Levo</h5>
                        <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus consequuntur accusantium accusamus totam libero asperiores maiores laboriosam laborum illum in?</p>
                        <button href="#" className="btn shadow">82 990<i className="fas fa-cart-plus ps-3"></i></button>
                    </div>
                </div>
                <div className="card shadow">
                    <img src="https://images.pexels.com/photos/1616566/pexels-photo-1616566.jpeg?cs=srgb&dl=pexels-zsolt-palatinus-1616566.jpg&fm=jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Elcykel Specialized Turbo Vado 3</h5>
                        <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, cupiditate? Rerum eligendi ducimus saepe facilis illum placeat perferendis quibusdam quisquam. </p>
                        <button href="#" className="btn shadow">36 990 kr<i className="fas fa-cart-plus ps-3"></i></button>
                    </div>
                </div>
                <div className="card shadow">
                    <img src="https://images.pexels.com/photos/1616566/pexels-photo-1616566.jpeg?cs=srgb&dl=pexels-zsolt-palatinus-1616566.jpg&fm=jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Damcykel Skeppshult Nova Svart</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi illo porro ut tempora quidem dolorum? Iure sequi ex obcaecati totam.</p>
                        <button href="#" className="btn shadow">7 950 kr <i className="fas fa-cart-plus ps-3"></i></button>
                    </div>
                </div>
                <div className="card shadow">
                    <img src="https://images.pexels.com/photos/1616566/pexels-photo-1616566.jpeg?cs=srgb&dl=pexels-zsolt-palatinus-1616566.jpg&fm=jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Gravelbike Marin Nicasio+ T 650</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque deleniti distinctio recusandae asperiores iure exercitationem mollitia. Eius illo dolor modi.</p>
                        <button href="#" className="btn shadow">9 980 kr <i className="fas fa-cart-plus ps-3"></i></button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default ProductCard
