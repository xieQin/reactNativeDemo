import React, {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform
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
}

export default Post