import React from 'react';

import classes from './Testimonials.css';
import Aux from '../../hoc/Auxliary';

import feature6 from '../../asstes/images/feature6.jpg'


const testimonials = (props) => (
    <Aux>
        <section className={[classes.sectionpadding100, "south-testimonials-area"]}>
            <div className="container">
                <div>
                    <div className="row">
                        <div className="col-12">
                            <div className={[classes.sectionheading, "wow fadeInUp"].join(' ')} data-wow-delay="250ms">
                                <h2>Client testimonials</h2>
                                <p>Suspendisse dictum enim sit amet libero malesuada feugiat.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className={[classes.testimonialsslides, classes.owlcarousel, "wow fadeInUp"].join(' ')} data-wow-delay="500ms">


                                <div className={[classes.singletestimonialslide, "text-center"].join(' ')} >
                                    <h5>Perfect Home for me</h5>
                                    <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit amet tellus
                                        blandit. Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et
                                        tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mat tis effic
                                iturut magna.</p>

                                    <div className={classes.testimonialauthorinfo} >
                                        <img src={feature6} alt="" />
                                        <p>Daiane Smith, <span>Customer</span></p>
                                    </div>
                                </div>


                                <div className={[classes.singletestimonialslide, "text-center"].join(' ')} >
                                    <h5>Perfect Home for me</h5>
                                    <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit amet tellus
                                        blandit. Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et
                                        tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mat tis effic
                                iturut magna.</p>

                                    <div className={classes.testimonialauthorinfo} >
                                        <img src={feature6} alt="" />
                                        <p>Daiane Smith, <span>Customer</span></p>
                                    </div>
                                </div>


                                <div className={[classes.singletestimonialslide, "text-center"].join(' ')} >
                                    <h5>Perfect Home for me</h5>
                                    <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit amet tellus
                                        blandit. Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et
                                        tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mat tis effic
                                iturut magna.</p>

                                    <div className={classes.testimonialauthorinfo}>
                                        <img src={feature6} alt="" />
                                        <p>Daiane Smith, <span>Customer</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    </Aux>
);
export default testimonials;
