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
	library = append(library, Book{Title: "The Alchemist", Stock: 3})
	fmt.Println(library)

	// Update Practice
	for i, b := range library {
		if b.Title == "Harry Potter" {
			library[i].Stock = 20
		}
	}
	fmt.Println(library)

	// Delete Practice
	var newLibrary []Book

	for _, s := range library {
		if s.Title != "Lord of the Rings" {
			newLibrary = append(newLibrary, s)
		}
	}
	library = newLibrary
	fmt.Println(library)

	var finalLibrary []Book
	for _, b := range library {
		if b.Stock >= 1 {
			finalLibrary = append(finalLibrary, b)
		}
	}
	library = finalLibrary
	fmt.Println(library)

}
