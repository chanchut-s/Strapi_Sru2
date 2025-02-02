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

export interface ContactPhone extends Schema.Component {
  collectionName: 'components_contact_phones';
  info: {
    displayName: 'phone';
    icon: 'phone';
  };
  attributes: {
    phone_number: Attribute.String;
  };
}

export interface ContactMap extends Schema.Component {
  collectionName: 'components_contact_maps';
  info: {
    displayName: 'map';
    icon: 'picture';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ContactEmail extends Schema.Component {
  collectionName: 'components_contact_emails';
  info: {
    displayName: 'email';
    icon: 'envelop';
  };
  attributes: {
    email: Attribute.Email;
  };
}

export interface ContactAddress extends Schema.Component {
  collectionName: 'components_contact_address_s';
  info: {
    displayName: 'address ';
    icon: 'house';
  };
  attributes: {
    address: Attribute.Text;
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
      'contact.phone': ContactPhone;
      'contact.map': ContactMap;
      'contact.email': ContactEmail;
      'contact.address': ContactAddress;
    }
  }
}
