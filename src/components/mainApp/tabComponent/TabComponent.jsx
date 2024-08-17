import React from 'react'
import AddRecords from './AddRecords'
import Categories from './Categories'
import Dashboard from './Dashboard'
import UpdateRecords from './UpdateRecords'
import ProductsComponent from './ProductsComponent'
import SellComponent from './SellComponent'
import PurchaseComponent from './PurchaseComponent'


function TabComponent() {
    return (
            <div className="d-flex pt-0 ">
                <div className=" bg-dark ">
                    <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <a className="nav-link active  btn-outline-warning rounded" id="v-pills-dashboard-tab" data-toggle="pill" href="#v-pills-dashboard" role="tab" aria-controls="v-pills-dashboard" aria-selected="true" >Dashboard</a>
                        <a className="nav-link  btn-outline-warning rounded" id="v-pills-addrecords-tab" data-toggle="pill" href="#v-pills-addrecords" role="tab" aria-controls="v-pills-addrecords" aria-selected="false">Add Records</a>
                        {/* <a className="nav-link  btn-outline-warning rounded" id="v-pills-updaterecords-tab" data-toggle="pill" href="#v-pills-updaterecords" role="tab" aria-controls="v-pills-updaterecords" aria-selected="false">Update Records</a> */}
                        <a className="nav-link  btn-outline-warning rounded" id="v-pills-categories-tab" data-toggle="pill" href="#v-pills-categories" role="tab" aria-controls="v-pills-categories" aria-selected="false">Categories</a>
                        <a className="nav-link btn-outline-warning rounded" id="v-pills-products-tab" data-toggle="pill" href="#v-pills-products" role="tab" aria-controls="v-pills-products" aria-selected="false">Products</a>
                        {/* <a className="nav-link btn-outline-warning rounded" id="v-pills-inventory-tab" data-toggle="pill" href="#v-pills-inventory" role="tab" aria-controls="v-pills-inventory" aria-selected="false">Inventory</a> */}
                        {/* <a className="nav-link btn-outline-warning rounded" id="v-pills-sales-tab" data-toggle="pill" href="#v-pills-sales" role="tab" aria-controls="v-pills-sales" aria-selected="false">Sales</a> */}
                        <a className="nav-link btn-outline-warning rounded" id="v-pills-purchase-tab" data-toggle="pill" href="#v-pills-purchase" role="tab" aria-controls="v-pills-purchase" aria-selected="false">Purchase</a>
                    </div>
                </div>
                <div className="col-10">
                    <div className="tab-content" id="v-pills-tabContent">
                        <div className="tab-pane fade show active" id="v-pills-dashboard" role="tabpanel" aria-labelledby="v-pills-dashboard-tab"><Dashboard /></div>
                        <div className="tab-pane fade" id="v-pills-addrecords" role="tabpanel" aria-labelledby="v-pills-addrecords-tab"><AddRecords /></div>
                        <div className="tab-pane fade" id="v-pills-updaterecords" role="tabpanel" aria-labelledby="v-pills-updaterecords-tab"><UpdateRecords /></div>
                        <div className="tab-pane fade" id="v-pills-categories" role="tabpanel" aria-labelledby="v-pills-categories-tab"><Categories /></div>
                        <div className="tab-pane fade" id="v-pills-products" role="tabpanel" aria-labelledby="v-pills-products-tab"><ProductsComponent /></div>
                        <div className="tab-pane fade" id="v-pills-inventory" role="tabpanel" aria-labelledby="v-pills-inventory-tab">...</div>
                        <div className="tab-pane fade" id="v-pills-sales" role="tabpanel" aria-labelledby="v-pills-sales-tab"><SellComponent /></div>
                        <div className="tab-pane fade" id="v-pills-purchase" role="tabpanel" aria-labelledby="v-pills-purchase-tab"><PurchaseComponent /></div>
                        <div className="tab-pane fade" id="v-pills-report" role="tabpanel" aria-labelledby="v-pills-report-tab">...</div>
                    </div>
                </div>
            </div>
        
    )
}

export default TabComponent