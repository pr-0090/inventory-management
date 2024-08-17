import React from 'react'
import Phones from './categories/Phones'
import Computers from './categories/Computers'
import Printers from './categories/Printers'
import Telivision from './categories/Telivision'
import Wearables from './categories/Wearables'
import Appliances from './categories/Appliances'
import Miscellaneous from './categories/Miscellaneous'

function Categories() {
  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <h1>Product Categories</h1>
      </div>
      <div className=" nav bg-dark justify-content-center">
        <div className="nav flex-row nav-pills" id="v-pills-tab" role="tablist" aria-orientation="horizontal">
          <a className="nav-link active text-warning" id="v-pills-phones-tab" data-toggle="pill" href="#v-pills-phones" role="tab" aria-controls="v-pills-phones" aria-selected="true" >Mobile Devices</a>
          <a className="nav-link  text-warning" id="v-pills-computers-tab" data-toggle="pill" href="#v-pills-computers" role="tab" aria-controls="v-pills-computers" aria-selected="false">Laptop Computers Tablets</a>
          <a className="nav-link  text-warning" id="v-pills-printers-tab" data-toggle="pill" href="#v-pills-printers" role="tab" aria-controls="v-pills-printers" aria-selected="false">Printers and Scanners</a>
          <a className="nav-link  text-warning" id="v-pills-telivision-tab" data-toggle="pill" href="#v-pills-telivision" role="tab" aria-controls="v-pills-telivision" aria-selected="false">Television {'&'} Monitors</a>
          <a className="nav-link text-warning" id="v-pills-wearables-tab" data-toggle="pill" href="#v-pills-wearables" role="tab" aria-controls="v-pills-wearables" aria-selected="false">Wearables</a>
          <a className="nav-link text-warning" id="v-pills-appliances-tab" data-toggle="pill" href="#v-pills-appliances" role="tab" aria-controls="v-pills-appliances" aria-selected="false">Appliances</a>
          <a className="nav-link text-warning" id="v-pills-miscellaneous-tab" data-toggle="pill" href="#v-pills-miscellaneous" role="tab" aria-controls="v-pills-miscellaneous" aria-selected="false">Miscellaneous</a>
        </div>
      </div>
      <div className="col-10 d-flex justify-content-center ">
        <div className="tab-content" id="v-pills-tabContent">
          <div className="tab-pane fade show active" id="v-pills-phones" role="tabpanel" aria-labelledby="v-pills-phones-tab"><Phones /></div>
          <div className="tab-pane fade" id="v-pills-computers" role="tabpanel" aria-labelledby="v-pills-computers-tab"><Computers /></div>
          <div className="tab-pane fade" id="v-pills-printers" role="tabpanel" aria-labelledby="v-pills-printers-tab"><Printers /></div>
          <div className="tab-pane fade" id="v-pills-telivision" role="tabpanel" aria-labelledby="v-pills-telivision-tab"><Telivision /></div>
          <div className="tab-pane fade" id="v-pills-wearables" role="tabpanel" aria-labelledby="v-pills-wearables-tab"><Wearables /></div>
          <div className="tab-pane fade" id="v-pills-appliances" role="tabpanel" aria-labelledby="v-pills-appliances-tab"><Appliances /></div>
          <div className="tab-pane fade" id="v-pills-miscellaneous" role="tabpanel" aria-labelledby="v-pills-miscellaneous-tab"><Miscellaneous /></div>
        </div>
      </div>
    </div>
  )
}

export default Categories