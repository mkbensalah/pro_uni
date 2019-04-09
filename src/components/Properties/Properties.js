import React from 'react';

import classes from './Properties.css';
import Aux from '../../hoc/Auxliary';
import nw from '../../asstes/images/new.png'
import bath from '../../asstes/images/bathtub.png'
import garage from '../../asstes/images/garage.png'
import space from '../../asstes/images/space.png'
import feature1 from '../../asstes/images/feature1.jpg'
import feature2 from '../../asstes/images/feature2.jpg'
import feature3 from '../../asstes/images/feature3.jpg'
import feature4 from '../../asstes/images/feature4.jpg'
import feature5 from '../../asstes/images/feature5.jpg'
import feature6 from '../../asstes/images/feature6.jpg'
import location from '../../asstes/images/location.png'

const properties = (props) => (
    <Aux>
        <section className={[classes.sectionpadding10050, "featured-properties-area"].join(' ')}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className={[classes.sectionheading, "wow", "fadeInUp"].join(' ')}>
                            <h2>Featured Properties</h2>
                            <p>Suspendisse dictum enim sit amet libero malesuada feugiat.</p>
                        </div>
                    </div>
                </div>

                <div className="row">


                    <div className="col-12 col-md-6 col-xl-4">
                        <div className={[classes.singlefeaturedproperty, classes.mb50, "wow fadeInUp"].join(' ')} data-wow-delay="100ms">

                            <div className={classes.propertythumb}>
                                <img src={feature1} alt="" />

                                <div className={classes.tag}>
                                    <span>For Sale</span>
                                </div>
                                <div className={classes.listprice}>
                                    <p>$945 679</p>
                                </div>
                            </div>
                            <div className={classes.propertycontent}>
                                <h5>Villa in Los Angeles</h5>
                                <p className={classes.location}><img src={location} alt="" />Upper Road 3411, no.34 CA</p>
                                <p>Integer nec bibendum lacus. Suspendisse dictum enim sit amet libero malesuada.</p>
                                <div className={[classes.propertymetadata, classes.justifycontentbetween, "d-flex align-items-end"].join(' ')}>
                                    <div className="new-tag">
                                        <img src={nw} alt="" />
                                    </div>
                                    <div className="bathroom">
                                        <img src={bath} alt="" />
                                        <span>2</span>
                                    </div>
                                    <div className="garage">
                                        <img src={garage} alt="" />
                                        <span>2</span>
                                    </div>
                                    <div className="space">
                                        <img src={space} alt="" />
                                        <span>120 sq ft</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-12 col-md-6 col-xl-4">
                        <div className={[classes.singlefeaturedproperty, classes.mb50, "wow fadeInUp"].join(' ')} data-wow-delay="200ms">
                            <div className={classes.propertythumb}>
                                <img src={feature2} alt="" />

                                <div className={classes.tag}>
                                    <span>For Sale</span>
                                </div>
                                <div className={classes.listprice}>
                                    <p>$945 679</p>
                                </div>
                            </div>

                            <div className={classes.propertycontent}>
                                <h5>Town House in Los Angeles</h5>
                                <p className={classes.location}><img src={location} alt="" />Upper Road 3411, no.34 CA</p>
                                <p>Integer nec bibendum lacus. Suspendisse dictum enim sit amet libero malesuada.</p>
                                <div className={[classes.propertymetadata, classes.justifycontentbetween, "d-flex align-items-end"].join(' ')}>
                                    <div className="new-tag">
                                        <img src={nw} alt="" />
                                    </div>
                                    <div className="bathroom">
                                        <img src={bath} alt="" />
                                        <span>2</span>
                                    </div>
                                    <div className="garage">
                                        <img src={garage} alt="" />
                                        <span>2</span>
                                    </div>
                                    <div className="space">
                                        <img src={space} alt="" />
                                        <span>120 sq ft</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-xl-4">
                        <div className={[classes.singlefeaturedproperty, classes.mb50, "wow fadeInUp"].join(' ')} data-wow-delay="300ms">

                            <div className={classes.propertythumb}>
                                <img src={feature3} alt="" />

                                <div className={classes.tag}>
                                    <span>For Sale</span>
                                </div>
                                <div className={classes.listprice}>
                                    <p>$945 679</p>
                                </div>
                            </div>

                            <div className={classes.propertycontent}>
                                <h5>Town House in Los Angeles</h5>
                                <p className={classes.location}><img src={location} alt="" />Upper Road 3411, no.34 CA</p>
                                <p>Integer nec bibendum lacus. Suspendisse dictum enim sit amet libero malesuada.</p>
                                <div className="property-meta-data d-flex align-items-end justify-content-between">
                                    <div className="new-tag">
                                        <img src={nw} alt="" />
                                    </div>
                                    <div className="bathroom">
                                        <img src={bath} alt="" />
                                        <span>2</span>
                                    </div>
                                    <div className="garage">
                                        <img src={garage} alt="" />
                                        <span>2</span>
                                    </div>
                                    <div className="space">
                                        <img src={space} alt="" />
                                        <span>120 sq ft</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-12 col-md-6 col-xl-4">
                        <div className={[classes.singlefeaturedproperty, classes.mb50, "wow fadeInUp"].join(' ')} data-wow-delay="400ms">

                            <div className={classes.propertythumb}>
                                <img src={feature4} alt="" />

                                <div className={classes.tag}>
                                    <span>For Sale</span>
                                </div>
                                <div className={classes.listprice}>
                                    <p>$945 679</p>
                                </div>
                            </div>

                            <div className={classes.propertycontent}>
                                <h5>Villa in Los Angeles</h5>
                                <p className={classes.location}><img src={location} alt="" />Upper Road 3411, no.34 CA</p>
                                <p>Integer nec bibendum lacus. Suspendisse dictum enim sit amet libero malesuada.</p>
                                <div className={[classes.propertymetadata, classes.justifycontentbetween, "d-flex align-items-end"].join(' ')}>
                                    <div className="new-tag">
                                        <img src={nw} alt="" />
                                    </div>
                                    <div className="bathroom">
                                        <img src={bath} alt="" />
                                        <span>2</span>
                                    </div>
                                    <div className="garage">
                                        <img src={garage} alt="" />
                                        <span>2</span>
                                    </div>
                                    <div className="space">
                                        <img src={space} alt="" />
                                        <span>120 sq ft</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-12 col-md-6 col-xl-4">
                        <div className={[classes.singlefeaturedproperty, classes.mb50, "wow fadeInUp"].join(' ')} data-wow-delay="500ms">

                            <div className={classes.propertythumb}>
                                <img src={feature5} alt="" />

                                <div className={classes.tag}>
                                    <span>For Sale</span>
                                </div>
                                <div className={classes.listprice}>
                                    <p>$945 679</p>
                                </div>
                            </div>

                            <div className={classes.propertycontent}>
                                <h5>Town House in Los Angeles</h5>
                                <p className={classes.location}><img src={location} alt="" />Upper Road 3411, no.34 CA</p>
                                <p>Integer nec bibendum lacus. Suspendisse dictum enim sit amet libero malesuada.</p>
                                <div className={[classes.propertymetadata, classes.justifycontentbetween, "d-flex align-items-end"].join(' ')}>
                                    <div className="new-tag">
                                        <img src={nw} alt="" />
                                    </div>
                                    <div className="bathroom">
                                        <img src={bath} alt="" />
                                        <span>2</span>
                                    </div>
                                    <div className="garage">
                                        <img src={garage} alt="" />
                                        <span>2</span>
                                    </div>
                                    <div className="space">
                                        <img src={space} alt="" />
                                        <span>120 sq ft</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-12 col-md-6 col-xl-4">
                        <div className={[classes.singlefeaturedproperty, classes.mb50, "wow fadeInUp"].join(' ')} data-wow-delay="400ms">

                            <div className={classes.propertythumb}>
                                <img src={feature6} alt="" />

                                <div className={classes.tag}>
                                    <span>For Sale</span>
                                </div>
                                <div className={classes.listprice}>
                                    <p>$945 679</p>
                                </div>
                            </div>

                            <div className={classes.propertycontent}>
                                <h5>Town House in Los Angeles</h5>
                                <p className={classes.location}><img src={location} alt="" />Upper Road 3411, no.34 CA</p>
                                <p>Integer nec bibendum lacus. Suspendisse dictum enim sit amet libero malesuada.</p>
                                <div className={[classes.propertymetadata, classes.justifycontentbetween, "d-flex align-items-end"].join(' ')}>
                                    <div className="new-tag">
                                        <img src={nw} alt="" />
                                    </div>
                                    <div className="bathroom">
                                        <img src={bath} alt="" />
                                        <span>2</span>
                                    </div>
                                    <div className="garage">
                                        <img src={garage} alt="" />
                                        <span>2</span>
                                    </div>
                                    <div className="space">
                                        <img src={space} alt="" />
                                        <span>120 sq ft</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <section className={[classes.calltoactionarea, classes.bgfixed, classes.bgoverlayblack].join(' ')}>
        <div className="container h-100">
            <div className="row align-items-center h-100">
                <div className="col-12">
                    <div className={[classes.ctacontent, "text-center"].join(' ')}>
                        <h2 className="wow fadeInUp" data-wow-delay="300ms">Are you looking for a place to rent?</h2>
                        <h6 className="wow fadeInUp" data-wow-delay="400ms">Suspendisse dictum enim sit amet libero
                            malesuada feugiat.</h6>
                        <a href="index.html" className={["btn", classes.southbtn, classes.mt50, "wow fadeInUp"].join(' ')}  data-wow-delay="500ms">Search</a>
                    </div>
                </div>
            </div>
        </div>
    </section> 

    
    </Aux>
);
export default properties;
