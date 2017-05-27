const domain = 'https://lab.feorathailand.com/api/';

export default {
  product: domain + 'product/',
  products: domain + 'products/',
  news: domain + 'news/',
  province: domain + 'addresses/provinces/',

  district: domain + 'addresses/province/',
  end_district: '/districts',

  subdistrict: domain + 'addresses/district/',
  end_subdistrict: '/subdistricts',
};
