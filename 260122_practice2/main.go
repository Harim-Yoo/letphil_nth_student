package main

import "fmt"

type Book struct {
	Title string
	Stock int
}

func main() {
	library := []Book{
		{Title: "Harry Potter", Stock: 5},
		{Title: "Lord of the Rings", Stock: 0}, // 재고 없음
		{Title: "The Hobbit", Stock: 10},
	}

	fmt.Println("---Initial Status---")
	fmt.Println(library)

	// Create Practice
	library = append(library, Book{Title: "Hello World", Stock: 2})

	fmt.Println(library)

	// Replace Practice
	for i, b := range library {
		if b.Stock == 2 {
			library[i].Stock = 3
		}
	}
	fmt.Println(library)

	// Delete Practice
	var UpdateLibrary []Book

	for _, b := range library {
		if b.Title != "Hello World" {
			UpdateLibrary = append(UpdateLibrary, b)
			library = UpdateLibrary
		}
	}
	fmt.Println(library)

}
