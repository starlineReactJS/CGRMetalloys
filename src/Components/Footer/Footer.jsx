import React from 'react';
import './footer.css';
import android from "../../Images/android.png";
import ios from "../../Images/ios.png";
import { androidUrl, iosUrl, menuTitleArr, pushMenu } from '../../Config';
import { useSelector } from 'react-redux';
import { footerData } from '../../Config';

export default function Footer() {
    const clientData = useSelector((state) => state.clientDetails);

    return (
        <footer>

            <div className="container adc">
                <div className="row">
                    <div className="col-lg-3 mt-3 align-self-center">
                        <div className="cnt-cover">
                            <h2>
                                <i className="fa fa-phone" />
                                BOOKING NUMBER
                            </h2>
                            <p>
                                <span className="bookingno1" />{clientData[0]?.number1} | <span className="bookingno2" />{clientData[0]?.number2}
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 mt-3 align-self-center">
                        <div className="cnt-cover">
                            <h2>
                                <i className="fa fa-envelope" />
                                E-MAIL ADDRESS
                            </h2>
                            <p className="email1">{clientData[0]?.email1}</p>
                        </div>
                    </div>
                    <div className="col-lg-3 mt-3 align-self-center">
                        <div className="cnt-cover">
                            <h2>ADDRESS</h2>
                            <p className="address1">{clientData[0]?.address1}</p>
                        </div>
                    </div>
                    <div className="col-lg-3 mt-3 align-self-center">
                        <div className="cnt-cover">
                            <h2>AVAILABLE ON</h2>
                            <div className="app-icon">
                                <a href={'https://play.google.com/store/apps/details?id=com.cgrmetalloys'} target="_blank" rel='noreferrer'>
                                    <img src={android} alt='Android' />
                                </a>
                                <a href={'https://apps.apple.com/us/app/cgr-gold/id6695744233'} target="_blank" rel='noreferrer'><img src={ios} alt='Ios' />
                                </a>
                            </div>
                        </div>




                    </div>
                </div>
            </div>


            <div className="footer-cover">

                <div className="header-top-marquee">
                    <div className="container-fluid">

                        <marquee>{clientData?.[0]?.marqueeBottom}</marquee>
                    </div>
                </div>
                <div className="cover-copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="cover-copyright-tittle">
                                    <h6>{footerData?.copyright}</h6>
                                </div>
                                {/* <p className="footer-company-name text-right">
                                    <a className="starline" href={footerData?.companyLink} target="_blank" rel="noreferrer">
                                        {footerData?.companyName} <img src={footerData?.logo} alt="" />
                                    </a>
                                </p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
