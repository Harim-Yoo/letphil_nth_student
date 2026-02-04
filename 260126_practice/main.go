package main

import (
	"database/sql"
	"fmt"
	"log"
	"strings"

	_ "github.com/go-sql-driver/mysql"
)

func main() {
	//Step 1. db, err := sql.Open(TYPE, ADDRESS)

	dbOld, err := sql.Open("mysql", "root:6190@tcp(127.0.0.1:3306)/church_dump")

	if err != nil {
		log.Fatal(err)
	}
	//Step 2. Make sure you close your DB when everything is done.
	defer dbOld.Close()

	if err := dbOld.Ping(); err != nil {
		log.Fatal(err)
		return
	}

	//Step 3. Now, let's Query our dbOld. This query statement outputs rows and err.

	rows, err := dbOld.Query("SHOW TABLES LIKE 'zetyx_board_%'")

	if err != nil {
		log.Fatal(err)
	}

	//Step 4. Make sure we close the rows.
	defer rows.Close()

	//Step 5. Let's get slice called tables ready.
	var tables []string

	//Step 6. Per individual rows, we will get a string ready and scan the data and place it into the string.
	for rows.Next() {
		var table string
		rows.Scan(&table)

		if !strings.Contains(table, "comment") && !strings.Contains(table, "category") && !strings.Contains(table, "back_up") {
			tables = append(tables, table)
		}
	}

	//Step 7. Now, we are getting ready to use the loop for the slice "tables". Don't need to use index, so we don't use index.

	for _, table := range tables {
		// fmt.Sprintf prints string as "SELECT * FROM ?" where ? = table
		query := fmt.Sprintf("SELECT * FROM %s", table)

		//As noticed, db.Query eats string, but as you know the query is a string.
		rows, err := dbOld.Query(query)

		if err != nil {
			log.Println(err)
			continue
		}
		

	}
}
