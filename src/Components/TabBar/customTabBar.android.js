import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

class CustomTabBar extends Component {

  selectedTabIcons = []
  unselectedTabIcons = []

  propTypes = {
    goToPage: React.PropTypes.func,
    activeTab: React.PropTypes.number,
    tabs: React.PropTypes.array
  }

  renderTabOption (valsString, page) {
    let vals = valsString.split('!$#')
    let isTabActive = this.props.activeTab === page
    return (
      <TouchableOpacity key={valsString} onPress={() => this.props.goToPage(page)} style={styles.tab}>
        <Icon name={vals[1]}
              size={parseInt(vals[2])}
              color={'gray'} />
        <Text style={styles.labelText}>
          {vals[0]}
        </Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 6,
  },
  tabs: {
    height: 45,
    flexDirection: 'row',
    paddingTop: 5,
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: 'rgba(0,0,0,0.05)',
  },
  icon: {
    width: 30,
    height: 30,
    position: 'absolute',
    top: 0,
    left: 20,
  },
  labelText:{
    fontSize: 8,
  },
  separator: {
    height: 0.5,
    backgroundColor: 'gray'
  }
})

export default = CustomTabBar