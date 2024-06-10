function Productcard(props) {
  return (
    <div className="card">
      <img className="card_img" src={props.image}></img>
      <h2 className="card_text">{props.text}</h2>
    </div>
  );
}

export default Productcard;
