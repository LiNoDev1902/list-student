const socket = io();

function save_info() {
    let name_val = document.getElementById("name").value;
    let mssv_val = document.getElementById("mssv").value;
    let ngaysinh_val = document.getElementById("ngaysinh").value;
    let email_val = document.getElementById("email").value;
    let dienthoai_val = document.getElementById("dienthoai").value;
    let tinh_val = document.getElementById("tinh").value;
    let xa_val = document.getElementById("xa").value;



    let info = {
        "name": name_val,
        "mssv": mssv_val,
        "ngaysinh": ngaysinh_val,
        "email": email_val,
        "dienthoai": dienthoai_val,
        "tinh": tinh_val,
        "xa": xa_val
    };

    let info_str = JSON.stringify(info);
    // document.getElementById("test_code").innerHTML = info_str;

    socket.emit("save_info", info_str);
}