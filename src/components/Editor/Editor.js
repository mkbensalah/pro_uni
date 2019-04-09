import React from 'react';

import classes from './Editor.css';
import Aux from '../../hoc/Auxliary';
import prize from '../../asstes/images/prize.png'
import phone from '../../asstes/images/phone-call.png'
import envelope from '../../asstes/images/envelope.png'
import signature from '../../asstes/images/signature.png'
import edito from '../../asstes/images/editor.jpg'

 
const editor = (props) => (
    <Aux>
        <section className={[classes.southeditorarea, "south-editor-area d-flex align-items-center"].join(' ') } >
      
        <div className={classes.editorcontentarea}>
           
            <div className={[classes.sectionheading, "wow fadeInUp"].join(' ')}  data-wow-delay="250ms">
                <img src={prize} alt=""/>
                <h2>jeremy Scott</h2>
                <p>Realtor</p>
            </div>
            <p className="wow fadeInUp" data-wow-delay="500ms">Etiam nec odio vestibulum est mattis effic iturut magna.
                Pellentesque sit amet tellus blandit. Etiam nec odiomattis effic iturut magna. Pellentesque sit am et
                tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mat tis effic iturut magna.
                Curabitur rhoncus auctor eleifend. Fusce venenatis diam urna, eu pharetra arcu varius ac. Etiam cursus
                turpis lectus, id iaculis risus tempor id. Phasellus fringilla nisl sed sem scelerisque, eget aliquam
                magna vehicula.</p>
            <div className={[classes.address, "wow fadeInUp"].join(' ')}  data-wow-delay="750ms">
                <h6><img src={phone} alt=""/> +45 677 8993000 223</h6>
                <h6><img src={envelope} alt=""/> office@template.com</h6>
            </div>
            <div className={[classes.mt50,  "signature wow fadeInUp"].join(' ')} data-wow-delay="1000ms">
                <img src={signature} alt=""/>
            </div>
        </div>

       
        <div className={classes.editorthumbnail}>
            <img src={edito} alt=""/>
        </div>
    </section>    
    </Aux>
);
export default editor;
