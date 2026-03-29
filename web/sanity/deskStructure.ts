import type { StructureBuilder } from 'sanity/structure';

export const deskStructure = (S: StructureBuilder) =>
  S.list()
    .title('Gestione Contenuti')
    .items([
      // 1. GLOBALE / SITO WEB
      S.listItem()
        .title('Sito Web Globale')
        .child(
          S.list()
            .title('Impostazioni Globali')
            .items([
              S.listItem()
                .title('Homepage')
                .child(
                  S.document()
                    .title('Homepage')
                    .schemaType('homepage')
                    .documentId('homepage') // ID Fisso
                ),
              S.divider(),
              S.listItem()
                .title('Pagine Condivise (Eventi, Palazzo..)')
                .child(
                  S.documentTypeList('genericPage').title('Pagine Condivise')
                ),
            ])
        ),
      
      S.divider(),

      // 2. BALDO VINO
      S.listItem()
        .title('Ristorante Baldo Vino')
        .child(
          S.list()
            .title('Area Baldo Vino')
            .items([
              S.listItem()
                .title('Pagina Presentazione')
                .child(
                  S.document()
                    .title('Presentazione Ristorante')
                    .schemaType('venuePage')
                    .documentId('page-baldo-vino') // ID Fisso
                ),
              S.listItem()
                .title('Menu Baldo Vino')
                .child(
                  S.documentTypeList('menuItem')
                    .title('Menu Ristorante')
                    .filter('_type == "menuItem" && cantina == "baldo-vino"')
                    .params({ cantina: 'baldo-vino' })
                    .initialValueTemplates([
                      S.initialValueTemplateItem('menuItem', { cantina: 'baldo-vino' })
                    ])
                ),
            ])
        ),

      S.divider(),

      // 3. BIBENDUM
      S.listItem()
        .title('Bistrot Bibendum')
        .child(
          S.list()
            .title('Area Bibendum')
            .items([
              S.listItem()
                .title('Pagina Presentazione')
                .child(
                  S.document()
                    .title('Presentazione Bistrot')
                    .schemaType('venuePage')
                    .documentId('page-bibendum') // ID Fisso
                ),
              S.listItem()
                .title('Menu Bibendum')
                .child(
                  S.documentTypeList('menuItem')
                    .title('Menu Bistrot')
                    .filter('_type == "menuItem" && cantina == "bibendum"')
                    .params({ cantina: 'bibendum' })
                    .initialValueTemplates([
                      S.initialValueTemplateItem('menuItem', { cantina: 'bibendum' })
                    ])
                ),
            ])
        ),

      S.divider(),

      // 4. CANTINA
      S.listItem()
        .title('Cantina & Vini')
        .child(
          S.list()
            .title('Gestione Cantina')
            .items([
              S.listItem()
                .title('Vini Baldo Vino')
                .child(
                  S.documentTypeList('wine')
                    .title('Vini Gourmet')
                    .filter('_type == "wine" && cantina == "baldo-vino"')
                    .params({ cantina: 'baldo-vino' })
                    .initialValueTemplates([
                      S.initialValueTemplateItem('wine', { cantina: 'baldo-vino' })
                    ])
                ),
              S.listItem()
                .title('Vini Bibendum')
                .child(
                  S.documentTypeList('wine')
                    .title('Vini Bistrot')
                    .filter('_type == "wine" && cantina == "bibendum"')
                    .params({ cantina: 'bibendum' })
                    .initialValueTemplates([
                      S.initialValueTemplateItem('wine', { cantina: 'bibendum' })
                    ])
                ),
              S.divider(),
              S.listItem()
                .title('Tutti i Vini')
                .child(
                  S.documentTypeList('wine').title('Catalogo Completo')
                ),
            ])
        ),
        
      // Nascondo dalla root list i tipi che abbiamo già organizzato manualmente
      // per evitare duplicati in fondo al menu.
      ...S.documentTypeListItems().filter(
        (listItem) => !['homepage', 'venuePage', 'genericPage', 'menuItem', 'wine', 'venue'].includes(listItem.getId() as string)
      ),
    ]);
