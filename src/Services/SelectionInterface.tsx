export interface ISectionObject {
  sectionId: number;
  section: string;
}
// export interface ICategoryObject {
//   id: number;
//   category: string;
// }
export interface ICategoryObject {
  id:number
      categoryName: string;
  }

export interface IBatchObject {
  batchId: number;
  batch: string;
}

export interface ITypeObject {
  id: number;
  type: string;
  lectures: string;
}

//inttterface for user

// export interface IUserObject {
//   id: number;
//   user: string;
//   lectures: string;
// }
export interface IRoles{
  "id": string | number,
  "name": string
}

export interface IUserObject {
  "id": string| number,
  "name": string ,
  "email": string,
  "batch": string,
  "section": string,
  "roles":IRoles
}

export interface ICategorySectionObject {
  id: number;
  categoryName: string;
}
