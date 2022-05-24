import React from 'react'
import AsyncSelect from 'react-select/async'
import { SynapseClient } from '../../utils'
import { useSynapseContext } from '../../utils/SynapseContext'

type AccessRequirementSearchBoxProps = {
  onChange: (accessRequirementId?: string | undefined) => void
}
export default function AccessRequirementSearchBox(
  props: AccessRequirementSearchBoxProps,
) {
  const { accessToken } = useSynapseContext()
  async function _loadOptions(inputValue: string) {
    const data = await SynapseClient.searchAccessRequirements(accessToken, {
      nameContains: inputValue,
    })

    const options =
      data?.results.map(item => ({
        id: item.id.toString(),
        value: item.id.toString(),
        label: `${item.name} ${
          item.name !== item.id.toString() ? `(${item.id})` : ''
        }`,
      })) ?? []

    return options
  }

  return (
    <AsyncSelect
      defaultOptions
      cacheOptions
      loadOptions={_loadOptions}
      onChange={option => {
        props.onChange(option?.id)
      }}
    />
  )
}
