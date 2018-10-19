import Hello from '../components/Hello';
import * as actions from '../actions/index';
import { StoreState } from '../types/index';
import { connect } from 'react-redux';

export function mapStateToProps({ enthusiasmLevel, name }: StoreState) {
  return {
    enthusiasmLevel,
    name,
  };
}

export function mapDispatchToProps(dispatch:any) {
  return {
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
