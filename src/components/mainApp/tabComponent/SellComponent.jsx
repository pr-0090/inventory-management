import React, { useEffect, useState } from 'react'
import DbService from '../../../services/DbService'

function SellComponent() {
const [sellData,setSellData]=useState([]);
useEffect(() => {
    DbService.getSellData()
    .then(res => {
      setSellData(res.data );
    })
    .catch(err=>{
      console.log(err)
    })
  }, []);

  return (
    <div>
        <h1> SellComponent</h1>
        <div className='row'>
        <table className='table table-striped table-bordered'>
          <thead className='bg-dark text-warning'>
            <tr>
              {/* <td>Sno.</td> */}
              <td>Date</td>
              <td>Customer</td>
              <td>Product Id</td>
              <td>Product Name</td>
              <td>Description</td>
              <td>Quantity</td>
              <td>Value</td>
              <td>Type</td>
              {/* <td>View Data</td> */}
            </tr>
          </thead>
          <tbody>
            {
              sellData.map(
                (sellDataList) =>(
                  <tr key={sellDataList.sNo}>
                    {/* <td>{productsDataList.sNo}</td> */}
                    <td>{sellDataList.date}</td>
                    <td>{sellDataList.customerName}</td>
                    <td>{sellDataList.productId}</td>
                    <td>{sellDataList.productName}</td>
                    <td>{sellDataList.productDescription}</td>
                    <td>{sellDataList.quantity}</td>
                    <td>{sellDataList.productValue}</td>
                    <td>{sellDataList.productType}</td>
                    {/* <td><button onClick={()=>viewRecord(sellDataList.sNo)}  className="btn btn-info">View</button></td> */}
                  </tr>
                  // <tr key={productsDataList.userId}>
                  //   <td>{productsDataList.userId}</td>
                  //   <td>{productsDataList.title}</td>
                  //   <td>{productsDataList.completed}</td>
                  //   <td>123</td>
                  // </tr>
                )
              )
            }
          </tbody>

        </table>
      </div>
    </div>
  )
}

export default SellComponent