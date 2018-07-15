import * as React from 'react';
import { connect } from 'react-redux'

import { IState } from './reducers';

interface IFromRedux {
  ourCount: number;
}

interface IOwnProps {
  title: string;
}

interface IProps extends IFromRedux, IOwnProps {}

class Count extends React.Component<IProps> {
  public render() {
    return (
      <div className="App">
        {`${this.props.title}:${this.props.ourCount}`}
      </div>
    );
  }
}

const mapStateToProps = (state : IState) => {
  return {
    ourCount: state.count
  }
}

export default connect(
  mapStateToProps,
  null
)(Count)
​
