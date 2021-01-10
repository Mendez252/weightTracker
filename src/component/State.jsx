const State = (props) => {
  return ( 
    <div>{props.weight.map(record => <p>{record}</p>)}</div>
   );
}
 
export default State;