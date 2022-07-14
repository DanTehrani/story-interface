export type BookmarkPreview = {};

export type Bookmark = {
  arweveTxId: string;
  title: string;
  url: string;
};

export type BookmarkInput = {
  url: string;
};

export type OrgSettings = {};

export type OrgSettingsInput = {
  name: string;
  users: string[];
  colorCode: string;
};

export type LocalStorageTransaction = {
  id: string;
  url: string;
};
