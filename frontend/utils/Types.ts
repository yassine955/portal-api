export declare module namespace {
  export interface Attributes2 {
    title: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    uri: string;
  }

  export interface Datum2 {
    id: string;
    attributes: Attributes2;
  }

  export interface Lessons {
    data: Datum2[];
  }

  export interface Attributes3 {
    url: string;
    name: string;
    hash: string;
    createdAt: Date;
  }

  export interface Data2 {
    id: string;
    attributes: Attributes3;
  }

  export interface Uri {
    data: Data2;
  }

  export interface Attributes {
    name: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    description: string;
    lessons: Lessons;
    uri: Uri;
  }

  export interface Datum {
    id: string;
    attributes: Attributes;
  }

  export interface Courses {
    data: Datum[];
  }

  export interface Data {
    courses: Courses;
  }

  export interface RootObject {
    data: Data;
  }
}
