const socket = io();

socket.on("student_list1", (msg) => {
    //    document.getElementById("test_code").innerHTML = msg;
    let data_str = "";
    msg_object = JSON.parse(msg);
    for (let i = 0; i < msg_object.length; i++) {
        let row = "<tr>" + "<td>" + msg_object[i].mssv + "</td>" + "<td>" + msg_object[i].name + "</td>" + "<td>" + msg_object[i].ngaysinh + "</td>" + "<td>" + msg_object[i].email + "</td>" + "<td>" + msg_object[i].dienthoai + "</td>" + "<td>" + msg_object[i].tinh + "</td>" + "<td>" + msg_object[i].xa + "</td>" + "</tr>";
        data_str += row;
    }

    document.getElementById("table_name").innerHTML = data_str;
});


socket.on("student_list2", (msg) => {
    //    document.getElementById("test_code").innerHTML = msg;
    let data_str = "";
    msg_object = JSON.parse(msg);
    for (let i = 0; i < msg_object.length; i++) {
        let row = "<tr>" + "<td>" + msg_object[i].mssv + "</td>" + "<td>" + msg_object[i].name + "</td>" + "<td>" + msg_object[i].ngaysinh + "</td>" + "<td>" + msg_object[i].email + "</td>" + "<td>" + msg_object[i].dienthoai + "</td>" + "<td>" + msg_object[i].tinh + "</td>" + "<td>" + msg_object[i].xa + "</td>" + "</tr>";
        data_str += row;
    }

    document.getElementById("table_tinh").innerHTML = data_str;
});

socket.on("student_list3", (msg) => {
    //    document.getElementById("test_code").innerHTML = msg;
    let data_str = "";
    msg_object = JSON.parse(msg);
    for (let i = 0; i < msg_object.length; i++) {
        let row = "<tr>" + "<td>" + msg_object[i].mssv + "</td>" + "<td>" + msg_object[i].name + "</td>" + "<td>" + msg_object[i].ngaysinh + "</td>" + "<td>" + msg_object[i].email + "</td>" + "<td>" + msg_object[i].dienthoai + "</td>" + "<td>" + msg_object[i].tinh + "</td>" + "<td>" + msg_object[i].xa + "</td>" + "</tr>";
        data_str += row;
    }

    document.getElementById("table_xa").innerHTML = data_str;
});

function save_name() {
    let name_value1 = document.getElementById("namesv").value;
    info = { "name": name_value1 };
    let info_str = JSON.stringify(info);
    //document.getElementById("test_code1").innerHTML = info_str; 
    //xem thu ket qua
    socket.emit("save_name", info_str);
}

function save_tinh() {
    let name_value2 = document.getElementById("tinh").value;
    info = { "name": name_value2 };
    let info_str = JSON.stringify(info);
    //document.getElementById("test_code2").innerHTML = info_str; 
    //xem thu ket qua
    socket.emit("save_tinh", info_str);
}

function save_xa() {
    let name_value2 = document.getElementById("xa").value;
    info = { "name": name_value2 };
    let info_str = JSON.stringify(info);
    //document.getElementById("test_code2").innerHTML = info_str; 
    //xem thu ket qua
    socket.emit("save_xa", info_str);
}