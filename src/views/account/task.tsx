import React from 'react';
import { connect } from 'react-redux';
import { Common } from '@/interface/common';
import { login } from '@/redux/actions/user';

class Task extends React.Component {
  render() {
    return (
      <div>
        <h2>task world</h2>
      </div>
    ) 
  }
  componentDidMount(): void {
    console.log(this)
    // this.login()
  }
}

const mapStateToProps = (state: Common) => ({state})

const mapDispatchToProps = (disaptch: Function) => ({
  login
})

export default connect(mapStateToProps,mapDispatchToProps)(Task);

