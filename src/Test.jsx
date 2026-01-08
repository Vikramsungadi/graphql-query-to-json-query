import { graphQlQueryToJson } from "graphql-query-to-json";

const Test = () => {
  let query = `{
  product(id: "gid://shopify/Product/8887942447253") {
    title
    variant_metafield: metafield(namespace: "custom", key: "variant") {
      value
      ... on Metafield {
        reference {
          ... on ProductVariant {
            title
            id
          }
        }
      }
    }
  }
}`;

  console.log(graphQlQueryToJson(query));

  return <div>Test</div>;
};

export default Test;
