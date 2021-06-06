import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MuestraRecorridoJson extends Component {
    constructor(props) {
        super(props);
        const datos ="nada ";
        this.state = {
            datos: {}
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
       
                    if (this.props.datos1) {
                    const that = this;
                    var valores;
                    var claves;
                    var midato = that.state.datos['default'];

                     console.log("midato=",midato);
                     if (midato) {
                                    claves = Object.keys(midato); 
                                    valores = Object.values(midato); 
                                    console.log("claves=",claves); 
                                    console.log("valores=",valores[0]);
                                //claves = Object.keys(that.state.datos['default']);
                                return ( <div className="p-4">
                                            <div className="bg-black">

                                                {JSON.stringify(this.props.datos1)}

                                             </div>
                                          <div className="overflow-auto text-sm p-4 block overflow-auto">

                                                            {JSON.stringify(that.state.datos['default'])}
                                          {
                                                    claves.map((item,index) =>{
                                                            var unvalor = valores[index];
                                                            console.log(unvalor);
                                                            if ( item ==='hotSpots') { return item}
                                                            else 
                                                                {    return   <p key={index}>{item} = {unvalor} </p>
                                                                }
                                                        }
                                                        )  
                                          }                       
                                        
                                    
                                    </div>
                                    </div>
                                );
                    } else 
                    return <p>Cargando</p>;
    }
}
}
MuestraRecorridoJson.propTypes = {

};

export default MuestraRecorridoJson;