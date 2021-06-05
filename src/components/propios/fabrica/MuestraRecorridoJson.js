import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MuestraRecorridoJson extends Component {
    constructor(props) {
        super(props);
        const datos ="nada ";
        this.state = {
            datos: "nada de mada"
          };
    }

    componentWillMount() {
        var undato
        this.setState({ datos :"nada desde adentro"});
        fetch(this.props.datos1)
        .then(res => res.json())
                                         .then(undato => {
                                                         this.setState({ datos :undato});
                                                         console.log("datos recorrido  undato=",undato);
                                                         //const datos = this.state.datos;
                                                         //datos = undato;
                                                         console.log("datos recorrido  datos local=",undato);

                                                        
                                                        
                                                       }
                                                 )
                                                 .catch(function() {
                                                 //  alert("eror de descarga");
                                                   console.log("cargando");
                                                 }
                                                 ); 
                        
 
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {
return true
    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        const that = this;
         if (that.props.datos1) {
        return ( <div className="p-4">
            <div className="bg-black">

                        {JSON.stringify(that.props.datos1)}

            </div>
            <div className="overflow-auto text-sm p-4 block overflow-auto">

            {JSON.stringify(that.state.datos)}
            
</div></div>
        );
        } else return <p>Cargando</p>;
    }
}

MuestraRecorridoJson.propTypes = {

};

export default MuestraRecorridoJson;