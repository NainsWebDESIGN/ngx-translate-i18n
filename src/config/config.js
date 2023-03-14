var _DEFAULT = {
  // 預設語系
  LANG: "zh-tw",
};

// 讀取站台config檔案資料

try {
  let lang = localStorage.getItem("reloadLanguage"),
    errorArr = [null, undefined, NaN, "null", "undefined", "NaN"];
  if (errorArr.indexOf(lang) >= 0) {
    _DEFAULT.LANG = Default_lang;
  } else {
    _DEFAULT.LANG = lang;
    localStorage.removeItem("reloadLanguage");
  }
} catch (e) {}
