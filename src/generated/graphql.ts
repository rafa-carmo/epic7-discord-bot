export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
  DateTime: any;
  Hex: any;
  /** Raw JSON value */
  Json: any;
  /** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
  RGBAHue: any;
  RGBATransparency: any;
  /** Slate-compatible RichText AST */
  RichTextAST: any;
};

export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int'];
};

/** Asset system model */
export type Asset = Node & {
  __typename?: 'Asset';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The file name */
  fileName: Scalars['String'];
  /** The file handle */
  handle: Scalars['String'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']>;
  /** List of Asset versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  imageCharacter: Array<Character>;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** The file size */
  size?: Maybe<Scalars['Float']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String'];
  /** The file width */
  width?: Maybe<Scalars['Float']>;
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


/** Asset system model */
export type AssetImageCharacterArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<CharacterOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CharacterWhereInput>;
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: InputMaybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AssetCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: InputMaybe<Scalars['Float']>;
  iconCharacterSkill?: InputMaybe<CharacterSkillCreateManyInlineInput>;
  imageCharacter?: InputMaybe<CharacterCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<AssetCreateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  positionMemoryImprint?: InputMaybe<MemoryImprintCreateManyInlineInput>;
  size?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Asset;
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  imageCharacter_every?: InputMaybe<CharacterWhereInput>;
  imageCharacter_none?: InputMaybe<CharacterWhereInput>;
  imageCharacter_some?: InputMaybe<CharacterWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum AssetOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  document?: InputMaybe<DocumentTransformationInput>;
  image?: InputMaybe<ImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: InputMaybe<Scalars['Boolean']>;
};

export type AssetUpdateInput = {
  fileName?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  iconCharacterSkill?: InputMaybe<CharacterSkillUpdateManyInlineInput>;
  imageCharacter?: InputMaybe<CharacterUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<AssetUpdateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  positionMemoryImprint?: InputMaybe<MemoryImprintUpdateManyInlineInput>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
  /** Delete multiple Asset documents */
  delete?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  fileName?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<AssetUpdateManyLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AssetUpdateManyInput;
  /** Document search */
  where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
  /** Delete currently connected Asset document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Asset document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Asset document */
  update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
  update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  fileName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  fileName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  fileName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fileName_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  fileName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  fileName_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  fileName_starts_with?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  handle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  height_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<Scalars['Float']>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  imageCharacter_every?: InputMaybe<CharacterWhereInput>;
  imageCharacter_none?: InputMaybe<CharacterWhereInput>;
  imageCharacter_some?: InputMaybe<CharacterWhereInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  mimeType_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mimeType_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  mimeType_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  size?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  size_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  size_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  size_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  size_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  size_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<Scalars['Float']>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  width?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  width_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<Scalars['Float']>>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'];
};

export type Character = Node & {
  __typename?: 'Character';
  characterSkills: Array<CharacterSkill>;
  characterStatus: CharacterStatus;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Character>;
  /** List of Character versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  image?: Maybe<Asset>;
  memoryImprint?: Maybe<MemoryImprint>;
  /** name of the character */
  name: Scalars['String'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug?: Maybe<Scalars['String']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type CharacterCharacterSkillsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<CharacterSkillOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CharacterSkillWhereInput>;
};


export type CharacterCharacterStatusArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type CharacterCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type CharacterDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type CharacterHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type CharacterImageArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type CharacterMemoryImprintArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type CharacterPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type CharacterScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type CharacterUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type CharacterConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: CharacterWhereUniqueInput;
};

/** A connection to a list of items. */
export type CharacterConnection = {
  __typename?: 'CharacterConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<CharacterEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type CharacterCreateInput = {
  characterSkills?: InputMaybe<CharacterSkillCreateManyInlineInput>;
  characterStatus: CharacterStatusCreateOneInlineInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  image?: InputMaybe<AssetCreateOneInlineInput>;
  memoryImprint?: InputMaybe<MemoryImprintCreateOneInlineInput>;
  name: Scalars['String'];
  slug?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CharacterCreateManyInlineInput = {
  /** Connect multiple existing Character documents */
  connect?: InputMaybe<Array<CharacterWhereUniqueInput>>;
  /** Create and connect multiple existing Character documents */
  create?: InputMaybe<Array<CharacterCreateInput>>;
};

export type CharacterCreateOneInlineInput = {
  /** Connect one existing Character document */
  connect?: InputMaybe<CharacterWhereUniqueInput>;
  /** Create and connect one Character document */
  create?: InputMaybe<CharacterCreateInput>;
};

/** An edge in a connection. */
export type CharacterEdge = {
  __typename?: 'CharacterEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Character;
};

/** Identifies documents */
export type CharacterManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CharacterWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CharacterWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CharacterWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  characterSkills_every?: InputMaybe<CharacterSkillWhereInput>;
  characterSkills_none?: InputMaybe<CharacterSkillWhereInput>;
  characterSkills_some?: InputMaybe<CharacterSkillWhereInput>;
  characterStatus?: InputMaybe<CharacterStatusWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<AssetWhereInput>;
  memoryImprint?: InputMaybe<MemoryImprintWhereInput>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum CharacterOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type CharacterSkill = {
  __typename?: 'CharacterSkill';
  description: Scalars['String'];
  enhancement: Array<Scalars['String']>;
  icon?: Maybe<Asset>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** System stage field */
  stage: Stage;
  title: Scalars['String'];
};


export type CharacterSkillIconArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type CharacterSkillConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: CharacterSkillWhereUniqueInput;
};

/** A connection to a list of items. */
export type CharacterSkillConnection = {
  __typename?: 'CharacterSkillConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<CharacterSkillEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type CharacterSkillCreateInput = {
  description: Scalars['String'];
  enhancement?: InputMaybe<Array<Scalars['String']>>;
  icon?: InputMaybe<AssetCreateOneInlineInput>;
  title: Scalars['String'];
};

export type CharacterSkillCreateManyInlineInput = {
  /** Create and connect multiple existing CharacterSkill documents */
  create?: InputMaybe<Array<CharacterSkillCreateInput>>;
};

export type CharacterSkillCreateOneInlineInput = {
  /** Create and connect one CharacterSkill document */
  create?: InputMaybe<CharacterSkillCreateInput>;
};

export type CharacterSkillCreateWithPositionInput = {
  /** Document to create */
  data: CharacterSkillCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type CharacterSkillEdge = {
  __typename?: 'CharacterSkillEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: CharacterSkill;
};

/** Identifies documents */
export type CharacterSkillManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CharacterSkillWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CharacterSkillWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CharacterSkillWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  enhancement?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  enhancement_contains_all?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  enhancement_contains_none?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  enhancement_contains_some?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  enhancement_not?: InputMaybe<Array<Scalars['String']>>;
  icon?: InputMaybe<AssetWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
};

export enum CharacterSkillOrderByInput {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  EnhancementAsc = 'enhancement_ASC',
  EnhancementDesc = 'enhancement_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type CharacterSkillParent = Character;

export type CharacterSkillParentConnectInput = {
  Character?: InputMaybe<CharacterConnectInput>;
};

export type CharacterSkillParentCreateInput = {
  Character?: InputMaybe<CharacterCreateInput>;
};

export type CharacterSkillParentCreateManyInlineInput = {
  /** Connect multiple existing CharacterSkillParent documents */
  connect?: InputMaybe<Array<CharacterSkillParentWhereUniqueInput>>;
  /** Create and connect multiple existing CharacterSkillParent documents */
  create?: InputMaybe<Array<CharacterSkillParentCreateInput>>;
};

export type CharacterSkillParentCreateOneInlineInput = {
  /** Connect one existing CharacterSkillParent document */
  connect?: InputMaybe<CharacterSkillParentWhereUniqueInput>;
  /** Create and connect one CharacterSkillParent document */
  create?: InputMaybe<CharacterSkillParentCreateInput>;
};

export type CharacterSkillParentUpdateInput = {
  Character?: InputMaybe<CharacterUpdateInput>;
};

export type CharacterSkillParentUpdateManyInlineInput = {
  /** Connect multiple existing CharacterSkillParent documents */
  connect?: InputMaybe<Array<CharacterSkillParentConnectInput>>;
  /** Create and connect multiple CharacterSkillParent documents */
  create?: InputMaybe<Array<CharacterSkillParentCreateInput>>;
  /** Delete multiple CharacterSkillParent documents */
  delete?: InputMaybe<Array<CharacterSkillParentWhereUniqueInput>>;
  /** Disconnect multiple CharacterSkillParent documents */
  disconnect?: InputMaybe<Array<CharacterSkillParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing CharacterSkillParent documents */
  set?: InputMaybe<Array<CharacterSkillParentWhereUniqueInput>>;
  /** Update multiple CharacterSkillParent documents */
  update?: InputMaybe<Array<CharacterSkillParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple CharacterSkillParent documents */
  upsert?: InputMaybe<Array<CharacterSkillParentUpsertWithNestedWhereUniqueInput>>;
};

export type CharacterSkillParentUpdateManyWithNestedWhereInput = {
  Character?: InputMaybe<CharacterUpdateManyWithNestedWhereInput>;
};

export type CharacterSkillParentUpdateOneInlineInput = {
  /** Connect existing CharacterSkillParent document */
  connect?: InputMaybe<CharacterSkillParentWhereUniqueInput>;
  /** Create and connect one CharacterSkillParent document */
  create?: InputMaybe<CharacterSkillParentCreateInput>;
  /** Delete currently connected CharacterSkillParent document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected CharacterSkillParent document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single CharacterSkillParent document */
  update?: InputMaybe<CharacterSkillParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single CharacterSkillParent document */
  upsert?: InputMaybe<CharacterSkillParentUpsertWithNestedWhereUniqueInput>;
};

export type CharacterSkillParentUpdateWithNestedWhereUniqueInput = {
  Character?: InputMaybe<CharacterUpdateWithNestedWhereUniqueInput>;
};

export type CharacterSkillParentUpsertWithNestedWhereUniqueInput = {
  Character?: InputMaybe<CharacterUpsertWithNestedWhereUniqueInput>;
};

export type CharacterSkillParentWhereInput = {
  Character?: InputMaybe<CharacterWhereInput>;
};

export type CharacterSkillParentWhereUniqueInput = {
  Character?: InputMaybe<CharacterWhereUniqueInput>;
};

export type CharacterSkillUpdateInput = {
  description?: InputMaybe<Scalars['String']>;
  enhancement?: InputMaybe<Array<Scalars['String']>>;
  icon?: InputMaybe<AssetUpdateOneInlineInput>;
  title?: InputMaybe<Scalars['String']>;
};

export type CharacterSkillUpdateManyInlineInput = {
  /** Create and connect multiple CharacterSkill component instances */
  create?: InputMaybe<Array<CharacterSkillCreateWithPositionInput>>;
  /** Delete multiple CharacterSkill documents */
  delete?: InputMaybe<Array<CharacterSkillWhereUniqueInput>>;
  /** Update multiple CharacterSkill component instances */
  update?: InputMaybe<Array<CharacterSkillUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple CharacterSkill component instances */
  upsert?: InputMaybe<Array<CharacterSkillUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type CharacterSkillUpdateManyInput = {
  description?: InputMaybe<Scalars['String']>;
  enhancement?: InputMaybe<Array<Scalars['String']>>;
  title?: InputMaybe<Scalars['String']>;
};

export type CharacterSkillUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: CharacterSkillUpdateManyInput;
  /** Document search */
  where: CharacterSkillWhereInput;
};

export type CharacterSkillUpdateOneInlineInput = {
  /** Create and connect one CharacterSkill document */
  create?: InputMaybe<CharacterSkillCreateInput>;
  /** Delete currently connected CharacterSkill document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single CharacterSkill document */
  update?: InputMaybe<CharacterSkillUpdateWithNestedWhereUniqueInput>;
  /** Upsert single CharacterSkill document */
  upsert?: InputMaybe<CharacterSkillUpsertWithNestedWhereUniqueInput>;
};

export type CharacterSkillUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<CharacterSkillUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: CharacterSkillWhereUniqueInput;
};

export type CharacterSkillUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: CharacterSkillUpdateInput;
  /** Unique document search */
  where: CharacterSkillWhereUniqueInput;
};

export type CharacterSkillUpsertInput = {
  /** Create document if it didn't exist */
  create: CharacterSkillCreateInput;
  /** Update document if it exists */
  update: CharacterSkillUpdateInput;
};

export type CharacterSkillUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<CharacterSkillUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: CharacterSkillWhereUniqueInput;
};

export type CharacterSkillUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: CharacterSkillUpsertInput;
  /** Unique document search */
  where: CharacterSkillWhereUniqueInput;
};

/** Identifies documents */
export type CharacterSkillWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CharacterSkillWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CharacterSkillWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CharacterSkillWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  enhancement?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  enhancement_contains_all?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  enhancement_contains_none?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  enhancement_contains_some?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  enhancement_not?: InputMaybe<Array<Scalars['String']>>;
  icon?: InputMaybe<AssetWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
};

/** References CharacterSkill record uniquely */
export type CharacterSkillWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type CharacterStatus = {
  __typename?: 'CharacterStatus';
  atk: Scalars['String'];
  criticalHitChance: Scalars['String'];
  criticalHitDamage: Scalars['String'];
  def: Scalars['String'];
  dualAtackChance: Scalars['String'];
  effectResistance: Scalars['String'];
  effectiveness: Scalars['String'];
  hp: Scalars['String'];
  /** The unique identifier */
  id: Scalars['ID'];
  speed: Scalars['String'];
  /** System stage field */
  stage: Stage;
};

export type CharacterStatusConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: CharacterStatusWhereUniqueInput;
};

/** A connection to a list of items. */
export type CharacterStatusConnection = {
  __typename?: 'CharacterStatusConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<CharacterStatusEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type CharacterStatusCreateInput = {
  atk: Scalars['String'];
  criticalHitChance: Scalars['String'];
  criticalHitDamage: Scalars['String'];
  def: Scalars['String'];
  dualAtackChance: Scalars['String'];
  effectResistance: Scalars['String'];
  effectiveness: Scalars['String'];
  hp: Scalars['String'];
  speed: Scalars['String'];
};

export type CharacterStatusCreateManyInlineInput = {
  /** Create and connect multiple existing CharacterStatus documents */
  create?: InputMaybe<Array<CharacterStatusCreateInput>>;
};

export type CharacterStatusCreateOneInlineInput = {
  /** Create and connect one CharacterStatus document */
  create?: InputMaybe<CharacterStatusCreateInput>;
};

export type CharacterStatusCreateWithPositionInput = {
  /** Document to create */
  data: CharacterStatusCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type CharacterStatusEdge = {
  __typename?: 'CharacterStatusEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: CharacterStatus;
};

/** Identifies documents */
export type CharacterStatusManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CharacterStatusWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CharacterStatusWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CharacterStatusWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  atk?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  atk_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  atk_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  atk_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  atk_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  atk_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  atk_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  atk_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  atk_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  atk_starts_with?: InputMaybe<Scalars['String']>;
  criticalHitChance?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  criticalHitChance_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  criticalHitChance_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  criticalHitChance_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  criticalHitChance_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  criticalHitChance_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  criticalHitChance_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  criticalHitChance_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  criticalHitChance_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  criticalHitChance_starts_with?: InputMaybe<Scalars['String']>;
  criticalHitDamage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  criticalHitDamage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  criticalHitDamage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  criticalHitDamage_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  criticalHitDamage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  criticalHitDamage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  criticalHitDamage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  criticalHitDamage_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  criticalHitDamage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  criticalHitDamage_starts_with?: InputMaybe<Scalars['String']>;
  def?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  def_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  def_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  def_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  def_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  def_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  def_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  def_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  def_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  def_starts_with?: InputMaybe<Scalars['String']>;
  dualAtackChance?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  dualAtackChance_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  dualAtackChance_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  dualAtackChance_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  dualAtackChance_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  dualAtackChance_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  dualAtackChance_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  dualAtackChance_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  dualAtackChance_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  dualAtackChance_starts_with?: InputMaybe<Scalars['String']>;
  effectResistance?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  effectResistance_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  effectResistance_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  effectResistance_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  effectResistance_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  effectResistance_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  effectResistance_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  effectResistance_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  effectResistance_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  effectResistance_starts_with?: InputMaybe<Scalars['String']>;
  effectiveness?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  effectiveness_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  effectiveness_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  effectiveness_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  effectiveness_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  effectiveness_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  effectiveness_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  effectiveness_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  effectiveness_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  effectiveness_starts_with?: InputMaybe<Scalars['String']>;
  hp?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  hp_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  hp_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  hp_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  hp_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  hp_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  hp_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  hp_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  hp_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  hp_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  speed?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  speed_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  speed_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  speed_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  speed_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  speed_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  speed_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  speed_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  speed_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  speed_starts_with?: InputMaybe<Scalars['String']>;
};

export enum CharacterStatusOrderByInput {
  AtkAsc = 'atk_ASC',
  AtkDesc = 'atk_DESC',
  CriticalHitChanceAsc = 'criticalHitChance_ASC',
  CriticalHitChanceDesc = 'criticalHitChance_DESC',
  CriticalHitDamageAsc = 'criticalHitDamage_ASC',
  CriticalHitDamageDesc = 'criticalHitDamage_DESC',
  DefAsc = 'def_ASC',
  DefDesc = 'def_DESC',
  DualAtackChanceAsc = 'dualAtackChance_ASC',
  DualAtackChanceDesc = 'dualAtackChance_DESC',
  EffectResistanceAsc = 'effectResistance_ASC',
  EffectResistanceDesc = 'effectResistance_DESC',
  EffectivenessAsc = 'effectiveness_ASC',
  EffectivenessDesc = 'effectiveness_DESC',
  HpAsc = 'hp_ASC',
  HpDesc = 'hp_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  SpeedAsc = 'speed_ASC',
  SpeedDesc = 'speed_DESC'
}

export type CharacterStatusParent = Character;

export type CharacterStatusParentConnectInput = {
  Character?: InputMaybe<CharacterConnectInput>;
};

export type CharacterStatusParentCreateInput = {
  Character?: InputMaybe<CharacterCreateInput>;
};

export type CharacterStatusParentCreateManyInlineInput = {
  /** Connect multiple existing CharacterStatusParent documents */
  connect?: InputMaybe<Array<CharacterStatusParentWhereUniqueInput>>;
  /** Create and connect multiple existing CharacterStatusParent documents */
  create?: InputMaybe<Array<CharacterStatusParentCreateInput>>;
};

export type CharacterStatusParentCreateOneInlineInput = {
  /** Connect one existing CharacterStatusParent document */
  connect?: InputMaybe<CharacterStatusParentWhereUniqueInput>;
  /** Create and connect one CharacterStatusParent document */
  create?: InputMaybe<CharacterStatusParentCreateInput>;
};

export type CharacterStatusParentUpdateInput = {
  Character?: InputMaybe<CharacterUpdateInput>;
};

export type CharacterStatusParentUpdateManyInlineInput = {
  /** Connect multiple existing CharacterStatusParent documents */
  connect?: InputMaybe<Array<CharacterStatusParentConnectInput>>;
  /** Create and connect multiple CharacterStatusParent documents */
  create?: InputMaybe<Array<CharacterStatusParentCreateInput>>;
  /** Delete multiple CharacterStatusParent documents */
  delete?: InputMaybe<Array<CharacterStatusParentWhereUniqueInput>>;
  /** Disconnect multiple CharacterStatusParent documents */
  disconnect?: InputMaybe<Array<CharacterStatusParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing CharacterStatusParent documents */
  set?: InputMaybe<Array<CharacterStatusParentWhereUniqueInput>>;
  /** Update multiple CharacterStatusParent documents */
  update?: InputMaybe<Array<CharacterStatusParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple CharacterStatusParent documents */
  upsert?: InputMaybe<Array<CharacterStatusParentUpsertWithNestedWhereUniqueInput>>;
};

export type CharacterStatusParentUpdateManyWithNestedWhereInput = {
  Character?: InputMaybe<CharacterUpdateManyWithNestedWhereInput>;
};

export type CharacterStatusParentUpdateOneInlineInput = {
  /** Connect existing CharacterStatusParent document */
  connect?: InputMaybe<CharacterStatusParentWhereUniqueInput>;
  /** Create and connect one CharacterStatusParent document */
  create?: InputMaybe<CharacterStatusParentCreateInput>;
  /** Delete currently connected CharacterStatusParent document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected CharacterStatusParent document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single CharacterStatusParent document */
  update?: InputMaybe<CharacterStatusParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single CharacterStatusParent document */
  upsert?: InputMaybe<CharacterStatusParentUpsertWithNestedWhereUniqueInput>;
};

export type CharacterStatusParentUpdateWithNestedWhereUniqueInput = {
  Character?: InputMaybe<CharacterUpdateWithNestedWhereUniqueInput>;
};

export type CharacterStatusParentUpsertWithNestedWhereUniqueInput = {
  Character?: InputMaybe<CharacterUpsertWithNestedWhereUniqueInput>;
};

export type CharacterStatusParentWhereInput = {
  Character?: InputMaybe<CharacterWhereInput>;
};

export type CharacterStatusParentWhereUniqueInput = {
  Character?: InputMaybe<CharacterWhereUniqueInput>;
};

export type CharacterStatusUpdateInput = {
  atk?: InputMaybe<Scalars['String']>;
  criticalHitChance?: InputMaybe<Scalars['String']>;
  criticalHitDamage?: InputMaybe<Scalars['String']>;
  def?: InputMaybe<Scalars['String']>;
  dualAtackChance?: InputMaybe<Scalars['String']>;
  effectResistance?: InputMaybe<Scalars['String']>;
  effectiveness?: InputMaybe<Scalars['String']>;
  hp?: InputMaybe<Scalars['String']>;
  speed?: InputMaybe<Scalars['String']>;
};

export type CharacterStatusUpdateManyInlineInput = {
  /** Create and connect multiple CharacterStatus component instances */
  create?: InputMaybe<Array<CharacterStatusCreateWithPositionInput>>;
  /** Delete multiple CharacterStatus documents */
  delete?: InputMaybe<Array<CharacterStatusWhereUniqueInput>>;
  /** Update multiple CharacterStatus component instances */
  update?: InputMaybe<Array<CharacterStatusUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple CharacterStatus component instances */
  upsert?: InputMaybe<Array<CharacterStatusUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type CharacterStatusUpdateManyInput = {
  atk?: InputMaybe<Scalars['String']>;
  criticalHitChance?: InputMaybe<Scalars['String']>;
  criticalHitDamage?: InputMaybe<Scalars['String']>;
  def?: InputMaybe<Scalars['String']>;
  dualAtackChance?: InputMaybe<Scalars['String']>;
  effectResistance?: InputMaybe<Scalars['String']>;
  effectiveness?: InputMaybe<Scalars['String']>;
  hp?: InputMaybe<Scalars['String']>;
  speed?: InputMaybe<Scalars['String']>;
};

export type CharacterStatusUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: CharacterStatusUpdateManyInput;
  /** Document search */
  where: CharacterStatusWhereInput;
};

export type CharacterStatusUpdateOneInlineInput = {
  /** Create and connect one CharacterStatus document */
  create?: InputMaybe<CharacterStatusCreateInput>;
  /** Delete currently connected CharacterStatus document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single CharacterStatus document */
  update?: InputMaybe<CharacterStatusUpdateWithNestedWhereUniqueInput>;
  /** Upsert single CharacterStatus document */
  upsert?: InputMaybe<CharacterStatusUpsertWithNestedWhereUniqueInput>;
};

export type CharacterStatusUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<CharacterStatusUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: CharacterStatusWhereUniqueInput;
};

export type CharacterStatusUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: CharacterStatusUpdateInput;
  /** Unique document search */
  where: CharacterStatusWhereUniqueInput;
};

export type CharacterStatusUpsertInput = {
  /** Create document if it didn't exist */
  create: CharacterStatusCreateInput;
  /** Update document if it exists */
  update: CharacterStatusUpdateInput;
};

export type CharacterStatusUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<CharacterStatusUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: CharacterStatusWhereUniqueInput;
};

export type CharacterStatusUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: CharacterStatusUpsertInput;
  /** Unique document search */
  where: CharacterStatusWhereUniqueInput;
};

/** Identifies documents */
export type CharacterStatusWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CharacterStatusWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CharacterStatusWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CharacterStatusWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  atk?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  atk_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  atk_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  atk_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  atk_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  atk_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  atk_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  atk_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  atk_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  atk_starts_with?: InputMaybe<Scalars['String']>;
  criticalHitChance?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  criticalHitChance_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  criticalHitChance_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  criticalHitChance_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  criticalHitChance_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  criticalHitChance_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  criticalHitChance_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  criticalHitChance_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  criticalHitChance_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  criticalHitChance_starts_with?: InputMaybe<Scalars['String']>;
  criticalHitDamage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  criticalHitDamage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  criticalHitDamage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  criticalHitDamage_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  criticalHitDamage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  criticalHitDamage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  criticalHitDamage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  criticalHitDamage_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  criticalHitDamage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  criticalHitDamage_starts_with?: InputMaybe<Scalars['String']>;
  def?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  def_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  def_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  def_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  def_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  def_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  def_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  def_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  def_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  def_starts_with?: InputMaybe<Scalars['String']>;
  dualAtackChance?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  dualAtackChance_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  dualAtackChance_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  dualAtackChance_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  dualAtackChance_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  dualAtackChance_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  dualAtackChance_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  dualAtackChance_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  dualAtackChance_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  dualAtackChance_starts_with?: InputMaybe<Scalars['String']>;
  effectResistance?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  effectResistance_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  effectResistance_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  effectResistance_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  effectResistance_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  effectResistance_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  effectResistance_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  effectResistance_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  effectResistance_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  effectResistance_starts_with?: InputMaybe<Scalars['String']>;
  effectiveness?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  effectiveness_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  effectiveness_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  effectiveness_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  effectiveness_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  effectiveness_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  effectiveness_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  effectiveness_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  effectiveness_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  effectiveness_starts_with?: InputMaybe<Scalars['String']>;
  hp?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  hp_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  hp_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  hp_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  hp_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  hp_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  hp_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  hp_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  hp_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  hp_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  speed?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  speed_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  speed_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  speed_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  speed_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  speed_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  speed_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  speed_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  speed_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  speed_starts_with?: InputMaybe<Scalars['String']>;
};

/** References CharacterStatus record uniquely */
export type CharacterStatusWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type CharacterUpdateInput = {
  characterSkills?: InputMaybe<CharacterSkillUpdateManyInlineInput>;
  characterStatus?: InputMaybe<CharacterStatusUpdateOneInlineInput>;
  image?: InputMaybe<AssetUpdateOneInlineInput>;
  memoryImprint?: InputMaybe<MemoryImprintUpdateOneInlineInput>;
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type CharacterUpdateManyInlineInput = {
  /** Connect multiple existing Character documents */
  connect?: InputMaybe<Array<CharacterConnectInput>>;
  /** Create and connect multiple Character documents */
  create?: InputMaybe<Array<CharacterCreateInput>>;
  /** Delete multiple Character documents */
  delete?: InputMaybe<Array<CharacterWhereUniqueInput>>;
  /** Disconnect multiple Character documents */
  disconnect?: InputMaybe<Array<CharacterWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Character documents */
  set?: InputMaybe<Array<CharacterWhereUniqueInput>>;
  /** Update multiple Character documents */
  update?: InputMaybe<Array<CharacterUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Character documents */
  upsert?: InputMaybe<Array<CharacterUpsertWithNestedWhereUniqueInput>>;
};

export type CharacterUpdateManyInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type CharacterUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: CharacterUpdateManyInput;
  /** Document search */
  where: CharacterWhereInput;
};

export type CharacterUpdateOneInlineInput = {
  /** Connect existing Character document */
  connect?: InputMaybe<CharacterWhereUniqueInput>;
  /** Create and connect one Character document */
  create?: InputMaybe<CharacterCreateInput>;
  /** Delete currently connected Character document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Character document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Character document */
  update?: InputMaybe<CharacterUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Character document */
  upsert?: InputMaybe<CharacterUpsertWithNestedWhereUniqueInput>;
};

export type CharacterUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: CharacterUpdateInput;
  /** Unique document search */
  where: CharacterWhereUniqueInput;
};

export type CharacterUpsertInput = {
  /** Create document if it didn't exist */
  create: CharacterCreateInput;
  /** Update document if it exists */
  update: CharacterUpdateInput;
};

export type CharacterUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: CharacterUpsertInput;
  /** Unique document search */
  where: CharacterWhereUniqueInput;
};

/** Identifies documents */
export type CharacterWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CharacterWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CharacterWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CharacterWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  characterSkills_every?: InputMaybe<CharacterSkillWhereInput>;
  characterSkills_none?: InputMaybe<CharacterSkillWhereInput>;
  characterSkills_some?: InputMaybe<CharacterSkillWhereInput>;
  characterStatus?: InputMaybe<CharacterStatusWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<AssetWhereInput>;
  memoryImprint?: InputMaybe<MemoryImprintWhereInput>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References Character record uniquely */
export type CharacterWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color';
  css: Scalars['String'];
  hex: Scalars['Hex'];
  rgba: Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: InputMaybe<Scalars['Hex']>;
  rgba?: InputMaybe<RgbaInput>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: InputMaybe<Scalars['ID']>;
  /** Connect document before specified document */
  before?: InputMaybe<Scalars['ID']>;
  /** Connect document at last position */
  end?: InputMaybe<Scalars['Boolean']>;
  /** Connect document at first position */
  start?: InputMaybe<Scalars['Boolean']>;
};

export enum DocumentFileTypes {
  Doc = 'doc',
  Docx = 'docx',
  Html = 'html',
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Pdf = 'pdf',
  Png = 'png',
  Ppt = 'ppt',
  Pptx = 'pptx',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Xls = 'xls',
  Xlsx = 'xlsx'
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: InputMaybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: InputMaybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  __typename?: 'DocumentVersion';
  createdAt: Scalars['DateTime'];
  data?: Maybe<Scalars['Json']>;
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export type Enhancement = {
  __typename?: 'Enhancement';
  effect: Scalars['String'];
  enhancement: Scalars['String'];
  /** The unique identifier */
  id: Scalars['ID'];
  /** System stage field */
  stage: Stage;
};

/** A connection to a list of items. */
export type EnhancementConnection = {
  __typename?: 'EnhancementConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<EnhancementEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type EnhancementCreateInput = {
  effect: Scalars['String'];
  enhancement: Scalars['String'];
};

export type EnhancementCreateWithPositionInput = {
  /** Document to create */
  data: EnhancementCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type EnhancementEdge = {
  __typename?: 'EnhancementEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Enhancement;
};

/** Identifies documents */
export type EnhancementManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<EnhancementWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<EnhancementWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<EnhancementWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  effect?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  effect_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  effect_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  effect_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  effect_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  effect_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  effect_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  effect_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  effect_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  effect_starts_with?: InputMaybe<Scalars['String']>;
  enhancement?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  enhancement_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  enhancement_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  enhancement_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  enhancement_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  enhancement_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  enhancement_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  enhancement_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  enhancement_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  enhancement_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
};

export enum EnhancementOrderByInput {
  EffectAsc = 'effect_ASC',
  EffectDesc = 'effect_DESC',
  EnhancementAsc = 'enhancement_ASC',
  EnhancementDesc = 'enhancement_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type EnhancementUpdateInput = {
  effect?: InputMaybe<Scalars['String']>;
  enhancement?: InputMaybe<Scalars['String']>;
};

export type EnhancementUpdateManyInput = {
  effect?: InputMaybe<Scalars['String']>;
  enhancement?: InputMaybe<Scalars['String']>;
};

export type EnhancementUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: EnhancementUpdateManyInput;
  /** Document search */
  where: EnhancementWhereInput;
};

export type EnhancementUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<EnhancementUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: EnhancementWhereUniqueInput;
};

export type EnhancementUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: EnhancementUpdateInput;
  /** Unique document search */
  where: EnhancementWhereUniqueInput;
};

export type EnhancementUpsertInput = {
  /** Create document if it didn't exist */
  create: EnhancementCreateInput;
  /** Update document if it exists */
  update: EnhancementUpdateInput;
};

export type EnhancementUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<EnhancementUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: EnhancementWhereUniqueInput;
};

export type EnhancementUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: EnhancementUpsertInput;
  /** Unique document search */
  where: EnhancementWhereUniqueInput;
};

/** Identifies documents */
export type EnhancementWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<EnhancementWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<EnhancementWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<EnhancementWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  effect?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  effect_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  effect_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  effect_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  effect_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  effect_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  effect_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  effect_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  effect_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  effect_starts_with?: InputMaybe<Scalars['String']>;
  enhancement?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  enhancement_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  enhancement_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  enhancement_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  enhancement_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  enhancement_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  enhancement_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  enhancement_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  enhancement_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  enhancement_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
};

/** References Enhancement record uniquely */
export type EnhancementWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale'
}

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit?: InputMaybe<ImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: InputMaybe<Scalars['Int']>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: InputMaybe<Scalars['Int']>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: InputMaybe<ImageResizeInput>;
};

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en'
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location';
  distance: Scalars['Float'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type MemoryImprint = {
  __typename?: 'MemoryImprint';
  /** The unique identifier */
  id: Scalars['ID'];
  imprintConcentration?: Maybe<Scalars['String']>;
  imprintRelease?: Maybe<Scalars['String']>;
  position?: Maybe<Asset>;
  /** System stage field */
  stage: Stage;
};


export type MemoryImprintPositionArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type MemoryImprintConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: MemoryImprintWhereUniqueInput;
};

/** A connection to a list of items. */
export type MemoryImprintConnection = {
  __typename?: 'MemoryImprintConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<MemoryImprintEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type MemoryImprintCreateInput = {
  imprintConcentration?: InputMaybe<Scalars['String']>;
  imprintRelease?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<AssetCreateOneInlineInput>;
};

export type MemoryImprintCreateManyInlineInput = {
  /** Create and connect multiple existing MemoryImprint documents */
  create?: InputMaybe<Array<MemoryImprintCreateInput>>;
};

export type MemoryImprintCreateOneInlineInput = {
  /** Create and connect one MemoryImprint document */
  create?: InputMaybe<MemoryImprintCreateInput>;
};

export type MemoryImprintCreateWithPositionInput = {
  /** Document to create */
  data: MemoryImprintCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type MemoryImprintEdge = {
  __typename?: 'MemoryImprintEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: MemoryImprint;
};

/** Identifies documents */
export type MemoryImprintManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<MemoryImprintWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<MemoryImprintWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<MemoryImprintWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  imprintConcentration?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  imprintConcentration_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  imprintConcentration_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  imprintConcentration_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  imprintConcentration_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  imprintConcentration_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  imprintConcentration_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  imprintConcentration_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  imprintConcentration_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  imprintConcentration_starts_with?: InputMaybe<Scalars['String']>;
  imprintRelease?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  imprintRelease_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  imprintRelease_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  imprintRelease_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  imprintRelease_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  imprintRelease_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  imprintRelease_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  imprintRelease_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  imprintRelease_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  imprintRelease_starts_with?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<AssetWhereInput>;
};

export enum MemoryImprintOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ImprintConcentrationAsc = 'imprintConcentration_ASC',
  ImprintConcentrationDesc = 'imprintConcentration_DESC',
  ImprintReleaseAsc = 'imprintRelease_ASC',
  ImprintReleaseDesc = 'imprintRelease_DESC'
}

export type MemoryImprintParent = Character;

export type MemoryImprintParentConnectInput = {
  Character?: InputMaybe<CharacterConnectInput>;
};

export type MemoryImprintParentCreateInput = {
  Character?: InputMaybe<CharacterCreateInput>;
};

export type MemoryImprintParentCreateManyInlineInput = {
  /** Connect multiple existing MemoryImprintParent documents */
  connect?: InputMaybe<Array<MemoryImprintParentWhereUniqueInput>>;
  /** Create and connect multiple existing MemoryImprintParent documents */
  create?: InputMaybe<Array<MemoryImprintParentCreateInput>>;
};

export type MemoryImprintParentCreateOneInlineInput = {
  /** Connect one existing MemoryImprintParent document */
  connect?: InputMaybe<MemoryImprintParentWhereUniqueInput>;
  /** Create and connect one MemoryImprintParent document */
  create?: InputMaybe<MemoryImprintParentCreateInput>;
};

export type MemoryImprintParentUpdateInput = {
  Character?: InputMaybe<CharacterUpdateInput>;
};

export type MemoryImprintParentUpdateManyInlineInput = {
  /** Connect multiple existing MemoryImprintParent documents */
  connect?: InputMaybe<Array<MemoryImprintParentConnectInput>>;
  /** Create and connect multiple MemoryImprintParent documents */
  create?: InputMaybe<Array<MemoryImprintParentCreateInput>>;
  /** Delete multiple MemoryImprintParent documents */
  delete?: InputMaybe<Array<MemoryImprintParentWhereUniqueInput>>;
  /** Disconnect multiple MemoryImprintParent documents */
  disconnect?: InputMaybe<Array<MemoryImprintParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing MemoryImprintParent documents */
  set?: InputMaybe<Array<MemoryImprintParentWhereUniqueInput>>;
  /** Update multiple MemoryImprintParent documents */
  update?: InputMaybe<Array<MemoryImprintParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple MemoryImprintParent documents */
  upsert?: InputMaybe<Array<MemoryImprintParentUpsertWithNestedWhereUniqueInput>>;
};

export type MemoryImprintParentUpdateManyWithNestedWhereInput = {
  Character?: InputMaybe<CharacterUpdateManyWithNestedWhereInput>;
};

export type MemoryImprintParentUpdateOneInlineInput = {
  /** Connect existing MemoryImprintParent document */
  connect?: InputMaybe<MemoryImprintParentWhereUniqueInput>;
  /** Create and connect one MemoryImprintParent document */
  create?: InputMaybe<MemoryImprintParentCreateInput>;
  /** Delete currently connected MemoryImprintParent document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected MemoryImprintParent document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single MemoryImprintParent document */
  update?: InputMaybe<MemoryImprintParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single MemoryImprintParent document */
  upsert?: InputMaybe<MemoryImprintParentUpsertWithNestedWhereUniqueInput>;
};

export type MemoryImprintParentUpdateWithNestedWhereUniqueInput = {
  Character?: InputMaybe<CharacterUpdateWithNestedWhereUniqueInput>;
};

export type MemoryImprintParentUpsertWithNestedWhereUniqueInput = {
  Character?: InputMaybe<CharacterUpsertWithNestedWhereUniqueInput>;
};

export type MemoryImprintParentWhereInput = {
  Character?: InputMaybe<CharacterWhereInput>;
};

export type MemoryImprintParentWhereUniqueInput = {
  Character?: InputMaybe<CharacterWhereUniqueInput>;
};

export type MemoryImprintUpdateInput = {
  imprintConcentration?: InputMaybe<Scalars['String']>;
  imprintRelease?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<AssetUpdateOneInlineInput>;
};

export type MemoryImprintUpdateManyInlineInput = {
  /** Create and connect multiple MemoryImprint component instances */
  create?: InputMaybe<Array<MemoryImprintCreateWithPositionInput>>;
  /** Delete multiple MemoryImprint documents */
  delete?: InputMaybe<Array<MemoryImprintWhereUniqueInput>>;
  /** Update multiple MemoryImprint component instances */
  update?: InputMaybe<Array<MemoryImprintUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple MemoryImprint component instances */
  upsert?: InputMaybe<Array<MemoryImprintUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type MemoryImprintUpdateManyInput = {
  imprintConcentration?: InputMaybe<Scalars['String']>;
  imprintRelease?: InputMaybe<Scalars['String']>;
};

export type MemoryImprintUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: MemoryImprintUpdateManyInput;
  /** Document search */
  where: MemoryImprintWhereInput;
};

export type MemoryImprintUpdateOneInlineInput = {
  /** Create and connect one MemoryImprint document */
  create?: InputMaybe<MemoryImprintCreateInput>;
  /** Delete currently connected MemoryImprint document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single MemoryImprint document */
  update?: InputMaybe<MemoryImprintUpdateWithNestedWhereUniqueInput>;
  /** Upsert single MemoryImprint document */
  upsert?: InputMaybe<MemoryImprintUpsertWithNestedWhereUniqueInput>;
};

export type MemoryImprintUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<MemoryImprintUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: MemoryImprintWhereUniqueInput;
};

export type MemoryImprintUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: MemoryImprintUpdateInput;
  /** Unique document search */
  where: MemoryImprintWhereUniqueInput;
};

export type MemoryImprintUpsertInput = {
  /** Create document if it didn't exist */
  create: MemoryImprintCreateInput;
  /** Update document if it exists */
  update: MemoryImprintUpdateInput;
};

export type MemoryImprintUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<MemoryImprintUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: MemoryImprintWhereUniqueInput;
};

export type MemoryImprintUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: MemoryImprintUpsertInput;
  /** Unique document search */
  where: MemoryImprintWhereUniqueInput;
};

/** Identifies documents */
export type MemoryImprintWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<MemoryImprintWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<MemoryImprintWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<MemoryImprintWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  imprintConcentration?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  imprintConcentration_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  imprintConcentration_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  imprintConcentration_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  imprintConcentration_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  imprintConcentration_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  imprintConcentration_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  imprintConcentration_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  imprintConcentration_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  imprintConcentration_starts_with?: InputMaybe<Scalars['String']>;
  imprintRelease?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  imprintRelease_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  imprintRelease_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  imprintRelease_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  imprintRelease_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  imprintRelease_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  imprintRelease_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  imprintRelease_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  imprintRelease_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  imprintRelease_starts_with?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<AssetWhereInput>;
};

/** References MemoryImprint record uniquely */
export type MemoryImprintWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Create one character */
  createCharacter?: Maybe<Character>;
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<ScheduledRelease>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Delete one character from _all_ existing stages. Returns deleted document. */
  deleteCharacter?: Maybe<Character>;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /**
   * Delete many Character documents
   * @deprecated Please use the new paginated many mutation (deleteManyCharactersConnection)
   */
  deleteManyCharacters: BatchPayload;
  /** Delete many Character documents, return deleted documents */
  deleteManyCharactersConnection: CharacterConnection;
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<ScheduledOperation>;
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<ScheduledRelease>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Publish one character */
  publishCharacter?: Maybe<Character>;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /**
   * Publish many Character documents
   * @deprecated Please use the new paginated many mutation (publishManyCharactersConnection)
   */
  publishManyCharacters: BatchPayload;
  /** Publish many Character documents */
  publishManyCharactersConnection: CharacterConnection;
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<Asset>;
  /** Schedule to publish one character */
  schedulePublishCharacter?: Maybe<Character>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<Asset>;
  /** Unpublish one character from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishCharacter?: Maybe<Character>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Unpublish one character from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishCharacter?: Maybe<Character>;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Unpublish many Character documents
   * @deprecated Please use the new paginated many mutation (unpublishManyCharactersConnection)
   */
  unpublishManyCharacters: BatchPayload;
  /** Find many Character documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyCharactersConnection: CharacterConnection;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Update one character */
  updateCharacter?: Maybe<Character>;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /**
   * Update many characters
   * @deprecated Please use the new paginated many mutation (updateManyCharactersConnection)
   */
  updateManyCharacters: BatchPayload;
  /** Update many Character documents */
  updateManyCharactersConnection: CharacterConnection;
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<ScheduledRelease>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Upsert one character */
  upsertCharacter?: Maybe<Character>;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationCreateCharacterArgs = {
  data: CharacterCreateInput;
};


export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationDeleteCharacterArgs = {
  where: CharacterWhereUniqueInput;
};


export type MutationDeleteManyAssetsArgs = {
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyCharactersArgs = {
  where?: InputMaybe<CharacterManyWhereInput>;
};


export type MutationDeleteManyCharactersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CharacterManyWhereInput>;
};


export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput;
};


export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationPublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishCharacterArgs = {
  to?: Array<Stage>;
  where: CharacterWhereUniqueInput;
};


export type MutationPublishManyAssetsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyCharactersArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<CharacterManyWhereInput>;
};


export type MutationPublishManyCharactersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<CharacterManyWhereInput>;
};


export type MutationSchedulePublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishCharacterArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: CharacterWhereUniqueInput;
};


export type MutationScheduleUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: AssetWhereUniqueInput;
};


export type MutationScheduleUnpublishCharacterArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: CharacterWhereUniqueInput;
};


export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: AssetWhereUniqueInput;
};


export type MutationUnpublishCharacterArgs = {
  from?: Array<Stage>;
  where: CharacterWhereUniqueInput;
};


export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyCharactersArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<CharacterManyWhereInput>;
};


export type MutationUnpublishManyCharactersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<CharacterManyWhereInput>;
};


export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpdateCharacterArgs = {
  data: CharacterUpdateInput;
  where: CharacterWhereUniqueInput;
};


export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: AssetUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyCharactersArgs = {
  data: CharacterUpdateManyInput;
  where?: InputMaybe<CharacterManyWhereInput>;
};


export type MutationUpdateManyCharactersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: CharacterUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CharacterManyWhereInput>;
};


export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput;
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpsertCharacterArgs = {
  upsert: CharacterUpsertInput;
  where: CharacterWhereUniqueInput;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
  /** The Stage of an object */
  stage: Stage;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  __typename?: 'Query';
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve a single character */
  character?: Maybe<Character>;
  /** Retrieve document version */
  characterVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple characters */
  characters: Array<Character>;
  /** Retrieve multiple characters using the Relay connection interface */
  charactersConnection: CharacterConnection;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection;
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection;
  /** Retrieve a single user */
  user?: Maybe<User>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
};


export type QueryAssetArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AssetWhereUniqueInput;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAssetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryCharacterArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: CharacterWhereUniqueInput;
};


export type QueryCharacterVersionArgs = {
  where: VersionWhereInput;
};


export type QueryCharactersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<CharacterOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<CharacterWhereInput>;
};


export type QueryCharactersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<CharacterOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<CharacterWhereInput>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
  locales?: Array<Locale>;
  stage?: Stage;
};


export type QueryScheduledOperationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledOperationWhereUniqueInput;
};


export type QueryScheduledOperationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledOperationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledReleaseArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledReleaseWhereUniqueInput;
};


export type QueryScheduledReleasesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryScheduledReleasesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryUserArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA';
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText';
  /** Returns HTMl representation */
  html: Scalars['String'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** Returns AST representation */
  raw: Scalars['RichTextAST'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
};

/** Scheduled Operation system model */
export type ScheduledOperation = Node & {
  __typename?: 'ScheduledOperation';
  affectedDocuments: Array<ScheduledOperationAffectedDocument>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Operation description */
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledOperation>;
  /** Operation error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars['Json'];
  /** The release this operation is scheduled for */
  release?: Maybe<ScheduledRelease>;
  /** System stage field */
  stage: Stage;
  /** operation Status */
  status: ScheduledOperationStatus;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledOperationAffectedDocument = Asset | Character;

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  __typename?: 'ScheduledOperationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledOperationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  __typename?: 'ScheduledOperationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ScheduledOperation;
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<ScheduledOperationStatus>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<ScheduledOperationStatus>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationConnectInput>>;
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<ScheduledOperationStatus>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<ScheduledOperationStatus>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Node & {
  __typename?: 'ScheduledRelease';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Release description */
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledRelease>;
  /** Release error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Whether scheduled release should be run */
  isActive: Scalars['Boolean'];
  /** Whether scheduled release is implicit */
  isImplicit: Scalars['Boolean'];
  /** Operations to run with this release */
  operations: Array<ScheduledOperation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Release date and time */
  releaseAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: Stage;
  /** Release Status */
  status: ScheduledReleaseStatus;
  /** Release Title */
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  __typename?: 'ScheduledReleaseConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledReleaseEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledReleaseCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
};

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  __typename?: 'ScheduledReleaseEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ScheduledRelease;
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isImplicit?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<ScheduledReleaseStatus>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<ScheduledReleaseStatus>>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  IsImplicitAsc = 'isImplicit_ASC',
  IsImplicitDesc = 'isImplicit_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReleaseAtAsc = 'releaseAt_ASC',
  ReleaseAtDesc = 'releaseAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledReleaseUpdateInput = {
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>;
  /** Create and connect multiple ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
  /** Delete multiple ScheduledRelease documents */
  delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Update multiple ScheduledRelease documents */
  update?: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ScheduledRelease documents */
  upsert?: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput;
  /** Document search */
  where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
  /** Delete currently connected ScheduledRelease document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single ScheduledRelease document */
  update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduledRelease document */
  upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ScheduledReleaseUpdateInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput;
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isImplicit?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<ScheduledReleaseStatus>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<ScheduledReleaseStatus>>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED'
}

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Combined = 'COMBINED',
  Localization = 'LOCALIZATION'
}

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** User system model */
export type User = Node & {
  __typename?: 'User';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
  /** The username */
  name: Scalars['String'];
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
};


/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: UserWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<UserEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: User;
};

/** System User Kind */
export enum UserKind {
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<UserKind>>;
  /** All values that are not equal to given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<UserKind>>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  picture_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
};

export enum UserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserConnectInput>>;
  /** Disconnect multiple User documents */
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<UserKind>>;
  /** All values that are not equal to given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<UserKind>>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  picture_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Version = {
  __typename?: 'Version';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export type VersionWhereInput = {
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export enum _FilterKind {
  And = 'AND',
  Not = 'NOT',
  Or = 'OR',
  Contains = 'contains',
  ContainsAll = 'contains_all',
  ContainsNone = 'contains_none',
  ContainsSome = 'contains_some',
  EndsWith = 'ends_with',
  Eq = 'eq',
  EqNot = 'eq_not',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  Lt = 'lt',
  Lte = 'lte',
  NotContains = 'not_contains',
  NotEndsWith = 'not_ends_with',
  NotIn = 'not_in',
  NotStartsWith = 'not_starts_with',
  RelationalEvery = 'relational_every',
  RelationalNone = 'relational_none',
  RelationalSingle = 'relational_single',
  RelationalSome = 'relational_some',
  Search = 'search',
  StartsWith = 'starts_with'
}

export enum _MutationInputFieldKind {
  Enum = 'enum',
  Relation = 'relation',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Scalar = 'scalar',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Delete = 'delete',
  DeleteMany = 'deleteMany',
  Publish = 'publish',
  PublishMany = 'publishMany',
  SchedulePublish = 'schedulePublish',
  ScheduleUnpublish = 'scheduleUnpublish',
  Unpublish = 'unpublish',
  UnpublishMany = 'unpublishMany',
  Update = 'update',
  UpdateMany = 'updateMany',
  Upsert = 'upsert'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  Many = 'many',
  One = 'one'
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Combined = 'combined',
  Localization = 'localization'
}

export type CharactersSearchQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']>;
}>;


export type CharactersSearchQuery = { __typename?: 'Query', characters: Array<{ __typename?: 'Character', name: string, slug?: string | null, characterStatus: { __typename?: 'CharacterStatus', atk: string, hp: string, def: string, criticalHitChance: string, criticalHitDamage: string, dualAtackChance: string, effectiveness: string, effectResistance: string, speed: string }, memoryImprint?: { __typename?: 'MemoryImprint', imprintRelease?: string | null, imprintConcentration?: string | null, position?: { __typename?: 'Asset', url: string } | null } | null, characterSkills: Array<{ __typename?: 'CharacterSkill', title: string, description: string, enhancement: Array<string>, icon?: { __typename?: 'Asset', url: string } | null }>, image?: { __typename?: 'Asset', url: string } | null }> };
