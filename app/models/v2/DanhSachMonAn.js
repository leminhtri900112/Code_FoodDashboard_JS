export class DanhSachMonAn {
  constructor() {
    this.mangMonAn = [];
  }

  themMonAn = (mon) => {
    this.mangMonAn = [...this.mangMonAn, mon];
  };

  timViTri = (maMon) => {
    return this.mangMonAn.findIndex((mon) => {
      return mon.maMon == maMon;
    });
  };

  xoaMon = (maMon) => {
    let viTri = this.timViTri(maMon);
    viTri !== -1 && this.mangMonAn.splice(viTri, 1);
  };

  capNhatMon = (mon) => {
    let viTri = this.timViTri(mon.maMon);
    viTri !== -1 && (this.mangMonAn[viTri] = mon);
  };
}
