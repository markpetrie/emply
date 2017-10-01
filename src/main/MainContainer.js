import { connect } from 'react-redux';
import Main from './Main';

const mapStateToProps = state => ({
    user: state.auth.user
});

const mapDispatchToProps = dispatch => {
    return {};
};

const MainContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);

export default MainContainer;