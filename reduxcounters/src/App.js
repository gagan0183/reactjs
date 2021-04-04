import { connect } from 'react-redux';
import Counter from './Counter';

// map redux state to components props
function mapStateToProps(state) {
    return {
        countValue: state.count
    };
}

const increaseAction = { type: 'increase' };
const decreaseAction = { type: 'decrease' };

// map redux actions to components props
function mapDispatchToProps(dispatch) {
    return {
        increaseCount: () => dispatch(increaseAction),
        decreaseCount: () => dispatch(decreaseAction)
    };
}

// HOC
const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

export default App;