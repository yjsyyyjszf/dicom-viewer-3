import React from 'react'
import ListItem from "@material-ui/core/ListItem";
import * as cornerstone from "cornerstone-core"

export default class SeriesItem extends React.Component{
  constructor(props){
    super(props);
    this.dicomImage = null;
  }

  dicomImageRef = el => {
    this.dicomImage = el
  };

  componentDidMount(){
    if(this.props.image){
      const element = this.dicomImage;
      cornerstone.enable(element);
      cornerstone.displayImage(element, this.props.image);
    }
  }
  render() {
    const styleDicomImage = {
        width: '100%', 
        height: '100%', 
        position: 'relative',
      };

    return(
      <div ref={this.dicomImageRef} style={styleDicomImage}>
      </div>
    );
  }
}