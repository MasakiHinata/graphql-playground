import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  version: Scalars['String'];
  users?: Maybe<Array<Maybe<User>>>;
  user?: Maybe<User>;
};


export type QueryUserArgs = {
  id?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addUser?: Maybe<User>;
  deleteUser?: Maybe<User>;
};


export type MutationAddUserArgs = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['Int']>;
};


export type MutationDeleteUserArgs = {
  id?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  name: Scalars['String'];
  age: Scalars['Int'];
};

export type UserQueryVariables = Exact<{ [key: string]: never; }>;


export type UserQuery = (
  { __typename?: 'Query' }
  & { users?: Maybe<Array<Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'age'>
  )>>> }
);

export type AddUserMutationVariables = Exact<{
  id: Scalars['String'];
  name: Scalars['String'];
  age: Scalars['Int'];
}>;


export type AddUserMutation = (
  { __typename?: 'Mutation' }
  & { addUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'age'>
  )> }
);


export const UserDocument = gql`
    query User {
  users {
    id
    name
    age
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserQuery(baseOptions?: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export const AddUserDocument = gql`
    mutation AddUser($id: String!, $name: String!, $age: Int!) {
  addUser(id: $id, name: $name, age: $age) {
    id
    name
    age
  }
}
    `;
export type AddUserMutationFn = Apollo.MutationFunction<AddUserMutation, AddUserMutationVariables>;

/**
 * __useAddUserMutation__
 *
 * To run a mutation, you first call `useAddUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addUserMutation, { data, loading, error }] = useAddUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      age: // value for 'age'
 *   },
 * });
 */
export function useAddUserMutation(baseOptions?: Apollo.MutationHookOptions<AddUserMutation, AddUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddUserMutation, AddUserMutationVariables>(AddUserDocument, options);
      }
export type AddUserMutationHookResult = ReturnType<typeof useAddUserMutation>;
export type AddUserMutationResult = Apollo.MutationResult<AddUserMutation>;
export type AddUserMutationOptions = Apollo.BaseMutationOptions<AddUserMutation, AddUserMutationVariables>;