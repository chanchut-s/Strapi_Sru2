import type { Schema, Attribute } from '@strapi/strapi';

export interface ServicesToolOrProduct extends Schema.Component {
  collectionName: 'components_services_tool_or_products';
  info: {
    displayName: 'Add-Item';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images'>;
    detail: Attribute.Blocks;
    name: Attribute.String;
    file: Attribute.Media<'files'>;
    file_name: Attribute.String;
  };
}

export interface ServicesService extends Schema.Component {
  collectionName: 'components_services_services';
  info: {
    displayName: 'Service';
    icon: 'check';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    text_th: Attribute.String;
    detail: Attribute.Blocks;
  };
}

export interface ServicesProduct extends Schema.Component {
  collectionName: 'components_services_products';
  info: {
    displayName: 'product';
    icon: 'shoppingCart';
    description: '';
  };
  attributes: {
    detail: Attribute.Blocks;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Attribute.String;
  };
}

export interface ServicesMenu extends Schema.Component {
  collectionName: 'components_services_menus';
  info: {
    displayName: 'title';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    text_th: Attribute.String;
    detail: Attribute.Blocks;
    Add_Item: Attribute.Component<'services.tool-or-product', true>;
    Add_File: Attribute.Component<'services.file', true>;
    video: Attribute.Media<'videos'>;
  };
}

export interface ServicesFile extends Schema.Component {
  collectionName: 'components_services_files';
  info: {
    displayName: 'File';
    icon: 'folder';
  };
  attributes: {
    file_name: Attribute.String;
    file: Attribute.Media<'files'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'services.tool-or-product': ServicesToolOrProduct;
      'services.service': ServicesService;
      'services.product': ServicesProduct;
      'services.menu': ServicesMenu;
      'services.file': ServicesFile;
    }
  }
}
