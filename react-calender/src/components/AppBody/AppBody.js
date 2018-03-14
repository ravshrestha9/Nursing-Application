import React, {Component} from 'react';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';

import Home from './Home';
import styles from './AppBodyStyle';

class AppBody extends Component {
    constructor(props){
        super();
        this.state = {};
    }

    render() {
        const { classes } = this.props;
        const { sideNavOpen , ...props} = this.props;
        return (
            <div className={classNames(classes.content, classes[`content-right`], {
                [classes.contentShift]: this.props.sideNavOpen,
                [classes[`contentShift-right`]]: this.props.sideNavOpen,
              })}>

                <Home {...props} />
            </div>
        )

    }

} 

export default withStyles(styles, { withTheme: true })(AppBody);