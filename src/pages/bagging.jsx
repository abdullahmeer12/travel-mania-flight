import Head from "next/head";
import React, { useState } from "react";
import Layout from "../layout/index";
import Table from "react-bootstrap/Table";
import Image from "next/image";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Bagging = () => {
  const [noBanner, setNoBanner] = useState(true);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Head>
        <title>Seat Selection</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Modal show={show} onHide={handleClose} className="bagg-popup">
        <Modal.Header closeButton>
          <Modal.Title>Select Additional Baggage</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Carry more than your free baggage allowance by purchasing in advance
          </p>
          <h6>
            Dubai (DBI) - London (LDN) <span>Thu, 30 May 2024</span>
          </h6>
          <Table >
            <thead>
              <tr> 
                <th>Passengers</th>
                <th>Additional Baggage weight in (Kg)</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr> 
                <td>David</td>
                <td>
                    <div className="qnty_bg">
                        <input type="text" placeholder="Example: 10" />
                        <button className="primary">ADD</button>
                        <p>Please enter the multiples  of 5</p>
                    </div>
                </td>
                <td className="text-center">-</td>
              </tr>

              <tr> 
                <td>David</td>
                <td>
                    <div className="qnty_bg">
                        <input type="text" placeholder="Example: 10" />
                        <button className="primary">ADD</button>
                        <p>Please enter the multiples  of 5</p>
                    </div>
                </td>
                <td className="text-center">-</td>
              </tr>
               
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Continue</Button>
        </Modal.Footer>
      </Modal>
      <Layout noBanner={noBanner}>
        <section className="bagging-sec">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="bagging-sec-inn">
                  <h6>
                    David, Complete your journey with a wide range of world
                    class services,
                  </h6>
                  <h5>Seat Selection</h5>

                  <div className="bagging-sec-table">
                    <div className="table-responsive"> 
                    <Table>
                      <thead>
                        <tr>
                          <th>Dubai (DBI) - London (LDN)</th>
                          <th>DBI - LDN</th>
                          <th>LDN - DBI</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>David</td>
                          <td>19D 8666,0 PKR </td>
                          <td>@No seat selected</td>
                        </tr>
                        <tr>
                          <td>David</td>
                          <td>19D 8666,0 PKR </td>
                          <td>@No seat selected</td>
                        </tr>
                      </tbody>
                    </Table></div>
                    <hr />

                    <div className="table-responsive"> 
                    <Table>
                      <thead>
                        <tr>
                          <th>Dubai (DBI) - London (LDN)</th>
                          <th>DBI - LDN</th>
                          <th>LDN - DBI</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>David</td>
                          <td>19D 8666,0 PKR </td>
                          <td>@No seat selected</td>
                        </tr>
                        <tr>
                          <td>David</td>
                          <td>19D 8666,0 PKR </td>
                          <td>@No seat selected</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                  </div>

                  <h5>Additional Baggage</h5>
                  <div className="addtional-bg-dv">
                    <div className="addtional-bg-img">
                      <Image
                        src={"/images/bag-img.png"}
                        width={325}
                        height={245}
                        alt="img"
                      />
                    </div>
                    <div className="addtional-bg-txt">
                      <h6>Upto 70% off extra baggage</h6>
                      <p>
                        Carry more than your free baggage allowance by
                        purchasing in advance
                      </p>
                      <Link href={""} className="btn10" onClick={handleShow}>
                        Select
                      </Link>
                    </div>
                  </div>

                  <div className="btn-sub">
                    <Link href={"/"} className="btn10">
                      Continue
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default bagging;