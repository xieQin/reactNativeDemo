import React, {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  Component
} from 'react-native'
import GiftedListView from 'react-native-gifted-listview'

class Post extends Component {
  getInitialState () {
    return {
      renderRow: this.props.renderRow,
      backgroundColor: this.props.backgroundColor ? this.props.backgroundColor : '#fff',
      loadMoreText: this.props.loadMoreText ? this.props.loadMoreText : 'Load More...',
      renderHeader: this.renderHeader ? this.props.renderHeader : null,
    }
  }

  onRefresh (page = 1, callback, options) {
    this.props.onRefresh(page, callback)
  }

  renderRow (row) {
    return this.state.renderRow(row)
  }

  render() {

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  navbarSpace: {
    height: (Platform.OS !== 'android') ? 64 : 0,
  },
  rowContainer: {
    paddingRight: 15,
    paddingLeft: 10,
    flexDirection: 'row'
  },
  paginationView: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20
  },
  loadMoreText: {
    fontSize: 15,
    color: 'gray'
  }
})

export default Post