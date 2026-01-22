package main

import "fmt"

type Student struct {
	Name  string
	Score int
}

func main() {
	classA := []Student{
		{Name: "Iron Man", Score: 85},
		{Name: "Captain", Score: 60},
		{Name: "Thor", Score: 95},
		{Name: "Hulk", Score: 40},
	}
	fmt.Println("---초기상태---")
	fmt.Println(classA)

	classA = append(classA, Student{Name: "SpiderMan", Score: 76})
	fmt.Println(classA)

	for i, s := range classA {
		if s.Name == "Hulk" {
			classA[i].Score = 100
		}
	}

	fmt.Println(classA)

	var honorStudents []Student

	for _, s := range classA {
		if s.Score >= 80 {
			honorStudents = append(honorStudents, s)
		}
	}
	fmt.Println(honorStudents)

	for i, s := range classA {
		if s.Name == "Captain" {
			classA = append(classA[:i], classA[i+1:]...)
			break
		}
	}

	var Survivors []Student

	for _, s := range classA {
		if s.Name != "Captain" {
			Survivors = append(Survivors, s)
		}
	}
	classA = Survivors
	fmt.Println(classA)
}
