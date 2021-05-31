import React, {Component} from 'react';
import { MLBreadCrumbs } from '../../../../components/breadcrumbs/component';
//Components
import { MLHead } from '../../../../components/header/component';
import { MLLoading } from '../../../../components/loading/component';
import { ProductCard } from '../../components/product-card/component';

//service
import  ApiDataProducts  from '../../services/products.services';
import './styles.scss';


class ItemsProducts extends Component {

    constructor(props) {
        super(props);
            this.state = {
                search : "",
                categorises:[],
                listProducts:[]        
            }
        };

// Funcion que consume el servicio y actualiza el estado.
    updateInterface = (params) =>{
        if( params){
            let initialPromise = ApiDataProducts.getListProducts(params);
            initialPromise.then((resp)=>{
                this.setState({listProducts: resp.items });
                this.setState({categorises: resp.categories });
            });
        }
    }
// render
    render() {
        let items; 
        if(this.state.listProducts.length !== 0){
         items = this.state.listProducts.forEach((x,i)=>{
            if(i < 4){
            return <ProductCard
                key={x.id}
                id={x.id} 
                img={x.picture} 
                price={x.price } 
                description={x.title}
                location ={x.location}
                isfreeshipping= {x.free_shipping} 
                >
            </ProductCard>
            }
          })}else{
             items = <MLLoading></MLLoading>
          }

        return(
            <div className="mlLayout">
            <MLHead FucUpdateArray={this.updateInterface}></MLHead>
            <div className="mlLayout-container">
                <div className="mlLayout-breadCrumbs">
                    <MLBreadCrumbs array={this.state.categorises}></MLBreadCrumbs>
                </div>                
                <div className="ProductListPage">
                   {items}
                </div>
            </div>
        </div>
        )};
}

export default ItemsProducts;


