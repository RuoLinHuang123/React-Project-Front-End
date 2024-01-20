interface Item {
  _id: string;
  name: string;
  picUrl: string;
  mass: number;
  category: "Planet"| "Dwarf Planet"| "Moon"
}

export default Item;
