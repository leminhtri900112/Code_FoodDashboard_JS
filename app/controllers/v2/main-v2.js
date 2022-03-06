import { DanhSachMonAn } from "../../models/v2/DanhSachMonAn.js";
import { MonAn } from "../../models/v1/MonAn-v1.js";

const dsMonAn = new DanhSachMonAn();

//Render bảng dữ liệu
let renderTable = (ds) => {
  let tbody = document.getElementById("tbodyFood");
  let content = "";
  ds.map((mon) => {
    content += `
        <tr>
            <td>${mon.maMon}</td>
            <td>${mon.tenMon}</td>
            <td>${mon.loaiMon == "loai1" ? "Chay" : "Mặn"}</td>
            <td>${mon.gia}</td>
            <td>${mon.khuyenMai * 100 + "%"}</td>
            <td>${mon.tinhGiaKM()}</td>
            <td>${mon.tinhTrang == 0 ? "Hết" : "Còn"}</td>
            <td>
                <button class="btn btn-danger" data-toggle="modal" data-target="#exampleModal" onclick = "suaMon(${
                  mon.maMon
                })" >Sửa</button>
                <button class="btn btn-success" onclick="xoaMon(${
                  mon.maMon
                })">Xóa</button>
            </td>
        </tr>
      `;
  });

  tbody.innerHTML = content;
};

// Xóa món ăn
let xoaMon = (maMon) => {
  // console.log(maMon);
  dsMonAn.xoaMon(maMon);
  renderTable(dsMonAn.mangMonAn);
};
window.xoaMon = xoaMon;

let suaMon = (maMon) => {
  // console.log(maMon);
  document.getElementById("btnCapNhat").style.display = "block";
  document.getElementById("btnThemMon").style.display = "none";
  let viTri = dsMonAn.timViTri(maMon);
  let mon = dsMonAn.mangMonAn[viTri];
  document.getElementById("foodID").readOnly = true;
  document.getElementById("foodID").value = mon.maMon;
  document.getElementById("tenMon").value = mon.tenMon;
  document.getElementById("loai").value = mon.loaiMon;
  document.getElementById("giaMon").value = mon.gia;
  document.getElementById("khuyenMai").value = mon.khuyenMai;
  document.getElementById("tinhTrang").value = mon.tinhTrang;
  document.getElementById("hinhMon").value = mon.hinhAnh;
  document.getElementById("moTa").value = mon.moTa;

  //   dsMonAn.suaMon(monAn);
  //   renderTable(dsMonAn.mangMonAn);
};
window.suaMon = suaMon;

// Cập nhật món ăn
document.getElementById("btnCapNhat").addEventListener("click", () => {
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

  dsMonAn.capNhatMon(monAn);
  renderTable(dsMonAn.mangMonAn);
});

//Thêm món ăn
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

  dsMonAn.themMonAn(monAn);
  renderTable(dsMonAn.mangMonAn);
});

document.getElementById("btnThem").addEventListener("click", () => {
  document.getElementById("foodForm").reset();
  document.getElementById("foodID").readOnly = false;
  document.getElementById("btnCapNhat").style.display = "none";
  document.getElementById("btnThemMon").style.display = "block";
});
