/* eslint-disable no-console,func-names,react/no-multi-comp */
import React from 'react';
import ReactDOM from 'react-dom';
import ReactDragListView from "react-drag-listview";
import './index.less';

class ListaDrageable extends React.Component {
  constructor(props) {
    super(props);
    const data = this.props.data1 ||[];
    const carpeta =this.props.carpeta;
   /*  for (let i = 1, len = 21; i < len; i += 1) {
      data.push({
        title: `rows${i}`
      }); */
    //}
    this.state = {
      data
    };
  }

  render() {
    const that = this;
    const dragProps = {
      onDragEnd(fromIndex, toIndex) {
        const data = [...that.state.data];
        const item = data.splice(fromIndex, 1)[0];
        data.splice(toIndex, 0, item);
        that.setState({ data });
      },
      nodeSelector: 'li',
      handleSelector: 'a'
    };

    return (
      <div className="simple simple1">
        <h2>Ordene las imágenes .</h2>
        <div className="bg-gray-500 p-1">
          <ReactDragListView {...dragProps}>
            <ol className="bg-red-300 p-1  " >
              {this.state.data.map((item, index) => (
                <li key={index} className="bg-yellow-400 p-4 border-2  grid grid-cols-2">
                                    <a href="/#"><img src={this.props.carpeta+item.imagen} width="95%" className=" p-2 bg-black  rounded-2xl"/> </a>
                  <div className="bg-black p-2 text-center  border-2 block overflow-auto">
                  {item.orden}
                  <div className="text-sm ">{JSON.stringify(this.state.data)}</div>
                   </div>
                </li>
            ))}
            </ol>
          </ReactDragListView>
        </div>
      </div>
    );
  }
}

export default ListaDrageable;