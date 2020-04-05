import React from 'react';

export default class CatList extends React.Component {
  listCats = () => {
    return this.props.catPics.map(cat => <img key={cat.id} src={cat.url} alt={cat.id} width='200px' height='200px'  />)
  }

  render() {
    return (
      <div>
        {this.listCats()}
      </div>
    )
  }
}
