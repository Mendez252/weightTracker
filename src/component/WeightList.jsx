const WeightList = (props) => {
  return ( 
    <div>
      {props.weights.map(record => <p>{record}</p>)}
    </div>
   );
}
 
export default WeightList;