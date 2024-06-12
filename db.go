package main

import (
	"database/sql"

	_ "github.com/mattn/go-sqlite3"
)

// 获取数据库连接
func getSqlConn() *sql.DB {
	conn, err := sql.Open("sqlite3", "./wails_demo.db")
	if err != nil {
		panic(err)
	}
	return conn
}

func initDb() {
	getSqlConn()

}
