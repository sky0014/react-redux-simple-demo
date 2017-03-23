import React from 'react';
import { connect } from 'react-redux';

import DevTools from './devtool.js';

const SoundControl = ({muted}) => {
    console.log('---------------------Sound Changed--------------------', muted);
    return <div>你就当我是一个视频吧，音量
             <span style={ { color: 'red' } }><b>{ muted ? '静音' : '有声' }</b></span>
           </div>;
}

const A = ({visible}) => {
    return <img src='img/a.jpg' width='500' height='566' style={ { visibility: visible ? 'visible' : 'hidden' } } />
}

const B = ({visible}) => {
    return <img src='img/b.jpg' width='500' height='566' style={ { visibility: visible ? 'visible' : 'hidden' } } />
}

class App extends React.Component {

    render() {
        const {isA, isB} = this.props;

        return <div>
                 <A visible={ isA } />
                 <B visible={ isB } />
                 <SoundControl muted={ isA || isB } />
                 <DevTools/>
               </div>
    }

}

const mapStateToProps = (state, ownProps) => {
    const {isA, isB} = state;
    return {
        isA,
        isB
    }
}

export default connect(
    mapStateToProps,
)(App);