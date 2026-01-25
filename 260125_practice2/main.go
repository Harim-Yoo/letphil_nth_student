package main

import "fmt"

func main() {
	var a int
	a = 5
	b := &a
	*b = 10
	fmt.Println(a)
}
