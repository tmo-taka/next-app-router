export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Json: { input: any; output: any; }
  Long: { input: any; output: any; }
};

export type Meta = {
  __typename?: 'Meta';
  /** Alternate languages the document. */
  alternateLanguages: Array<RelatedDocument>;
  /** The first publication date of the document. */
  firstPublicationDate?: Maybe<Scalars['DateTime']['output']>;
  /** The id of the document. */
  id: Scalars['String']['output'];
  /** The language of the document. */
  lang: Scalars['String']['output'];
  /** The last publication date of the document. */
  lastPublicationDate?: Maybe<Scalars['DateTime']['output']>;
  /** The tags of the document. */
  tags: Array<Scalars['String']['output']>;
  /** The type of the document. */
  type: Scalars['String']['output'];
  /** The uid of the document. */
  uid?: Maybe<Scalars['String']['output']>;
};

export type Navigation = _Document & _Linkable & {
  __typename?: 'Navigation';
  _linkType?: Maybe<Scalars['String']['output']>;
  _meta: Meta;
  links?: Maybe<Array<NavigationLinks>>;
};

/** A connection to a list of items. */
export type NavigationConnectionConnection = {
  __typename?: 'NavigationConnectionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<NavigationConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long']['output'];
};

/** An edge in a connection. */
export type NavigationConnectionEdge = {
  __typename?: 'NavigationConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Navigation;
};

export type NavigationLinks = {
  __typename?: 'NavigationLinks';
  label?: Maybe<Scalars['Json']['output']>;
  link?: Maybe<_Linkable>;
};

export type Page = _Document & _Linkable & {
  __typename?: 'Page';
  _linkType?: Maybe<Scalars['String']['output']>;
  _meta: Meta;
  meta_description?: Maybe<Scalars['String']['output']>;
  meta_image?: Maybe<Scalars['Json']['output']>;
  meta_title?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<_Linkable>;
  slices?: Maybe<Array<PageSlices>>;
  title?: Maybe<Scalars['Json']['output']>;
};

/** A connection to a list of items. */
export type PageConnectionConnection = {
  __typename?: 'PageConnectionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PageConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long']['output'];
};

/** An edge in a connection. */
export type PageConnectionEdge = {
  __typename?: 'PageConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Page;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type PageSlices = PageSlicesHero | PageSlicesImage | PageSlicesImage_Cards | PageSlicesQuote | PageSlicesText | PageSlicesText_With_Image;

export type PageSlicesHero = {
  __typename?: 'PageSlicesHero';
  label?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  variation?: Maybe<PageSlicesHeroVariation>;
};

export type PageSlicesHeroDefault = {
  __typename?: 'PageSlicesHeroDefault';
  primary?: Maybe<PageSlicesHeroDefaultPrimary>;
};

export type PageSlicesHeroDefaultPrimary = {
  __typename?: 'PageSlicesHeroDefaultPrimary';
  text?: Maybe<Scalars['Json']['output']>;
};

export type PageSlicesHeroVariation = PageSlicesHeroDefault;

export type PageSlicesImage = {
  __typename?: 'PageSlicesImage';
  label?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  variation?: Maybe<PageSlicesImageVariation>;
};

export type PageSlicesImageBanner = {
  __typename?: 'PageSlicesImageBanner';
  primary?: Maybe<PageSlicesImageBannerPrimary>;
};

export type PageSlicesImageBannerPrimary = {
  __typename?: 'PageSlicesImageBannerPrimary';
  image?: Maybe<Scalars['Json']['output']>;
};

export type PageSlicesImageDefault = {
  __typename?: 'PageSlicesImageDefault';
  primary?: Maybe<PageSlicesImageDefaultPrimary>;
};

export type PageSlicesImageDefaultPrimary = {
  __typename?: 'PageSlicesImageDefaultPrimary';
  image?: Maybe<Scalars['Json']['output']>;
};

export type PageSlicesImageVariation = PageSlicesImageBanner | PageSlicesImageDefault;

export type PageSlicesImage_Cards = {
  __typename?: 'PageSlicesImage_cards';
  label?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  variation?: Maybe<PageSlicesImage_CardsVariation>;
};

export type PageSlicesImage_CardsDefault = {
  __typename?: 'PageSlicesImage_cardsDefault';
  primary?: Maybe<PageSlicesImage_CardsDefaultPrimary>;
};

export type PageSlicesImage_CardsDefaultPrimary = {
  __typename?: 'PageSlicesImage_cardsDefaultPrimary';
  heading?: Maybe<Scalars['Json']['output']>;
};

export type PageSlicesImage_CardsVariation = PageSlicesImage_CardsDefault;

export type PageSlicesQuote = {
  __typename?: 'PageSlicesQuote';
  label?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  variation?: Maybe<PageSlicesQuoteVariation>;
};

export type PageSlicesQuoteDefault = {
  __typename?: 'PageSlicesQuoteDefault';
  primary?: Maybe<PageSlicesQuoteDefaultPrimary>;
};

export type PageSlicesQuoteDefaultPrimary = {
  __typename?: 'PageSlicesQuoteDefaultPrimary';
  quote?: Maybe<Scalars['Json']['output']>;
  source?: Maybe<Scalars['String']['output']>;
};

export type PageSlicesQuoteVariation = PageSlicesQuoteDefault;

export type PageSlicesText = {
  __typename?: 'PageSlicesText';
  label?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  variation?: Maybe<PageSlicesTextVariation>;
};

export type PageSlicesTextDefault = {
  __typename?: 'PageSlicesTextDefault';
  primary?: Maybe<PageSlicesTextDefaultPrimary>;
};

export type PageSlicesTextDefaultPrimary = {
  __typename?: 'PageSlicesTextDefaultPrimary';
  text?: Maybe<Scalars['Json']['output']>;
};

export type PageSlicesTextTwocolumns = {
  __typename?: 'PageSlicesTextTwocolumns';
  primary?: Maybe<PageSlicesTextTwocolumnsPrimary>;
};

export type PageSlicesTextTwocolumnsPrimary = {
  __typename?: 'PageSlicesTextTwocolumnsPrimary';
  text?: Maybe<Scalars['Json']['output']>;
};

export type PageSlicesTextVariation = PageSlicesTextDefault | PageSlicesTextTwocolumns;

export type PageSlicesText_With_Image = {
  __typename?: 'PageSlicesText_with_image';
  label?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  variation?: Maybe<PageSlicesText_With_ImageVariation>;
};

export type PageSlicesText_With_ImageDefault = {
  __typename?: 'PageSlicesText_with_imageDefault';
  primary?: Maybe<PageSlicesText_With_ImageDefaultPrimary>;
};

export type PageSlicesText_With_ImageDefaultPrimary = {
  __typename?: 'PageSlicesText_with_imageDefaultPrimary';
  image?: Maybe<Scalars['Json']['output']>;
  text?: Maybe<Scalars['Json']['output']>;
};

export type PageSlicesText_With_ImageVariation = PageSlicesText_With_ImageDefault | PageSlicesText_With_ImageWithbutton;

export type PageSlicesText_With_ImageWithbutton = {
  __typename?: 'PageSlicesText_with_imageWithbutton';
  primary?: Maybe<PageSlicesText_With_ImageWithbuttonPrimary>;
};

export type PageSlicesText_With_ImageWithbuttonPrimary = {
  __typename?: 'PageSlicesText_with_imageWithbuttonPrimary';
  image?: Maybe<Scalars['Json']['output']>;
  text?: Maybe<Scalars['Json']['output']>;
};

export type Query = {
  __typename?: 'Query';
  _allDocuments: _DocumentConnection;
  allNavigations: NavigationConnectionConnection;
  allPages: PageConnectionConnection;
  allSettingss: SettingsConnectionConnection;
  page?: Maybe<Page>;
};


export type Query_AllDocumentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  firstPublicationDate?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_after?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_before?: InputMaybe<Scalars['DateTime']['input']>;
  fulltext?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lang?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  lastPublicationDate?: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_after?: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_before?: InputMaybe<Scalars['DateTime']['input']>;
  similar?: InputMaybe<Similar>;
  sortBy?: InputMaybe<SortDocumentsBy>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  tags_in?: InputMaybe<Array<Scalars['String']['input']>>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_in?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type QueryAllNavigationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  firstPublicationDate?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_after?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_before?: InputMaybe<Scalars['DateTime']['input']>;
  fulltext?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lang?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  lastPublicationDate?: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_after?: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_before?: InputMaybe<Scalars['DateTime']['input']>;
  similar?: InputMaybe<Similar>;
  sortBy?: InputMaybe<SortNavigationy>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  tags_in?: InputMaybe<Array<Scalars['String']['input']>>;
  uid?: InputMaybe<Scalars['String']['input']>;
  uid_in?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<WhereNavigation>;
};


export type QueryAllPagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  firstPublicationDate?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_after?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_before?: InputMaybe<Scalars['DateTime']['input']>;
  fulltext?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lang?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  lastPublicationDate?: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_after?: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_before?: InputMaybe<Scalars['DateTime']['input']>;
  similar?: InputMaybe<Similar>;
  sortBy?: InputMaybe<SortPagey>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  tags_in?: InputMaybe<Array<Scalars['String']['input']>>;
  uid?: InputMaybe<Scalars['String']['input']>;
  uid_in?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<WherePage>;
};


export type QueryAllSettingssArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  firstPublicationDate?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_after?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_before?: InputMaybe<Scalars['DateTime']['input']>;
  fulltext?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lang?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  lastPublicationDate?: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_after?: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_before?: InputMaybe<Scalars['DateTime']['input']>;
  similar?: InputMaybe<Similar>;
  sortBy?: InputMaybe<SortSettingsy>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  tags_in?: InputMaybe<Array<Scalars['String']['input']>>;
  uid?: InputMaybe<Scalars['String']['input']>;
  uid_in?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type QueryPageArgs = {
  lang: Scalars['String']['input'];
  uid: Scalars['String']['input'];
};

export type RelatedDocument = {
  __typename?: 'RelatedDocument';
  /** The id of the document. */
  id: Scalars['String']['output'];
  /** The language of the document. */
  lang: Scalars['String']['output'];
  /** The type of the document. */
  type: Scalars['String']['output'];
  /** The uid of the document. */
  uid?: Maybe<Scalars['String']['output']>;
};

export type Settings = _Document & _Linkable & {
  __typename?: 'Settings';
  _linkType?: Maybe<Scalars['String']['output']>;
  _meta: Meta;
};

/** A connection to a list of items. */
export type SettingsConnectionConnection = {
  __typename?: 'SettingsConnectionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<SettingsConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long']['output'];
};

/** An edge in a connection. */
export type SettingsConnectionEdge = {
  __typename?: 'SettingsConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Settings;
};

export enum SortDocumentsBy {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC'
}

export enum SortNavigationy {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC'
}

export enum SortPagey {
  MetaDescriptionAsc = 'meta_description_ASC',
  MetaDescriptionDesc = 'meta_description_DESC',
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  MetaTitleAsc = 'meta_title_ASC',
  MetaTitleDesc = 'meta_title_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum SortSettingsy {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC'
}

export type WhereNavigation = {
  links?: InputMaybe<WhereNavigationLinks>;
};

export type WhereNavigationLinks = {
  /** label */
  label_fulltext?: InputMaybe<Scalars['String']['input']>;
  /** link */
  link?: InputMaybe<Scalars['String']['input']>;
};

export type WherePage = {
  meta_description?: InputMaybe<Scalars['String']['input']>;
  meta_description_fulltext?: InputMaybe<Scalars['String']['input']>;
  meta_title?: InputMaybe<Scalars['String']['input']>;
  meta_title_fulltext?: InputMaybe<Scalars['String']['input']>;
  /** parent */
  parent?: InputMaybe<Scalars['String']['input']>;
  /** title */
  title_fulltext?: InputMaybe<Scalars['String']['input']>;
};

/** A prismic document */
export type _Document = {
  _meta: Meta;
};

/** A connection to a list of items. */
export type _DocumentConnection = {
  __typename?: '_DocumentConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<_DocumentEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long']['output'];
};

/** An edge in a connection. */
export type _DocumentEdge = {
  __typename?: '_DocumentEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: _Document;
};

/** An external link */
export type _ExternalLink = _Linkable & {
  __typename?: '_ExternalLink';
  _linkType?: Maybe<Scalars['String']['output']>;
  target?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
};

/** A linked file */
export type _FileLink = _Linkable & {
  __typename?: '_FileLink';
  _linkType?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  size: Scalars['Long']['output'];
  url: Scalars['String']['output'];
};

/** A linked image */
export type _ImageLink = _Linkable & {
  __typename?: '_ImageLink';
  _linkType?: Maybe<Scalars['String']['output']>;
  height: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  size: Scalars['Long']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Int']['output'];
};

/** A prismic link */
export type _Linkable = {
  _linkType?: Maybe<Scalars['String']['output']>;
};

export type Similar = {
  documentId: Scalars['String']['input'];
  max: Scalars['Int']['input'];
};
