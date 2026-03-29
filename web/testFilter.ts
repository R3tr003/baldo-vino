import { StructureBuilder } from 'sanity/structure';

export const deskStructure = (S: StructureBuilder) =>
  S.documentTypeList('menuItem')
    .title('Menu Ristorante')
    .filter('_type == "menuItem" && cantina == "baldo-vino"');
