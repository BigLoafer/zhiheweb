import { getUrlParams } from '../utils';

//Guid
// Generate four random hex digits.
function S4() {
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}
// Generate a pseudo-GUID by concatenating random hexadecimal.
function guid() {
  return (
    S4() +
    S4() +
    '-' +
    S4() +
    '-' +
    S4() +
    '-' +
    S4() +
    '-' +
    S4() +
    S4() +
    S4() +
    '.M'
  );
}

function getAjaxCommonParams() {
  let p_id = getUrlParams('pid');
  // let p_o = getUrlParams('p_o');
  // let p_i = getUrlParams('p_i');
  // let p_c = getUrlParams('p_c');
  let p_c = 'bba23b9a-81e9-4b54-aef3-d61393aabbcc';
  // let p_u = getUrlParams('p_u'); //userid
  // let p_s = getUrlParams('p_s'); //sessionid
  // let p_t = getUrlParams('p_t'); //token
  // let r_c = getUrlParams('r_c');

  let ajaxCommonParams = {};
  // if (p_o) {
  //   ajaxCommonParams.p_o = p_o;
  // }
  // if (p_i) {
  //   ajaxCommonParams.p_i = p_i;
  // }
  if (p_c) {
    ajaxCommonParams.p_c = p_c;
  }

  if (p_id) {
    ajaxCommonParams.pid = p_id;
  }
  // if (p_u) {
  //   ajaxCommonParams.p_u = p_u;
  // }
  // if (p_s) {
  //   ajaxCommonParams.p_s = p_s;
  // }
  // if (p_t) {
  //   ajaxCommonParams.p_t = p_t;
  // }
  // if (r_c) {
  //   ajaxCommonParams.r_c = r_c;
  // }
  // ajaxCommonParams.r_i = guid();
  return ajaxCommonParams;
}
function getMethodParams() {
  return getAjaxCommonParams();
}
function postMethodParams() {
  let ajaxCommonParams = getAjaxCommonParams();
  let ajaxCommonStrArr = Object.keys(ajaxCommonParams).map((item, index) => {
    if (index == 0) {
      return `${item}=${ajaxCommonParams[item]}`;
    } else {
      return `&${item}=${ajaxCommonParams[item]}`;
    }
  });

  let ajaxCommonStr = '';
  ajaxCommonStrArr.forEach(item => {
    ajaxCommonStr += item;
  });
  return ajaxCommonStr;
}

export { getMethodParams, postMethodParams };
