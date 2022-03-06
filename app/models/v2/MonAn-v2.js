export class MonAn {
  constructor(
    _maMon,
    _tenMon,
    _loaiMon,
    _gia,
    _khuyenMai,
    _tinhTrang,
    _hinhAnh,
    _moTa
  ) {
    this.maMon = _maMon;
    this.tenMon = _tenMon;
    this.loaiMon = _loaiMon;
    this.gia = _gia;
    this.khuyenMai = _khuyenMai;
    this.tinhTrang = _tinhTrang;
    this.hinhAnh = _hinhAnh;
    this.moTa = _moTa;
  }

  tinhGiaKM() {
    return this.gia - this.gia * this.khuyenMai;
  }
}
