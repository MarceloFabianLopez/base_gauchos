/* eslint-disable no-console,func-names,react/no-multi-comp */
import React from 'react';
import ReactDOM from 'react-dom';
import ReactDragListView from "react-drag-listview";
//import './index.less';

class ListaDrageable extends React.Component {
  constructor(props) {
    super(props);
    const data = this.props.data1 ||[];
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
        <h2>Ordene las imágenes</h2>
        <div className="simple-inner">
          <ReactDragListView {...dragProps}>
            <ol>
              {this.state.data.map((item, index) => (
                <li key={index} className="bg-yellow-400 p-4">
                  {item.orden}
                  <a href="/#">
                  <img src={"../../vtour/fabrica/"+item.imagen} width="25%"/> </a>
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