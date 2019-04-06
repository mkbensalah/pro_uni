import React, { Component } from 'react';


import Aux from '../../hoc/Auxliary';
import classes from './FirstPage.css'

const FirstPag = [classes.FirstPage1, classes.FirstPage2, classes.FirstPage3];
let cpte = 0;
class FirstPage extends Component {
    constructor(props) {
        super(props)
        this.interval = null;
        

    }



    state = {
        
        classCh1: [
            [
                [FirstPag[0], classes.Open],
                [classes.heroslidescontent, classes.Open1],
                [classes.da, classes.Open1]
            ],
            [
                [FirstPag[1], classes.Close],
                [classes.heroslidescontent, classes.Close2],
                [classes.da, classes.Close2]
            ],
            [
                [FirstPag[2], classes.Close],
                [classes.heroslidescontent, classes.Close2],
                [classes.da, classes.Close2]
            ]
        ]
    }

    componentDidMount() {
        this.startCounter();
    }


    startCounter() {

        if (true) {

            this.interval = setInterval(() => {




                const new1 = [FirstPag[cpte], classes.Close];
                const new2 = [classes.heroslidescontent, classes.Close2];
                const new3 = [classes.da, classes.Close2];
                let upadated1 = [...this.state.classCh1];
                
                


                upadated1[cpte][0] = new1;
                upadated1[cpte][1]  = new2; 
                upadated1[cpte][2]  = new3;

                cpte++;
                cpte = cpte % 3;

                const old1 = [FirstPag[cpte], classes.Open];
                const old2 = [classes.heroslidescontent, classes.Open1];
                const old3 = [classes.da, classes.Open1];


                upadated1[cpte][0] = old1;
                upadated1[cpte][1] = old2;
                upadated1[cpte][2] = old3;
               

                this.setState({ classCh1: upadated1})

               
               

            }, 3000);

        } else {

            clearInterval(this.interval);
        }
    }




    render() {
   
        return (
            <Aux>
               

                    <div className={this.state.classCh1[0][0].join(' ')}>
                        <div className="container h-100">
                            <div className="row h-100 align-items-center">
                                <div className="col-12">
                                    <div className={this.state.classCh1[0][1].join(' ')}>
                                        <h2 className={this.state.classCh1[0][2].join(' ')}>Find your home</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={this.state.classCh1[1][0].join(' ')}>
                    <div className="container h-100">
                        <div className="row h-100 align-items-center">
                            <div className="col-12">
                                <div className={this.state.classCh1[1][1].join(' ')}>
                                    <h2 className={this.state.classCh1[1][2].join(' ')}>Find your dream house</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                    <div className={this.state.classCh1[2][0].join(' ')}>
                        <div className="container h-100">
                            <div className="row h-100 align-items-center">
                                <div className="col-12">
                                    <div className={this.state.classCh1[2][1].join(' ')}>
                                        <h2 className={this.state.classCh1[2][2].join(' ')}>Find your perfect house    </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

               
              
            </Aux>
        );
    }
}

export default FirstPage;
