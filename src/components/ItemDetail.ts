interface ItemDetail {
    _id: string;
    name: string;
    detailPicUrl: string;
    properties: Array<property>;
    description: String;
  }

  interface property{
    name: string;
    value: string;
    unit?: string;
  }
  
  export default ItemDetail;