import * as React from "react";

import { gql } from "../src/__generated__/gql";

export const AllCoursesQUERY = gql(/* GraphQL */ `
  query GetCourses {
    courses {
      data {
        id
        attributes {
          name
          createdAt
          updatedAt
          publishedAt
          description
          lessons {
            data {
              id
              attributes {
                title
                createdAt
                updatedAt
                publishedAt
                uri
              }
            }
          }
          uri {
            data {
              id
              attributes {
                url
                name
                hash
                createdAt
              }
            }
          }
        }
      }
    }
  }
`);
