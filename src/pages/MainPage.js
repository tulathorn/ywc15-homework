import React from 'react';
import { withState } from 'recompose'

import DataTable from './ProgrammingPage'

import '../static/boostrap/bootstrap.min.css'

const MainPage = ({ showData, isShowData }) => (
  <div>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>YWC15 SEMI-FINAL Round</h1>
          <h3>ประกาศผลผู้มีสิทธ์สัมภาทย์</h3>
          <p>
            <br />การสัมภาษณ์จะจัดขึ้นในวันที่ <u>26 พฤศจิกายน 2560 ณ อาคาร ซี.พี.ทาวเวอร์ 1 (สีลม)</u>
            <br />ซึ่งจะแบ่งออกเป็น 2 รอบ คือ <u>รอบช่วงเช้าตั้งแต่เวลา 9.00 น. ถึง 12.00 น.</u>
            และ <u>รอบช่วงบ่ายตั้งแต่เวลา 13.00 น. ถึง 18.00 น.</u>
          </p>
        </div>
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">ตรวจสอบรายชื่อผู้สมัคร</h4>
              <h6 className="card-subtitle mb-2 text-muted">เลือกสาขาที่ผู้สมัครได้เลือกไว้</h6>
              <button 
                type="button" 
                className="btn btn-primary" 
                onClick={e => isShowData({ show: true, major: 'content' })}>
                web content
              </button>
              <button 
                type="button" 
                className="btn btn-secondary" 
                onClick={e => isShowData({ show: true, major: 'design' })}>
                web design
              </button>
              <button 
                type="button" 
                className="btn btn-success" 
                onClick={e => isShowData({ show: true, major: 'marketing' })}>
                web marketing
              </button>
              <button 
                type="button" 
                className="btn btn-info" 
                onClick={e => isShowData({ show: true, major: 'programming' })}>
                web programming
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <DataTable show={showData.show} major={showData.major} />
  </div>
)

export default withState('showData', 'isShowData', { show: false, major: null })(MainPage)