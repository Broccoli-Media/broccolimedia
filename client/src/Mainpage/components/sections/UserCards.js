import React from 'react';
import classNames from 'classnames';
// import {  CCarouselItem, CImage, CCarouselCaption } from "@coreui/react";
// Page components
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
// Necessary Components
// import useFetch from "../../utils/UseFetch.js";

const propTypes = { ...SectionTilesProps.types }
const defaultProps = { ...SectionTilesProps.defaults }
const Testimonial = ({ className, topOuterDivider, bottomOuterDivider, topDivider, bottomDivider, hasBgColor, invertColor, pushLeft, ...props
}) => {

    const outerClasses = classNames(
        'usercards section',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );

    const innerClasses = classNames(
        'usercards-inner section-inner',
        // topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
    );

    const tilesClasses = classNames(
        'tiles-wrap',
        pushLeft && 'push-left'
    );

    const sectionHeader = {
        title: '',
        paragraph: '',
    //     title: 'Outstanding users',
    //     paragraph: 'Challenge them, and be the next honoured user',
    };

    // const { data, loading } = useFetch(`/user/allnormal/`);

    // const already = [];
    // function getMax(arr, prop) {
    //     var max;
    //     for (var i = 0; i < arr.length; i++) {
    //         if (arr[i]["Admin"]) continue;
    //         if (max == null || parseInt(arr[i][prop]) > parseInt(max[prop]))
    //             max = arr[i];
    //     }
    //     return max;
    // }

    // const mostFollower = getMax(data, "totalfollowers");
    // const highestLevel = getMax(data, "level");
    // const mostCooper = getMax(data, "collaboratedcompaniesnumber");

    return (
        <section
            {...props}
            className={outerClasses}
        >
            <div className="container">
                <div className={innerClasses}>
                    <SectionHeader data={sectionHeader} className="center-content reveal-from-bottom" />
                    <div className={tilesClasses}>

                        {/* <div className="tiles-item reveal-from-right" >
                            <div className="tiles-item-inner">
                                <CCarouselItem >
                                        <h4>{mostFollower.displayName}</h4>
                                        <CImage className="d-block w-100" src={mostFollower.img} alt={mostFollower.displayName} />
                                        <CCarouselCaption className="d-none d-md-block">
                                            <h5>{mostFollower.livingCity}</h5>
                                            <p>{mostFollower.totalfollowers}</p>
                                        </CCarouselCaption>
                                    </CCarouselItem>
                            </div>
                        </div>

                        <div className="tiles-item reveal-from-right" >
                            <div className="tiles-item-inner">
                                <CCarouselItem >
                                    <h4>{highestLevel.displayName}</h4>
                                    <CImage className="d-block w-100" src={highestLevel.img} alt={highestLevel.displayName} />
                                    <CCarouselCaption className="d-none d-md-block">
                                        <h5>{highestLevel.livingCity}</h5>
                                        <p>{highestLevel.totalfollowers}</p>
                                    </CCarouselCaption>
                                </CCarouselItem>
                            </div>
                        </div>

                        <div className="tiles-item reveal-from-right" >
                            <div className="tiles-item-inner">
                                <CCarouselItem >
                                    <h4>{mostCooper.displayName}</h4>
                                    <CImage className="d-block w-100" src={mostCooper.img} alt={mostCooper.displayName} />
                                    <CCarouselCaption className="d-none d-md-block">
                                        <h5>{mostCooper.livingCity}</h5>
                                        <p>{mostCooper.totalfollowers}</p>
                                    </CCarouselCaption>
                                </CCarouselItem>
                            </div>
                        </div> */}

                    </div>
                </div>
            </div>

        </section>
    );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;