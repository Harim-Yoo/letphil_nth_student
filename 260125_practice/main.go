package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	_ "github.com/go-sql-driver/mysql"
)

type Worship struct {
	ID  string `json:"id"`
	Url string `json:"url"`
}

func main() {
	db, err := sql.Open("mysql", "root:6190@tcp(127.0.0.1:3306)/practice_db")
	if err != nil {
		log.Fatal("DB 접속 정보 설정 실패:", err)
	}
	err = db.Ping()
	if err != nil {
		log.Fatal("DB 접속 정보 실패:", err)
	}
	fmt.Println("MySQL DB 연결 성공!")
	defer db.Close()

	http.HandleFunc("/api/worship", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Content-Type", "application/json")

		var wData Worship
		err := db.QueryRow("SELECT id, url FROM worship_live ORDER BY id DESC LIMIT 1").Scan(&wData.ID, &wData.Url)
		if err != nil {
			fmt.Println("데이터 가져오기 실패 혹은 없음: ", err)
			json.NewEncoder(w).Encode(map[string]string{"error": "No data to fetch"})
			return
		}

		json.NewEncoder(w).Encode(wData)
	})

	fmt.Println("Go server at 8080")
	if err := http.ListenAndServe(":8080", nil); err != nil {
		log.Fatal(err)
	}
}
