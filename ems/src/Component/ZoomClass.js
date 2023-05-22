import React from "react";
import "./dashboard.css";
// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import {
  FaRegEdit,
  FaRegUserCircle,
  FaPlus,
  FaList,
  FaEdit,
} from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import SidebarMenu from "./SidebarMenu";
import { Row, Col } from "react-bootstrap/";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function ZoomClass() {
  const [startDate, setStartDate] = useState(new Date());

  let handleColor = (time) => {
    return time.getHours() > 12 ? "text-success" : "text-error";
  };
  return (
    <>
      <SidebarMenu>
        <div className="NavButton row">
          <button class="button-8 col-2" role="button">
            Live Course
          </button>
          &nbsp;
          <button class="button-8 col-2">Zoom Meeting</button>&nbsp;
          <button class="button-8 col-2">Zoom Instant Meeting</button>&nbsp;
          <button class="button-8 col-2">Gmeet Live</button>&nbsp;
          <FaRegUserCircle
            class="col-1"
            color="#ffffff"
            textAlign="right"
            marginLeft="250px"
            fontSize="2.2em"
          />
          <h5
            class="col-2"
            style={{ Color: "#ffffff", fontFamily: "'Montserrat', sans-serif" }}
          >
            User Name
          </h5>
        </div>
        <div className="list">
          <Row>
            <Col>
              <h2>
                {" "}
                <FaRegEdit /> &nbsp; Online Class
              </h2>
            </Col>
          </Row>
        </div>

        <div class="row">
          <nav>
            <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
              <a
                class="nav-item nav-link active"
                id="nav-home-tab"
                data-toggle="tab"
                href="#nav-home"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
                <h3>
                  {" "}
                  <FaList /> &nbsp; Zoom class
                </h3>
              </a>

              <a
                class="nav-item nav-link"
                id="nav-profile-tab"
                data-toggle="tab"
                href="#nav-profile"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                <h3>
                  {" "}
                  <FaPlus /> &nbsp; Schedule New
                </h3>
              </a>
            </div>
          </nav>

          <div class="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
            <div
              class="tab-pane active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <button type="button" class="btn btn-secondary px-md-5">
                Copy
              </button>
              <button type="button" class="btn btn-secondary px-md-5">
                CSV
              </button>
              <button type="button" class="btn btn-secondary px-md-5">
                Excel
              </button>
              <button type="button" class="btn btn-secondary px-md-5">
                PDF
              </button>
              <button type="button" class="btn btn-secondary px-md-5">
                Print
              </button>
              <div className="float-end mt-3 w-25">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                />
              </div>
              <MDBTable align="middle">
                <MDBTableHead>
                  <tr>
                    <th scope="col">Sl No.</th>
                    <th scope="col">Topic</th>
                    <th scope="col">CLass Date</th>
                    <th scope="col">Join URL</th>
                    <th scope="col">Passcode</th>
                    <th scope="col">Actions</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  <tr>
                    <td>
                      <div class="d-flex align-items-center">
                        <p class="fw-bold mb-1">01.</p>
                      </div>
                    </td>
                    <td>
                      <p class="fw-normal mb-1">Demo</p>
                    </td>
                    <td>
                      <span class="badge badge-success rounded-pill d-inline">
                        today
                      </span>
                    </td>
                    <td>DEMO</td>
                    <td>DEMO</td>
                    <td>
                      <FaEdit />
                      <MdDeleteOutline />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex align-items-center">
                        <p class="fw-bold mb-1">01.</p>
                      </div>
                    </td>
                    <td>
                      <p class="fw-normal mb-1">Demo</p>
                    </td>
                    <td>
                      <span class="badge badge-success rounded-pill d-inline">
                        today
                      </span>
                    </td>
                    <td>DEMO</td>
                    <td>DEMO</td>
                    <td>
                      <FaEdit />
                      <MdDeleteOutline />
                    </td>
                  </tr>
                </MDBTableBody>
              </MDBTable>
              <nav aria-label="Page navigation example">
                <ul class="pagination">
                  <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                      <span class="sr-only">Previous</span>
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                      <span class="sr-only">Next</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div
              class="tab-pane"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              <form>
                <div class="form-group w-25">
                  <label for="exampleFormControlSelect1">Class Tittle</label>
                  <select class="form-control" id="exampleFormControlSelect1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div class="form-group w-25">
                  <label>Class Date & Time</label>
                  <DatePicker
                    showTimeSelect
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    timeClassName={handleColor}
                  />
                </div>
                <label> Host Video </label>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    style={{ lineHeight: 0, width: "14px" }}
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios1"
                    value="option1"
                    checked
                  />
                  <label class="form-check-label" for="exampleRadios1">
                    Enable
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    style={{ lineHeight: 0, width: "14px" }}
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios2"
                    value="option2"
                    checked
                  />
                  <label class="form-check-label" for="exampleRadios2">
                    Disable
                  </label>
                </div>
                <div class="form-group w-25">
                  <label for="exampleFormControlTextarea1">
                    Example textarea
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
              </form>
            </div>
          </div>
        </div>
      </SidebarMenu>
    </>
  );
}

export default ZoomClass;
