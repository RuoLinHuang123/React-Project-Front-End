interface ItemDetail {
    _id: string;
    name: string;
    detailPicUrl: string;
    properties: { [key: string]: string };
    description: String;
  }
  
  export default ItemDetail;