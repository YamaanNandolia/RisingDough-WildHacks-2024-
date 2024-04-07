import Doughnut from './Donut';
import React from 'react';
import { ListGroupItem, ListGroup, Row, Col } from "reactstrap";
import { CreditCardIcon } from '@heroicons/react/24/outline';
import { UploadForm } from './uploadForm';

export default function Page() {

  return (
    <main className='grid grid-cols-1 md:grid-cols-2 gap-6'>
      <div className="md:col-span-1 gap-6 flex flex-col">
        <div className="flex gap-6 rounded-lg bg-gray-100 px-10 py-5 md:px-20" >
          <Doughnut />
        </div>
        <div className="flex gap-6 rounded-lg bg-gray-100 px-10 py-5 md:px-20" >
        <h1 className="text-2xl text-black-800 md:text-3xl text-bold text-center">Upload</h1>
          <UploadForm />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center rounded-lg bg-gray-100 px-10 py-10 md:w-4/5 md:px-20">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl text-black-800 md:text-3xl text-bold text-center">Connected Accounts</h1>
          <ListGroup className=" list my--3" flush>
            <ListGroupItem className=" px-0">
              <Row className="flex flex-row align-items-center items-center justify-center">
                <Col className=" col-auto px-4">
                  <CreditCardIcon className=" w-6" />
                </Col>
                <div className=" col px-4 py-2">
                  <small>Bank:</small>
                  <h5 className=" mb-0 font-bold">Chase</h5>
                </div>
                <div className=" col px-4 py-2">
                  <small>Balance:</small>
                  <h5 className=" mb-0 font-bold">2500</h5>
                </div>
                <div className=" col px-4 py-2">
                  <small>% of Total:</small>
                  <h5 className=" mb-0 font-bold">50%</h5>
                </div>
              </Row>
            </ListGroupItem>
            <ListGroupItem className=" px-0">
              <Row className="flex flex-row align-items-center items-center justify-center">
                <Col className=" col-auto px-4">
                  <CreditCardIcon className=" w-6" />
                </Col>
                <div className=" col px-4 py-2">
                  <small>Bank:</small>
                  <h5 className=" mb-0 font-bold">Capital One</h5>
                </div>
                <div className=" col px-4 py-2">
                  <small>Balance:</small>
                  <h5 className=" mb-0 font-bold">1250</h5>
                </div>
                <div className=" col px-4 py-2">
                  <small>% of Total:</small>
                  <h5 className=" mb-0 font-bold">25%</h5>
                </div>
              </Row>
            </ListGroupItem>
            <ListGroupItem className=" px-0">
              <Row className="flex flex-row align-items-center items-center justify-center">
                <Col className=" col-auto px-4">
                  <CreditCardIcon className=" w-6" />
                </Col>
                <div className=" col px-4 py-2">
                  <small>Country:</small>
                  <h5 className=" mb-0 font-bold">Amex</h5>
                </div>
                <div className=" col px-4 py-2">
                  <small>Balance:</small>
                  <h5 className=" mb-0 font-bold">1250</h5>
                </div>
                <div className=" col px-4 py-2">
                  <small>% of Total:</small>
                  <h5 className=" mb-0 font-bold">25%</h5>
                </div>
              </Row>
            </ListGroupItem>
          </ListGroup>
        </div>

      </div>

    </main>
  );
}