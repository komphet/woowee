const domain = 'https://lab.feorathailand.com/api/';

export default {
  product: domain + 'product/',
  products: domain + 'products/',
  news: domain + 'news/',
  province: domain + 'addresses/provinces/',
  district: domain + 'dresses/province/',
  end_district: '/districts',
  subdistrict: domain + 'addresses/district/{districtId}/',
  end_subdistrict: domain + '/subdistricts',
};
