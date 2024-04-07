import Doughnut from './Donut';
import React from 'react';
import { ListGroupItem, ListGroup, Row, Col } from "reactstrap";
import { CreditCardIcon } from '@heroicons/react/24/outline';

export default function Page() {

  return (
    <main className='flex gap-6'>
      <div className="flex gap-6 rounded-lg bg-gray-50 px-10 py-5 md:w-2/5 md:px-20" >
        <Doughnut />
      </div>
      <div className="flex gap-6 rounded-lg bg-gray-50 px-10 py-5 md:w-3/5 md:px-20">
        <ListGroup className=" list my--3" flush>
          <ListGroupItem className=" px-0">
            <Row className="flex flex-row align-items-center">
              <Col className=" col-auto">
                <CreditCardIcon className=" w-6" />
              </Col>
              <div className=" col">
                <small>Country:</small>
                <h5 className=" mb-0">United States</h5>
              </div>
              <div className=" col">
                <small>Visits:</small>
                <h5 className=" mb-0">2500</h5>
              </div>
              <div className=" col">
                <small>Bounce:</small>
                <h5 className=" mb-0">30%</h5>
              </div>
            </Row>
          </ListGroupItem>
          <ListGroupItem className=" px-0">
            <Row className="flex flex-row align-items-center">
              <Col className=" col-auto">
                <CreditCardIcon className=" w-6" />
              </Col>
              <div className=" col">
                <small>Country:</small>
                <h5 className=" mb-0">Germany</h5>
              </div>
              <div className=" col">
                <small>Visits:</small>
                <h5 className=" mb-0">2500</h5>
              </div>
              <div className=" col">
                <small>Bounce:</small>
                <h5 className=" mb-0">30%</h5>
              </div>
            </Row>
          </ListGroupItem>
          <ListGroupItem className=" px-0">
            <Row className="flex flex-row align-items-center">
              <Col className=" col-auto">
                <CreditCardIcon className=" w-6" />
              </Col>
              <div className=" col">
                <small>Country:</small>
                <h5 className=" mb-0">Great Britain</h5>
              </div>
              <div className=" col">
                <small>Visits:</small>
                <h5 className=" mb-0">2500</h5>
              </div>
              <div className=" col">
                <small>Bounce:</small>
                <h5 className=" mb-0">30%</h5>
              </div>
            </Row>
          </ListGroupItem>
        </ListGroup>

      </div>

    </main>
  );
}