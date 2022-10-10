import {
  AccessTimeTwoTone,
  AddCircleOutline,
  AddCircleTwoTone,
  AddShoppingCart,
  AddTwoTone,
  ArrowBackIos,
  ArrowDropDownTwoTone,
  ArrowDropUpTwoTone,
  ArrowForwardIos,
  AssessmentTwoTone,
  AssignmentTurnedInTwoTone,
  Block,
  Cached,
  ChatTwoTone,
  Check,
  CheckCircleTwoTone,
  ChevronLeft,
  ChevronRight,
  Clear,
  CloseTwoTone,
  Code,
  DashboardTwoTone,
  DeleteTwoTone,
  ErrorOutlined,
  ExpandLess,
  ExpandMore,
  FolderTwoTone,
  GetAppTwoTone,
  Group,
  HelpOutlined,
  HelpOutlineTwoTone,
  HistoryTwoTone,
  InfoOutlined,
  InsertDriveFileTwoTone,
  LanguageTwoTone,
  LayersTwoTone,
  LinkTwoTone,
  ListTwoTone,
  LockOpenTwoTone,
  MoreVertTwoTone,
  OpenInNewTwoTone,
  PeopleTwoTone,
  PhoneTwoTone,
  PhotoCameraOutlined,
  PublicTwoTone,
  QuestionAnswerTwoTone,
  RadioButtonUncheckedTwoTone,
  RemoveCircleTwoTone,
  ReplyTwoTone,
  ReportProblemOutlined,
  SearchOutlined,
  SearchTwoTone,
  ShoppingCartOutlined,
  Star,
  StarTwoTone,
  StorageTwoTone,
  SyncTwoTone,
  TableChartTwoTone,
  ViewAgendaTwoTone,
  VpnKeyTwoTone,
  WarningTwoTone,
  WatchLater,
  GitHub,
  InsertDriveFileOutlined,
  AddBoxOutlined,
  IndeterminateCheckBoxOutlined,
} from '@material-ui/icons'
import React, { useEffect } from 'react'
import AccessManagement from '../assets/mui_components/AccessManagement'
import AccountCertified from '../assets/mui_components/AccountCertified'
import AccountRegistered from '../assets/mui_components/AccountRegistered'
import AccountValidated from '../assets/mui_components/AccountValidated'
import Chromatin from '../assets/mui_components/Chromatin'
import Clinical from '../assets/mui_components/Clinical'
import ContentCopy from '../assets/mui_components/ContentCopy'
import Data from '../assets/mui_components/Data'
import DataLocked from '../assets/mui_components/DataLocked'
import Dataset from '../assets/mui_components/Dataset'
import DatasetCollection from '../assets/mui_components/DatasetCollection'
import Docker from '../assets/mui_components/Docker'
import GeneExpression from '../assets/mui_components/GeneExpression'
import GeneVariants from '../assets/mui_components/GeneVariants'
import Imaging from '../assets/mui_components/Imaging'
import Kinomics from '../assets/mui_components/Kinomics'
import LineGraph from '../assets/mui_components/LineGraph'
import Login from '../assets/mui_components/Login'
import Other from '../assets/mui_components/Other'
import PackagableFile from '../assets/mui_components/PackagableFile'
import Proteomics from '../assets/mui_components/Proteomics'
import Rat from '../assets/mui_components/Rat'
import PushPin from '../assets/mui_components/PushPin'
import { EntityType } from '../utils/synapseTypes/EntityType'
import Tooltip from '../utils/tooltip/Tooltip'

export const IconStrings = [
  'accessOpen',
  'accessClosed',
  'arrowBack',
  'arrowForward',
  'arrowDropUp',
  'arrowDropDown',
  'cards',
  'check',
  'clear',
  'cart',
  'clock',
  'code',
  'openInNewWindow',
  'dashboard',
  'delete',
  'addToCart',
  'addCircleOutline',
  'addCircleTwoTone',
  'reload',
  'team',
  'photoCamera',
  'info',
  'favTwoTone',
  'fav',
  'peopleTwoTone',
  'challengesTwoTone',
  'download',
  'searchOutlined',
  'search',
  'history',
  'time',
  'login',
  'helpOutlined',
  'helpOutlineTwoTone',
  'expandLess',
  'expandMore',
  'rat',
  'chromatin',
  'clinical',
  'contentCopy',
  'data',
  'dataLocked',
  'geneExpression',
  'geneVariants',
  'github',
  'imaging',
  'lineGraph',
  'kinomics',
  'proteomics',
  'packagableFile',
  'other',
  'wiki',
  'file',
  'fileOutlined',
  'folder',
  'link',
  'table',
  'public',
  'people',
  'entityview',
  'submissionview',
  'challenge',
  'discussion',
  'dataset',
  'datasetcollection',
  'docker',
  'accountCertified',
  'accountRegistered',
  'accountValidated',
  'warningOutlined',
  'removeCircle',
  'replyTwoTone',
  'chatTwoTone',
  'accessManagement',
  'chevronRight',
  'chevronLeft',
  'database',
  'close',
  'verticalEllipsis',
  'sync',
  'clipboardCheck',
  'add',
  'warning',
  'circle',
  'block',
  'checkCircle',
  'errorOutlined',
  'phone',
  'pushpin',
  'addBoxOutline',
  'minusBoxOutline',
] as const

export type Icon = typeof IconStrings[number]

export type IconSvgOptions = {
  icon: Icon
  color?: string // If no color is provided, it should inherit current color
  size?: string
  padding?: 'left' | 'right'
  label?: string // If provided, will activate tooltip
}

export type IconSvgProps = {
  options: IconSvgOptions
}

export type SVGStyleProps = {
  color?: string
  verticalAlign?: string
  fill?: string
  width?: string
}

const getIcon = (options: IconSvgOptions) => {
  const { icon, color, size } = options

  // Styles for svg imported from mui
  const muiSvgStyle: SVGStyleProps = {
    color: color,
    verticalAlign: 'middle',
    width: size,
  }
  // Styles for custom svg missing from mui
  const customSvgStyle: SVGStyleProps = {
    fill: color,
    color: color,
    verticalAlign: 'middle',
  }

  switch (icon) {
    case 'accessOpen':
      return <LockOpenTwoTone style={customSvgStyle} />
    case 'accessClosed':
      return <VpnKeyTwoTone style={customSvgStyle} />
    case 'add':
      return <AddTwoTone style={muiSvgStyle} />
    case 'arrowBack':
      return <ArrowBackIos style={muiSvgStyle} />
    case 'arrowForward':
      return <ArrowForwardIos style={muiSvgStyle} />
    case 'arrowDropUp':
      return <ArrowDropUpTwoTone style={muiSvgStyle} />
    case 'arrowDropDown':
      return <ArrowDropDownTwoTone style={muiSvgStyle} />
    case 'block':
      return <Block style={muiSvgStyle} />
    case 'check':
      return <Check style={muiSvgStyle}></Check>
    case 'clear':
      return <Clear style={muiSvgStyle}></Clear>
    case 'cart':
      return <ShoppingCartOutlined style={muiSvgStyle}></ShoppingCartOutlined>
    case 'cards':
      return <ViewAgendaTwoTone style={muiSvgStyle}></ViewAgendaTwoTone>
    case 'clock':
      return <AccessTimeTwoTone style={muiSvgStyle} />
    case 'code':
      return <Code style={muiSvgStyle}></Code>
    case 'circle':
      return <RadioButtonUncheckedTwoTone style={muiSvgStyle} />
    case 'checkCircle':
      return <CheckCircleTwoTone style={muiSvgStyle} />
    case 'dashboard':
      return <DashboardTwoTone style={muiSvgStyle}></DashboardTwoTone>
    case 'delete':
      return <DeleteTwoTone style={muiSvgStyle} />
    case 'openInNewWindow':
      return <OpenInNewTwoTone style={muiSvgStyle} />
    case 'phone':
      return <PhoneTwoTone style={muiSvgStyle} />
    case 'people':
      return <PeopleTwoTone style={muiSvgStyle} />
    case 'addToCart':
      return <AddShoppingCart style={muiSvgStyle}></AddShoppingCart>
    case 'addCircleOutline':
      return <AddCircleOutline style={muiSvgStyle}></AddCircleOutline>
    case 'addCircleTwoTone':
      return <AddCircleTwoTone style={muiSvgStyle}></AddCircleTwoTone>
    case 'reload':
      return <Cached style={muiSvgStyle}></Cached>
    case 'team':
      return <Group style={muiSvgStyle}></Group>
    case 'photoCamera':
      return <PhotoCameraOutlined style={muiSvgStyle}></PhotoCameraOutlined>
    case 'verticalEllipsis':
      return <MoreVertTwoTone style={muiSvgStyle} />
    case 'sync':
      return <SyncTwoTone style={muiSvgStyle} />
    case 'public':
      return <PublicTwoTone style={muiSvgStyle} />
    case 'clipboardCheck':
      return <AssignmentTurnedInTwoTone style={muiSvgStyle} />
    case 'info':
      return (
        <InfoOutlined fontSize={'small'} style={muiSvgStyle}></InfoOutlined>
      )
    case 'favTwoTone':
      return <StarTwoTone style={muiSvgStyle}></StarTwoTone>
    case 'fav':
      return <Star style={muiSvgStyle}></Star>
    case 'github':
      return <GitHub style={muiSvgStyle} />
    case 'peopleTwoTone':
      return <PeopleTwoTone style={muiSvgStyle}></PeopleTwoTone>
    case 'challengesTwoTone':
      return <AssessmentTwoTone style={muiSvgStyle}></AssessmentTwoTone>
    case 'download':
      return <GetAppTwoTone style={muiSvgStyle}></GetAppTwoTone>
    case 'errorOutlined':
      return <ErrorOutlined style={muiSvgStyle} />
    case 'searchOutlined':
      return <SearchOutlined style={muiSvgStyle}></SearchOutlined>
    case 'search':
      return <SearchTwoTone style={muiSvgStyle}></SearchTwoTone>
    case 'history':
      return <HistoryTwoTone style={muiSvgStyle}></HistoryTwoTone>
    case 'time':
      return <WatchLater style={muiSvgStyle}></WatchLater>
    case 'login':
      return <Login fill={color} style={customSvgStyle}></Login>
    case 'helpOutlineTwoTone':
      return <HelpOutlineTwoTone style={muiSvgStyle}></HelpOutlineTwoTone>
    case 'helpOutlined':
      return <HelpOutlined style={muiSvgStyle}></HelpOutlined>
    case 'close':
      return <CloseTwoTone style={muiSvgStyle} />
    case 'expandLess':
      return <ExpandLess fontSize={'small'} style={muiSvgStyle}></ExpandLess>
    case 'expandMore':
      return <ExpandMore fontSize={'small'} style={muiSvgStyle}></ExpandMore>
    case 'rat':
      return <Rat fill={color} style={customSvgStyle}></Rat>
    case 'chromatin':
      return <Chromatin fill={color} style={customSvgStyle}></Chromatin>
    case 'clinical':
      return <Clinical fill={color} style={customSvgStyle}></Clinical>
    case 'contentCopy':
      return <ContentCopy fill={color} style={customSvgStyle} />
    case 'data':
      return <Data fill={color} style={customSvgStyle}></Data>
    case 'dataLocked':
      return <DataLocked fill={color} style={customSvgStyle}></DataLocked>
    case 'geneExpression':
      return (
        <GeneExpression fill={color} style={customSvgStyle}></GeneExpression>
      )
    case 'geneVariants':
      return <GeneVariants fill={color} style={customSvgStyle}></GeneVariants>
    case 'imaging':
      return <Imaging fill={color} style={customSvgStyle}></Imaging>
    case 'lineGraph':
      return <LineGraph fill={color} style={customSvgStyle}></LineGraph>
    case 'kinomics':
      customSvgStyle.fill = 'none'
      return (
        <Kinomics
          fill={color ? color : 'currentColor'}
          style={customSvgStyle}
        ></Kinomics>
      )
    case 'proteomics':
      customSvgStyle.fill = 'none'
      return (
        <Proteomics
          fill={color ? color : 'currentColor'}
          style={customSvgStyle}
        ></Proteomics>
      )
    case 'packagableFile':
      customSvgStyle.fill = 'none'
      return (
        <PackagableFile
          fill={color ? color : 'currentColor'}
          style={customSvgStyle}
        ></PackagableFile>
      )
    case 'other':
      return <Other fill={color} style={customSvgStyle}></Other>
    case 'wiki':
      return <LanguageTwoTone style={muiSvgStyle} />
    case 'file':
      return <InsertDriveFileTwoTone style={muiSvgStyle} />
    case 'fileOutlined':
      return <InsertDriveFileOutlined style={muiSvgStyle} />
    case 'folder':
      return <FolderTwoTone style={muiSvgStyle} />
    case 'link':
      return <LinkTwoTone style={muiSvgStyle} />
    case 'table':
      return <TableChartTwoTone style={muiSvgStyle} />
    case 'entityview':
      return <ListTwoTone style={muiSvgStyle} />
    case 'submissionview':
      return <StorageTwoTone style={muiSvgStyle} />
    case 'challenge':
      return <AssessmentTwoTone style={muiSvgStyle} />
    case 'discussion':
      return <QuestionAnswerTwoTone style={muiSvgStyle} />
    case 'dataset':
      return <Dataset fill={color} style={customSvgStyle} />
    case 'datasetcollection':
      return <DatasetCollection fill={color} style={customSvgStyle} />
    case 'database':
      return <LayersTwoTone style={muiSvgStyle} />
    case 'docker':
      return (
        <Docker fill={color ? color : 'currentColor'} style={customSvgStyle} />
      )
    case 'accountCertified':
      return <AccountCertified></AccountCertified>
    case 'accountRegistered':
      return <AccountRegistered></AccountRegistered>
    case 'accountValidated':
      return <AccountValidated></AccountValidated>
    case 'warningOutlined':
      return <ReportProblemOutlined style={muiSvgStyle}></ReportProblemOutlined>
    case 'warning':
      return <WarningTwoTone style={muiSvgStyle} />
    case 'removeCircle':
      return <RemoveCircleTwoTone style={muiSvgStyle}></RemoveCircleTwoTone>
    case 'replyTwoTone':
      return <ReplyTwoTone style={muiSvgStyle}></ReplyTwoTone>
    case 'chatTwoTone':
      return <ChatTwoTone style={muiSvgStyle}></ChatTwoTone>
    case 'accessManagement':
      return <AccessManagement style={muiSvgStyle}></AccessManagement>
    case 'chevronRight':
      return <ChevronRight style={muiSvgStyle} />
    case 'chevronLeft':
      return <ChevronLeft style={muiSvgStyle} />
    case 'pushpin':
      return <PushPin fill={color} style={customSvgStyle}></PushPin>
    case 'addBoxOutline':
      return <AddBoxOutlined style={muiSvgStyle} />
    case 'minusBoxOutline':
      return <IndeterminateCheckBoxOutlined style={muiSvgStyle} />
    default:
      return <></>
  }
}

const IconSvg: React.FunctionComponent<IconSvgProps> = props => {
  const { options, ...rest } = props
  const { icon, color, padding, label } = options
  let mounted = true

  // Do not set inline style unless it is specified because it's hard to override
  const getPadding = (padding: any) => {
    if (padding === 'left') {
      return { paddingLeft: '0.2rem' }
    }
    if (padding === 'right') {
      return { paddingRight: '0.2rem' }
    }
    return {}
  }
  const wrapperCss = getPadding(padding)

  useEffect(() => {
    if (mounted) {
      //
    }
    return () => {
      mounted = false
    }
  }, [icon, color])

  return (
    <Tooltip placement="top" title={label ?? ''}>
      <span
        data-svg={icon}
        className="styled-svg-wrapper"
        style={wrapperCss}
        id={`icon-${icon}`}
        role={'img'}
        {...rest}
      >
        {getIcon(options)}
      </span>
    </Tooltip>
  )
}

/**
 * Map entity type values to appropriate icon values supported by IconSvg.
 */
export const type2SvgIconName: Record<EntityType, Icon> = {
  file: 'file',
  project: 'dashboard',
  folder: 'folder',
  table: 'table',
  link: 'link',
  entityview: 'entityview',
  materializedview: 'entityview',
  dockerrepo: 'docker',
  submissionview: 'submissionview',
  dataset: 'dataset',
  datasetcollection: 'datasetcollection',
}

export const IconSvgDemo = (props: IconSvgOptions) => (
  <IconSvg options={props} />
)

export default IconSvg
