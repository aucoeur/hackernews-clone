import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useMutation, gql } from '@apollo/client';

const CREATE_LINK_MUTATION = gql`
  mutation PostMutation(
    $description: String!
    $url: String!
  ) {
    post(description: $description, url: $url) {
      id
      createdAt
      url
      description
    }
  }
`

const CreateLink = () => {
  const [formState, setFormState] = useState({
    description: '',
    url: ''
  })

  const history = useHistory()
  const [createLink] = useMutation(CREATE_LINK_MUTATION, {
    variables: {
      description: formState.description,
      url: formState.url
    },
    onCompleted: () => history.push('/')
  })

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault()
        createLink()
      }}
      >
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            type="text"
            value= {formState.description}
            onChange= {(e) => setFormState({
              ...formState,
              description: e.target.value
              })
            }
            placeholder="A description for the link"
          />
          <input
            className="mb2"
            type="text"
            value= {formState.url}
            onChange= {(e) => setFormState({
              ...formState,
              url: e.target.value
              })
            }
            placeholder="A URL for the link"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default CreateLink;
