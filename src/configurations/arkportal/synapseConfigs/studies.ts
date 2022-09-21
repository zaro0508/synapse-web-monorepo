import { SynapseConstants } from 'synapse-react-client'
import { SynapseConfig } from 'types/portal-config'
import { GenericCardSchema } from 'synapse-react-client/dist/containers/GenericCard'
import { CardConfiguration } from 'synapse-react-client/dist/containers/CardContainerLogic'
import facetAliases from '../facetAliases'
import { DetailsPageProps } from 'types/portal-util-types'
import { dataDetailPageProps } from './data'
import { studySql } from '../resources'
import { iconOptions } from './iconOptions'

const rgbIndex = 9

export const studySchema: GenericCardSchema = {
  type: SynapseConstants.STUDY,
  title: 'Study',
  subTitle: 'Program',
  description: 'Description',
  secondaryLabels: [
    'Program',
  ],
}

export const studiesCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: studySchema,
  iconOptions,
  titleLinkConfig: {
    isMarkdown: false,
    baseURL: 'Explore/Studies/DetailsPage',
    URLColumnName: 'Study',
    matchColumnName: 'Study',
  },
  labelLinkConfig: [
    {
      matchColumnName: 'Description',
      isMarkdown: true,
    },
  ],
}

export const studies: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  props: {
    rgbIndex,
    cardConfiguration: studiesCardConfiguration,
    sql: studySql,
    shouldDeepLink: true,
    hideDownload: true,
    name: 'Studies',
    facetAliases,
    facetsToPlot: [],
  },
}

export const details: DetailsPageProps = {
  sql: studySql,
  synapseConfigArray: [
    {
      name: 'StandaloneQueryWrapper',
      title: 'Data Files',
      columnName: 'id',
      tableSqlKeys: ['projectId'],
      props: dataDetailPageProps,
    },
  ],
}

export const studyDetailPage: SynapseConfig[] = [
  {
    name: 'CardContainerLogic',
    isOutsideContainer: true,
    props: {
      isHeader: true,
      isAlignToLeftNav: true,
      ...studiesCardConfiguration,
      rgbIndex,
      facetAliases,
      genericCardSchema: {
        ...studySchema,
        title: 'Study',
        link: 'Study',
      },
      sql: studySql,
    },
  },
  {
    name: 'DetailsPage',
    props: details,
  },
]
