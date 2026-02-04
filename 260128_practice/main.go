package main

import (
	"fmt"

	_ "github.com/go-sql-driver/mysql"
)

type Data struct {
	Id      int
	Content *int
}

func main() {
	var NewData []Data
	Numbs := []int{1, 2, 3, 4, 5}
	for _, num := range Numbs {
		var data Data
		num_pointer := &num
		data.Id = num
		data.Content = num_pointer
		NewData = append(NewData, data)
	}
	fmt.Println(NewData)
}
