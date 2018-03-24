import React, { Component } from 'react';
import Button from 'material-ui/Button';

class PrintThisComponent extends Component {

    render() {

        return (
            <div>
                <Button className="print" onClick={() => window.print() } >PRINT</Button>
            </div>

        )
    }
}

export default PrintThisComponent;