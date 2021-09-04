const home = require('../../support/page_objects/page_objects');

describe('Access Bhinneka', () => {
    beforeEach(() => {
      home.web.accessSite();
    })
  
    it('Open website', () => {
        home.web.seeContent()
    })

    it('daftar kategori', () => {
      home.web.ignoreError();
      home.web.daftarpencarian();
    })

    it('Create Order Barang', () => {
      home.web.ignoreError();
      home.web.datapencarian();
    })

  })