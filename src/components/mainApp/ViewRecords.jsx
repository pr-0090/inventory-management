import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DbService from '../../services/DbService';
import {useNavigate} from 'react-router-dom';

function ViewRecords() {
    const [viewData, setViewData] = useState([]);
    const params = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState({
        // sNo: 0,
        date: "",
        supplierName: "",
        productId: "",
        productName: "",
        productDescription: "",
        quantity: "",
        productValue: "",
        productType: "",
    });

    useEffect(() => {
        DbService.getStockById(params.sNo)
            .then(res => {
                let data = res.data;
                setData({
                    date: data.date,
                    supplierName: data.supplierName,
                    productId: data.productId,
                    productName: data.productName,
                    productDescription: data.productDescription,
                    quantity: data.quantity,
                    productValue: data.productValue,
                    productType: data.productType,
                })
                // console.log(res.data);
            })
            .catch(err => {
                console.log(err)
            })
    }, []);

    function submitForm(e) {
        // alert('clicked')
        e.preventDefault();
        if (data.date === "" || data.supplierName === "" || data.productId === "" || data.productDescription === "" || data.quantity === "" || data.productValue === "" || data.productType === "") {
            alert('fill all fields')
        }
        else {

            let stock = {
                date: data.date, supplierName: data.supplierName,
                productId: data.productId, productName: data.productName, productDescription: data.productDescription, productValue: data.productValue,
                quantity: data.quantity, productType: data.productType
            };

            DbService.updateStock(stock,params.sNo)
                .then(res => {
                    navigate('/app-component')
                })
                .catch(err => {
                    console.log(err)
                })
            console.log(JSON.stringify(stock));

            setData({
                date: "",
                supplierName: "",
                productId: "",
                productName: "",
                productDescription: "",
                quantity: "",
                productValue: "",
                productType: "",
            });
            alert('Record Saved');
        }
    }

    const cancel = (e) => {
        e.preventDefault();
        setData({
            date: "",
            supplierName: "",
            productId: "",
            productName: "",
            productDescription: "",
            quantity: "",
            productValue: "",
            productType: "",
        });
        navigate('/app-component')
    }

    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value;
        setData(newdata);
        // console.log(newdata);
    }
    const username=localStorage.getItem("userName");
    const password=localStorage.getItem("pass");
    return (
        <div>
            { username&&password?
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md">
                        <h3 className="text-center text-success">Stock Out</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>Type:</label>
                                    <select placeholder='Type' name="productType" id="productType" className="form-control" value={data.productType} onChange={(e) => handle(e)} >
                                        <option>---Select---</option>
                                        <option value="phones">Mobile Devices</option>
                                        <option value="computers">Laptop, Compueters and Tablets</option>
                                        <option value="printers">Printers {'&'} Scanners</option>
                                        <option value="televisions">Televisions {'&'} Monitors</option>
                                        <option value="wearables">Wearables</option>
                                        <option value="appliances">Appliances</option>
                                        <option value="otherMisc">Other Miscellaneous</option>
                                    </select>
                                </div>
                                {/* <div className="form-group">
                                    <label>S no.</label><br />
                                    <input type="number" placeholder='S no' name="sNo" id="sNo" className="form-control" value={data.sNo} onChange={(e) => handle(e)} />
                                </div> */}
                                <div className="form-group">
                                    <label>Date:</label><br />
                                    <input type="date" placeholder='Date' name="date" id="date" className="form-control" value={data.date} onChange={(e) => handle(e)} />
                                </div>
                                <div className="form-group">
                                    <label>Customer:</label><br />
                                    <input placeholder='Supplier Name' name="supplierName" id="supplierName" className="form-control" value={data.supplierName} onChange={(e) => handle(e)} />
                                    
                                </div>
                                <div className="form-group">
                                    <label>Product Id:</label><br />
                                    <input placeholder='Product Id' name="productId" id="productId" className="form-control" value={data.productId} onChange={(e) => handle(e)} />
                                </div>
                                <div className="form-group">
                                    <label>Product Name:</label><br />
                                    <input placeholder='Product Name' name="productName" id="productName" className="form-control" value={data.productName} onChange={(e) => handle(e)} />
                                </div>
                                <div className="form-group">
                                    <label>Product Description:</label><br />
                                    <input placeholder='Product Description' name="productDescription" id="productDescription" className="form-control" value={data.productDescription} onChange={(e) => handle(e)} />
                                </div>
                                <div className="form-group">
                                    <label>Quantity:</label><br />
                                    <input type="number" placeholder='Quantity' name="quantity" id="quantity" className="form-control" value={data.quantity} onChange={(e) => handle(e)} />
                                </div>
                                <div className="form-group">
                                    <label>Value:</label><br />
                                    <input type="number" placeholder='Value' name="productValue" id="productValue" className="form-control" value={data.productValue} onChange={(e) => handle(e)} />
                                </div>

                                <button type="submit" className="btn btn-success" onClick={(e) => submitForm(e)}>Save</button>
                                <button className="btn btn-danger" onClick={cancel} style={{ marginLeft: "10px" }}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>:<div>
                <h1>You are logged out</h1>
            </div>
}
        </div>
    )
}

export default ViewRecords