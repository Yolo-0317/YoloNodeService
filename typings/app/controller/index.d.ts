// This file is created by egg-ts-helper@1.27.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportExportArticlePdf from '../../../app/controller/exportArticlePdf';
import ExportHome from '../../../app/controller/home';

declare module 'egg' {
  interface IController {
    exportArticlePdf: ExportExportArticlePdf;
    home: ExportHome;
  }
}
