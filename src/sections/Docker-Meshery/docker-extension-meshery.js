import React, { useState, useEffect } from "react";
import { DockerMesheryWrapper } from "./dockerMeshery.style";
import { Row, Col, Container } from "../../reusecore/Layout";
import { Field, Formik, Form } from "formik";
import Button from "../../reusecore/Button";
import axios from "axios";

const Kubernetes = "./kubernetes-logo.svg";
import layer5_img from "../../assets/images/layer5/layer5-only/svg/layer5-white-no-trim.svg";
const mesheryworkdiagram =
  "../../assets/images/mesherywork-diagram/mesherywork-diagram.svg";
const dockercompose_logo =
  "../../assets/images/dockercompose-logo/dockercompose-logo.png";
const visual_topology =
  "../../assets/images/visual-topology/visual-topology.svg";
const dockerDesktop =
  "../../assets/images/docker-extension/docker-extension-meshery.png";

import { StaticImage } from "gatsby-plugin-image";

const DockerExtensionMeshery = () => {
  const [stepNumber, setStepNumber] = useState(0);

  // Form values
  const [memberFormOne, setMemberFormOne] = useState({});

  const [submit, setSubmit] = useState(false);

  const nextStep = () => {
    if (stepNumber === 0) {
      setSubmit(true);
    }
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (submit) {
      axios.post("https://hook.us1.make.com/gguommoyd14634ur9xs7l37widuoa7e9", {
        memberFormOne,
      });
    }
  }, [submit]);

  const DockerExtFormPage = () => {
    return (
      <Container>
        <Row>
          <h2 className="sectionTitle">
            Develop service mesh-ready apps using Docker Desktop and Meshery
          </h2>
          <p>
            The Docker Extension for Meshery extends Docker Desktop’s position
            as the cloud native developer’s go-to Kubernetes environment with
            easy access to the next layer of cloud native infrastructure:
            service meshes.
          </p>
        </Row>
        <Row>
          <Col md={6} sm={12}>
            <StaticImage
              src={dockerDesktop}
              alt="Meshery Docker Extension"
            />
            <p>Install Meshery Docker Extension and get:</p>

            <Row>
              <Col className="docker-extension-meshery" lg={2}>
                <StaticImage
                  src={dockercompose_logo}
                  alt="Docker Compose Logo"
                  width={250}
                  objectFit="contain"
                />
              </Col>
              <Col lg={10}>
                <div className="feature-title">Service mesh support for your Docker Compose apps</div> {" "}
                <i>
                  Import your Docker Compose apps. Configure and deploy them
                  to Kubernetes and any service mesh.
                </i>
              </Col>
            </Row>
            <Row className="extension-feature">
              <Col lg={10}>
                <div className="feature-title">Visual designer for cloud native applications and infrastructure</div> {" "}
                <i>
                  Early access to the Docker Extension for Meshery that
                  offers a visual topology for designing Docker Compose
                  applications, operating Kubernetes, service meshes, and
                  their workloads.
                </i>
              </Col>
              <Col className="docker-extension-meshery" lg={2}>
                <StaticImage
                  src={visual_topology}
                  alt="Visual Topology"
                  width={150}
                  objectFit="contain"
                />
              </Col>
            </Row>
            <Row className="extension-feature">
              <Col className="docker-extension-meshery" lg={2}>
                <StaticImage
                  src={mesheryworkdiagram}
                  alt="Single-click Istio deployment"
                  width={150}
                  objectFit="contain"
                />
              </Col>
              <Col lg={10}>
                <div className="feature-title">Single-click deployment of any service mesh</div> {" "}
                <i>
                  Support of 10 different service meshes to the fingertips
                  of developers in connection with Docker Desktop’s ability
                  to deliver Kubernetes locally.
                </i>
              </Col>
            </Row>
            <Row className="extension-feature">
              <Col lg={10}>
                <div className="feature-title">Detection of Kubernetes environments</div> {" "}
                <i>
                  Scan your kubeconfigs and select your current Kubernetes environment. Switch from one environment to another one.
                </i>
              </Col>
              <Col className="docker-extension-meshery" lg={2}>
                <StaticImage
                  src={Kubernetes}
                  alt="Kubernetes scan and MeshSync"
                  width={150}
                  objectFit="contain"
                />
              </Col>
            </Row>
            {/* You will also be able to:
            <ul>
              <li>
                Provide early feedback to Docker and Meshery’s product teams.
              </li>
              <li>Receive support and onboarding help from Layer5.</li>
            </ul>
            <p className="uppercase">Let's get you started!</p> */}
          </Col>
          <Col md={6} sm={12}>
            <h3 className="form-title">Learn All Meshery Docker Extension Features</h3>
            <Formik
              initialValues={{
                firstname: "",
                lastname: "",
                email: "",
                occupation: "",
                org: "",
                form: "docker-extension",
              }}
              onSubmit={(values) => {
                setMemberFormOne(values);
                setStepNumber(1);
                nextStep();
              }}
            >
              <Form className="form" method="post">
                <Field
                  type="hidden"
                  id="form"
                  name="form"
                  value="docker-extension"
                />
                <label htmlFor="fname" className="form-name">
                  First Name <span className="required-sign">*</span>
                </label>
                <Field
                  type="text"
                  className="text-field"
                  id="firstname"
                  name="firstname"
                  maxLength="32"
                  pattern="[A-Za-z]{1,32}"
                  required
                />
                <label htmlFor="lname" className="form-name">
                  Last Name <span className="required-sign">*</span>
                </label>
                <Field
                  type="text"
                  className="text-field"
                  id="lastname"
                  name="lastname"
                  maxLength="32"
                  pattern="[A-Za-z]{1,32}"
                  required
                />
                <label htmlFor="email" className="form-name">
                  Email Address <span className="required-sign">*</span>
                </label>
                <Field
                  type="text"
                  className="text-field"
                  id="email"
                  name="email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  required
                />
                <label htmlFor="occupation" className="form-name">
                  Occupation / Title<span className="required-sign">*</span>
                </label>
                <Field
                  type="text"
                  className="text-field"
                  id="occupation"
                  name="occupation"
                  required
                />
                <label htmlFor="org" className="form-name">
                  Organization / Company / School
                  <span className="required-sign">*</span>
                </label>
                <Field
                  type="text"
                  className="text-field"
                  id="org"
                  name="org"
                  required
                />
                <Button
                  secondary
                  type="submit"
                  className="btn"
                  title="Submit"
                />
              </Form>
            </Formik>
          </Col>
        </Row >
      </Container >
    );
  };
  const ThankYou = () => {
    return (
      <Container>
        <div className="black-box">
          <h2>Thank you for your interest in Meshery Docker Extension!</h2>
          <p>
            You will soon receive detailed guidance on the all of the extension's features. {" "}
          </p>
          <p>
            In the meantime, please visit our{" "}
            <a href="https://discuss.layer5.io">community forum</a> or join us
            in our <a href="https://slack.layer5.io">community Slack</a>.
          </p>
          <p className="white">
            - <img className="sign" src={layer5_img} alt="Layer5" /> <i>Team</i>
          </p>
        </div>
      </Container>
    );
  };
  return (
    <DockerMesheryWrapper>
      <div>
        {stepNumber === 0 && <DockerExtFormPage />}
        {stepNumber === 1 && <ThankYou />}
      </div>
    </DockerMesheryWrapper>
  );
};

export default DockerExtensionMeshery;