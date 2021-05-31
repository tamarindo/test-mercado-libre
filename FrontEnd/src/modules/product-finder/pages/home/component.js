import React, {Component} from 'react';
import { MLBreadCrumbs } from '../../../../components/breadcrumbs/component';
//Components
import { MLHead } from '../../../../components/header/component';

//service

import './styles.scss'

class Home extends Component {

    constructor(props) {
        super(props);
            this.state = {
                listProducts:[]        
            }
        };
    componentDidMount() {

    }
    render() {

        return(
            <div className="mlLayout">
            <MLHead FucUpdateArray={()=>{}} ></MLHead>
            <div className="mlLayout-container">
                <div className="mlLayout-breadCrumbs">
                    <MLBreadCrumbs></MLBreadCrumbs>
                </div>                
            </div>
        </div>
        )};
}

export default Home;


