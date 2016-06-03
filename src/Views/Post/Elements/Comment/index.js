import React, {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native'
import api from '../../../../NetWork/api'

class Comment extends Component {
  displayName = 'Comment'

  getInitialState () {
    return {
      subCommentsLoading: false,
      subCommentsHidden: true,
      subCommentsData: null,
      level: this.props.level ? this.props.level : 1
    }
  }

  render () {
    return (
      <View style={styles.commentOuterContainer}>
        <View style={[styles.commentInnerContainer, {marginLeft: this.state.level == 1 ? 10 : 20*this.state.level}]}>
          <Text style={styles.commentBy}>
            {this.props.data.by}:
          </Text>
          <Text style={styles.commentText}>
            {this.fixCommentText(this.props.data.text)}
          </Text>
          {this.renderRepliesControlButton()}
        </View>
        {this.renderSubComments()}
      </View>
    )
  }
}