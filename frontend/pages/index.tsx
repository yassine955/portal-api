import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { useLazyQuery, useQuery } from "@apollo/client";
import { client } from "../utils/apolloClient";

import ClientOnly from "../components/ClientOnly";
import { CircularProgress } from "@mui/material";
import { namespace } from "../utils/Types";
import { RecipeReviewCard } from "../components/Card";
import { gql } from "../src/__generated__";
import { Layout } from "../components/Layout";
import { ButtonAppBar } from "../components/AppBar";

export default function Home() {
  return <Layout>Hello</Layout>;
}
