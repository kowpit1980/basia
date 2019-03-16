import React, { Component } from 'react';
import { Navigation} from 'react-mdl';

class AppNavigation extends Component {
    render() {
        return (
            <Navigation>
                <a href="https://www.youtube.com/watch?v=xhQr_m23U0I">sówki.pl</a>
                <a href="https://www.123rf.com/photo_40402500_a-funny-owl-made-of-roasted-coffee-beans-and-two-cups-.html">kawowa sowa</a>
                <a href="https://www.onet.pl">onet.pl</a>
                <a href="https://">Link odpłatny</a>
            </Navigation>
        );
    }
}
export default AppNavigation;