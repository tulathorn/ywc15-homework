import React from 'react';

import '../static/boostrap/bootstrap.min.css'

const MainPage = () => (
  <div>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>YWC15 SEMI-FINAL Round</h1>
          <h3>ประกาศผลผู้มีสิทธ์สัมภาทย์</h3>
          <p>
            <br/>การสัมภาษณ์จะจัดขึ้นในวันที่ <u>26 พฤศจิกายน 2560 ณ อาคาร ซี.พี.ทาวเวอร์ 1 (สีลม)</u>
            <br/>ซึ่งจะแบ่งออกเป็น 2 รอบ คือ <u>รอบช่วงเช้าตั้งแต่เวลา 9.00 น. ถึง 12.00 น.</u> 
            และ <u>รอบช่วงบ่ายตั้งแต่เวลา 13.00 น. ถึง 18.00 น.</u> 
          </p>
        </div>
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">ตรวจสอบรายชื่อผู้สมัคร</h4>
              <h6 className="card-subtitle mb-2 text-muted">เลือกสาขาที่ผู้สมัครได้เลือกไว้</h6>
              <button type="button" className="btn btn-primary">web content</button>
              <button type="button" className="btn btn-secondary">web design</button>
              <button type="button" className="btn btn-success">web marketing</button>
              <button type="button" className="btn btn-info">web programing</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default MainPage;