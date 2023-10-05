import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
function Listuser({datas}) {
  return (
    <>
    {
        datas.map((data,i) => {
        return (
          <>
          <ListGroup key={i}>
      {/* <ListGroup.Item>{data.name}</ListGroup.Item> */}
      <ListGroup.Item> 
      <Container>
      <Row>
     
        <Col xs={6} md={4}>
          <Image src={`http://localhost:4000/backend/${data.photo}`} roundedCircle />
        </Col>
        
      </Row>
    </Container></ListGroup.Item>
      
    </ListGroup>

          
            </>
        )
         
     
    })
    }
    </>   
    
  );
}

export default Listuser;