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
       
     
    console.log("render");
    if (this.props.datos1)  {
        console.log("tengo valor props.datos1");
            const that = this;
            var valores;
            var claves;
            var hotSpotes;
            var valuesHotspot;
            var clavesHotspot;
            var midato = that.state.datos['default'];
            if (midato){
                var midato = that.state.datos['scenes']["Banio"];
            console.log('buscando el dato=',that.state.datos['scenes']["Banio"]);
        
        }
             
             if (midato) {
                  console.log("leyomidato");
                  claves = Object.keys(midato); 
                  valores = Object.values(midato); 
                  hotSpotes = midato['hotSpots'];
                  clavesHotspot = Object.keys(hotSpotes[0]);
                
                   return ( <div className="p-4">
                                           <div className="bg-black">{JSON.stringify(this.props.datos1)}</div>
                                           <div className="overflow-auto text-sm p-4 block overflow-auto">
                                                            {JSON.stringify(that.state.datos['scenes']["Banio"])}
                                            </div>
                            <div>
                                {claves.map((clave,index) => {
                                
                                if(clave!='hotSpots') {
                                                            console.log("iterando clave=",clave);
                                                            return (
                                                                    <div key={index}>{clave}={(clave != 'hotSpots')? midato[clave].toString():"nada"}</div>    
                                                                    )
                                                        }
                                                        else {
                                                            return(
                                                                <div key={index} className="text-red-500"> 
                                                                    Hotspots
                                                                    <div>
                                                                    { // console.log("hotspots varios=",midato[clave])                                                                      
                                                                    midato[clave].map((unhotspot,indice) => {
                                                                        return(<div key={indice}><hr/>
                                                                            {unhotspot['sceneId']}<hr/>
                                                                                
                                                                                    {  //aca va el map de cada hotspot
                                                                                        Object.keys(unhotspot).map((campohot,ind) =>{
                                                                                            console.log("dentro del hot campohot=",campohot,"=");
                                                                                            return(
                                                                                                <div key={ind}>
                                                                                                    {campohot} = {unhotspot[campohot]}

                                                                                                </div>
                                                                                            )

                                                                                    })

                                                                                }
                                                                        </div>)   
                                                                        })
                                                                    
                                                                    }
                                                                    
                                                                </div>
                                                                </div>
                                                            );
                                                        }
                                            })
                                }
                            </div>                
                            </div>
                          )             
                }
         
    else  {   
            return <p>Cargando</p>
        }
    }

}
 }


MuestraRecorridoJson.propTypes = {

};

export default MuestraRecorridoJson;