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
                                                        // console.log("datos recorrido  undato=",undato);
                                                         //const datos = this.state.datos;
                                                         //datos = undato;
                                                         console.log("datos recorrido  datos =",this.state.datos);

                                                        
                                                        
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
        /* <div className="p-4">
                                     <div className="bg-black">{JSON.stringify(this.props.datos1)}</div>
                                     <div className="overflow-auto text-sm p-4 block overflow-auto">
                                                      {JSON.stringify(that.state.datos['scenes']["Banio"])}
                                      </div>
                      <div> */
    function muestraHotspot (unhotspot) {
        Object.keys(unhotspot).map((campohot,ind) =>{
            console.log("dentro del hot campohot=",campohot,"=");
            return(
                <div key={ind} className="bg-yellow-100 border-2">
                    {campohot} = {unhotspot[campohot]}

                </div>
            )

    })

    }
    function muestraEscena(midato)   {
      //  if (midato) {
            console.log("leyomidato");
            claves = Object.keys(midato); 
            valores = Object.values(midato); 
            hotSpotes = midato['hotSpots'];
            clavesHotspot = Object.keys(hotSpotes[0]);
          
             return (   <div className="bg-red-600 p-2  ">
                        { claves.map((clave,index) => {
                          
                          if(clave!='hotSpots') {
                                                      console.log("iterando clave=",clave);
                                                      return (<div className="">
                                                              <div key={index} className="text-left ml-20  bg-gray-200 mt-2 w-1/2 text-black   border-1 font-sm">{clave}={(clave != 'hotSpots')? midato[clave].toString():"nada"}</div>    
                                                              </div>
                                                              )
                                                  }
                                                  else {
                                                      return(
                                                          <div key={index} className=" bg-white text-red-700 p-4 text-left ml-20 mt-4 w-1/2"> 
                                                              Hotspots
                                                              <div>
                                                              { // console.log("hotspots varios=",midato[clave])                                                                      
                                                              midato[clave].map((unhotspot,indice) => {
                                                                  return(<div key={indice} ><hr/>
                                                                      <div className="bg-gray-300 border-2">{unhotspot['sceneId']}</div><hr/>
                                                                          
                                                                             {/*  {  muestraHotspot(unhotspot) } */}

                                                                              {
                                                                                   Object.keys(unhotspot).map((campohot,ind) =>{
                                                                                      console.log("dentro del hot campohot=",campohot,"=");
                                                                                      return(
                                                                                          <div key={ind} className="bg-yellow-100 border-2">
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

                      
                    )             
//          }
   
//else  {   
 //     return <p>Cargando</p>
 // }
    }
    
    function muestaDefault(){

    }
    // 
    function muestraDefault(unRecorrido){
        if (unRecorrido["default"]) {
            return<div className="bg-gray-500  p-4 text-sm rounded-2xl"><div>Default</div>
            <div className="bg-blue-300 p-4">
                {muestraEscena(unRecorrido["default"])}
                </div>
                </div>
        } else return <div>Cargando default</div>
        }
        function muestraReco(unRecorrido){
        if (unRecorrido["scenes"]) {
        return <div className="bg-blue-400 p-4 text-sm ">
                   {  
                   Object.keys(unRecorrido["scenes"]).map((unaescena,indiceescena)=>{

                   return <div key={indiceescena} className="bg-red-100 mt-10 p-2 rounded-2xl"> {muestraEscena(unRecorrido["scenes"][unaescena]) } </div>
                })
                   }
            </div>
        console.log("muestraRecorrido =",unRecorrido['default']);
        
       // unRecorrido['scenes'].map((unaescena,indiceEscena)=>{
         //   muestraEscena(unaescena);

        //})
        } else 
        return <div>Cargando dentro de mostraReco</div>
    }
    console.log("render");
    if (this.props.datos1)  {
        
            const that = this;
            console.log("tengo valor props.datos1",that.props.datos1);
            var valores;
            var claves;
            var hotSpotes;
            var valuesHotspot;
            var clavesHotspot;
            var midato = that.state.datos;
            if (midato){
                    // var midato = that.state.datos['scenes']["Banio"];
                    //var midato = that.state.datos;
                    console.log('buscando el dato=',midato);
                    
                //muestra escena
                        return (
                        <div>
                            <h2>Recorrido</h2>
                            {muestraDefault(midato)}
                            {muestraReco(midato)}

                            <p>Fin escena</p>
                        </div>
                        )
            }
            else {return<div>Cargando desde render</div>}
    }
}
 }


MuestraRecorridoJson.propTypes = {

};

export default MuestraRecorridoJson;