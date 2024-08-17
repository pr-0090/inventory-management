import React,{useState,useEffect} from 'react'
import DbService from '../../../../services/DbService'

function Phones() {
  const [phonesData, setPhonesData] = useState([]);
  useEffect(() => {
    DbService.getProductList()
    .then(res => {
      // setPhonesData(res.data );
      setPhonesData(res.data.filter(function(e){
        return e.productType==="phones";
      }));
    })
    .catch(err=>{
      console.log(err)
    })
  }, []);

  // const ref = res.data.filter(function(e){
  //   return e.productType==="phones";
  // });


  return (
    <div>
        <h1>Phones Data</h1>
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
                phonesData.map((phonesList)=>(
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

export default Phones