import React from 'react';
import {Button, Card, Title, Paragraph} from 'react-native-paper'

const ProductCard = (props) => {
  return (
    <Card>
      <Card.Content>
        <Title style={{paddingBottom:15}}>{props.product.ProductName}</Title>
      </Card.Content>
      <Card.Cover source={{uri: props.product.ProductPicture}} />
      <Card.Content style={{marginTop:20}}>
        <Paragraph style={{fontSize:18}}>ราคา: {props.product.UnitPrice}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button
          onPress={() =>{}}>
          ดูรายละเอียด
        </Button>
      </Card.Actions>
    </Card>
  );
};

export default ProductCard
