import React, { Component } from 'react';


import classes from './RequiredBuilding.css';
import Aux from '../../hoc/Auxliary';



class RequiredBuilding extends Component {

    state = {
        attachedClasses: [[classes.labeltxt], [classes.labeltxt], [classes.labeltxt]],
        lineCla: [[classes.linebox], [classes.linebox], [classes.linebox]]
    }

    focusHandler = (i) => {
        let oldCl = [...this.state.attachedClasses];
        oldCl[i] = [classes.labeltxt, classes.labelactive];
        let oldlin = [...this.state.lineCla];
        oldlin[i] = [classes.linebox, classes.lineboxAc];

        this.setState({ attachedClasses: oldCl, lineCla: oldlin });
    }


    blurHandler = (i) => {
        let oldCl = [...this.state.attachedClasses];
        oldCl[i] = [classes.labeltxt];
        let oldlin = [...this.state.lineCla];
        oldlin[i] = [classes.linebox];
        this.setState({ attachedClasses: oldCl, lineCla: oldlin });
    }

    render() {


        return (
            <Aux>
                <form>
                    <label>
                        <p className={this.state.attachedClasses[0].join(' ')}>ENTER YOUR EMAIL</p>
                        <input type="text" className={classes.input} onFocus={() => this.focusHandler(0)} onBlur={() => this.blurHandler(0)} />
                        <div className={this.state.lineCla[0].join(' ')}>
                            <div className={classes.line}></div>
                        </div>
                    </label>
                    <label>
                        <p className={this.state.attachedClasses[1].join(' ')}>ENTER YOUR NAME</p>
                        <input type="text" className={classes.input} onFocus={() => this.focusHandler(1)} onBlur={() => this.blurHandler(1)} />
                        <div className={this.state.lineCla[1].join(' ')}>
                            <div className={classes.line}></div>
                        </div>
                    </label>
                    <label>
                        <p className={this.state.attachedClasses[2].join(' ')} >ENTER YOUR PASSWORD</p>
                        <input type="text" className={classes.input} onFocus={() => this.focusHandler(2)} onBlur={() => this.blurHandler(2)} />
                        <div className={this.state.lineCla[2].join(' ')}>
                            <div className={classes.line}></div>
                        </div>
                    </label>
                    <button type="submit">submit</button>
                </form>
            </Aux>
        );

    }
}

export default RequiredBuilding;
