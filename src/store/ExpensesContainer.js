

// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { getCategories, getCategory, addCategory, updateCategory, destroyCategory } from './categories.actions';

// import Categories from './Categories';

// function mapStateToProps(state) {
//     return {
//         categories: state.categories,
//         error: state.categorieError,
//         loading: state.categoriesLoading
//     };
// }

// function mapDispatchToProps(dispatch) {
//     dispatch(getCategories());
//     return bindActionCreators({ getCategory, addCategory, updateCategory, destroyCategory }, dispatch);
// }

// const CategoriesContainer = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Categories);

// export default CategoriesContainer;