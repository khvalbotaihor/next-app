// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface IArticleFields {
  /** Title */
  title: string;

  /** slug */
  slug?: string | undefined;

  /** Description */
  description?: string | undefined;

  /** Content */
  content: Document;

  /** Button text */
  action?: string | undefined;
}

export interface IArticle extends Entry<IArticleFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "article";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IMainPageFields {
  /** Title */
  title?: string | undefined;

  /** Description */
  description?: Document | undefined;

  /** Background */
  background?: Asset | undefined;
}

export interface IMainPage extends Entry<IMainPageFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "mainPage";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export type CONTENT_TYPE = "article" | "mainPage";

export type LOCALE_CODE = "en-US";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-US";
