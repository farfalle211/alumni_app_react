// import React from 'react'
// import Resource from '../components/Resource'
// import axios from 'axios'
// import ResourceCard from '../components/ResourceCard'
// import Card from '../components/Card/Card'

// class Resources extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       resources: []
//     }
//     // this.resources = this.resources.bind(this)
//     // axios.get("/api/resources")
//     //   .then(res => {
//     //     const resources = res.data;
//     //     console.log(res.data)
//     //     this.setState({ resources });
//     //   })
//   }

//   componentDidMount() {
//     axios.get("/api/resources")
//       .then(res => {
//         const resources = res.data;
//         console.log(res.data)
//         this.setState({ resources });
//       }) 
//   }

//   render() {
//     // const resourceComponents = this.resources.map(pen => <Resource key={pen.id} resource={pen} />)
//     return (
//       <div>
//         <h1>Hello</h1>
//         <Card />
//         <Card />
//         <Card />
//         <Card />
//         <Card />
//         <Card />
        
//       </div>
//     )
//   }
// }
// export default Resources

//   // <Resource />
//    // <ResourceCard />

import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";

import Card from "components/Card/Card.jsx";
import { thArray, tdArray } from "variables/Variables.jsx";

class Resources extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Striped Table with Hover"
                category="Here is a subtitle for this table"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        {thArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {tdArray.map((prop, key) => {
                        return (
                          <tr key={key}>
                            {prop.map((prop, key) => {
                              return <td key={key}>{prop}</td>;
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                }
              />
            </Col>

            <Col md={12}>
              <Card
                plain
                title="Striped Table with Hover"
                category="Here is a subtitle for this table"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table hover>
                    <thead>
                      <tr>
                        {thArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {tdArray.map((prop, key) => {
                        return (
                          <tr key={key}>
                            {prop.map((prop, key) => {
                              return <td key={key}>{prop}</td>;
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Resources;
