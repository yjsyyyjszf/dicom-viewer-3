import React from 'react'
import SeriesItem from "./SeriesItem";
import ListItem from "@material-ui/core/ListItem";

export default class SeriesList extends React.Component {
  render() {
    let _seriesItems = [];
    if(this.props.series !== null){
      this.props.series.forEach(s => {
        _seriesItems.push(<SeriesItem series={s}/>);
      });
    }
    return (
      <div>
        {_seriesItems.length > 0 ?
          _seriesItems : (<p style={{padding: 0, margin: '5px 10px 5px 10px'}}>nothing</p>)
        }
      </div>
    );
  }
}