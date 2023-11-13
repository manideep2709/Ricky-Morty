const Character = ({ name, image, origin }) => {
    return (
      <div className='col-3'>
          <div className='card'>
    <div className = 'card-body'>
        <h3 className='card-title'>{name}</h3>
        <img src={image} alt={name} width="300" className='card-img-top' />
        <p>Origin: {origin && origin.name}</p>
        </div>
        </div>
      </div>
    );
  };
  
  export default Character;
  