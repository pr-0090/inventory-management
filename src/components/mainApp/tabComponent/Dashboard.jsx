import React, { useEffect, useState } from 'react'
import DbService from '../../../services/DbService'
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  
    const [productsData, setProductsData] = useState([]);
  

    const navigate = useNavigate();
  
    useEffect(() => {
      DbService.getProductList()
      .then(res => {
        setProductsData(res.data );
      })
      .catch(err=>{
        console.log(err)
      })
    }, [productsData]);
      
      function viewRecord(sNo){
      
          navigate(`/view-records/${sNo}`);
          // console.log(sNo);
        }
    return (
      <div>
          <h1> All Products</h1>
          <div className='row'>
          <table className='table table-striped table-bordered'>
            <thead className='bg-dark text-warning'>
              <tr>
                {/* <td>Sno.</td> */}
                <td>Date</td>
                <td>Supplier</td>
                <td>Product Id</td>
                <td>Product Name</td>
                <td>Description</td>
                <td>Quantity</td>
                <td>Value</td>
                <td>Type</td>
                <td>View Data</td>
              </tr>
            </thead>
            <tbody>
              {
                productsData.map(
                  (productsDataList) =>(
                    <tr key={productsDataList.sNo}>
                      {/* <td>{productsDataList.sNo}</td> */}
                      <td>{productsDataList.date}</td>
                      <td>{productsDataList.supplierName}</td>
                      <td>{productsDataList.productId}</td>
                      <td>{productsDataList.productName}</td>
                      <td>{productsDataList.productDescription}</td>
                      <td>{productsDataList.quantity}</td>
                      <td>{productsDataList.productValue}</td>
                      <td>{productsDataList.productType}</td>
                      <td><button onClick={()=>viewRecord(productsDataList.sNo)}  className="btn btn-info">View</button></td>
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


export default Dashboard