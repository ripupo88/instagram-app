import React from "react";
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBContainer,
} from "mdbreact";

export const HomePage = () => {
    return (
        <MDBContainer>
            <MDBRow style={{ height: "100vh" }}>
                <MDBCol md="4">
                    <MDBCard cascade style={{ width: "400px" }}>
                        <MDBCardImage
                            cascade
                            className="img-fluid"
                            overlay="white-light"
                            hover
                            src="https://www.autoscout24.de/cms-content-assets/2CLn32iVxXvh3hooWvDOD9-2adc576e8ec3848e7aca6091624c3505-vw-polo-gti__1_-1100.JPG"
                        />

                        <h5 className="p-1">Volkswagen Polo TSI 95cv</h5>

                        <div className="rounded-bottom mdb-color lighten-3 pt-3">
                            <ul className="list-unstyled list-inline font-small pl-3">
                                <li className="list-inline-item pr-2 ">
                                    <MDBIcon far icon="calendar-alt" />
                                    <b> 2015</b>
                                </li>

                                <li className="list-inline-item ">
                                    <a href="#!" className="black-text">
                                        <MDBIcon icon="car" /> KM{" "}
                                        <b style={{ fontSize: 15 }}>32.636</b>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};
