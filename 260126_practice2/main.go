package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"time"

	_ "github.com/go-sql-driver/mysql"
)

type Post struct {
	ID        int       `json:"id"`
	Category  string    `json:"category"`
	Title     string    `json:"title"`
	Author    string    `json:"author"`
	ViewCount int       `json:"view_count"`
	CreatedAt time.Time `json:"created_at"`
}

var db *sql.DB

func main() {
	var err error

	dsn := "root:6190@tcp(127.0.0.1:3306)/practice_db?parseTime=true"

	db, err := sql.Open("mysql", dsn)
	if err != nil {
		log.Fatal(err)
		return
	}
	fmt.Println("DB 연결 완료!")
	err = db.Ping()
	if err != nil {
		log.Fatal(err)
		return
	}
	defer db.Close()

	h1 := func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Content-Type", "application/json")

		rows, err := db.Query("SELECT id,category,title,author_name,view_count,created_at FROM posts ORDER BY id DESC LIMIT 100")
		if err != nil {
			http.Error(w, "DB Query Error", http.StatusInternalServerError)
			log.Println("Query Error", err)
			return
		}
		defer rows.Close()

		var posts []Post
		for rows.Next() {
			var p Post
			err := rows.Scan(&p.ID, &p.Category, &p.Title, &p.Author, &p.ViewCount, &p.CreatedAt)
			if err != nil {
				log.Println("Scan Error", err)
				continue
			}
			posts = append(posts, p)
		}
		json.NewEncoder(w).Encode(posts)
	}
	http.HandleFunc("/api/posts", h1)
	http.ListenAndServe(":8080", nil)

}
