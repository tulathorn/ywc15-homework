import React from 'react';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import ReactTable from "react-table";
import "react-table/react-table.css";

export const query = gql`
  query {
    personInMarketing {
      interviewRef
      firstName
      lastName
    }
  }
`

export const ProgrammingPage = ({data}) => {
  if(data.loading){
    return <div>Loading...</div>
  }
  return 
  <div>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>YWC15 SEMI-FINAL Round</h1>
          <div className="col-6">
            <h5>สาขา Programming</h5>
          </div>
        </div>
        <div className="col-12">
          <ReactTable
            columns={[
              {
                Header: "รายชื่อผู้สมัคร",
                columns: [
                  {
                    Header: "InterviewRef",
                    // accessor: "firstName"
                  },
                  {
                    Header: "ชื่อจริง",
                    // accessor: "lastName"
                  },
                  {
                    Header: "นามสกุล",
                    // accessor: "lastName"
                  }
                ]
              }
            ]}
            defaultPageSize={10}
            className="-striped -highlight"
          />
        </div>
      </div>
    </div>
  </div>
}

export default gql(query)(ProgrammingPage);