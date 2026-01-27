package main

import (
	"database/sql"
	"fmt"
	"log"
	"strings"
	"time"

	_ "github.com/go-sql-driver/mysql"
)

func main() {
	dbOld, err := sql.Open("mysql", "root:6190@tcp(127.0.0.1:3306)/church_dump")
	if err != nil {
		log.Fatal(err)
	}
	defer dbOld.Close()

	dbNew, err := sql.Open("mysql", "root:6190@tcp(127.0.0.1:3306)/practice_db")
	if err != nil {
		log.Fatal(err)
	}
	defer dbNew.Close()

	rows, err := dbOld.Query("SHOW TABLES LIKE 'zetyx_board_%'")
	if err != nil {
		log.Fatal(err)
	}
	defer rows.Close()

	var tables []string
	for rows.Next() {
		var t string
		rows.Scan(&t)

		if !strings.Contains(t, "comment") && !strings.Contains(t, "category") && !strings.Contains(t, "back_up") {
			tables = append(tables, t)
		}
	}
	for _, t := range tables {
		query := fmt.Sprintf("SELECT no, subject, memo, name, hit, reg_date FROM %s", t)
		rows, err := dbOld.Query(query)
		if err != nil {
			log.Println(err)
			continue
		}

		var no int
		var subject, memo, name string
		var hit int
		var regDateInt int64
		for rows.Next() {
			err := rows.Scan(&no, &subject, &memo, &name, &hit, &regDateInt)
			if err != nil {
				log.Println(err)
				continue
			}
			createdAt := time.Unix(regDateInt, 0)
			_, err = dbNew.Exec(`
			INSERT INTO posts (category, title, content, author_name, view_count, created_at, original_id)
            VALUES (?, ?, ?, ?, ?, ?, ?)
			`, t, subject, memo, name, hit, createdAt, no)

			if err != nil {
				log.Println("저장 실패:", err)
			} else {
				fmt.Print(".")
			}
		}
		rows.Close()

	}

}
