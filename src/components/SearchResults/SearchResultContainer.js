import getSearchString from '../../redux/cardsRedux';
import SearchResults from './SearchResults';

const mapStateToProps = (state) => ({
  searchString: getSearchString(state),
});

export default mapStateToProps(SearchResults);