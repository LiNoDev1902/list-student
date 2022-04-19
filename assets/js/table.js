const socket = io();
socket.emit("fetch_data", "please!");


socket.on("student_list", (msg) => {
    // document.getElementById("test_code").innerHTML = msg;
    let data_str = "";
    msg_obj = JSON.parse(msg);
    for (let i = 0; i < msg_obj.length; i++) {
        let row = "<tr>" + "<td>" + msg_obj[i].name + "</td>" + "<td>" + msg_obj[i].mssv + "</td>" + "<td>" + msg_obj[i].ngaysinh + "</td>" + "<td>" + msg_obj[i].email + "</td>" + "<td>" + msg_obj[i].dienthoai + "</td>" + "<td>" + msg_obj[i].tinh + "</td>" + "<td>" + msg_obj[i].xa + "</td>" + "</tr>";
        data_str += row;
    }

    document.getElementById("table_body").innerHTML = data_str;
});