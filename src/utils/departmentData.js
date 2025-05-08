// utils/departmentData.js
import kominfo from "./kominfo.json";
import ppsdm from "./ppsdm.json";
import ristek from "./ristek.json";
import advokasi from "./advokasi.json";
import bph from "./bph.json";

// Pastikan key sama persis dengan parameter URL
const allDepartments = {
  kominfo, // match dengan '/department/kominfo'
  ppsdm, // match dengan '/department/ppsdm'
  ristek, // match dengan '/department/ristek'
  advokasi,
  bph,
};

export default allDepartments;
