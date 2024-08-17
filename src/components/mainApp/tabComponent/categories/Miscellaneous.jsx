import React,{useState,useEffect} from 'react'
import DbService from '../../../../services/DbService'

function Miscellaneous() {
  const [ miscData, setMiscData] = useState([]);
  useEffect(() => {
    DbService.getProductList()
    .then(res => {
      // setPhonesData(res.data );
      setMiscData(res.data.filter(function(e){
        return e.productType==="otherMisc";
      }));
    })
    .catch(err=>{
      console.log(err)
    })
  }, []);
  return (
    <div><h1>Miscellaneous</h1>
      <div className='row justify-content-center'>
          <table className='table table-striped table-bordered' >
            <thead className='bg-dark text-warning'>
              <td>Product Id</td>
              <td>Name</td>
              <td>Brand</td>
              <td>Specification</td>
              <td>Price</td>
              <td>Purchased</td>
              <td>Sold</td>
              <td>In Stock</td>
            </thead>
            <tbody>
              {
                miscData.map((phonesList)=>(
                  <tr key={phonesList.sNo}>
                    <td>{phonesList.productId}</td>
                    <td>{phonesList.productName}</td>
                    <td>{phonesList.productName}</td>
                    <td>{phonesList.productDescription}</td>
                    <td>{phonesList.productValue}</td>
                    <td>{phonesList.quantity}</td>
                    <td>{phonesList.quantity}</td>
                    <td>{phonesList.quantity}</td>
                  </tr>
                ))
              }  
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default Miscellaneous