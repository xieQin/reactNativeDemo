import React, {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native'

class Comment extends Component {

  getInitialState () {
    return {
      subCommentsLoading: false,
      subCommentsHidden: true,
      subCommentsData: null,
      level: this.props.level ? this.props.level : 1
    }
  }

  render () {

  }
}