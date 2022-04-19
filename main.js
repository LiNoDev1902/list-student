const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const request = require('request');
const port = process.env.PORT || 8000;

app.use(express.static('assets/'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/assets/html/registration.html');
});

app.get('/table', (req, res) => {
    res.sendFile(__dirname + '/assets/html/table.html');
});

app.get('/members', (req, res) => {
    res.sendFile(__dirname + '/assets/html/members.html');
});

app.get('/find', (req, res) => {
    res.sendFile(__dirname + '/assets/html/find.html');
});

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on("ms1", (arg) => {
        console.log(arg); // world
    });

    socket.emit("ms2", "hello client");

    socket.on("save_info", (arg) => {
        console.log(arg); // in thong tin nhan duoc tu client ra console
        let info = JSON.parse(arg);
        console.log(info.name);

        var mysql = require('mysql');

        var con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "info_db"
        });

        con.connect(function(err) {
            if (err) throw err;
            console.log("Connected!");
            var sql = "INSERT INTO student (name, mssv, ngaysinh, email, dienthoai, tinh, xa) VALUES ('" + info.name + "','" + info.mssv + "','" + info.ngaysinh + "','" + info.email + "','" + info.dienthoai + "','" + info.tinh + "','" + info.xa + "')";
            con.query(sql, function(err, result) {
                if (err) throw err;
                console.log("1 record inserted");
            });
        });
    });

    socket.on("fetch_data", (arg) => {
        console.log(arg);

        var mysql = require('mysql');

        var con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "info_db"
        });

        var result_obj = [];
        var result_str = "";

        con.connect(function(err) {
            if (err) throw err;
            con.query("select * from student", function(err, result, fields) {
                if (err) throw err;
                // console.log(result[0]);
                result.forEach(element => {
                    // console.log(element.name, element.mssv);
                    result_obj.push({ "name": element.name, "mssv": element.mssv, "ngaysinh": element.ngaysinh, "email": element.email, "dienthoai": element.dienthoai, "tinh": element.tinh, "xa": element.xa });
                });
                // console.log(result_obj);
                result_str = JSON.stringify(result_obj);
                // console.log(result_str);
                socket.emit("student_list", result_str);
            });
        });
    });
});

server.listen(port, '127.0.0.1', () => {
    console.log(`Socket.IO server running at http://localhost:${port}/`);
});


io.on("connection", (socket) => {
    socket.on("save_name", (name) => {
        console.log(name); // in thong tin nhan duoc tu clien ra man hinh
        let info = JSON.parse(name);
        console.log(info.name);
        var mysql = require("mysql");

        var con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "info_db",
        });
        var name1 = info.name;
        let result_object = [];
        let result_str;
        var sql = 'SELECT * FROM student WHERE name = ?';
        con.query(sql, [name1], function(err, result) {
            if (err) throw err;
            console.log(result);
            result.forEach(element => {
                //console.log(element.name);
                result_object.push({ "name": element.name, "mssv": element.mssv, "ngaysinh": element.ngaysinh, "email": element.email, "dienthoai": element.dienthoai, "tinh": element.tinh, "xa": element.xa });
            });
            // console.log(result_object);
            result_str = JSON.stringify(result_object);
            // console.log(result_str);
            socket.emit("student_list1", result_str)
        });

    });
});

io.on("connection", (socket) => {
    socket.on("save_tinh", (name) => {
        console.log(name); // in thong tin nhan duoc tu clien ra man hinh
        let info = JSON.parse(name);
        console.log(info.name);
        var mysql = require("mysql");

        var con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "info_db",
        });
        var name1 = info.name;
        let result_object = [];
        let result_str;
        var sql = 'SELECT * FROM student WHERE tinh = ?';
        con.query(sql, [name1], function(err, result) {
            if (err) throw err;
            console.log(result);
            result.forEach(element => {
                //console.log(element.name);
                result_object.push({ "name": element.name, "mssv": element.mssv, "ngaysinh": element.ngaysinh, "email": element.email, "dienthoai": element.dienthoai, "tinh": element.tinh, "xa": element.xa });
            });
            // console.log(result_object);
            result_str = JSON.stringify(result_object);
            // console.log(result_str);
            socket.emit("student_list2", result_str)
        });

    });
});


io.on("connection", (socket) => {
    socket.on("save_xa", (name) => {
        console.log(name); // in thong tin nhan duoc tu clien ra man hinh
        let info = JSON.parse(name);
        console.log(info.name);
        var mysql = require("mysql");

        var con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "info_db",
        });
        var name1 = info.name;
        let result_object = [];
        let result_str;
        var sql = 'SELECT * FROM student WHERE xa = ?';
        con.query(sql, [name1], function(err, result) {
            if (err) throw err;
            console.log(result);
            result.forEach(element => {
                //console.log(element.name);
                result_object.push({ "name": element.name, "mssv": element.mssv, "ngaysinh": element.ngaysinh, "email": element.email, "dienthoai": element.dienthoai, "tinh": element.tinh, "xa": element.xa });
            });
            // console.log(result_object);
            result_str = JSON.stringify(result_object);
            // console.log(result_str);
            socket.emit("student_list3", result_str)
        });

    });
});