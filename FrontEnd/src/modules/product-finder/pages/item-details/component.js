import React, {Component} from 'react';
import { MLBreadCrumbs } from '../../../../components/breadcrumbs/component';
import { MLButton } from '../../../../components/button/component';
import { MLHead } from '../../../../components/header/component';
import { MLLoading } from '../../../../components/loading/component';
import { MLPrice } from '../../../../components/price/component';
import { DescriptionCard } from '../../components/description-card/component';
import  ApiDataProducts  from '../../services/products.services';
import './styles.scss'

class ItemDetails extends Component {

    constructor(props) {
        super(props);
            this.state = {
                categorises:[],
                details: {
                    item:{
                        price:{currency:"",decimals:"",amount:""},
                        picture:""
                    }
                }                    
            }
        };

    componentDidMount() {
        let id  = this.props.history.location.pathname.split('/')[2];
        if( id){
            let initialPromise = ApiDataProducts.getDetailsProducts(id);
            initialPromise.then((resp)=>{
                this.setState({
                    details:resp
                }  );
                this.setState({categorises: resp.categories });
            });
        }
    } 

    render() {
            return(
            <div className="mlLayout">
                <MLHead FucUpdateArray={()=>{}} ></MLHead>
                <div className="mlLayout-container">
                    <div className="mlLayout-breadCrumbs">
                        <MLBreadCrumbs array={this.state.categorises}  ></MLBreadCrumbs>
                    </div>
                    { this.state.categorises.length !== 0 ?
                    <div className="detailsProductPage">
                        <div className="detailsProductPage-cleft w-60">
                            <img src={ this.state.details.item.picture} className="detailsProductPage-img" alt='imagen del producto' ></img>
                            <DescriptionCard
                                description={ this.state.details.item.description}
                            ></DescriptionCard>
                        </div>
                        <div className="detailsProductPage-cRight w-40">
                            <div className="detailsProductPage-views">
                            { this.state.details.item.condition} - { this.state.details.item.sold_quantity} Pedidos
                            </div>
                            <h2 className="detailsProductPage-title">
                            { this.state.details.item.title}
                            </h2>
                            <MLPrice currency={ this.state.details.item.price.currency} value={parseInt(this.state.details.item.price.amount)} decimal={this.state.details.item.price.decimals} ></MLPrice>
                            <MLButton text="Comprar"  ></MLButton>
                        </div>                    
                    </div>
                    :
                    <MLLoading></MLLoading>
                    }
                </div>
            </div>
            )
    }
}

export default ItemDetails;