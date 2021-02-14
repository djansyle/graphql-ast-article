import gql from 'graphql-tag';

export default gql`
  query Me ($after: String, $includeUsername: Boolean! = false @test) @test {
      me {
        id @include(if: $includeUsername)
        username: myusername
        addressses(first: 5, after: $after) {
          city
          province
        }
      }
    }
`;