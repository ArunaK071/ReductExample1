import {connect} from 'react-redux';
import { InAction,DecAction} from './Redux/Action'

function App({local_variable ,InAction,DecAction}) {
  return (
    <div >
   {/* <h1>{local_variable}</h1>
    <button onClick ={ InAction }> Increase State</button>
    <button onClick ={ DecAction}> Decrease State</button> */} 
    </div> 
  );
}

const mapStatetoProps = state =>(
{
  local_variable : state
})
export default connect(mapStatetoProps,{InAction,DecAction})(App);
