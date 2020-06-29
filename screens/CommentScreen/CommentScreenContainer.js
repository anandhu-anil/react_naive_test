import React, {Component} from 'react';
import CommentScreenPresenter from './CommentScreenPresenter';

class CommentScreenContainer extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return <CommentScreenPresenter navigation={this.props.navigation} />;
  }
}

export default CommentScreenContainer;
