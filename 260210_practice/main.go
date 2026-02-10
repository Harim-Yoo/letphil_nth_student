package main

import "fmt"

// const Array = [1,4,5,2,3];
// const sortArray = Array.sort((a,b)=>b-a);

func main() {
	str := "abcde"
	for i, char := range str {
		fmt.Printf("At %d, we have %s \n", i, string(char))
	}
}
