import React, { ChangeEvent } from 'react'

type SearchFormViewProps = {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const SearchFormView: React.FC<SearchFormViewProps> = ({ onChange }) => {
  return (
    <form>
      <input type="text" onChange={onChange} />
    </form>
  )
}
