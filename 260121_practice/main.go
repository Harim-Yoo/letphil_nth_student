package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {
	fmt.Println("Accessing Data")
	resp, err := http.Get("https://www.navr.com")
	if err != nil {
		log.Fatal(err)
	}
	defer resp.Body.Close()
}
