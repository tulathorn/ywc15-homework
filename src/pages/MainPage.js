import React from 'react';
import { withState } from 'recompose'

import DataTable from '../components/TableResult'
import HeaderContent from '../components/HeaderContent'

import '../static/boostrap/bootstrap.min.css'
import styled from 'react-emotion'
import {defaultDataIdFromObject} from 'apollo-cache-inmemory'

const MainContainer = styled('div')`
  background-color: #ECEFF1;
`

const CardContainer = styled('div')`
  background-color: #FFFFFF;
`

const Button = styled('button')`
  background-color: #69F0AE;
  padding-left: 50px;
  padding-right: 50px;
  margin: 10px;
`

const MainPage = ({ showData, isShowData }) => (
  <MainContainer>
    <div className="container">
      <div className="row">
        <HeaderContent />
        <div className="col-12">
          <CardContainer className="card">
            <div className="card-body">
              <h4 className="card-title">ตรวจสอบรายชื่อผู้สมัคร</h4>
              <h6 className="card-subtitle mb-2 text-muted">เลือกสาขาที่ผู้สมัครได้เลือกไว้</h6>
              <div className="d-flex justify-content-center">
                <div className="col-12">
                  <Button 
                    type="button" 
                    className="btn" 
                    onClick={e => isShowData({ show: true, major: 'content' })}>
                    web content
                  </Button>
                  <Button 
                    type="button" 
                    className="btn" 
                    onClick={e => isShowData({ show: true, major: 'design' })}>
                    web design
                  </Button>
                  <Button 
                    type="button" 
                    className="btn" 
                    onClick={e => isShowData({ show: true, major: 'marketing' })}>
                    web marketing
                  </Button>
                  <Button 
                    type="button" 
                    className="btn" 
                    onClick={e => isShowData({ show: true, major: 'programming' })}>
                    web programming
                  </Button>
                </div>
              </div>
              <DataTable show={showData.show} major={showData.major} />
            </div>
          </CardContainer>
        </div>
      </div>
    </div>
  </MainContainer>
)

export default withState('showData', 'isShowData', { show: false, major: null })(MainPage)