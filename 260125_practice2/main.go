package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	_ "github.com/go-sql-driver/mysql"
)

type Data struct {
	Name string `json:"name"`
	Msg  string `json:"msg"`
}

func main() {
	db, err := sql.Open("mysql", "root:6190@tcp(127.0.0.1:3306)/practice_db")
	if err != nil {
		log.Println("Unable to connect the database")
		return
	}
	if err := db.Ping(); err != nil {
		log.Fatal("DB연결실패:", err)
	}
	defer db.Close()

	h1 := func(w http.ResponseWriter, r *http.Request) {
		if r.Method != "POST" {
			http.Error(w, "POST only", http.StatusMethodNotAllowed)
			return
		}
		var d Data

		err := json.NewDecoder(r.Body).Decode(&d)
		if err != nil {
			http.Error(w, "JSON 형식이 잘못되었습니다", http.StatusBadRequest)
			return
		}
		fmt.Println("받은 데이터:", d.Name, d.Msg)

		insertQuery := "INSERT INTO guestbook (visitor_name, message) VALUES (?, ?)"

		_, err = db.Exec(insertQuery, d.Name, d.Msg)

		if err != nil {
			log.Println("DB 저장 실패", err)
			http.Error(w, "DB 저장 실패", http.StatusInternalServerError)
			return
		}
		w.WriteHeader(http.StatusCreated)
		w.Write([]byte("방명록 등록!"))
	}
	http.HandleFunc("/api/guestbook", h1)
	http.ListenAndServe(":8080", nil)
}
