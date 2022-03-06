import { MonAn } from "../../models/v1/MonAn-v1.js";

document.getElementById("btnThemMon").addEventListener("click", () => {
  let maMon = document.getElementById("foodID").value;
  let tenMon = document.getElementById("tenMon").value;
  let loaiMon = document.getElementById("loai").value;
  let gia = document.getElementById("giaMon").value;
  let khuyenMai = document.getElementById("khuyenMai").value;
  let tinhTrang = document.getElementById("tinhTrang").value;
  let hinhAnh = document.getElementById("hinhMon").value;
  let moTa = document.getElementById("moTa").value;

  let monAn = new MonAn(
    maMon,
    tenMon,
    loaiMon,
    gia,
    khuyenMai,
    tinhTrang,
    hinhAnh,
    moTa
  );

  document.getElementById("imgMonAn").src = monAn.hinhAnh;
  document.getElementById("spMa").innerText = monAn.maMon;
  document.getElementById("spTenMon").innerText = monAn.tenMon;
  document.getElementById("spLoaiMon").innerText =
    monAn.loaiMon == "loai1" ? "Chay" : "Mặn";
  document.getElementById("spGia").innerText = monAn.gia;
  document.getElementById("spKM").innerText = monAn.khuyenMai * 100 + "%";
  document.getElementById("spGiaKM").innerText = monAn.tinhGiaKM();
  document.getElementById("spTT").innerText =
    monAn.tinhTrang == 0 ? "Hết" : "Còn";
  document.getElementById("pMoTa").innerText = monAn.moTa;
});
