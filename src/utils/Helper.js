/* eslint-disable no-undef */
import { renderToString } from "react-dom/server";

export const convertToCurrency = (num) => {
  return num.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
};
export const convertToCurrencyDot = (num) => {
  return num?.toString()?.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
};
export const getValueCurrency = (ref) => {
  let newVal = ref.current.inputElement.value;

  return convertToNumber(newVal);
};
export const setValueCurrency = (ref, val) => {
  ref.current.inputElement.value = val;
};

export const handleScroll = (condition, className) => {
  if (condition) {
    // eslint-disable-next-line no-undef
    if ($(document).height() > $(window).height()) {
      // eslint-disable-next-line vars-on-top
      // eslint-disable-next-line no-undef
      const scrollTop = $("html").scrollTop()
        ? $("html").scrollTop()
        : $("body").scrollTop();
      // eslint-disable-next-line no-undef
      $("html").addClass(className).css("top", -scrollTop);
    }
  } else {
    // eslint-disable-next-line no-undef
    const scrollTop = parseInt($("html").css("top"), 10);
    // eslint-disable-next-line no-undef
    $("html").removeClass(className);
    // eslint-disable-next-line no-undef
    $("html,body").scrollTop(-scrollTop);
  }
};

export const createIdByTime = () => Date.now();

export const removeAccents = (str) => {
  let newStr = str;
  newStr = newStr.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  newStr = newStr.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  newStr = newStr.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  newStr = newStr.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  newStr = newStr.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  newStr = newStr.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  newStr = newStr.replace(/đ/g, "d");
  newStr = newStr.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "a");
  newStr = newStr.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "e");
  newStr = newStr.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "i");
  newStr = newStr.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "o");
  newStr = newStr.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "u");
  newStr = newStr.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "y");
  newStr = newStr.replace(/Đ/g, "d");
  newStr = newStr.toUpperCase();
  return newStr;
};

export const checkTypeKeyDown = (value, type, keyCode) => {
  let res = true;

  switch (type) {
    case "money":
      const isExistsDot = value.toString().indexOf(".") > -1;
      if (
        (keyCode !== 190 && // dot(.)
          keyCode > 31 &&
          (keyCode < 48 || keyCode > 57)) ||
        (keyCode === 190 && isExistsDot) // not enter '.' > 1
      ) {
        res = false;
      }
      break;
    case "number":
      if (keyCode > 31 && (keyCode < 48 || keyCode > 57)) {
        res = false;
      }
      break;
    default:
      res = true;
  }

  return res;
};

export const exportPDF = (components, size = "k80", nameFile = "Report") => {
  const element = renderToString(components);

  if (document.getElementById("printElement")) {
    document.getElementById("printElement").remove();
  }
  if (document.getElementById("printFrame")) {
    document.getElementById("printFrame").remove();
  }

  const printElement = document.createElement("div");
  const iframe = document.createElement("iframe");

  printElement.innerHTML = element;
  printElement.id = "printElement";
  printElement.style.display = "none";
  // printElement.style.width = constants.SIZE_PRINT[size].width

  iframe.id = "printFrame";
  iframe.style.display = "none";
  // iframe.style.width = constants.SIZE_PRINT[size].width

  document.body.appendChild(printElement);
  document.body.appendChild(iframe);

  const imagePDF = `
    <!DOCTYPE HTML>
    <html>
      <head>
        <title>PDF Iframe</title>
      </head>
      <body style="margin: 0 !important; padding: 0 !important; color: black !important">
        <div style="width: 100%">
          ${document.getElementById("printElement").innerHTML}
          <img src='' />
        </div>
        <footer style="page-break-after: always; font-size: 1px">.</footer>           
      <body/>
    </html>
  `;

  iframe.contentWindow.document.open();
  iframe.contentWindow.document.write(imagePDF);
  iframe.contentWindow.document.close();

  iframe.onload = () => {
    if (iframe.contentWindow.parent) {
      const arrStyleSheets = document
        .getElementsByTagName("head")[0]
        .getElementsByTagName("style");

      for (let i = 0; i < arrStyleSheets.length; i += 1) {
        iframe.contentWindow.document.head.appendChild(
          arrStyleSheets[i].cloneNode(true)
        );
      }
    }

    const settingStyle = `
      @media print {
        body { 
          min-width: unset !important;
          -webkit-print-color-adjust: exact!important;
          color-adjust: exact!important;
        }
        .paper {
          page-break-inside: avoid;
        }
      }
    `;

    const style = document.createElement("style");
    style.innerHTML = settingStyle;

    iframe.contentWindow.document.head.appendChild(style);

    const pdfBackup = iframe.contentWindow.parent.document.title;
    iframe.contentWindow.parent.document.title = `${nameFile}.pdf`;
    iframe.contentWindow.focus();
    iframe.contentWindow.print();

    setTimeout(() => {
      // remove iframe
      iframe.contentWindow.parent.document.title = pdfBackup;
      document.getElementById("printElement").remove();
      document.getElementById("printFrame").remove();
    }, 0);
  };
};

export var slug = function (str) {
  str = str.replace(/^\s+|\s+$/g, ""); // trim
  str = str.toLowerCase();

  // remove accents, swap ñ for n, etc
  var from =
    "ÁÄÂÀÃÅČÇĆĎÉĚËÈÊẼĔȆĞÍÌÎÏİŇÑÓÖÒÔÕØŘŔŠŞŤÚŮÜÙÛÝŸŽáäâàãåčçćďéěëèêẽĕȇğíìîïıňñóöòôõøðřŕšşťúůüùûýÿžþÞĐđßÆa·/_,:;";
  var to =
    "AAAAAACCCDEEEEEEEEGIIIIINNOOOOOORRSSTUUUUUYYZaaaaaacccdeeeeeeeegiiiiinnooooooorrsstuuuuuyyzbBDdBAa------";
  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
  }

  str = str
    .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
    .replace(/\s+/g, "-") // collapse whitespace and replace by -
    .replace(/-+/g, "-"); // collapse dashes

  return str;
};

export const specialTrim = (str) => {
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "a");
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "e");
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "i");
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "o");
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "u");
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "y");
  str = str.replace(/Đ/g, "d");
  // clear special character
  str = str.replace(/,|\./g, "");
  //
  str = str.toUpperCase();
  return str;
};
