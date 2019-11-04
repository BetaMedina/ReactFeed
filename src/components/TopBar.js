import React, { Component } from 'react'
import '../Style/TopaBar.css'
import { Grid, Row, Col } from 'react-flexbox-grid';

class TopBar extends Component {
  state = {}
  render() {
    return (
      <Row>
        <Col sm={12} md={12} lg={12}>
          <nav className="topBar" >
            <h3 >Facebook</h3>
          </nav>
        </Col>
      </Row>
    )
  }
}

export default TopBar