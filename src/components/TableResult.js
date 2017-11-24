import React from 'react';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { withState, compose } from 'recompose'

import ReactTable from "react-table";
import "react-table/react-table.css";

export const query = gql`
  query persons($major: String!,$name: String) {
    persons(major: $major,firstName: $name) {
      interviewRef
      firstName
      lastName
    }
  }
`

const table = ({ data }) => data.loading ? <div>Loading.....</div> : (
  <ReactTable
    data={data.persons}
    columns={[
      {
        Header: "รายชื่อผู้สมัคร",
        columns: [
          {
            Header: "InterviewRef",
            accessor: "interviewRef"
          },
          {
            Header: "ชื่อจริง",
            accessor: "firstName"
          },
          {
            Header: "นามสกุล",
            accessor: "lastName"
          }
        ]
      }
    ]}
    defaultPageSize={10}
    className="-striped -highlight"
  />
)

const DataTable = graphql(query, {
  options: ({ filterVal, major }) => ({ variables: { name: filterVal, major: major }})
})(table)

export const ProgrammingPage = ({ show, filterVal, setFilterVal, major }) => {
  if(!show)
    return null

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="col-5">
              <h5>สาขา {major}</h5>
            </div>
            <input onChange={e => setFilterVal(e.target.value)} />
          </div>
          <div className="col-12">
            <DataTable filterVal={filterVal} major={major} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default withState('filterVal', 'setFilterVal', '')(ProgrammingPage)
